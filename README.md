# Siloam Task

### Login credential

email: admin@admin.com

password: admin

## Tech Stack

**Server:** Node.js, Express.js

**Programming Language:** Javascript, Typescript

**ORM:** Sequelize

**Databse:** PostgreSQL

**Generate Token:** jsonwebtoken

**encryption:** bcrypt

## How To Run In Local

### Installation

make sure change the Database configuration:

```
# in database/sequelize/sequelize.ts
dialect: "postgres",
host: "localhost",
username: "postgres",
password: "docker",
database: "postgres",
port: 5432,
```

make sure add the PORT:

```
# .env
PORT = 4000
```

Make sure to install the dependencies:

```
# npm
npm install
```

### Run Migrations

Make sure run migration for Table users

```
cd /database/
npx sequelize-cli db:migrate
```

### Run Seeds

Make sure run seed for Table users

```
cd /database/
npx sequelize-cli db:seed:all
```

### Development Server

Start the development server on [http://localhost:4000](http://localhost:4000)

```
# npm
npm run dev
```

## Table Of Content

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Users Request Response](#api-users-request-response)
- [API Auth Request Response](#api-auth-request-response)
- [API Vendor Request Response](#api-vendors-request-response)

## Database Structure

This project have users and vendors Table

### users structure

```
{
    "id": integer,
    "name": string,
    "email": string,
    "password": string,
    "created_at": date,
    "updated_at": date
}
```

### vendors structure

```
{
    "id": integer,
    "vendorName": string,
    "address": string,
    "created_at": date,
    "updated_at": date
}
```

## API Structure

Endpoint ready to use

```
GET     /api/users/      #Get All Users
GET     /api/users/:id   #Get User by ID
POST    /api/users/      #Create User
PUT     /api/users/:id   #Update User
DELETE  /api/users/:id   #Delete user

GET     /api/vendors/      #Get All vendors
GET     /api/vendors/:id   #Get vendor by ID
POST    /api/vendors/      #Create vendor
PUT     /api/vendors/:id   #Update vendor
DELETE  /api/vendors/:id   #Delete vendor

GET     /api/auth/user              #Get Current User
POST    /api/auth/login             #Login

```

## API Users Request Response

### GET /api/users/

---

Return All users.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  {
    "message": "Success get data!",
    "data": [
        {
            "id": 1,
            "name": "admin",
            "email": "admin@localhost.com",
            "password": "$2b$10$Yyz9rGxggQaALQgfJ2axvupRM21hRRyfXDywOrfEVfFN5qRY1kH5W",
            "created_at": "2023-12-19T05:50:20.891Z",
            "updated_at": "2023-12-19T05:50:20.891Z"
        },
        {
            "id": 11,
            "name": "alana",
            "email": "alanakocak@yahoo.com",
            "password": "$2b$10$BmZm.HoR6FbdjzLsoRQ3/eAfebtjHP9powIM85bQhGocttKeTzKeC",
            "created_at": "2023-12-21T07:05:52.826Z",
            "updated_at": "2023-12-21T07:05:52.826Z"
        },
        {
            "id": 12,
            "name": "henan",
            "email": "henan@asset.com",
            "password": "$2b$10$DbPijOfmUYWdDnoE/CCr4.BAn6.wPViVOfUIVyePmTvhftUvoaNMm",
            "created_at": "2023-12-21T07:07:53.493Z",
            "updated_at": "2023-12-21T07:07:53.493Z"
        }
    ]
}
}
```

### GET /api/users/:id

---

Return user with the specified id.

- **URL Params**  
  None
- **Data Params**

```
{
  "id": Integer
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    "user": "Success Get Data!",
    "data": {
        "id": 12,
        "name": "henan",
        "email": "henan@asset.com",
        "password": "$2b$10$DbPijOfmUYWdDnoE/CCr4.BAn6.wPViVOfUIVyePmTvhftUvoaNMm",
        "created_at": "2023-12-21T07:07:53.493Z",
        "updated_at": "2023-12-21T07:07:53.493Z"
    }
}
```

### PUT /api/users/:id

---

Update Data.

- **URL Params**  
  None
- **Data Params**

```
{
    "id": integer,
    "name": string,
    "email": string,
    "password": string,
    "created_at": date,
    "updated_at": date
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    "user": "Success Update Data!",
    "data": {
        "id": 12,
        "name": "HENAN",
        "email": "henan@assetmanagement.com",
        "password": "$2b$10$DbPijOfmUYWdDnoE/CCr4.BAn6.wPViVOfUIVyePmTvhftUvoaNMm",
        "created_at": "2023-12-21T07:07:53.493Z",
        "updated_at": "2023-12-21T07:07:53.493Z"
    }
}
```

### DELETE /api/users/:id

---

Delete user.

- **URL Params**  
  None
- **Data Params**

```
{
  "id": Integer
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    "message": "Success Delete Data!",
    "data": 1
}
```

## API Auth Request Response

### GET /api/auth/user

---

Return Current User.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    authorization :   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbG9jYWxob3N0LmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzAzMTQ0NDI0fQ.KzHDioFLPgkCpxx5nsxQgQkuMpS5G_VGT1POi9fyPaM
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  "data": {
    "id": 1,
    "name": "admin",
    "email": "admin@localhost.com",
    "iat": 1703144424
  }
}
```

### POST /api/auth/login

---

Login.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    username :   string
    password  :   String
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    "message": "Success Login",
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbG9jYWxob3N0LmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzAzMTQ0NjI2fQ.0ax2zyex6okb8A1eBa6OyNQwklNynEAaDQc73rFd_PY"
}
```
