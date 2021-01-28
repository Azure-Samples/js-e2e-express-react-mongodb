# https://docs.microsoft.com/en-us/azure/app-service/tutorial-custom-container?pivots=container-linux

# https://docs.microsoft.com/en-us/azure/app-service/tutorial-multi-container-app

# https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli

# https://www.linkedin.com/pulse/dockerizing-your-react-app-mike-sparr/


# build both containers and tag and run
docker-compose up --build

# create container registry
az acr create --resource-group RG-WESTUS-diberry --name CONTAINERREGISTRYdiberry3 --sku Basic --admin-enabled true

az acr credential show --resource-group RG-WESTUS-diberry --name CONTAINERREGISTRYdiberry3
  
  "passwords": [
    {
      "name": "password",
      "value": ""
    },
    {
      "name": "password2",
      "value": ""
    }
  ],
  "username": "CONTAINERREGISTRYdiberry3"
  
  
#login with docker
docker login CONTAINERREGISTRYdiberry3.azurecr.io --username CONTAINERREGISTRYdiberry3 --password PASSWORD
  
# login to registry  
az acr login --name CONTAINERREGISTRYdiberry3 --username CONTAINERREGISTRYdiberry3 --password PASSWORD

# tag container client
docker tag diberry/client CONTAINERREGISTRYdiberry3.azurecr.io/client:v2  

docker tag nginx myregistry.azurecr.io/samples/nginx

# tag container client
docker tag diberry/server CONTAINERREGISTRYdiberry3.azurecr.io/server:v2  

# push client to container registry
docker push CONTAINERREGISTRYdiberry3.azurecr.io/client:v18Fullstack

# push server to container registry
docker push CONTAINERREGISTRYdiberry3.azurecr.io/server:v18Fullstack

az acr repository list -n CONTAINERREGISTRYdiberry3.azurecr.io
