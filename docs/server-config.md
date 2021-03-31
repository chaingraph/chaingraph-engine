Manual Server Config

```
# Install utilities
apt update && apt install -y wget jq sudo curl git openssh-server zstd zsh hub

# Install and setup OhMyZSH
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
## and copy aliases.zsh

# Create ssh key and add it to github
# https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub | pbcopy
git config --global user.name "Your username"
git config --global user.email "your@email.com"

# Clone ChainGraph  
git clone git@github.com:chaingraph/chaingraph.git

# Install EOSIO
wget https://github.com/eosio/eos/releases/download/v2.0.7/eosio_2.0.7-1-ubuntu-18.04_amd64.deb
sudo apt install -y ./eosio_2.0.7-1-ubuntu-18.04_amd64.deb   
rm eosio_2.0.7-1-ubuntu-18.04_amd64.deb

# Install EOSIO.CDT
wget https://github.com/eosio/eosio.cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb 
sudo apt install -y ./eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
rm eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb 

# Install Docker 
# https://www.educative.io/edpresso/how-to-install-docker-on-ubuntu-1804
# https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ${USER}

# Install Docker Compose
# https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose    
sudo chmod +x /usr/local/bin/docker-compose

# Start EOSIO from snapshot

# Setup logrotate for eos
# https://www.digitalocean.com/community/tutorials/how-to-manage-logfiles-with-logrotate-on-ubuntu-16-04 

# Setup Firewall, open ports
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04

ufw allow 22
ufw allow 80
ufw allow 8080
ufw allow 8888
ufw allow 443
ufw reload

# Install Task
#  https://taskfile.dev/#/installation

sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin

# Install Hasura

curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
```

## Measuring capacity

