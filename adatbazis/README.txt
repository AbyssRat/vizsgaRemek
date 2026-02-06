USERS
PK user_id
username
email
password_hash
is_admin
created_at
   │
   │ 1
   │
   │ N
USER_BOOKS
PK user_book_id
FK user_id
FK book_id
start_date
end_date
   │
   │ N
   │
   │ 1
BOOKS
PK book_id
title
genre
publish_year
ISBN
file_url
subscription_duration_days
   │
   │ 1
   │
   │ N
BOOK_AUTHORS
PK book_id
PK author_id
   │
   │ N
   │
   │ 1
AUTHORS
PK author_id
name
