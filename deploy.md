# 1. Update the server

sudo apt-get update

# 2. Install Docker

sudo apt-get install -y docker.io

# 3. Start Docker and enable it to run on boot

sudo systemctl start docker
sudo systemctl enable docker

# 4. Give 'ubuntu' user permission to use Docker (avoids using 'sudo' every time)

sudo usermod -aG docker ubuntu

or
newgrp docker

sudo docker pull your-username/my-express-api:latest

docker run -d -p 80:3000 --name my-api --restart always your-username/my-express-api:latest

# update later

docker pull your-username/my-express-api:latest
docker stop my-api
docker rm my-api
docker run -d -p 80:3000 --name my-api --restart always your-username/my-express-api:latest
