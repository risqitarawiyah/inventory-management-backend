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
2. Login Pengguna

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
   
3. Repositori Pengguna
   
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
  ```
6. Pembuatan CRUD User
     - Create
       
       Fields nya : username, email, password, dan role
     
       ```
       {
       "username": "nama_pengguna",
       "email": "email@gmail.com",
       "password": "kata_sandi",
       "role": "ADMIN"
       }
       ```

     - Read
  
       Get All Users, yaitu mengambil semua data user, contoh disini ada 2 user :
           ```
       
           {
           "id": 1,
           "username": "stechoq04",
           "email": "stechoq04@gmail.com",
           "role": "USER",
           "createdAt": "2024-09-30T10:15:14.867Z"
           },
           {
           "id": 3,
           "username": "adminrisqi21",
            "email": "adminrisqi21@gmail.com",
           "role": "ADMIN",
           "createdAt": "2024-10-08T13:14:58.725Z"
           }
       
       Get User by ID, yaitu mengambil satu user berdasarkan id yang spesifik, sebagai contoh kita mengambil userId 3
       ```
        {
           "id": 3,
           "username": "adminrisqi21",
            "email": "adminrisqi21@gmail.com",
           "role": "ADMIN",
           "createdAt": "2024-10-08T13:14:58.725Z"
       }

   - Update
     Mengubah isi data dari user berdasarkan id yang spesifik (perlu menginisialisasi id user yang akan diubah)
     ```
     {
     "username": "nama_pengguna",
     "email": "contoh@gmail.com",
     "password": "kata_sandi",
     "role": "USER"
     }
     
   - Delete
     Mengahapus user berdasarkan id yang spesifik (perlu menginisialisasi id user yang akan dihapus), jika berhasil maka user tersebut tidak ada lagi
     
8. Pembuatan CRUD Item
   - Create

     Fields nya : name, description, dan quantity
     ```
     {
     "name": "nama_barang",
     "description": "deskripsi_barang.",
     "quantity": jumlah
     }
   - Read

     Get All Item, yaitu mengambil semua data item, contoh disini ada 2 item :
     ```
     [
      {
        "id": 7,
        "name": "Laptop",
        "description": "Laptop Lenovo.",
        "quantity": 2,
        "createdAt": "2024-10-09T02:52:47.872Z"
      },
      {
        "id": 6,
        "name": "Bantal",
        "description": "Bantal tidur",
        "quantity": 10,
        "createdAt": "2024-10-09T02:44:46.773Z"
      }
     ]
     ```
     Get Item by ID, yaitu mengambil data item berdasarkan id yang spesifik, contohnya kita mengambil itemId 6 :
     ```
     {
     "id": 6,
     "name": "Bantal",
     "description": "Bantal tidur",
     "quantity": 10,
     "createdAt": "2024-10-09T02:44:46.773Z"
     }
     
   - Update
     Mengubah isi data dari item berdasarkan id yang spesifik (perlu menginisialisasi id item yang akan diubah)
     ```
     {
     "name": "nama_item",
     "description": "deskripsi_item.",
     "quantity": jumlah item
     }
     
   - Delete
     Mengahapus item berdasarkan id yang spesifik (perlu menginisialisasi id item yang akan dihapus), jika berhasil maka item tersebut tidak ada lagi
     
10. Pembuatan CRUD Transaction

    - Borrow Item, setiap user meminjam satu barang berdasarkan userId dan itemId
      ```
      {
      "userId": 1,
      "itemId": 6,
      "quantityBorrowed": 5
      }
      ```
    - Read
      Get All Transaction, yaitu mengambil semua data transaksi, contoh disini ada 1 transaksi dimana status nya dipinjam :
      ```
      {
        "id": 1,
        "userId": 1,
        "itemId": 7,
        "quantityBorrowed": 2,
        "borrowedAt": "2024-10-09T03:55:56.149Z",
        "returnedAt": null,
        "status": "BORROWED",
        "item": {
            "name": "Laptop"
        }
      },
      ```

      Get Transaction by User ID, mengambil satu transaksi berdasarkan id si peminjam :
      ```
      {
      "userId": 1
      }
      ```
      Output :
      ```
      {
        "id": 1,
        "userId": 1,
        "itemId": 7,
        "quantityBorrowed": 2,
        "borrowedAt": "2024-10-09T03:55:56.149Z",
        "returnedAt": null,
        "status": "BORROWED",
        "item": {
            "name": "Laptop"
        }
      },
      ```

    - Verify Transaction

      Verifikasi status transaksi menjadi BORROWED berdasarkan userId (perlu menginisialisasi id user yang melakukan transaksi)
      ```
      {
      "status": "BORROWED"
      }
      ```
    - Return Transaction

      Mengembalikan status transaksi berdasarkan userId (perlu menginisialisasi id user yang melakukan transaksi)
      ```
      {
      "userId": 1
      }
      ```
      Output (disini status sudah berubah menjadi RETURNED) :
      ```
      {
        "id": 2,
        "userId": 1,
        "itemId": 6,
        "quantityBorrowed": 5,
        "borrowedAt": "2024-10-10T07:01:53.887Z",
        "returnedAt": "2024-10-10T07:24:02.534Z",
        "status": "RETURNED",
        "item": {
            "name": "Bantal"
        }
      }
