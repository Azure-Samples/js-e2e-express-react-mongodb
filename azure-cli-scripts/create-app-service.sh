# resource group
az group create --name RG-WESTUS-diberry --location "westus"

# app service plan
az appservice plan create --name PLAN-MULTICONTAINER-EXPRESS-DIBERRY-6 --resource-group RG-WESTUS-diberry --sku S1 --is-linux 

# app service container app
az webapp create --resource-group RG-WESTUS-diberry --plan PLAN-MULTICONTAINER-EXPRESS-DIBERRY-6 --name APP-MULTICONTAINER-EXPRESS-diberry-6 --multicontainer-config-file docker-compose.yml --multicontainer-config-type COMPOSE

az webapp config show --resource-group RG-WESTUS-diberry  --name APP-MULTICONTAINER-EXPRESS-diberry-6 

az webapp config container set --docker-registry-server-password "PASSWORD" --docker-registry-server-url https://CONTAINERREGISTRYdiberry3.azurecr.io --docker-registry-server-user  CONTAINERREGISTRYdiberry3 --enable-app-service-storage true --multicontainer-config-file docker-compose.yml --multicontainer-config-type COMPOSE  --name APP-MULTICONTAINER-EXPRESS-diberry-6 --resource-group RG-WESTUS-diberry



# browse to app
http://APP-MULTICONTAINER-EXPRESS-diberry-3.azurewebsites.net
