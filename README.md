#  Proyek Manajemen Inventaris Backend

Proyek ini adalah aplikasi backend untuk manajemen inventaris yang dibangun menggunakan Node.js dan PostgreSQL. Aplikasi ini memungkinkan pengguna untuk mengelola data inventaris dengan mudah.

## Prasyarat

- Node.js v14+
- Database PostgreSQL
- Prisma ORM
- Apidog

## Persiapan

1. Clone repository ini:
   ```bash
   git clone https://github.com/risqitarawiyah/inventory-management-backend.git
   cd inventory-management-backend
   
2. Instal dependensi :
   `npm install`
   
4. Buat file .env :
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/inventory-management-backend"
   
6. Jalankan migrasi Prisma :
   `npx prisma migrate dev`

7. Mulai aplikasi :
   `npm start`

## Endpoint API
1. Pendaftaran Pengguna
   
  - Metode: `POST`
   
  - Endpoint: `/api/auth/register`
   
  - Deskripsi: Mendaftar pengguna baru.
   
   - Body:
   ```
   {
    "username": "nama_pengguna",
    "email": "email@contoh.com",
    "password": "kata_sandi"
   }

   ```
   Response:
   ```
   {
    "data": {
    "username": "nama_pengguna",
    "email": "email@contoh.com"
   },
    "message": "Registration Success!"
   } 
   ``` 
3. Login Pengguna

  - Metode: `POST`
   
   - Endpoint: `/api/auth/login`
   
   - Deskripsi: Mengautentikasi pengguna dan mengembalikan token JWT.
   - Body:
     ```
     {
      "username": "nama_pengguna",
      "password": "kata_sandi"
     }

   - Response:
     ```
     {
       "data": {
        "username": "nama_pengguna",
        "role": "USER",
        "token": "jwt_token"
       },
       "message": "Login Success!"
     }
   
4. Repositori Pengguna
   
   Fungsi-fungsi untuk berinteraksi dengan data pengguna menggunakan Prisma.

   a. `createUser(userData)`
      - Deskripsi: Fungsi ini digunakan untuk membuat pengguna baru dalam basis data.
      - Parameter:
          - `userData`: Objek yang berisi data pengguna, termasuk `username`, `email`, dan `password`.
   b. `findUserByUsername(username)`
      - Deskripsi: Fungsi ini digunakan untuk mencari pengguna berdasarkan nama pengguna.
      - Parameter:
         - `username`: Nama pengguna yang dicari.


## Struktur Proyek
- db/                     # Konfigurasi database
  
- src/                    # Kode sumber aplikasi
  
- prisma/schema.prisma    # Definisi skema Prisma
  
- README.md               # Dokumentasi proyek
  
- .env                    # Variabel lingkungan

## Lisensi

### Penjelasan Pembaruan

1. **Endpoint Pendaftaran dan Login Pengguna**: Detail untuk rute `/register` dan `/login` telah ditambahkan, termasuk informasi tentang request body dan response yang diharapkan.
2. **Penggunaan Terminologi**: "massage" diubah menjadi "message" untuk konsistensi dan akurasi dalam penamaan.

## Pengujian API dengan Apidog

Proyek ini juga dilengkapi dengan pengujian API menggunakan **Apidog**, yang memungkinkan Anda untuk menguji endpoint API dengan mudah.

### Langkah-langkah untuk Menggunakan Apidog:

1. **Instal Apidog**: Jika belum terinstal, Anda dapat mengunduh Apidog dari situs resmi [Apidog](https://apidog.com/).
   
2. **Buka Apidog** dan buat proyek baru.
   
3. **Tambahkan Endpoint**: Masukkan detail endpoint API yang telah Anda buat:
   - Untuk pendaftaran pengguna:
     - **URL**: `http://localhost:3000/api/auth/register`
     - **Metode**: `POST`
     - **Body**:
       ```
       {
         "username": "nama_pengguna",
         "email": "email@contoh.com",
         "password": "kata_sandi"
       }
       ```

   - Untuk login pengguna:
     - **URL**: `http://localhost:3000/api/auth/login`
     - **Metode**: `POST`
     - **Body**:
       ```
       {
         "username": "nama_pengguna",
         "password": "kata_sandi"
       }
       ```

4. **Kirim Permintaan**: Setelah mengisi detail, klik tombol untuk mengirim permintaan dan lihat respons yang diterima dari server.

5. **Uji Respons**: Periksa apakah respons sesuai dengan yang diharapkan, dan pastikan bahwa autentikasi pengguna berhasil.

### Contoh Respons dari Endpoint

- **Pendaftaran Pengguna**:
  ```
  {
    "data": {
      "username": "nama_pengguna",
      "email": "email@contoh.com"
    },
    "message": "Registration Success!"
  }

- Login Pengguna:
  ```
  {
   "data": {
       "username": "nama_pengguna",
       "role": "USER",
       "token": "jwt_token"
    },
    "message": "Login Success!"
  }

