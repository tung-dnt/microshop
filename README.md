# Microshop

A microservice e-commerce system with robust functionality:

    - Permission-based authorization
    - Revenue monthly report
    - User management
    - Inventory management
    - Shopping cart
    - Order products
    - Payment (shopee pay, vnpay, momo, COD) (coming soon)
    - Product feedback
    - Voucher, campain management (coming soon)
    - Upload + manage blogs, posts (coming soon)


### Precaution:
_These setup steps below **ONLY** runnable for Mac/Linux. Windows users require WSL installed_

# Microshop starter

Here's steps to start project up:

1. Install <em><b>pnpm</b></em> as a package manager (if pnpm hasn't installed on your machine)
```sh
npm i --location=global --save-exact pnpm@8.6.11
```
2. Allow executable shell script
```sh
chmod -R 744 scripts
```
3. Auto init project
```sh
pnpm init:dev
```
4. Access application at:
- [Web UI](http://localhost:5173)
- [Server health check](http://localhost/api/ping)

## To start project
```sh
pnpm start:dev
```

## To create new microservice
1. Generate microservice source code
```sh
pnpm create:service
```
2. Add service configuration to `docker-compose.yml` ( _image name + container name must be similar to service's workspace name in `apps` directory_ )

## To create new microservice DB
1. Generate DB service workspace, the DB name **MUST BE** similar to microservice name
```sh
pnpm create:db
```
2. Add DB image configuration to `docker-compose.yml` (_image name + container convention: `<service_name>_db`_)

## To remove microservice
```sh
pnpm remove:service
```
