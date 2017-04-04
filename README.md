# PGH-Art-Management-System
Unblurred / Westmoreland App


## Development

1. Install Vagrant ([more information](https://www.vagrantup.com/downloads.html)) and VirtualBox ([more information](https://www.virtualbox.org/wiki/Downloads))
2. Bring up the Vagrant box: `vagrant up`
3. Install dependencies: `vagrant ssh -c 'cd /vagrant && npm install'`
4. Start the dev server: `vagrant ssh -c 'cd /vagrant && ionic serve'`
5. Visit the site: `http://localhost:8100/`