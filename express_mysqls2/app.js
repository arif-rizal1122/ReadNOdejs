
// ########################## belajar ################################
// - route path
// - response
// - file structur

// ##########################        ################################ //
// status(misalnya(404)) code ini berfungsi agar frontend bisa memvalidasi
// serta bisa di dipakai buat hal lain-lainya 













// artikel
// Ini adalah daftar kode status respons Hypertext Transfer Protocol (HTTP). Kode status dikeluarkan oleh server sebagai tanggapan atas permintaan klien yang dibuat ke server. Ini termasuk kode dari IETF Request for Comments (RFC), spesifikasi lain, dan beberapa kode tambahan yang digunakan di beberapa aplikasi umum HTTP. Digit pertama kode status menentukan salah satu dari lima kelas respons standar. Frasa pesan opsional yang ditampilkan adalah tipikal, tetapi alternatif apa pun yang dapat dibaca manusia dapat disediakan, atau tidak sama sekali.

// Kecuali dinyatakan sebaliknya, kode status adalah bagian dari standar HTTP ( RFC  9110 ).

// Internet Assigned Numbers Authority (IANA) mengelola registri resmi kode status HTTP. [1]

// Semua kode status respons HTTP dipisahkan menjadi lima kelas atau kategori. Digit pertama dari kode status menentukan kelas respons, sedangkan dua digit terakhir tidak memiliki peran klasifikasi atau kategorisasi. Ada lima kelas yang ditentukan oleh standar:

// 1xx respons informasional – permintaan telah diterima, proses berlanjut
// 2xx berhasil – permintaan berhasil diterima, dipahami, dan diterima
// Pengalihan 3xx – tindakan lebih lanjut perlu diambil untuk menyelesaikan permintaan
// Kesalahan klien 4xx – permintaan berisi sintaks yang buruk atau tidak dapat dipenuhi
// 5xx server error – server gagal memenuhi permintaan yang tampaknya valid
// Isi
// 1xx tanggapan informasional
// Tanggapan informasi menunjukkan bahwa permintaan telah diterima dan dipahami. Itu dikeluarkan secara sementara sementara pemrosesan permintaan berlanjut. Ini mengingatkan klien untuk menunggu tanggapan akhir. Pesan hanya terdiri dari baris status dan kolom header opsional, dan diakhiri dengan baris kosong. Karena standar HTTP/1.0 tidak menetapkan kode status 1xx apa pun, server tidak boleh [catatan 1] mengirim tanggapan 1xx ke klien yang memenuhi HTTP/1.0 kecuali dalam kondisi percobaan.

// 100 Lanjutkan
// Server telah menerima header permintaan dan klien harus melanjutkan untuk mengirim badan permintaan (dalam kasus permintaan yang badannya perlu dikirim; misalnya, permintaan POST ) . Mengirim badan permintaan besar ke server setelah permintaan ditolak karena tajuk yang tidak sesuai akan menjadi tidak efisien. Agar server memeriksa header permintaan, klien harus mengirim Expect: 100-continuesebagai header dalam permintaan awalnya dan menerima 100 Continuekode status sebagai tanggapan sebelum mengirim badan. Jika klien menerima kode kesalahan seperti 403 (Terlarang) atau 405 (Metode Tidak Diizinkan) maka klien tidak boleh mengirimkan isi permintaan. Tanggapan 417 Expectation Failedmenunjukkan bahwa permintaan harus diulang tanpaExpectheader karena menunjukkan bahwa server tidak mendukung harapan (ini adalah kasus, misalnya, server HTTP/1.0). [2]
// 101 Berpindah Protokol
// Pemohon telah meminta server untuk mengganti protokol dan server telah setuju untuk melakukannya.
// 102 Pemrosesan ( WebDAV ; RFC 2518)
// Permintaan WebDAV mungkin berisi banyak sub-permintaan yang melibatkan operasi file, yang memerlukan waktu lama untuk menyelesaikan permintaan. Kode ini menunjukkan bahwa server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. [3] Ini mencegah klien dari waktu habis dan dengan asumsi permintaan hilang. Kode status sudah usang. [4]
// 103 Petunjuk Awal (RFC 8297)
// Digunakan untuk mengembalikan beberapa header tanggapan sebelum pesan HTTP akhir. [5]
// 2x sukses
// Kelas kode status ini menunjukkan tindakan yang diminta oleh klien telah diterima, dipahami, dan diterima. [1]

// 200 oke
// Respons standar untuk permintaan HTTP yang berhasil. Tanggapan sebenarnya akan bergantung pada metode permintaan yang digunakan. Dalam permintaan GET, respons akan berisi entitas yang sesuai dengan sumber daya yang diminta. Dalam permintaan POST, respons akan berisi entitas yang menjelaskan atau berisi hasil tindakan.
// 201 Dibuat
// Permintaan telah dipenuhi, menghasilkan pembuatan sumber daya baru. [6]
// 202 Diterima
// Permintaan telah diterima untuk diproses, tetapi pemrosesan belum selesai. Permintaan tersebut mungkin atau mungkin tidak pada akhirnya ditindaklanjuti, dan mungkin tidak diizinkan saat pemrosesan terjadi.
// 203 Informasi Non-Otoritas (sejak HTTP/1.1)
// Server adalah proxy transformasi (misalnya akselerator Web ) yang menerima 200 OK dari asalnya, tetapi mengembalikan versi modifikasi dari respons asal. [7] [8]
// 204 Tidak Ada Konten
// Server berhasil memproses permintaan, dan tidak mengembalikan konten apa pun.
// 205 Atur Ulang Konten
// Server berhasil memproses permintaan, meminta pemohon mengatur ulang tampilan dokumennya, dan tidak mengembalikan konten apa pun.
// 206 Konten Sebagian
// Server hanya mengirimkan sebagian dari sumber daya ( penyajian byte ) karena header rentang yang dikirim oleh klien. Header rentang digunakan oleh klien HTTP untuk memungkinkan melanjutkan unduhan yang terputus, atau membagi unduhan menjadi beberapa aliran simultan.
// 207 Multi-Status (WebDAV; RFC 4918)
// Isi pesan yang mengikuti secara default adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, bergantung pada berapa banyak sub-permintaan yang dibuat. [9]
// 208 Sudah Dilaporkan (WebDAV; RFC 5842)
// Anggota pengikatan DAV telah disebutkan di bagian sebelumnya dari respons (multistatus), dan tidak disertakan lagi.
// 226 IM Digunakan (RFC 3229)
// Server telah memenuhi permintaan untuk sumber daya, dan responsnya adalah representasi dari hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. [10]
// pengalihan 3xx
// 4xx kesalahan klien
// A The Wikimedia 404 message
// Kesalahan 404 di Wikimedia
// Kelas kode status ini ditujukan untuk situasi di mana kesalahan tampaknya disebabkan oleh klien. Kecuali saat menanggapi permintaan HEAD, server harus menyertakan entitas yang berisi penjelasan tentang situasi kesalahan, dan apakah itu kondisi sementara atau permanen. Kode status ini berlaku untuk semua metode permintaan . Agen pengguna harus menampilkan entitas apa pun yang disertakan kepada pengguna.

// 400 permintaan Buruk
// Server tidak dapat atau tidak akan memproses permintaan karena kesalahan klien yang nyata (misalnya, sintaks permintaan yang salah, ukuran terlalu besar, pembingkaian pesan permintaan yang tidak valid, atau perutean permintaan yang menipu).
// 401 Tidak sah
// Mirip dengan 403 Forbidden, tetapi khusus untuk digunakan saat autentikasi diperlukan dan telah gagal atau belum tersedia. Tanggapan harus menyertakan bidang tajuk WWW-Authenticate yang berisi tantangan yang berlaku untuk sumber daya yang diminta. Lihat Otentikasi akses dasar dan Otentikasi akses intisari . 401 secara semantik berarti "tidak sah", pengguna tidak memiliki kredensial autentikasi yang valid untuk sumber daya target.
// Beberapa situs salah mengeluarkan HTTP 401 ketika alamat IP dilarang dari situs web (biasanya domain situs web) dan alamat tertentu ditolak izin untuk mengakses situs web. [ rujukan? ]
// 402 Pembayaran Diperlukan
// Dicadangkan untuk penggunaan di masa mendatang. Niat awalnya adalah bahwa kode ini dapat digunakan sebagai bagian dari beberapa bentuk kas digital atau skema pembayaran mikro , seperti yang diusulkan, misalnya, oleh GNU Taler , [14] tetapi itu belum terjadi, dan kode ini tidak digunakan secara luas. Google Developers API menggunakan status ini jika pengembang tertentu telah melampaui batas permintaan harian. [15] Sipgate menggunakan kode ini jika akun tidak memiliki cukup dana untuk memulai panggilan. [16] Shopify menggunakan kode ini saat toko belum membayar biayanya dan untuk sementara dinonaktifkan. [17] Garismenggunakan kode ini untuk pembayaran yang gagal dengan parameter yang benar, misalnya pembayaran penipuan yang diblokir. [18]
// 403 Dilarang
// Permintaan berisi data yang valid dan dipahami oleh server, tetapi server menolak tindakan. Hal ini mungkin karena pengguna tidak memiliki izin yang diperlukan untuk sumber daya atau membutuhkan semacam akun, atau mencoba tindakan yang dilarang (misalnya membuat rekaman duplikat yang hanya diperbolehkan satu). Kode ini juga biasanya digunakan jika permintaan memberikan autentikasi dengan menjawab tantangan kolom header WWW-Authenticate, tetapi server tidak menerima autentikasi tersebut. Permintaan tidak boleh diulang.
// 404 tidak ditemukan
// Sumber daya yang diminta tidak dapat ditemukan tetapi mungkin tersedia di masa mendatang. Permintaan selanjutnya oleh klien diperbolehkan.
// 405 Metode Tidak Diizinkan
// Metode permintaan tidak didukung untuk sumber daya yang diminta; misalnya, permintaan GET pada formulir yang mengharuskan data disajikan melalui POST , atau permintaan PUT pada sumber daya hanya-baca.
// 406 Tidak Dapat Diterima
// Sumber daya yang diminta hanya mampu menghasilkan konten yang tidak dapat diterima menurut header Terima yang dikirim dalam permintaan. Lihat Negosiasi konten .
// 407 Otentikasi Proksi Diperlukan
// Klien harus mengotentikasi dirinya terlebih dahulu dengan proxy .
// 408 Batas Waktu Permintaan
// Server kehabisan waktu menunggu permintaan. Menurut spesifikasi HTTP: "Klien tidak membuat permintaan dalam waktu server siap untuk menunggu. Klien MUNGKIN mengulangi permintaan tanpa modifikasi di lain waktu."
// 409 Konflik
// Menunjukkan bahwa permintaan tidak dapat diproses karena konflik dalam status sumber daya saat ini, seperti konflik suntingan antara beberapa pemutakhiran secara bersamaan.
// 410 Hilang
// Menandakan bahwa sumber daya yang diminta sebelumnya telah digunakan tetapi tidak lagi tersedia dan tidak akan tersedia lagi. Ini harus digunakan ketika sumber daya sengaja dihapus dan sumber daya harus dibersihkan. Setelah menerima kode status 410, klien tidak boleh meminta sumber daya di masa mendatang. Klien seperti mesin telusur harus menghapus sumber daya dari indeksnya. Sebagian besar kasus penggunaan tidak memerlukan klien dan mesin telusur untuk membersihkan sumber daya, dan "404 Tidak Ditemukan" dapat digunakan sebagai gantinya.
// 411 Panjang yang Diperlukan
// Permintaan tidak menentukan panjang kontennya, yang dibutuhkan oleh sumber daya yang diminta.
// 412 Prasyarat Gagal
// Server tidak memenuhi salah satu prasyarat yang diajukan pemohon pada kolom header permintaan.
// 413 Muatan Terlalu Besar
// Permintaan lebih besar daripada yang bersedia atau mampu diproses oleh server. Sebelumnya disebut "Entitas Permintaan Terlalu Besar" di RFC 2616. [19]
// 414 URI Terlalu Panjang
// URI yang disediakan terlalu panjang untuk diproses oleh server. Seringkali hasil dari terlalu banyak data yang dikodekan sebagai string kueri dari permintaan GET, dalam hal ini harus diubah menjadi permintaan POST. Disebut "Request-URI Too Long" sebelumnya di RFC 2616. [20]
// 415 Jenis Media Tidak Didukung
// Entitas permintaan memiliki jenis media yang tidak didukung oleh server atau sumber daya. Misalnya, klien mengunggah gambar sebagai image/svg+xml , tetapi server mengharuskan gambar menggunakan format yang berbeda.
// 416 Kisaran Tidak Memuaskan
// Klien telah meminta sebagian dari file ( penyajian byte ), tetapi server tidak dapat menyediakan bagian itu. Misalnya, jika klien meminta bagian file yang terletak di luar akhir file. Disebut "Requested Range Not Satisfiable" sebelumnya RFC 2616. [21]
// 417 Ekspektasi Gagal
// Server tidak dapat memenuhi persyaratan kolom header permintaan Harapkan. [22]
// 418 Saya teko (RFC 2324, RFC 7168)
// Kode ini didefinisikan pada tahun 1998 sebagai salah satu lelucon April Mop IETF tradisional , dalam RFC 2324, Hyper Text Coffee Pot Control Protocol , dan tidak diharapkan untuk diimplementasikan oleh server HTTP yang sebenarnya. RFC menentukan kode ini harus dikembalikan oleh teko yang diminta untuk menyeduh kopi. [23] Status HTTP ini digunakan sebagai telur Paskah di beberapa situs web, seperti telur paskah Google.com "I'm a teapot". [24] [25] [26] Terkadang, kode status ini juga digunakan sebagai respons terhadap permintaan yang diblokir, bukan 403 Forbidden yang lebih tepat. [27] [28]
// 421 Permintaan Salah Arah
// Permintaan diarahkan ke server yang tidak dapat menghasilkan respons (misalnya karena penggunaan kembali koneksi).
// 422 Entitas yang Tidak Dapat Diproses
// Permintaan dibuat dengan baik tetapi tidak dapat diikuti karena kesalahan semantik. [9]
// 423 Terkunci (WebDAV; RFC 4918)
// Sumber daya yang sedang diakses terkunci. [9]
// 424 Ketergantungan Gagal (WebDAV; RFC 4918)
// Permintaan gagal karena bergantung pada permintaan lain dan permintaan itu gagal (misalnya PROPPATCH). [9]
// 425 Terlalu Dini (RFC 8470)
// Menunjukkan bahwa server tidak mau mengambil risiko memproses permintaan yang mungkin diputar ulang.
// 426 Diperlukan Peningkatan
// Klien harus beralih ke protokol lain seperti TLS/1.3 , yang diberikan di kolom Upgrade header .
// 428 Prasyarat Diperlukan (RFC 6585)
// Server asal mengharuskan permintaan bersyarat. Ditujukan untuk mencegah masalah 'pembaruan yang hilang', di mana klien MENDAPATKAN status sumber daya, memodifikasinya, dan mengembalikannya ke server, sementara pihak ketiga telah mengubah status di server, yang menyebabkan konflik. [29]
// 429 Terlalu Banyak Permintaan (RFC 6585)
// Pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu. Dimaksudkan untuk digunakan dengan skema pembatasan laju . [29]
// 431 Kolom Header Permintaan Terlalu Besar (RFC 6585)
// Server tidak mau memproses permintaan karena bidang tajuk individual, atau semua bidang tajuk secara kolektif, terlalu besar. [29]
// 451 Tidak Tersedia Karena Alasan Hukum (RFC 7725)
// Operator server telah menerima permintaan hukum untuk menolak akses ke sumber daya atau ke sekumpulan sumber daya yang menyertakan sumber daya yang diminta. [30] Kode 451 dipilih sebagai referensi untuk novel Fahrenheit 451 (lihat Ucapan Terima Kasih di RFC).

// Kode status respons yang dimulai dengan angka "5" menunjukkan kasus di mana server menyadari bahwa ia mengalami kesalahan atau sebaliknya tidak mampu melakukan permintaan. Kecuali saat menanggapi permintaan HEAD, server harus menyertakan entitas yang berisi penjelasan tentang situasi kesalahan, dan menunjukkan apakah itu kondisi sementara atau permanen. Demikian pula, agen pengguna harus menampilkan entitas apa pun yang disertakan kepada pengguna. Kode respons ini berlaku untuk semua metode permintaan .

// 500 Internal Server Error
// Pesan kesalahan umum, diberikan saat kondisi yang tidak terduga ditemukan dan tidak ada lagi pesan khusus yang sesuai.
// 501 Tidak Diimplementasikan
// Server tidak mengenali metode permintaan, atau tidak memiliki kemampuan untuk memenuhi permintaan. Biasanya ini menyiratkan ketersediaan di masa mendatang (misalnya, fitur baru dari API layanan web).
// 502 Bad Gateway
// Server bertindak sebagai gateway atau proxy dan menerima respons yang tidak valid dari server upstream.
// 503 Layanan tidak tersedia
// Server tidak dapat menangani permintaan (karena kelebihan beban atau down untuk pemeliharaan). Umumnya, ini adalah keadaan sementara. [31]
// 504 Gateway Time-out
// Server bertindak sebagai gateway atau proxy dan tidak menerima respons tepat waktu dari server upstream.
// 505 Versi HTTP Tidak Didukung
// Server tidak mendukung versi HTTP yang digunakan dalam permintaan.
// 506 Varian Juga Bernegosiasi (RFC 2295)
// Negosiasi konten transparan untuk permintaan menghasilkan referensi melingkar . [32]
// 507 Penyimpanan Tidak Cukup (WebDAV; RFC 4918)
// Server tidak dapat menyimpan representasi yang diperlukan untuk menyelesaikan permintaan. [9]
// 508 Loop Terdeteksi (WebDAV; RFC 5842)
// Server mendeteksi infinite loop saat memproses permintaan (dikirim bukan 208 Sudah Dilaporkan ).
// 510 Tidak Diperpanjang (RFC 2774)
// Ekstensi lebih lanjut untuk permintaan diperlukan agar server dapat memenuhinya. [33]
// 511 Otentikasi Jaringan Diperlukan (RFC 6585)
// Klien perlu mengotentikasi untuk mendapatkan akses jaringan. Dimaksudkan untuk digunakan dengan mencegat proxy yang digunakan untuk mengontrol akses ke jaringan (mis., " captive portals " yang digunakan untuk meminta persetujuan Persyaratan Layanan sebelum memberikan akses Internet penuh melalui hotspot Wi-Fi ). [29]
// Kode tidak resmi
// Kode berikut tidak ditentukan oleh standar apa pun.

// 419 Halaman Kedaluwarsa ( Kerangka Kerja Laravel )
// Digunakan oleh Kerangka Laravel saat Token CSRF hilang atau kedaluwarsa.
// Kegagalan Metode 420 ( Kerangka Pegas )
// Respons usang yang digunakan oleh Spring Framework saat metode gagal. [34]
// 420 Tingkatkan Ketenangan Anda ( Twitter )
// Ditampilkan oleh Twitter Search and Trends API versi 1 saat klien dibatasi tarifnya; versi 1.1 dan yang lebih baru menggunakan kode respons 429 Too Many Requests sebagai gantinya. [35] Ungkapan "Enhance your calm" berasal dari film Demolition Man tahun 1993 , dan kaitannya dengan angka ini kemungkinan besar merujuk pada ganja . [ rujukan? ]
// 430 Bidang Permintaan Header Terlalu Besar ( Shopify )
// Digunakan oleh Shopify , alih-alih kode respons 429 Terlalu Banyak Permintaan , ketika terlalu banyak URL yang diminta dalam jangka waktu tertentu. [36]
// 450 Diblokir oleh Kontrol Orang Tua Windows (Microsoft)
// Kode ekstensi Microsoft ditunjukkan saat Windows Parental Controls diaktifkan dan memblokir akses ke halaman web yang diminta. [37]
// 498 Token Tidak Valid (Esri)
// Dikembalikan oleh ArcGIS untuk Server . Kode 498 menunjukkan token yang kedaluwarsa atau tidak valid. [38]
// 499 Token Diperlukan (Esri)
// Dikembalikan oleh ArcGIS untuk Server . Kode 499 menunjukkan bahwa token diperlukan tetapi tidak dikirimkan. [38]
// 509 Batas Bandwidth Terlampaui ( Server Web Apache / cPanel )
// Server telah melampaui bandwidth yang ditentukan oleh administrator server; ini sering digunakan oleh penyedia shared hosting untuk membatasi bandwidth pelanggan. [39]
// 529 Situs kelebihan muatan
// Digunakan oleh Qualys di API pengujian server SSLLabs untuk menandakan bahwa situs tidak dapat memproses permintaan. [40]
// 530 Situs dibekukan
// Digunakan oleh platform web Sistem Pantheon untuk menunjukkan situs yang telah dibekukan karena tidak aktif. [41]
// 598 (Konvensi informal) Kesalahan batas waktu pembacaan jaringan
// Digunakan oleh beberapa proxy HTTP untuk memberi sinyal batas waktu baca jaringan di belakang proxy ke klien di depan proxy. [42]
// 599 Kesalahan Timeout Sambungan Jaringan
// Kesalahan yang digunakan oleh beberapa proksi HTTP untuk memberi sinyal waktu tunggu sambungan jaringan di belakang proksi ke klien di depan proksi.
// Layanan Informasi Internet
// Server web Layanan Informasi Internet (IIS) Microsoft memperluas ruang kesalahan 4xx untuk menandakan kesalahan dengan permintaan klien.

// 440 Batas Waktu Masuk
// Sesi klien telah kedaluwarsa dan harus masuk lagi. [43]
// 449 Coba Lagi Dengan
// Server tidak dapat menerima permintaan karena pengguna belum memberikan informasi yang diperlukan. [44]
// 451 Pengalihan
// Digunakan di Exchange ActiveSync saat tersedia server yang lebih efisien atau server tidak dapat mengakses kotak pesan pengguna. [45] Klien diharapkan untuk menjalankan kembali operasi HTTP AutoDiscover untuk menemukan server yang lebih sesuai. [46]
// IIS terkadang menggunakan sub-kode desimal tambahan untuk informasi yang lebih spesifik, [47] namun sub-kode ini hanya muncul di muatan respons dan dalam dokumentasi, bukan menggantikan kode status HTTP yang sebenarnya.

// nginx
// Perangkat lunak server web nginx memperluas ruang kesalahan 4xx untuk menandakan masalah dengan permintaan klien. [48] ​​[49]

// 444 Tidak Ada Tanggapan
// Digunakan secara internal [50] untuk menginstruksikan server agar tidak mengembalikan informasi kepada klien dan segera menutup koneksi.
// 494 Tajuk permintaan terlalu besar
// Klien mengirim permintaan terlalu besar atau baris tajuk terlalu panjang.
// 495 Kesalahan Sertifikat SSL
// Perluasan kode tanggapan Permintaan Buruk 400 , digunakan saat klien memberikan sertifikat klien yang tidak valid .
// 496 Sertifikat SSL Diperlukan
// Perluasan kode tanggapan Permintaan Buruk 400 , digunakan saat sertifikat klien diperlukan tetapi tidak diberikan.
// 497 Permintaan HTTP Dikirim ke Port HTTPS
// Perluasan kode respons 400 Bad Request , digunakan saat klien membuat permintaan HTTP ke port yang mendengarkan permintaan HTTPS.
// 499 Permintaan Tertutup Klien
// Digunakan saat klien telah menutup permintaan sebelum server dapat mengirim respons.
// Cloudflare
// Layanan proxy terbalik Cloudflare memperluas ruang kesalahan seri 5xx untuk menandakan masalah dengan server asal. [51]

// 520 Server Web Mengembalikan Kesalahan Tidak Dikenal
// Server asal mengembalikan respons kosong, tidak diketahui, atau tidak terduga ke Cloudflare. [52]
// 521 Server Web Turun
// Server asal menolak koneksi dari Cloudflare. Solusi keamanan pada asalnya mungkin memblokir koneksi yang sah dari alamat IP Cloudflare tertentu.
// 522 Waktu Sambungan Habis
// Cloudflare kehabisan waktu saat menghubungi server asal.
// 523 Asal Tidak Terjangkau
// Cloudflare tidak dapat menjangkau server asal; misalnya, jika data DNS untuk server asal salah atau hilang.
// 524 Timeout Terjadi
// Cloudflare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu.
// 525 Jabat Tangan SSL Gagal
// Cloudflare tidak dapat menegosiasikan jabat tangan SSL/TLS dengan server asal.
// 526 Sertifikat SSL tidak valid
// Cloudflare tidak dapat memvalidasi sertifikat SSL di server web asal. Juga digunakan oleh gorouter Cloud Foundry .
// 527 Kesalahan Railgun
// Kesalahan 527 menunjukkan koneksi terputus antara Cloudflare dan server Railgun server asal. [53]
// 530
// Kesalahan 530 dikembalikan bersama dengan kesalahan 1xxx. [54]
// AWS Elastic Load Balancer
// Elastic Load Balancing Amazon menambahkan beberapa kode pengembalian kustom

// 460
// Klien menutup koneksi dengan penyeimbang muatan sebelum periode waktu tunggu mati berlalu. Biasanya saat waktu tunggu klien lebih cepat daripada waktu tunggu Elastic Load Balancer. [55]
// 463
// Penyeimbang beban menerima header permintaan X-Forwarded-For dengan lebih dari 30 alamat IP. [55]
// 464
// Versi protokol yang tidak kompatibel antara Klien dan server Asal. [55]
// 561 Tidak sah
// Kesalahan seputar autentikasi yang dikembalikan oleh server yang terdaftar dengan penyeimbang beban. Anda mengonfigurasi aturan pendengar untuk mengautentikasi pengguna, tetapi penyedia identitas (IdP) mengembalikan kode kesalahan saat mengautentikasi pengguna. [55]
// Kode peringatan caching (usang)
// Kode peringatan terkait caching berikut ditentukan di bawah RFC 7234 . Berbeda dengan kode status lainnya di atas, ini tidak dikirim sebagai status respons dalam protokol HTTP, tetapi sebagai bagian dari header HTTP "Peringatan". [56] [57] 

// Karena tajuk "Peringatan" ini sering kali tidak dikirim oleh server atau diakui oleh klien, tajuk ini dan kodenya telah dihapus oleh Kelompok Kerja HTTP pada tahun 2022 dengan RFC 9111 . [58] 

// 110 Tanggapan Basi
// Respons yang diberikan oleh cache sudah basi (usia konten melebihi usia maksimum yang ditetapkan oleh header Cache-Control atau masa hidup yang dipilih secara heuristik).
// 111 Validasi Ulang Gagal
// Cache tidak dapat memvalidasi respons, karena ketidakmampuan menjangkau server asal.
// 112 Operasi Terputus
// Cache sengaja diputus dari jaringan lainnya.
// 113 Kedaluwarsa Heuristik
// Cache secara heuristik memilih masa kesegaran lebih dari 24 jam dan usia respons lebih dari 24 jam.
// 199 Aneka Peringatan
// Sewenang-wenang, peringatan non-spesifik. Teks peringatan dapat dicatat atau disajikan kepada pengguna.
// 214 Transformasi Diterapkan
// Ditambahkan oleh proxy jika menerapkan transformasi apa pun ke representasi, seperti mengubah pengkodean konten, jenis media, atau sejenisnya.
// 299 Lain-lain Peringatan Terus-Menerus
// Sama seperti 199, tetapi menunjukkan peringatan terus-menerus.



// ##################### awal 1 ################### //




// const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser')
// const db = require('./connection')
// const response = require('./response')


// // init
// app.use(bodyParser.json())



// // get: apa2 yg akan dibuka di url nya nantinya
// // serta menjadi default ketika dibuka di browser nya nanti

// // fungsi method get: misalnya kita butuh data mahasiswa nantinya
// // serta kita bisa mengambil datanya berupa list
// //## endpoint ##//
// app.get('/', (req, res) => {
// res.send(200)
// })


// app.get('/mahasiswa', (req, res) => {
//     res.json(404, 'list mahasiswa muncul')
//     })

    
// app.get('/mahasiswa/:id', (req, res) => {
//     // const id = req.params.id
//     const id = req.params.id
//         res.send(`mengirim spesifik id = ${id}`)
//         })
            


// // method post: ini tidak bisa dicari di browser sebab browser default nya get bukan post.
// // bisa dibuka melalui postman 
// // post diperuntuhkan untuk meng INSERT(add data ke database) data (default) bisa juga melakukan hal lain
// app.post('/mahasiswa', (req, res) => {
//     res.send('ini posting')
// })


// // method put: menaruh/menyimpan artinya dia bisa merubah/update nilai yg ada didalm database
// app.put('/mahasiswa', (req, res) => {
//  res.send('ini put atau update data')
// })


// //
// app.delete('/mahasiswa', (req, res) => {
//  res.send('ini delete data')
// })



// .listen(port, (req, res) => {
//     console.log(`try on the port http://localhost${port}`)
// })



// ##################### akhir 1 ################## //









// #################### awal 2 ################### \\


// const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser')
// const db = require('./connection')
// const response = require('./response')


// // init
// app.use(bodyParser.json())



// // get: apa2 yg akan dibuka di url nya nantinya
// // serta menjadi default ketika dibuka di browser nya nanti

// // fungsi method get: misalnya kita butuh data mahasiswa nantinya
// // serta kita bisa mengambil datanya berupa list
// //## endpoint ##//
// app.get('/', (req, res) => {

//     response(200, 'lalala yeyey hahaha', res)
// })


// app.get('/mahasiswa', (req, res) => {
//     response(200, 'list mahasiswa muncul', res)
//     })

    
// app.get('/mahasiswa/:id', (req, res) => {
//     // const id = req.params.id
//     const id = req.params.id
//         response(200,`mengirim spesifik id = ${id}`, res)
//         })
            


// // method post: ini tidak bisa dicari di browser sebab browser default nya get bukan post.
// // bisa dibuka melalui postman 
// // post diperuntuhkan untuk meng INSERT(add data ke database) data (default) bisa juga melakukan hal lain
// app.post('/mahasiswa', (req, res) => {
//     response(200,'ini posting')
// })


// // method put: menaruh/menyimpan artinya dia bisa merubah/update nilai yg ada didalm database
// app.put('/mahasiswa', (req, res) => {
//  response(200,'ini put atau update data', res)
// })


// //
// app.delete('/mahasiswa', (req, res) => {
//  response(200,'ini delete data', res)
// })



// .listen(port, (req, res) => {
//     console.log(`try on the port http://localhost${port}`)
// })

// #################### akhir 2 ################# \\










// ################### awal 3 ################# \\


// const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser')
// const db = require('./connection')
// const response = require('./response')


// // init
// app.use(bodyParser.json())



// // get: apa2 yg akan dibuka di url nya nantinya
// // serta menjadi default ketika dibuka di browser nya nanti

// // fungsi method get: misalnya kita butuh data mahasiswa nantinya
// // serta kita bisa mengambil datanya berupa list
// //## endpoint ##//
// app.get('/', (req, res) => {
//     response(200, 'ini data' , 'ini messange', res)
// })


// app.get('/mahasiswa', (req, res) => {
//     response(200, 'list mahasiswa muncul', res)
// })

    
// app.get('/mahasiswa/:id', (req, res) => {
//     // const id = req.params.id
//     const id = req.params.id
//         response(200,`mengirim spesifik id = ${id}`, res)
// })
            


// // method post: ini tidak bisa dicari di browser sebab browser default nya get bukan post.
// // bisa dibuka melalui postman 
// // post diperuntuhkan untuk meng INSERT(add data ke database) data (default) bisa juga melakukan hal lain
// app.post('/mahasiswa', (req, res) => {
//     response(200,'ini posting')
// })


// // method put: menaruh/menyimpan artinya dia bisa merubah/update nilai yg ada didalm database
// app.put('/mahasiswa', (req, res) => {
//  response(200,'ini put atau update data', res)
// })


// //
// app.delete('/mahasiswa', (req, res) => {
//  response(200,'ini delete data', res)
// })



// .listen(port, (req, res) => {
//     console.log(`try on the port http://localhost${port}`)
// })











                            //###===>> latihan 4 <<===###\\

const express = require('express')
const app = express()
const port = 3000
const db = require('./connection')


const bodyParser = require('body-parser')
app.use(bodyParser.json())




// apa2 yg dibuka di url localhost menjadi default kalau dibuka di browser.
// biasanya dari API buat mengirim format kedepan pakai json
app.get('/', (req, res) => {
// res.json('main aja')
// res.send('main aja')
// res.send(200, 'ok status kode nya')
res.send(500)
// res.send(404)
})

app.get('/mahasiswa', (req, res) => {
    res.send('main aja buat mahasiswa')
})

app.get('/mahasiswa/:id', (req, res) => {
    const id = req.params.id
    res.send(`search spesific data id: ${id}`)
})


// post diperuntuhkan untuk mengisert data(biasanya meski bisa melakukakn yg lain) yg bisa menambahkan data ke database
app.post('/', (req, res) => {
    res.send('succes posting')
})


// put untuk merubah atau menganti nilai yg ada di database(update data)
app.put('/', (req, res) => {
    res.send('ini put/update data')
})


// delete untuk menghapus data yg ada dalam database
app.delete('/', (req, res) => {
    res.send('ini delete data')
    
})




.listen(port, (req, res)  => {
    console.log(`exemple on port try to lestening http://localhost:${port}`)
})









// response (http: request = (statusCode) untuk memvalidasi dari sisi front end(404, 200, dll) nya. ketika sisi front end nya ngehit ke API yg salah lalu API memberikan response 404 maka mereka akan memvalidasi kebutuhan mereka kedepan, biar page nya gak ngeblenk, error, serta digunakan untuk memonitoring hal2 lain)
