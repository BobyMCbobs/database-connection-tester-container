# db-connection-tester-container

> Test a connection to your database

## Supported connection types
- MySQL / MariaDB

## Building
```
docker build -t bobymcbobs/db-connection-tester-container .
```

## Testing inside of Docker
The following command will inherit variables from your host

```
docker run -it --rm -e MYSQL_HOST -e MYSQL_USER -e MYSQL_PASSWORD bobymcbobs/db-connection-tester-container
```

## Testing inside of your cluster
Make sure that you update the environment variables inside of [k8s-deployment.yaml](k8s-deployment.yaml). You will likely need to change the namespace when applying.

```
# copy the example
cp k8s-deployment-example.yaml k8s-deployment.yaml

# bring up in the cluster
kubectl --namespace=default apply -f k8s-deployment.yaml

# check the logs
kubectl --namespace=default logs $(kubectl --namespace=default get pod --selector=app=db-connection-tester -o name | sed s:pod/::)
```

## License
GPL-3.0 

