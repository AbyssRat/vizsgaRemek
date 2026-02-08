# 🗺️ Projektterv – Könyvkölcsönző Alkalmazás

**Csapatlétszám:** 3 fő  
**Technológiák:** MySQL, Backend API, WinForms, React  
**Projekt típusa:** Teljes stack alkalmazás (asztali + web)

---

## 👥 Csapatszerepek

### 👤 1. fő – Adatbázis & Backend
- ER diagram tervezése
- MySQL adatbázis létrehozása
- SQL script implementálása
- Backend üzleti logika
- API végpontok készítése

### 👤 2. fő – WinForms (asztali kliens)
- Admin felület kialakítása
- Könyvek kezelése (CRUD)
- Szerzők kezelése (CRUD)
- Kölcsönzések adminisztrációja
- Backend API használata

### 👤 3. fő – React (webes kliens)
- React projekt setup
- Felhasználói felület kialakítása
- Könyvek listázása
- Kölcsönzések megjelenítése
- Backend API integráció

---

## 📌 1. Fázis – Tervezés (1–2 nap)

### Feladatok
- Követelmények egyeztetése
- Funkciók listázása
- ER diagram elkészítése
- Adatbázis táblák véglegesítése
- GitHub repository létrehozása

**Eredmény:**
- ER diagram
- README.md
- Projektstruktúra

---

## 🗄️ 2. Fázis – Adatbázis (1 nap)

### Feladatok
- MySQL adatbázis létrehozása
- Táblák implementálása
- Kapcsolatok ellenőrzése
- Tesztadatok feltöltése

**Eredmény:**
- Működő adatbázis
- SQL script

---

## ⚙️ 3. Fázis – Backend fejlesztés (2–3 nap)

### Feladatok
- Adatbázis kapcsolat
- CRUD végpontok
- Kölcsönzés logika
- Státusz és határidő kezelés
- API dokumentálása

**Eredmény:**
- Backend API

---

## 🖥️ 4. Fázis – WinForms alkalmazás (2–3 nap)

### Feladatok
- Projekt setup
- Admin UI
- Könyv és szerző kezelés
- Kölcsönzések kezelése
- API integráció

**Eredmény:**
- WinForms admin alkalmazás

---

## 🌐 5. Fázis – React webalkalmazás (2–3 nap)

### Feladatok
- React setup
- UI komponensek
- Könyvlista
- Kölcsönzések megjelenítése
- API hívások

**Eredmény:**
- Webes felhasználói felület

---

## 🔗 6. Fázis – Integráció és tesztelés (1–2 nap)

### Feladatok
- Frontend–backend összekötés
- Jogosultságok ellenőrzése
- Hibajavítás
- Funkcionális tesztelés

---

## 🧹 7. Fázis – Dokumentáció és leadás (1 nap)

### Feladatok
- README frissítése
- Telepítési útmutató
- ER diagram csatolása
- Képernyőképek

---

## 🌿 Git Branch Stratégia

### 🔒 Fő branch-ek

- **main**
  - Csak stabil, bemutatható kód
  - Leadás előtt ide kerül minden

- **dev**
  - Aktív fejlesztési branch
  - Minden feature ide merge-elődik először

---

### 🌱 Feature branch-ek

Mindenki **külön feature branch-en dolgozik**:

- `feature/database-backend`
- `feature/winforms`
- `feature/react`

📌 Szabály:
- Soha ne dolgozz közvetlenül `main`-en
- Feature branch → `dev` → `main`
