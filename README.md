# 📚 Könyvkölcsönző Alkalmazás

Ez a projekt egy **teljes stack könyvkölcsönző rendszer**, amely egy **MySQL adatbázisból**, egy **backend alkalmazásból**, egy **WinForms alapú asztali kliensből**, valamint egy **React alapú webes felületből** áll.

A rendszer célja a könyvek, szerzők és kölcsönzések kezelése, valamint a felhasználói és admin jogosultságok elkülönítése.

---

## 🧩 Fő funkciók

- 👤 Felhasználók és adminok kezelése  
- 📖 Könyvek és szerzők nyilvántartása  
- 🔁 Könyvkölcsönzések kezelése  
- ⏳ Határidők (due date) követése  
- 🚦 Kölcsönzés státuszok kezelése (`rented`, `returned`, `late`, `lost`)  
- 🗂️ ER diagram és relációs adatbázis-struktúra  

---

## 🛠️ Felhasznált technológiák

### 🗄️ Adatbázis
- **MySQL**
- Relációs adatmodell
- ER diagrammal tervezve

### ⚙️ Backend
- MySQL-alapú adatkezelés
- Üzleti logika (kölcsönzés, visszahozás, státuszfrissítés)
- Kapcsolat a WinForms és React kliensekkel

### 🖥️ Asztali alkalmazás
- **Windows Forms (WinForms)**
- Adminisztrációs felület
- Könyvek, szerzők és kölcsönzések kezelése

### 🌐 Webes felület
- **React**
- Felhasználóbarát UI
- Könyvek böngészése és kölcsönzések megtekintése

---

## 🗂️ Adatbázis felépítése

A rendszer az alábbi fő táblákat használja:

- **users** – felhasználók és adminok  
- **books** – könyvek adatai  
- **authors** – szerzők  
- **book_authors** – könyv–szerző kapcsolat (many-to-many)  
- **rentals** – kölcsönzések, határidők és státuszok  

📌 Az admin jogosultságot a `users.is_admin` mező határozza meg.

---

## 🔐 Jogosultságok

### 👤 Felhasználó
- Könyvek megtekintése
- Saját kölcsönzések kezelése

### 🛡️ Admin
- Könyvek és szerzők hozzáadása / módosítása
- Kölcsönzések kezelése
- Teljes rendszer adminisztrációja

---

## 🚀 Projekt célja

A projekt célja egy **valósághű könyvtári / könyvkölcsönző rendszer megvalósítása**, amely bemutatja:

- relációs adatbázis-tervezést,
- ER diagram használatát,
- backend–frontend kommunikációt,
- asztali és webes kliens párhuzamos használatát.

---

## 📄 Dokumentáció

- ER diagram  
- SQL adatbázis script  
- Frontend és backend forráskód

csak szólj 🐾💻
