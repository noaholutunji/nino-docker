docker build -t noalistic/ninostyle-client:latest -t noalistic/ninostyle-client:$SHA -f ./client/Dockerfile ./client
docker build -t noalistic/ninostyle-server:latest -t noalistic/ninostyle-server:$SHA -f ./server/Dockerfile ./server
docker push noalistic/ninostyle-client:latest
docker push noalistic/ninostyle-server:latest

docker push noalistic/ninostyle-client:$SHA
docker push noalistic/ninostyle-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=noalistic/ninostyle-server:$SHA
kubectl set image deployments/client-deployment client=noalistic/ninostyle-client:$SHA
