const express =require ('express')

const app= express();

app.set('view engine', 'ejs');

//listen for the rewuest
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/',(req,res) =>{

   res.render('index');
});

app.get('/about',(req,res) =>{

   res.sendFile('./data/about.html' ,{root : __dirname}) //this is all about the express which helps in creatinfg the routing of the servers
});

app.use((req,res) =>
{
   res.sendFile('./data/404.html' ,{root :__dirname})
})

//this is the program which is built on express 
//Express is a minimal and flexible Node.js web application framework that provides a robust set of
// features to build web and mobile applications. It simplifies the development of server-side 
// applications by providing a higher-level API for building web servers and handling HTTP requests
 // and responses.
