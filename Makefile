build:
	docker compose build --no-cache
up:
	docker compose up -d
down: 
	docker compose down
shell:
	docker exec -it nest-app-api su -s /bin/bash
start:
	@docker exec -it nest-app-api /bin/bash -c "yarn start"
sql:
	docker exec -it nest-app-db /bin/bash -c "mysql -ppassword"
generate:
	@docker exec -it nest-app-api su -s /bin/bash -c "\
		npx prisma generate"
migrate:
	@docker exec -it nest-app-api su -s /bin/bash -c "\
		npx prisma migrate dev --name init && \
		npx prisma generate"
