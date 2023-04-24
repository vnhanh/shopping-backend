# shopping-backend
nodejs + mongodb
this is the backend project that supplies APIs for frontend project: https://github.com/vnhanh/react-native-shopping

Run
1. Start the mongodb: mongod --dbpath  /Users/macbookpro/workplace/personal/db/mongodb-6.0.2
2. Run the server: node .

Fix the issue:
1. If port of mongodb already in use, run following commands:
sudo lsof -iTCP -sTCP:LISTEN -n -P
sudo kill <mongo_command_pid>