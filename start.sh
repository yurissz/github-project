docker-compose down 

docker build -t backend-kontulari:latest ./demo-backend/demo-backend

docker build -t frontend-kontulari:latest ./frontend/kontchallenge-frontend

docker-compose up --build --force-recreate --remove-orphans
