# 📚 Online E-Könyv Kölcsönzés

A projekt célja egy teljes stack online e-könyv rendszer megvalósítása. Regisztráció után lehetőséget kap a felhasználó jogosultságok vásárlására, amelyek lehetőséget adnak a könyvek tartalmának online megismerésére a vásárolt jogosultság által engedett ideig. A választást azzal szeretnénk segíteni, hogy minden könyvről rövid leírást adunk és az első oldalt mindenki számára elérhetővé teszünk Zöld? Lehetőséget adunk érdeklődésnek megfeléelő könyv keresésére

- ISBN szám
- szerző
- könyv cím
- kiadás éve
- nyelv
  
alapján.

A kiválasztott könyveket egy virtuális kosárba tudja helyezni, amelyet fizetés után adott ideig olvashat.

---

## 🧍 Csapat

- Ábel Vilmos - Frontend  
- Molnár Dóra - Adatbázis, Backend  
- Petrény-Barócsy Bálint - Backend, API  

---

## 🧩 Fő funkciók

- 👤 Felhasználók regisztrációja, bejelentkezés OAuth2-vel  
- 📖 E-könyvek nyilvántartása  
- ✍ Szerzők kezelése  
- 🔗 Könyv–szerző kapcsolat (many-to-many)
- 💵A bérlés időtartalma pénz függvényében változtatható
- ⏱️ Rugalmas kölcsönzési idő (akár 1 nap)
- ⌛ Minden könyv első oldalát el lehet olvasni
- 📜 Felhasználói e-könyv előfizetések kezelése (start_date / end_date)  
- 🌐 E-könyvek böngészése és hozzáférés a webes felületen  
- 🗂️ ER diagram és relációs adatbázis-struktúra  

---

## 📐 Entitások
 
| Table Name     | Oszlopok / PK / FK                                             |
|----------------|---------------------------------------------------------------|
| **USERS**      | `PK user_id`, `username`, `email`, `password_hash`, `is_admin`, `created_at`, `google_id` |
| **BOOKS**      | `PK book_id`, `title`, `genre`, `publish_year`, `ISBN`, `language`, `file_url`, `preview_url`, `cover_url` |
| **AUTHORS**    | `PK author_id`, `name`, `bio`                                       |
| **BOOK_AUTHORS** | `PK book_id`, `PK author_id`, `FK book_id` → BOOKS, `FK author_id` → AUTHORS |
| **USER_BOOKS** | `PK user_book_id`, `FK user_id` → USERS, `FK book_id` → BOOKS, `start_date`, `rental_days`, `end_date` (computed) |

**REST API végpontterv**
 
**🔐 Hitelesítés (Auth)**
-*POST /api/auth/register* – Új felhasználó regisztrációja.

-*POST /api/auth/login* – Bejelentkezés (JWT token vagy Session indítása).

-*GET /api/auth/oauth/google* – OAuth2 bejelentkezés indítása.

-*GET /api/auth/me* – Bejelentkezett felhasználó adatainak lekérése (profil).

**📖 Könyvek (Books - Publikus & Admin)
Keresés és Listázás:**
-*GET /api/books* – Összes könyv listázása.

-Query paraméterek a szűréshez: *?isbn=...&author=...&title=...&year=...&lang=...*
Egyedi könyv:

-*GET /api/books/:id* – Egy könyv részletes adatlapja.

Admin műveletek:
-*POST /api/books* – Új könyv feltöltése (Admin only).

-*PUT /api/books/:id* – Könyv adatainak módosítása (Admin only).

-*DELETE /api/books/:id* – Könyv törlése (Admin only).

**✍️ Szerzők (Authors)**
-*GET /api/authors* – Szerzők listázása.
-*POST /api/authors* – Új szerző felvétele (Admin only).

**🛒 Kölcsönzés és Kosár (Rentals)**
A "virtuális kosár" lehet kliens oldali (React state), de a véglegesítés a backendre fut be:
-*POST /api/rentals/calculate* – Árkalkuláció (input: könyv ID-k + napok száma, output: végösszeg).

-*POST /api/rentals* – Fizetés és Kölcsönzés indítása.

-Body: *[{ book_id: 1, rental_days: 7 }, { book_id: 5, rental_days: 2 }]*
  Ez hozza létre a sorokat a USER_BOOKS táblában.
  
-*GET /api/rentals/my-books* – A felhasználó aktív kölcsönzéseinek listája (ahonnan olvashat).

**📄 Olvasás (Reader)**
-*GET /api/read/:book_id/preview* – Az első oldal URL-jének visszaadása (Bárki elérheti).

-*GET /api/read/:book_id/full* – A teljes tartalom elérése.

Middleware ellenőrzés: Van-e érvényes bejegyzés a user_books táblában és NOW() < end_date?
 
 
usecaseDiagram
    actor "Vendég (Guest)" as Guest
    actor "Felhasználó (User)" as User
    actor "Adminisztrátor (Admin)" as Admin
 
    package "E-Könyv Rendszer" {
        usecase "Regisztráció / Bejelentkezés" as UC1
        usecase "Könyvek keresése (ISBN, Cím, Szerző)" as UC2
        usecase "Előnézet (Első oldal) megtekintése" as UC3
       
        usecase "Könyv kosárba helyezése" as UC4
        usecase "Kölcsönzési idő kiválasztása" as UC5
        usecase "Fizetés és Kölcsönzés" as UC6
        usecase "Teljes könyv olvasása" as UC7
        usecase "Saját bérlések megtekintése" as UC8
 
        usecase "Új könyv felvétele" as UC9
        usecase "Könyv szerkesztése / törlése" as UC10
        usecase "Szerzők kezelése" as UC11
        usecase "Felhasználók kezelése" as UC12
    }
 
    %% Öröklődés: A User tudja mindazt, amit a Guest, az Admin mindazt, amit a User
    Guest <|-- User
    User <|-- Admin
 
    %% Kapcsolatok
    Guest --> UC1
    Guest --> UC2
    Guest --> UC3
 
    User --> UC4
    User --> UC5
    User --> UC6
    User --> UC7
    User --> UC8
 
    Admin --> UC9
    Admin --> UC10
    Admin --> UC11
    Admin --> UC12
 

## 🛠️ Felhasznált technológiák

### 🗄️ Adatbázis
- **MySQL**
- Teljesen normalizált (3NF) adatmodell
- ER diagrammal tervezve
- Táblák: `users`, `authors`, `books`, `book_authors`, `user_books`

### ⚙️ Backend
- Node.js / Express (vagy bármilyen REST API)
- OAuth2 hitelesítés
- Üzleti logika: előfizetések, hozzáférések, admin műveletek

### 🌐 Webes felület
- **React**
- Felhasználóbarát UI
- E-könyvek böngészése, hozzáférés, előfizetések megtekintése

---

## 🗂️ Adatbázis felépítése

A rendszer az alábbi fő táblákat használja:

- **users** – felhasználók és adminok  
- **authors** – szerzők  
- **books** – e-könyvek adatai, letöltési / olvasási link  
- **book_authors** – könyv–szerző kapcsolat (many-to-many)  
- **user_books** – felhasználói e-könyv előfizetések, hozzáférés dátuma  

📌 Admin jogosultságot a `users.is_admin` mező határozza meg.

---

## 🔐 Jogosultságok

### 👤 Felhasználó
- E-könyvek megtekintése
- Saját előfizetések kezelése
- Új e-könyv előfizetések vásárlása

### 🛡️ Admin
- E-könyvek hozzáadása / módosítása / törlése
- Szerzők kezelése
- Felhasználói előfizetések adminisztrációja
- Teljes rendszer felügyelete

---

## 🚀 Projekt célja

A projekt célja egy **teljesen online e-könyv platform megvalósítása**, amely bemutatja:

- relációs adatbázis-tervezést 3NF-ben,
- ER diagram használatát,
- backend–frontend kommunikációt REST API-val,
- OAuth2 alapú felhasználói hitelesítést,
- digitális előfizetések és hozzáférések kezelését.

---

## 📄 Dokumentáció

- ER diagram (Crow’s Foot jelöléssel)  
- SQL adatbázis script és seed  
- Frontend és backend forráskód  
- REST API végpontok dokumentációja
