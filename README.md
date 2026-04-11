# 📚 Online E-Könyv Kölcsönző Rendszer

A projekt célja egy teljes stack online e-könyv rendszer megvalósítása. Regisztráció után a felhasználók krediteket használva e-könyveket kölcsönözhetnek meghatározott időre, amely alatt online olvashatják a könyvek tartalmát.

A felhasználók döntését könyvleírások, értékelések és további információk (pl. külső hivatkozások) segítik.

A rendszer lehetőséget biztosít könyvek keresésére az alábbi adatok alapján:

- ISBN szám  
- szerző  
- könyv címe  
- kiadás éve  
- nyelv  
- műfaj  

A kiválasztott könyvek kölcsönzése kreditek felhasználásával történik, ahol a költség a kölcsönzési idő és a könyv ára alapján kerül kiszámításra.

---

# 🧍 Csapat

- **Ábel Vilmos** — Frontend  
- **Molnár Dóra** — Adatbázis, Backend, Frontend, Design  
- **Petrény-Barócsy Bálint** — Backend, API  

---

# 🧩 Fő funkciók

- 👤 Felhasználók regisztrációja és bejelentkezése  
- 📖 E-könyvek kezelése (cím, műfaj, nyelv, értékelés, ár)  
- ✍ Szerzők kezelése  
- 🔗 Könyv–szerző kapcsolat (many-to-many)  
- 💳 Kreditalapú könyvkölcsönzés (ár × napok)  
- ⏱️ Rugalmas kölcsönzési idő  
- 📊 Könyvek értékelése (rating)  
- 🌐 Külső információk (pl. Wikipedia link)  
- 📜 Felhasználói kölcsönzések nyilvántartása  
- 📊 Nézet (view) a kölcsönzések állapotának követésére  

---

# 📐 Adatbázis entitások

| Tábla | Oszlopok |
|------|--------|
| **users** | user_id (PK), username, email, password_hash, credits, is_admin, created_at, first_name, last_name, city, zip_code, street_address, card_number, expiry_date, cvv |
| **authors** | author_id (PK), name, bio |
| **books** | book_id (PK), title, genre, language, publish_year, ISBN, file_name, rating, price, more_details_url |
| **book_authors** | book_id (FK), author_id (FK) |
| **user_books** | user_book_id (PK), user_id (FK), book_id (FK), start_date, rental_days, credits_spent |
| **rentals_view** | kölcsönzések összesített nézete |

---

# 🗂️ Adatbázis struktúra

users ||--o{ user_books : rents
books ||--o{ user_books : rented
books ||--o{ book_authors : has
authors ||--o{ book_authors : writes


---

# ⚙️ Speciális adatbázis elemek

## 🔹 Trigger

A `user_books` beszúrásakor automatikusan kiszámolja:

credits_spent = book.price × rental_days


---

## 🔹 View (rentals_view)

A nézet:

- kiszámolja a lejárati dátumot  
- meghatározza az állapotot:
  - `active`
  - `finished`  
- összekapcsolja:
  - könyvek
  - szerzők
  - kölcsönzések  

---

# 📡 API végpontok

## 🔐 Auth

- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

---

## 👤 Users

- GET `/api/users`
- GET `/api/users/:id`
- DELETE `/api/users/:id`

---

## 📚 Books

- GET `/api/books`
- GET `/api/books/:id`
- POST `/api/books`
- PUT `/api/books/:id`
- DELETE `/api/books/:id`

---

## 📦 Rentals

- POST `/api/rentals`
- GET `/api/rentals/my`
- GET `/api/rentals`
- DELETE `/api/rentals/:id`

---

## 🧪 System

- GET `/api/health`

---

# 🔐 Authentication

A védett végpontokhoz JWT token szükséges:

Authorization: Bearer TOKEN


---

# 🛠️ Technológiák

## 🗄️ Adatbázis
- MySQL / MariaDB  
- Trigger  
- View  
- 3NF normalizált struktúra  

## ⚙️ Backend
- Node.js  
- Express  
- JWT auth  

## 🌐 Frontend
- React  

## 💻 Desktop
- WinForms (.NET 8)

---

# 🔐 Jogosultságok

## 👤 User
- könyvek böngészése  
- kölcsönzés  
- saját kölcsönzések megtekintése  
- profil kezelés  

## 🛡️ Admin
- könyvek kezelése  
- szerzők kezelése  
- felhasználók kezelése  
- kölcsönzések kezelése  

---

# 🚀 Telepítés

## 1. Repo klónozás

git clone https://github.com/AbyssRat/vizsgaRemek.git


## 2. Adatbázis import

Importáld:

book_rental_app.sql


## 3. Indítás

indit.bat


---

# 🎯 Projekt célja

A rendszer bemutatja:

- relációs adatbázis-tervezést  
- trigger és view használatot  
- REST API fejlesztést  
- frontend-backend kapcsolatot  
- desktop + web integrációt  
