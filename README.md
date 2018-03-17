# Personal Website [![Build Status](https://travis-ci.org/pastorsj/PersonalWebsite.svg?branch=master)](https://travis-ci.org/pastorsj/PersonalWebsite)
## Author: Sam Pastoriza
This is my personal website using Angular 2 and Bootstrap. I have deployed the website using an AWS EC2 instance, a Docker instance, and Route 53 for my DNS provider. 
To view my website, navigate [here](https://www.sampastoriza.com). Thanks!

## Notes on deploying with Docker
* If you get a permissions error, make sure the following commands have been run

```
sudo service docker start
sudo usermod -a -G docker $USER
sudo reboot
```
