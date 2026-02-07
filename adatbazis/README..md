
```mermaid
flowchart LR
    USERS["USERS
    ─────────────
    PK user_id
    username
    email
    password_hash
    is_admin
    created_at"]

    BOOKS["BOOKS
    ─────────────
    PK book_id
    title
    genre
    publish_year
    ISBN
    file_url
    preview_url"]

    AUTHORS["AUTHORS
    ─────────────
    PK author_id
    name"]

    BOOK_AUTHORS["BOOK_AUTHORS
    ─────────────
    PK/FK book_id
    PK/FK author_id"]

    USER_BOOKS["USER_BOOKS
    ─────────────
    PK user_book_id
    FK user_id
    FK book_id
    start_date
    rental_days
    end_date (computed)"]

    USERS -->|rents| USER_BOOKS
    BOOKS -->|is rented| USER_BOOKS
    BOOKS -->|has| BOOK_AUTHORS
    AUTHORS -->|writes| BOOK_AUTHORS
