build:
	docker compose build --no-cache
up:
	docker compose up -d
down: 
	docker compose down
app:
	docker exec -it nest-app_api_1 su -s /bin/bash
sql:
	docker exec -it nest-app_db_1 /bin/bash -c "mysql -ppassword"