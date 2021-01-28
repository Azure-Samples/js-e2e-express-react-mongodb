# YOURNAME is usually your email alias - `JOHNSMITH`

# create app service plan
az appservice plan create \
  --name tutorial-app-plan-YOURNAME \
  --resource-group tutorial-rg-westus-YOURNAME \
  --sku S1 --is-linux 

# create webapp as service container app using compose file
az webapp create \
  --resource-group tutorial-rg-westus-YOURNAME \
  --plan tutorial-app-plan-YOURNAME \
  --name tutorial-app-webapp-YOURNAME \
  --multicontainer-config-file docker-compose.yml \
  --multicontainer-config-type compose

# configure webapp to have access to your container registry
az webapp config container set \
  --docker-registry-server-url tutorial-app-webapp-YOURNAME.azurecr.io \
  --docker-registry-server-password "PASSWORD" \
  --docker-registry-server-user  tutorial-app-webapp-YOURNAME \
  --enable-app-service-storage true \
  --name tutorial-app-webapp-YOURNAME \
  --resource-group tutorial-rg-westus-YOURNAME

# start web app
az webapp start 
  --name tutorial-app-webapp-YOURNAME \
  --resource-group tutorial-rg-westus-YOURNAME 

# show logs
az webapp log tail \
  --name tutorial-app-webapp-YOURNAME \
  --resource-group tutorial-rg-westus-YOURNAME 

# browse to app
http://APP-MULTICONTAINER-EXPRESS-diberry-3.azurewebsites.net
