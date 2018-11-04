const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello World')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();


const puppeteer = require('puppeteer');
function kiusi(){
  (async () => {
  console.log('-----kiusi00000-----------');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  
  const page = await browser.newPage();
  //await page.goto('https://cvqze.github.io/luchj/index.html'); 
   
  await page.goto('http://www.adzbux.com/promote7.php?ref=biboucuongoc1102'); 
  console.log('----XONG0--------');
  setTimeout(async () => await await page.close(), 185000);
  setTimeout(async () => await browser.close(), 193000);
  console.log('----XONG--------');
  
  })();
}



function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 200000 ); 
    console.log('--tttttttttt--') 
}



f();
