## READE ME
This is a simple module of safe exchange key through internet by DH method 

`$node index.js` can open the test page for test demo
you can press the button to get key from sever
<br/>

This program have client part and sever part

## Client part 
need to include `client_dh.js` and `sha1.js`
Use `get_secret_key()` to get key
<br/>

## Sever part 
need to have the GET API which requist the user's public key
it will use model `client_dh` to generate a public key return to user
after two key is exchange, they will use method to calculate the secret key

```
app.get('/get_key/:publickey', function(req,res){
    req.params.name
    var private_key, public_key = dh.generate_key();
    var shared_hash = dh.calculate_secret_key(req.params.publickey,private_key);
    res.send(""+public_key);
})
```
