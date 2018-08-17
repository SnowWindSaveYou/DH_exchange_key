<p>This is a simple module of safe exchange key through internet by DH method</p>
<p>to start test: $node index.js</p>
<p>enter the button to get key from sever</p>
<br/>

<p>This program have client part and sever part</p>
<p>Client part need to include client_dh.js and sha1.js</p>
<p>Use get_secret_key() to get key</p>
<br/>
<p>Sever part need to have the GET API which requist the user's public key<p>
<p>it will use model "client_dh" to generate a public key return to user</p>
<p>after two key is exchange, they will use method to calculate the secret key</p>
