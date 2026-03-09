# 📚 Online E-Könyv Kölcsönző Rendszer

A projekt célja egy teljes stack online e-könyv rendszer megvalósítása. Regisztráció után a felhasználók krediteket használva e-könyveket kölcsönözhetnek meghatározott időre, amely alatt online olvashatják a könyvek tartalmát.

A felhasználók a választást azzal segítjük, hogy minden könyvről rövid leírás jelenik meg, valamint az első oldal minden látogató számára ingyenesen megtekinthető.

A rendszer lehetőséget biztosít könyvek keresésére az alábbi adatok alapján:

* ISBN szám
* szerző
* könyv címe
* kiadás éve
* nyelv

A kiválasztott könyvek egy virtuális kosárba helyezhetők, majd a felhasználó a kölcsönzési idő kiválasztása után kreditek felhasználásával bérelheti ki őket.

---

# 🧍 Csapat

* **Ábel Vilmos** — Frontend
* **Molnár Dóra** — Adatbázis, Backend, Frontend, Design
* **Petrény-Barócsy Bálint** — Backend, API

---

# 🧩 Fő funkciók

* 👤 Felhasználók regisztrációja és bejelentkezése
* 📖 E-könyvek nyilvántartása
* ✍ Szerzők kezelése
* 🔗 Könyv–szerző kapcsolat (many-to-many)
* 💳 Kreditekkel történő könyvbérlés
* ⏱️ Rugalmas kölcsönzési idő (akár 1 nap)
* ⌛ Minden könyv első oldala ingyenesen megtekinthető
* 📜 Felhasználói könyvbérlések kezelése
* 🌐 E-könyvek böngészése és olvasása webes felületen
* 🗂️ ER diagram és relációs adatbázis-struktúra

---

# 📐 Entitások

| Table Name       | Oszlopok                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| **USERS**        | `user_id (PK)`, `username`, `email`, `password_hash`, `credits`, `is_admin`, `created_at`                     |
| **AUTHORS**      | `author_id (PK)`, `name`, `bio`                                                                               |
| **BOOKS**        | `book_id (PK)`, `title`, `genre`, `language`, `publish_year`, `ISBN`, `file_url`, `preview_url`, `cover_url`  |
| **BOOK_AUTHORS** | `book_id (FK)`, `author_id (FK)`                                                                              |
| **USER_BOOKS**   | `user_book_id (PK)`, `user_id (FK)`, `book_id (FK)`, `start_date`, `rental_days`, `end_date`, `credits_spent` |

---

# 🗂️ Adatbázis struktúra

A rendszer relációs adatbázist használ, amely az alábbi kapcsolatokat tartalmazza:

```
USERS ||--o{ USER_BOOKS : rents
BOOKS ||--o{ USER_BOOKS : rented
BOOKS ||--o{ BOOK_AUTHORS : has
AUTHORS ||--o{ BOOK_AUTHORS : writes
```

### Táblák

```
USERS {
    INT user_id PK
    VARCHAR username
    VARCHAR email
    VARCHAR password_hash
    INT credits
    BOOLEAN is_admin
    TIMESTAMP created_at
}

AUTHORS {
    INT author_id PK
    VARCHAR name
    TEXT bio
}

BOOKS {
    INT book_id PK
    VARCHAR title
    ENUM genre
    ENUM language
    YEAR publish_year
    VARCHAR ISBN
    VARCHAR file_url
    VARCHAR preview_url
    VARCHAR cover_url
}

BOOK_AUTHORS {
    INT book_id FK
    INT author_id FK
}

USER_BOOKS {
    INT user_book_id PK
    INT user_id FK
    INT book_id FK
    DATE start_date
    INT rental_days
    DATE end_date
    INT credits_spent
}
```

---

# 📡 API Végpontok

## 🔐 Hitelesítés

| Módszer | Végpont              | Hitelesítés | Leírás                              |
| ------- | -------------------- | ----------- | ----------------------------------- |
| POST    | `/api/auth/register` | Nem         | Új felhasználó regisztrálása        |
| POST    | `/api/auth/login`    | Nem         | Felhasználó bejelentkezése          |
| GET     | `/api/auth/me`       | Igen        | Bejelentkezett felhasználó lekérése |

---

## 👤 Felhasználók

| Módszer | Végpont          | Hitelesítés | Leírás              |
| ------- | ---------------- | ----------- | ------------------- |
| GET     | `/api/users`     | Admin       | Összes felhasználó  |
| GET     | `/api/users/:id` | Igen        | Felhasználó adatai  |
| DELETE  | `/api/users/:id` | Admin       | Felhasználó törlése |

---

## 📚 Könyvek

| Módszer | Végpont          | Hitelesítés | Leírás           |
| ------- | ---------------- | ----------- | ---------------- |
| GET     | `/api/books`     | Nem         | Összes könyv     |
| GET     | `/api/books/:id` | Nem         | Könyv részletek  |
| POST    | `/api/books`     | Admin       | Könyv hozzáadása |
| PUT     | `/api/books/:id` | Admin       | Könyv módosítása |
| DELETE  | `/api/books/:id` | Admin       | Könyv törlése    |

---

## 📄 Könyv oldalak / előnézet

| Módszer | Végpont                      | Hitelesítés | Leírás                   |
| ------- | ---------------------------- | ----------- | ------------------------ |
| GET     | `/api/books/:id/pages/1`     | Nem         | Ingyenes első oldal      |
| GET     | `/api/books/:id/pages/:page` | Igen        | Könyv oldal megtekintése |

---

## 📦 Könyvbérlés

| Módszer | Végpont            | Hitelesítés | Leírás             |
| ------- | ------------------ | ----------- | ------------------ |
| POST    | `/api/rentals`     | Igen        | Könyv kölcsönzése  |
| GET     | `/api/rentals/my`  | Igen        | Saját kölcsönzések |
| GET     | `/api/rentals`     | Admin       | Összes kölcsönzés  |
| DELETE  | `/api/rentals/:id` | Igen        | Kölcsönzés törlése |

---

## 🧪 Segédfunkciók

| Módszer | Végpont       | Hitelesítés | Leírás          |
| ------- | ------------- | ----------- | --------------- |
| GET     | `/api/health` | Nem         | Szerver állapot |

---

# 🔑 Hitelesítési fejléc

A védett végpontokhoz JWT token szükséges.

```
Authorization: Bearer SAJÁT_JWT_TOKEN
```

---

# 🛠️ Felhasznált technológiák

### 🗄️ Adatbázis

* **MySQL**
* 3NF normalizált adatmodell
* ER diagram

### ⚙️ Backend

* **Node.js**
* **Express**
* REST API
* JWT alapú hitelesítés

### 🌐 Frontend

* **React**
* Reszponzív webes felület
* E-könyvek böngészése és olvasása

---

# 🔐 Jogosultságok

## 👤 Felhasználó

* E-könyvek böngészése
* Könyvek kosárba helyezése
* Könyvek kölcsönzése kreditek felhasználásával
* Saját kölcsönzések megtekintése
* Könyvek olvasása a kölcsönzési idő alatt

---

## 🛡️ Admin

* Könyvek hozzáadása / módosítása / törlése
* Szerzők kezelése
* Felhasználók kezelése
* Kölcsönzések kezelése

---

# 🚀 Telepítés és futtatás

A projekt futtatásához szükséges lépések:

### 1️⃣ Repository letöltése

```
git clone https://github.com/REPO_LINK
```

vagy a repository letöltése ZIP formátumban.

---

### 2️⃣ Projekt mappa megnyitása

Navigálj a letöltött projekt mappájába.

---

### 3️⃣ Indítás

A projekt indításához futtasd az alábbi fájlt:

```
indit.bat
```

Ez automatikusan elindítja:

* a backend szervert
* a frontend alkalmazást

---

### 4️⃣ Alkalmazás megnyitása

A webes felület ezután elérhető lesz a böngészőben.

---

# 🎯 Projekt célja

A projekt célja egy **online e-könyv platform megvalósítása**, amely bemutatja:

* relációs adatbázis-tervezést (3NF)
* ER diagram használatát
* REST API alapú backend-frontend kommunikációt
* felhasználói hitelesítést és jogosultságkezelést
* digitális könyvkölcsönzés működését
