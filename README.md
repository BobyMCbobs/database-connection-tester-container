<a href="http://www.gnu.org/licenses/gpl-3.0.html">
    <img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg" alt="License" />
</a>
<a href="https://gitlab.com/BobyMCbobs/database-connection-tester-container/-/releases">
    <img src="https://img.shields.io/badge/version-0.0.1-brightgreen.svg" />
</a>

# db-connection-tester-container

> Test a connection to your database

## Supported connection types
- MySQL / MariaDB
- Postgres

## Building
```bash
docker build -t bobymcbobs/db-connection-tester-container .
```

## Testing inside of Docker
The following command will inherit variables from your host

MySQL / MariaDB
```bash
docker run -it --rm -e MYSQL_HOST -e MYSQL_USER -e MYSQL_PASSWORD bobymcbobs/db-connection-tester-container
```

Postgres
```bash
docker run -it --rm -e PG_CONNECTION_STRING bobymcbobs/db-connection-tester-container
```

## Testing inside of your cluster
Make sure that you update the environment variables inside of [k8s-deployment.yaml](k8s-deployment.yaml). You will likely need to change the namespace when applying.

```bash
# copy the example
cp k8s-deployment-example.yaml k8s-deployment.yaml

# bring up in the cluster
kubectl --namespace=default apply -f k8s-deployment.yaml

# check the logs
kubectl --namespace=default logs $(kubectl --namespace=default get pod --selector=app=db-connection-tester -o name | sed s:pod/::)
```

## License
Copyright 2018-2019 Caleb Woodbine.  
This project is licensed under the [GPL-3.0](http://www.gnu.org/licenses/gpl-3.0.html) and is [Free Software](https://www.gnu.org/philosophy/free-sw.en.html).  
This program comes with absolutely no warranty.  

