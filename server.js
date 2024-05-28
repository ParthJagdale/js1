const http =require('http') //This line imports the Node.js built-in http module, which allows you to create HTTP servers and handle HTTP requests and responses.

const fs =require('fs')

const _ =require('lodash')

const server =http.createServer((req,res)=>//req object  res object to send responsre to the user
{   
            console.log(req.url,req.method);// this code is not running ont the browser but on the server so will not be seen in the console of the browawe      

            //set header content type

            res.setHeader('Content-Type','text/html');


            let path= './data/';

            switch(req.url)
            {
                case '/':
                    path+='index.html';
                  res.statusCode=200;
                    break;

                case '/about':
                    path+='about.html';
                  res.statusCode=200;
                    break;

                default:
                    path+='404.html';
                res.statusCode=200;
                    break;
                
            }
            
            fs.readFile(path,(err,data) =>
                {
                        if(err)
                            {
                                console.log('error')
                                res.end();
                            }
                            else{
                                res.write(data);
                                res.end();

                            }
                } ) 

});

///


server.listen(3000,'localhost',()=>
{
    console.log('listning for request of post 3000 ') //When the server starts listening, the callback function is executed which is written in the create servere [part]
})
