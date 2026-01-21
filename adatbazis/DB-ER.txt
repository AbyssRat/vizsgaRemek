┌──────────────┐        ┌──────────────┐
│    USERS     │        │    AUTHORS   │
├──────────────┤        ├──────────────┤
│ PK user_id   │        │ PK author_id │
│ username     │        │ name         │
│ email        │        └──────┬───────┘
│ is_admin     │               │
│ created_at  │               │
└──────┬───────┘               │
       │                       │
       │                       │
       │               ┌───────▼────────┐
       │               │  BOOK_AUTHORS  │
       │               ├────────────────┤
       │               │ PK book_id     │
       │               │ PK author_id   │
       │               └───────┬────────┘
       │                       │
┌──────▼────────┐              │
│    RENTALS    │              │
├───────────────┤              │
│ PK rental_id  │              │
│ FK user_id    │              │
│ FK book_id    │◄─────────────┘
│ rent_date     │
│ due_date      │
│ return_date   │
│ status        │
└──────┬────────┘
       │
       │
┌──────▼────────┐
│     BOOKS     │
├───────────────┤
│ PK book_id    │
│ title         │
│ genre         │
│ publish_year  │
│ total_copies  │
│ available     │
└───────────────┘
