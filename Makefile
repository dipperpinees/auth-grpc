run-gateway:
	cd services/gateway && AUTH_SERVICE_URL=0.0.0.0:50001 PORT=50009 go run cmd/main.go
run-user-svc:
	cd services/user && \
	JWT_ACCESS_TOKEN_SECRET=jwt1 \
	JWT_REFRESH_TOKEN_SECRET=jwt2 \
	JWT_REFRESH_TOKEN_SECRET=jwt2 \
	PORT=50001 \
	DATABASE_URL=mysql://root:123456@localhost:3306/user \
	yarn dev
