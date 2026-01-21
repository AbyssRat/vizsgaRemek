**Könyvkezelés**
*Funkciók:*
    -Könyv CRUD (létrehozás, módosítás, törlés)
    -ISBN kezelése
    -Több példány kezelése (pl. 3 db ugyanabból a könyvből)
    -Könyv státuszok:
        -elérhető
        -kikölcsönözve
        -lefoglalva
        -elveszett
        -selejtezett
    -Kategóriák / műfajok
    -Szerzők (több szerző is lehessen)
    -Kiadó, kiadás éve
    -Polchely / raktári jelzet
    -Kulcsszavas keresés (cím, szerző, ISBN alapján)

**DB-szinten:**
books, book_copies, authors, categories, kapcsolótáblák

**Felhasználókezelés (olvasók)**
Nem csak regisztráció, hanem könyvtári realitások.
*Funkciók:*
    -Olvasók CRUD
    -Tagsági szám / olvasójegy
    -Tagság érvényessége (lejárati dátum)
    -Elérhetőségek (email, telefon)
    -Aktív / tiltott státusz
    -Könyvtörténet:
        -mit kölcsönzött
        -mikor
        -visszahozta-e
    -Tartozások megjelenítése

**Könyvkölcsönzés**

*Funkciók:*
    -Kölcsönzés indítása
    -Visszavétel
    -Hosszabbítás
    -Maximális kölcsönzési szám kezelése
    -Kölcsönzési időtartam szabályai
    -Automatikus státuszváltás
    -Késedelem automatikus felismerése
*Extra:*
    -Könyv előjegyzés / foglalás
    -Előjegyzési sor kezelése

**Késedelmi díjkezelés**

*Funkciók:*
    -Napi alapú díjszámítás
    -Maximális díj limit
    -Elveszett könyv díjazása
    -Díj kiegyenlítésének rögzítése
    -Részfizetés kezelése
    -Státusz:
        -tartozása van
        -kiegyenlítve

**Dolgozói jogosultságkezelés**

*Szerepkörök:*
    -Admin
    -Könyvtáros
    -Gyakornok
*Jogosultságok:*
    -Ki adhat hozzá könyvet
    -Ki törölhet
    -Ki kezelhet díjakat
    -Ki láthat statisztikákat
*RBAC (Role-Based Access Control)*

**Keresés és szűrés (fontos UX!)**
*Gyors kereső (autocomplete)*
    -Szűrés:
        -elérhető könyvek
        -késésben lévők
        -lejárt tagságú olvasók
    -Részletes lista nézetek
    
**Statisztikák és riportok**
*Példák:*
    -Legtöbbet kölcsönzött könyvek
    -Aktív olvasók száma
    -Késések aránya
    -Bevétel késedelmi díjakból
    -Havi / éves kimutatások

**Értesítések**
*Email értesítés:*
    -kölcsönzés lejárta előtt
    -lejárt határidőnél
    -foglalás elérhető
    -Admin értesítések (pl. sok elveszett könyv)

**Naplózás és audit**
    -Ki mikor mit csinált
    -Könyv törlés / módosítás log
    -Díjmódosítások naplózása
*Technikai oldal (jó, ha dokumentálva van)*
    -Backend:
    -REST API
    -Auth (JWT / session)
    -Validációk
    -Hibakezelés
*Frontend:*
    -Dashboard
    -Táblázatos listák
    -Modalok kölcsönzéshez
    -Reszponzív UI
*Adatbázis:*
    -Normalizált séma
    -Foreign key-k
    -Indexek kereséshez


**talán, ha lesz idő**
    -ER diagram
    -Use case diagram
    -API dokumentáció (Swagger)
    -Seed adatok
    -Tesztfelhasználók