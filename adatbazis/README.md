erDiagram

    USERS {
        int user_id PK
        string username
        string email
        string password_hash
        int credits
        string is_admin
        datetime created_at
        string first_name
        string last_name
        string city
        string zip_code
        string street_address
        string card_number
        date expiry_date
        int cvv
    }

    AUTHORS {
        int author_id PK
        string name
        string bio
    }

    BOOKS {
        int book_id PK
        string title
        string genre
        string language
        int publish_year
        string ISBN
        string file_name
        int rating
        decimal price
        string more_details_url
    }

    BOOK_AUTHORS {
        int book_id FK
        int author_id FK
    }

    USER_BOOKS {
        int user_book_id PK
        int user_id FK
        int book_id FK
        date start_date
        int rental_days
        int credits_spent
    }

    USERS ||--o{ USER_BOOKS : rents
    BOOKS ||--o{ USER_BOOKS : rented
    BOOKS ||--o{ BOOK_AUTHORS : has
    AUTHORS ||--o{ BOOK_AUTHORS : writes
