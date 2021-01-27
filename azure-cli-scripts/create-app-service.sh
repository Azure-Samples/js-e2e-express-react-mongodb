# resource group
az group create --name RG-WESTUS --location "westus"

# app service plan
az appservice plan create --name PLAN-MULTICONTAINER-EXPRESS --resource-group RG-WESTUS --sku S1 --is-linux

# app service container app
az webapp create --resource-group RG-WESTUS --plan PLAN-MULTICONTAINER-EXPRESS --name APP-MULTICONTAINER-EXPRESS --multicontainer-config-type compose --multicontainer-config-file docker-compose.yml