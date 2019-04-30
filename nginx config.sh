### DOWNLOAD THIS GITHUB REPO TO YOUR COMPUTER


### GENERATE SSL CERTIFICATES FOR brandledger.tech FROM CLOUDFLARE
# Log in to Cloudflare
# Go to the dashboard for brandledger.tech
# Click on the Crypto tab
# Under the 'Origin Certificates' section, click 'Create Certificate'
# Enter 'nis.brandledger.tech' in the list of hostnames
# Let Cloudflare generate a private key and CSR
# Ensure the key format is 'PEM'
# Copy to the 'Origin Certificate' text to a file called cert.pem
# Copy to the 'Private key' text to a file called key.pem
# Save both `cert.pem` and `key.pem` to the same folder as the GitHub repo contents


### SSH into your NIS server

# You may want to update packages first
sudo apt-get update

# If not already installed
sudo apt-get install nginx

# Run the following command
sudo ufw app list

# Ensure the output of the above command contains:
# Available applications:
#   Nginx Full
#   Nginx HTTP
#   Nginx HTTPS
#   OpenSSH

# Update firewall rules to allow nginx HTTPS server and SSH
sudo ufw allow 'Nginx HTTPS'
sudo ufw allow 'OpenSSH'
sudo ufw allow ssh
sudo ufw allow 7890

# Enable firewall (answer yes to any prompts)
sudo ufw enable

# Ensure the `sudo ufw enable` command returns the following output or similar
# "Firewall is active and enabled on system startup"

# Ensure the firewall is active and contains the following lines at least
sudo ufw status

# Status: active
#
# To                         Action      From
# --                         ------      ----
# Nginx HTTPS                ALLOW       Anywhere
# Nginx HTTPS (v6)           ALLOW       Anywhere (v6)


# Set up site for nginx proxy
sudo mkdir -p /var/www/nis.brandledger.tech/html


### OPEN A NEW LOCAL SHELL! (i.e. open a new local tab in your terminal)

# cd into to the folder containing the GitHub repo files

# Replace `username@NISserverIP` with your SSH details (enter your password when prompted)
rsync nis.brandledger.tech username@NISserverIP:/etc/nginx/sites-available/nis.brandledger.tech
rsync index.html username@NISserverIP:/var/www/nis.brandledger.tech/html/index.html
rsync nginx.conf username@NISserverIP:/etc/nginx/nginx.conf
rsync cert.pem username@NISserverIP:/etc/ssl/certs/cert.pem
rsync key.pem username@NISserverIP:/etc/ssl/private/key.pem


### GO BACK TO THE SHELL WHERE YOU ARE SSH'd INTO YOUR NIS SERVER

# Enable BrandLedger NIS site in nginx
sudo ln -s /etc/nginx/sites-available/nis.brandledger.tech /etc/nginx/sites-enabled/

# Ensure nginx syntax and configuration are valid
sudo nginx -t
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful

# Set nginx server to start when the server boots
sudo systemctl enable nginx

# Restart nginx
sudo systemctl restart nginx

# Confirm nginx is running
systemctl status nginx
