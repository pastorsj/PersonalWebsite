set -ex
{ # this ensures the entire script is downloaded

sudo apt-get update
sudo apt-get install -y \
    build-essential \
    curl \
    git \
    wget \
    nginx \
    tmux

sudo wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
source ~/.profile
. ~/.nvm/nvm.sh

sudo nvm install 5.11.0

JAVA_URL=http://download.oracle.com/otn-pub/java/jdk/8u65-b17/jdk-8u65-linux-x64.tar.gz
sudo mkdir -p /usr/lib/jvm
sudo wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" $JAVA_URL
sudo tar -zxvf jdk-8u65-linux-x64.tar.gz -C /usr/lib/jvm
sudo rm jdk-8u65-linux-x64.tar.gz

sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk1.8.0_65/bin/java" 1
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk1.8.0_65/bin/javac" 1
sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/usr/lib/jvm/jdk1.8.0_65/bin/javaws" 1
sudo chmod a+x /usr/bin/java
sudo chmod a+x /usr/bin/javac
sudo chmod a+x /usr/bin/javaws

echo "source ~/.bashrc" >> ~/.bash_profile
echo 'export NVM_DIR="$HOME/.nvm' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh' >> ~/.bashrc

}
