build:
	docker compose build --no-cache
up:
	docker compose up -d
down: 
	docker compose down
shell:
	docker exec -it nest-app-api su -s /bin/bash
sql:
	docker exec -it nest-app-db /bin/bash -c "mysql -ppassword"