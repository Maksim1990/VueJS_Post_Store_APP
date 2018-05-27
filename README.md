# Post Store Vue.js SPA application

#### Pre-installation

1. Ensure [Node.js  >=6.4](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
2. Register Oauth 2 access to the [Imgur API](https://api.imgur.com/oauth2/addclient).

    Register for OAuth 2 authorization without a callback URL. You can name your application anything you like and you don't need a callback URL. The important thing is that you get a *client ID*. 


![#f03c15](https://placehold.it/15/f03c15/000000?text=+)   **ATTENTION!** *Before running apllication run `npm install` command*

> Fully reactive Vue.js application that is used<br />
> Following additional NPM dependencies are used: <br/>
> - scrollmonitor
> - vue-resource
> - reload




#### Installation

1. Install this code on your local system
     
    1. Fork this repository (click 'Fork' button in top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/Maksim1990/VueJS_Post_Store_APP.git
        ```

2. Change directory into the local clone of the repository

    ```
    cd VueJS_Post_Store_APP
    ```

3. Install dependencies

    ```
    npm install
    ```

4. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Or for Windows:
    
    ```
    copy .env_sample .env
    ```
    
    Now edit the *.env* file and replace the `IMGUR_CLIENT_ID` with the client ID provided in the pre-installation
    
5. Start project

    ```
    npm run start
    ```

6. Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

![Mockup for feature A](https://raw.githubusercontent.com/Maksim1990/VueJS_Post_Store_APP/master/src/vueShop_v1.png)
