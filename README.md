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

## 📡 API Végpontok

### 🔐 Hitelesítés
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| POST | `/api/auth/register` | Nem | Új felhasználó regisztrálása |
| POST | `/api/auth/login` | Nem | Felhasználó bejelentkezése, JWT token visszaadása |
| GET | `/api/auth/me` | Igen | Jelenleg bejelentkezett felhasználó lekérése |

---

### 👤 Felhasználók
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| GET | `/api/users` | Igen (Admin) | Összes felhasználó lekérése |
| GET | `/api/users/:id` | Igen | Felhasználó lekérése ID alapján |
| DELETE | `/api/users/:id` | Igen (Admin) | Felhasználó törlése |

---

### 📚 Könyvek
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| GET | `/api/books` | Nem | Összes könyv lekérése |
| GET | `/api/books/:id` | Nem | Könyv lekérése ID alapján |
| POST | `/api/books` | Igen (Admin) | Új könyv hozzáadása |
| PUT | `/api/books/:id` | Igen (Admin) | Könyv frissítése |
| DELETE | `/api/books/:id` | Igen (Admin) | Könyv törlése |

---

### 📄 Könyv oldalak / Előnézet
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| GET | `/api/books/:id/pages/1` | Nem | Első (ingyenes) oldal lekérése |
| GET | `/api/books/:id/pages/:page` | Igen | Bérelhető könyv oldal lekérése |

---

### 📦 Könyvbérlés
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| POST | `/api/rentals` | Igen | Könyv kölcsönzése X napra |
| GET | `/api/rentals/my` | Igen | Jelenlegi felhasználó kölcsönzései |
| GET | `/api/rentals` | Igen (Admin) | Összes kölcsönzés lekérése |
| DELETE | `/api/rentals/:id` | Igen | Könyvkölcsönzés törlése |

---

### 🧪 Segédfunkciók
| Módszer | Végpont | Hitelesítés szükséges | Leírás |
|------|---------|---------------------|--------|
| GET | `/api/health` | Nem | Szerver állapot ellenőrzése |

---

### 🔑 Hitelesítési fejléc
A védett végpontokhoz add hozzá ezt a fejlécet:


Authorization: Bearer SAJÁT_JWT_TOKEN


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
