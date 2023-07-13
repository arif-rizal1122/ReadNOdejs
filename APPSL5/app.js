
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
// ({extended: true})) tambah ini agr cli normal kembali
// body-parser deprecated undefined extended: provide extended option app.js:13:17
app.use(express.urlencoded({extended: true})) // built-in middleware (ini parsing agar nilai di cli nya tdk undefined)
// body(menangkap data yg sudah dimasukan)
// validation mengecek validationReturn nya

const {body, validationResult, check} = require('express-validator')// v: 6.10.1

const session = require('express-session')// v: 1.17.1 
const cookieParser = require('cookie-parser')// v:1.4.5
const flash = require('connect-flash')// v: 0.1.1

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



const port = 3000
const {loadcontacts, findcontact , addcontact, cekduplikat} = require('./utils/contacts')

// memanggil view engine ejs tidak mengunakan require

app.set('view engine', 'ejs')
app.use(expressLayouts) // third party middleware
app.use(express.static('public')) // built-in middleware









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
app.get('/contact/add', (req, res) => {

    res.render('add-contact', {
        title: 'add data contact',
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
app.post('/contact', 
[
    // cek duplikat nama dgn body
    // value itu artinya apa yg akan diketikan user di form tambah data
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
    // validatonresult mengecek validasi     
    const errors = validationResult(req)
    // kalo gak kosong ambil dibawah
    if(!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array()})
        res.render('add-contact', {
            title: 'form data contact',
            layout: 'layouts/main-layout',
            errors: errors.array()// ini yg akan tampil sebagai array (alert)
        })
    } else {
        addcontact(req.body)
        // kirimkan flash messange dengan req.flash
        // msg(nama massange bebas mau kasih nama apa sbnrnya)
        // 'data success receive' adalah data dari msg yg akan dikirimkan
        req.flash('msg', 'data success receive')// dikirimkan ke contact
        res.redirect('/contact')// dikembalikan ke halaman contact.ejs
    }
    }
)






// halaman detail
app.get('/contact/:nama', (req, res) => {
const contact = findcontact(req.params.nama)

    res.render('detail', {    
        title: 'halaman contact',
        layout: 'layouts/main-layout',
        contact,
    })
})






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
