network:
	docker network create task-manager
	
postgres:
	docker run --name postgres12 --network task-manager -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine


createdb:
	docker exec -it postgres12 createdb --username=root --owner=root taskmanagement

watch:
	yarn start:dev