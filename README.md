# music-history-5
# Install Node if you don't have it

```
sudo apt-get install nodejs  # For Ubuntu and its ilk
sudo yum install nodejs      # For CentOS and its ilk
```
    
This will also install `npm`, the Node package manager service as well. Then you can install a basic HTTP server.

## Install a basic Node HTTP server 
The `http-server` module is just a very basic project that will serve static files from the directory of your choice.

    sudo npm install -g http-server


Now you can browse to http://localhost:8081 (or whichever port it reports it is using) 


```

## Install Bower

```
npm install -g bower

   
```

If you're not familiar with Bower, the `--save` flag will automatically create a `bower.json` file with the name and version of each Bower component you installed.


