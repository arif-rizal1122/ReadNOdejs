
const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')
// ({extended: true})) tambah ini agr cli normal kembali
// body-parser deprecated undefined extended: provide extended option app.js:13:17
const {body, validationResult, check} = require('express-validator')

//
app.use(express.urlencoded({extended: true})) // built-in middleware
// ===========>>> <<<=========== \\
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// konfigurasi flash 3 diatas
app.use(cookieParser('secret'))
app.use(
    session({
        cookie: {maxAge: 6000},
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())



// ===========>>>> lokal module contact.js <<<<=========== \\
const {loadcontacts, findcontact , addcontact, cekduplikat, deletecontact, updatecontacts } = require('./utils/contacts')

// memanggil view engine ejs tidak mengunakan require(ejs)
app.set('view engine', 'ejs')
///////////////////////////////////////
app.use(expressLayouts) // third party middleware
app.use(express.static('public')) // built-in middleware
//////////////=== konfigurasi yg diatas ====\\\\\\\\\\\\\\\


// ==== HALAMAN ROOT[HOMEPAGE] ==== \\ 

app.get('/', (req, res) => {
    const mahasiswa = [{
        nama: 'sand',
        nohp: '130942184325'
    },
    {
        nama: 'sandhi',
        nohp: '130942184325'
    },
    {
        nama: 'sanddhika',
        nohp: '130942184325'
    },
]

    res.render('index', {
        title: 'halaman home',
        layout: 'layouts/main-layout',
        mahasiswa,
    })
})





app.get('/about', (req, res) => {
    res.render('about', {
        title: 'halaman about',
        layout: 'layouts/main-layout',
    })
})



/// ============== ROOT CONTACT.EJS ========== \\\
app.get('/contact', (req, res) => {
    const contacts = loadcontacts()
    // console.log(contacts)
    res.render('contact', {    
        title: 'halaman contact',
        layout: 'layouts/main-layout',
        contacts,
        msg: req.flash('msg'),
    })
})


// menambahkan form data contact (add) hrs diatas agr bisa ditangkap............................
// ini tombol
app.get('/contact/add', (req, res) => {

    res.render('add-contact', {
        title: ' FORM add data contact',
        layout: 'layouts/main-layout',
    })
})


// {1} proses data contact yg diatas
// method post untuk menerima data form add contact nya
// req.body agar menangkap data yg diinput..

// app.post('/contact', (req, res) => {

// console.log(req.body)//('send succes di tampilkan di web)
    // res.send('send succes')

    // res.send(req.body)
// })


// {2} procces data yg agak kompleks contact yg mengirimkan data ke file json 

// app.post('/contact',  (req, res) => {
//  addcontact(req.body)
//  res.redirect('/contact') // balik ke contact
// })




// {3} proccess data mengunakan express-validator
// check adl validator massage
// ini proses
app.post('/contact', 
[
    // cek duplikat nama dgn body (menangkap)
    body('nama').custom((value) => {
      const duplikat = cekduplikat(value)
      if(duplikat) {
        // throw sama dgn kita ksih false tp dgn pesan eror
        throw new Error('nama contact sudah digunakan')
      }  
      return true
    }),

    check('email', 'email tidak valid!').isEmail(),
    check('nohp', 'nomor hp tidak valid').isMobilePhone('id-ID')
],

    (req, res) => {
        // vlidaton (memstikan kesesuian)
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array()})
        // jika err mk kmbli ksini(add-contact)
        res.render('add-contact', {
            title: 'form data contact',
            layout: 'layouts/main-layout',
            errors: errors.array()
        })
    } else {
        addcontact(req.body)
        // kirimkan flash messange dengan req.flash
        req.flash('msg', 'data success receive')
        // ini mengembalikan ke tampilan contact.ejs stelah berjalan
        res.redirect('/contact')
    }
    }
)


/// ===>>> form ubah (edit) data contact <<<=== \\\
app.get('/contact/edit/:nama', (req, res) => {
    const contact = findcontact(req.params.nama)//(reg.p..) ini mengantisipasi jika user mengetik lngsg di url nya) 
    
    res.render('edit-contact', {
        title: ' FORM edit data contact',
        layout: 'layouts/main-layout',
        // ??setelah didapat maka akan dikrm ke contact
        contact,
    })
})


// halaman proses delete contact
app.get('/contact/delete/:nama', (req, res) => {
// ini mengecek file di contacts.json    
const contact = findcontact(req.params.nama) //(reg.p..) ini mengantisipasi jika user mengetik lngsg di url nya) 

// jika contact tidak ada
if(!contact) {
    res.status(404)
    res.send('<h2> file not such: 404 </h2>')
// else jika berhasil    
} else {
    deletecontact(req.params.nama)
    req.flash('msg', 'data success deleted')
    res.redirect('/contact')
}
})


// {1} prosses data contact untuk mengubah data dari web nya
// post karena sesuai yg ditulis di detail.ejs nya
// app.post('/contact/update', (req, res) => {
    // apapun yg dikirim ke form nya masuk kesini(req.body) saat di update form barunya (oldNama)
//     res.send(req.body)
// })

// {2} agian kedua dari yg diatass
app.post('/contact/update',
[                      // value adl nama yg baru
    body('nama').custom((value, { req }) => {
        const duplikat = cekduplikat(value)
        if(value !== req.body.oldNama && duplikat)  {
            throw new Error ('nama contact sudah digunakan')
        }
        return true
    }),

    check('email', 'email tidak valid').isEmail(),
    check('nohp', 'nohp tidak valid').isMobilePhone(),
],
(req, res) => {
    // vlidaton (memstikan kesesuian)
const errors = validationResult(req)
if(!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array()})
    // jika err mk kmbli ksini(add-contact)
    res.render('add-contact', {
        title: 'form data contact',
        layout: 'layouts/main-layout',
        errors: errors.array()
    })
} else {
    res.send(req.body)
    updatecontacts(req.body)
    // kirimkan flash messange dengan req.flash
    req.flash('msg', 'data contact berhasil diubah')
    // ini mengembalikan ke tampilan contact.ejs stelah berjalan
    res.redirect('/contact')
}
}
)


// halaman detail(detail.ejs)
app.get('/contact/:nama', (req, res) => {
// ini mengecek file contacts.json    
const contact = findcontact(req.params.nama)

    res.render('detail', {    
        title: 'halaman contact',
        layout: 'layouts/main-layout',
        contact,
    })
})

// method get mengharuskan kita untuk hati2 mengurutkan mana dulu yg  mau dikerjakan ..


// menginput ke url
app.get('/product/:id', (req, res) => {
    res.send(`product id : ${req.params.id} <br> 
    category id : ${req.query.category}`)
}) 


// eroor handling

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1> error not such: 404 </h1>')
})








.listen(port, (req, res) => {
    console.log(`try on the listening port http://localhost${port}`)
})

























        // execution from localhost
// ├── app.js
// ├── bin
// │   └── localhost
// ├── package.json/database // all data is your working
// ├── public
// │   ├── images
// │   ├── javascripts
// │   └── stylesheets
// │       └── style.css
// ├── routes 
// │   ├── main-layouts.ejs
// │   └── nav.ejs
// |
// └── views
//     ├── add-contact.ejs
//     ├── edit-contact.ejs
//     └── detail.ejs
//     |_ detail.ejs
//     |_ contact.ejs