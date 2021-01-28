# YOURNAME is usually your email alias - `JOHNSMITH`

# https://docs.microsoft.com/azure/app-service/tutorial-custom-container?pivots=container-linux

# https://docs.microsoft.com/azure/app-service/tutorial-multi-container-app

# https://docs.microsoft.com/azure/container-registry/container-registry-get-started-docker-cli

# build local containers and tag and run
docker-compose \
  -f ./docker-compose.azure.yml \
  up \
  --build \
  --remove-orphans \
  --force-recreate

# create your own container registry
az acr create \
  --resource-group tutorial-rg-westus-YOURNAME \
  --name tutorial-container-registry-YOURNAME \
  --sku Basic \
  --admin-enabled true

# get password for container to use when 
# configuring web app
az acr credential show \
  --resource-group tutorial-rg-westus-YOURNAME \
  --name tutorial-container-registry-YOURNAME
  
# sample result
  "passwords": [
    {
      "name": "password",
      "value": "PASSWORD1"
    },
    {
      "name": "password2",
      "value": "PASSWORD2"
    }
  ],
  "username": "CONTAINERREGISTRYdiberry3"
  
  
# login with docker
docker login tutorial-rg-westus-YOURNAME.azurecr.io \
  --username tutorial-container-registry-YOURNAME \
  --password PASSWORD1
  
# login to registry  
az acr login \
  --resource-group tutorial-rg-westus-YOURNAME \
  --name tutorial-container-registry-YOURNAME \
  --username tutorial-container-registry-YOURNAME \
  --password PASSWORD1

# push client to container registry
docker push tutorial-container-registry-YOURNAME.azurecr.io/client:v1

# push server to container registry
docker push tutorial-container-registry-YOURNAME.azurecr.io/server:v1

# push fullstack/single to container registry
docker push tutorial-container-registry-YOURNAME.azurecr.io/fullstack:v1

# list repositories
az acr repository list \
  --resource-group tutorial-rg-westus-YOURNAME \
  --name tutorial-container-registry-YOURNAME.azurecr.io

# show tags in repositories
# client has v1
# server has v1
az acr repository show-tags \
  --resource-group tutorial-rg-westus-YOURNAME \
  --name tutorial-container-registry-YOURNAME.azurecr.io \
  --repository client \
  --detail \
  --suffix 