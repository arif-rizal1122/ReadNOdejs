// file ini mengelola semua fungsi yg berkaitan dengan contact ejs




// / file ini sebgai file yg menjalankan entry point(file induk) yg lain (latihanMakeAPP.js) menjalankan file yg lain 
const fs = require('fs');

// membuat folder data/directory jika sebelumnya tdk ada



// ambil semua data contact.json
const loadcontacts = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
       const contacts = JSON.parse(fileBuffer);
        return contacts;
    }

 // cari contact berdasarkan nama
const findcontact = (nama) => {
    const  contacts = loadcontacts()
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase())  
        return contact;
}


// menimpa / menuliskan file contacts.json dengan data yg baru
// contacts sebagai argument ini akan menjadi contacts.json baru yg ditamahkahan

// contacts parameter ini adalah wadah data baru yg menulis/menimpa object yg lama.....
const savecontacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}


// menambahkan data contacts.json yg baru
// contact adalah yg akan dimasukan kdlm contacts.json
const addcontact = (contact) => {
    const contacts = loadcontacts()
    // add contact baru
    contacts.push(contact)
    savecontacts(contacts)
}

// cek nama yg duplikat
// parameters nama akan menjadi value di app.js nya
const cekduplikat = (nama) => {
    const contacts = loadcontacts()
    return contacts.find((contact) => contact.nama === nama)
}

module.exports = { loadcontacts, findcontact, addcontact, cekduplikat }


// json.parse mengubah string menjadi object sedangkan 
// json.stringify mengubah string menjadi object
