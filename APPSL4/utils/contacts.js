// / file ini sebgai file yg menjalankan entry point(file induk) yg lain (latihanMakeAPP.js) menjalankan file yg lain 
const fs = require('fs');

// membuat folder data/directory jika sebelumnya tdk ada



// ambil semua data contact.json
const loadcontact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
       const contacts = JSON.parse(fileBuffer);
        return contacts;
    }

 // cari contact berdasarkan nama
const findcontact = (nama) => {
    const  contacts = loadcontact()
    // cari contact berdasarkan nama terus simpan di contact
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase())  

        // return contact agar data contact nya dikirim yg berupa (nama serta data bawaan lainya (nohp, email))
        return contact;
}
 

module.exports = { loadcontact, findcontact }