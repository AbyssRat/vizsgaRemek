erDiagram

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

USERS ||--o{ USER_BOOKS : rents
BOOKS ||--o{ USER_BOOKS : rented_in

BOOKS ||--o{ BOOK_AUTHORS : has
AUTHORS ||--o{ BOOK_AUTHORS : writes
