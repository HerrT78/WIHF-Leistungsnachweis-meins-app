# W3Schools Database in Docker

Forked from https://github.com/AndrejPHP/w3schools-database for academic purposes.

This repository provides:

- a docker compose which sets up the DB on port 3309 (non-default, no clashes)
- initializes the database data from w3schools (provided by @AndrejPHP) 
- Visual Studio Code config

## Fork to your github account
Go to github.com, create a new account or login.
Fork my repo (https://github.com/yveseinfeldt/w3schools-database)

Now you have a repository w3schools-database in your github account.
Clone that with
```
git clone https://github.com/YOURUSERNAME/w3schools-database
cd w3schools-database
code .
```

Run the database and rest-api
```
sudo docker-compose up
```

Start the react app like this
```
cd my-app
npm start
```

## Functions

1. Fetch and List existing Products
2. Add and update Products
3. Remove Products
4. Filter Products
5. Fetch and List existing Orders
6. Add and update Orders
7. Remove Orders
8. Filter Orders
9. Fetch and List existing Customers
10. Add and update Customers
11. Remove Customers
12. Filter Customers

## How to reset?

Execute:

```bash
docker compose down
rm -rf data
docker compose up -d
```

## Tables

When the docker container starts, it creates database named __w3schools__ with the following tables

    categories
    customers
    employees
    orders
    order_details
    products
    shippers
    suppliers
    
and inserts the respective data. 
