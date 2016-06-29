#sudo apt-get update
#sudo apt-get upgrade -y
sudo apt-get install curl -y
curl --silent --location https://deb.nodesource.com/setup_5.x | sudo bash -
sudo apt-get install nodejs -y
#Step 1:  Import the MongoDB public key 
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
#Step 2: Generate a file with the MongoDB repository url
echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
#Step 3: Refresh the local database with the packages
sudo apt-get update
#Step 4: Install the last stable MongoDB version and all the necessary packages on our system
sudo apt-get install mongodb-org -y
sudo apt-get install git -y
sudo npm -g install sails --save
sudo npm install express --save
cd camejalActivitiesSails2
npm install sails-mysql --save
npm install
#install mysql without prompt (not tested)
export DEBIAN_FRONTEND=noninteractive
sudo -E apt-get -q -y install mysql-server
#end mysql install
mysql -u root  mydb < ~dump.sql
cd camejalActivitiesSails2