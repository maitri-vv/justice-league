const dotenv = require('dotenv'); 
dotenv.config(); 
module.exports = {
    port:process.env.PORT || 8000 ,
    mongoose:{
        url:'mongodb+srv://yash:yash@cluster0.zkgqfrx.mongodb.net/?retryWrites=true&w=majority',
        
        // url:process.env.MONGO_URL,
        options:{
            // useCreateIndex:true,
            useNewUrlParser:true 
        }
    },
    jwt:{
        jwtsecret : "MYJWTSECRET",
        // jwtsecret : process.env.JWT_SECRET,
    },
    email:{
        // id: "ss131745@gmail.com",
        id: "saurabhvishwakarma745@gmail.com",
        // id: process.env.NODE_MAILER_EMAIL,
        password:"Vishwakarm@745131",
        // password:process.env.NODE_MAILER_PASSWORD,
        app_password:"pkydzopaxewngdrp" 
        // app_password:process.env.APP_PASSWORD 
    },
    oauth:{
        client_id:"5740313642-2cpin5rf8v6c1irfh43b376pug5ikcqt.apps.googleusercontent.com",
        // client_id:"604628728050-hvien48uvpbqld1fbkn7uoi74amr6mt2.apps.googleusercontent.com",
        // client_id:process.env.CLIENT_ID,
        client_secret:"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",
        // client_secret:"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",
        // client_secret:process.env.CLIENT_SECRET,
    //     client_redirect:process.env.REDIRECT_URI,
        client_redirect:"https://developers.google.com/oauthplayground",
    //     client_refresh_token:process.env.REFRESH_TOKEN
        client_refresh_token:"1//04XLmnWQl-gJgCgYIARAAGAQSNwF-L9IryaTZvj6z0INNfYtrzeRCz_Itaq2G3kQTTiJDtZDdvrPi-xOjb8HS5CVdrR58nz3-1zs"
        // client_refresh_token:"1//04InfyL7D5yl0CgYIARAAGAQSNwF-L9Irh8mWWONYtwxLcn2jWb1UKjj4L4g5_mC8S7b6K_8v8UmFG_GS2LmSlCKN1fcHY3E1GvI"
    }
}