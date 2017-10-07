scp -o "StrictHostKeyChecking no" -r $TRAVIS_BUILD_DIR/dist $USER@$HOST:/home/ubuntu
scp -o "StrictHostKeyChecking no" $TRAVIS_BUILD_DIR/server.dist.js $USER@$HOST:/home/ubuntu
ssh $USER@$HOST:/home/ubuntu 'bash -s' < ./restart.sh