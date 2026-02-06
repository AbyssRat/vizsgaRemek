# 📚 Online E-Könyv Kölcsönzés

Ez a projekt egy **teljes stack online e-könyv rendszer**, amely egy **MySQL adatbázisból**, egy **backend alkalmazásból**, valamint egy **React alapú webes felületből** áll.  

A rendszer célja az e-könyvek kezelésének, felhasználói előfizetések és hozzáférések nyilvántartásának biztosítása, adminisztrátori felügyelettel.

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
- ⏳ Felhasználói e-könyv előfizetések kezelése (start_date / end_date)  
- 🌐 E-könyvek böngészése és hozzáférés a webes felületen  
- 🗂️ ER diagram és relációs adatbázis-struktúra  

---

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
