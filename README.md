<picture class="github-only">
  <img alt="Alarm.com Logo" src="https://media.licdn.com/dms/image/v2/C4E0BAQH7Ef_zBPUQnw/company-logo_200_200/company-logo_200_200/0/1631327773224?e=1760572800&v=beta&t=F4eDHsvrfiFP7QhJraL5DjXVaeiKeSSlcwtZ-z8Nt1g" width="40%">
</picture>

<div>
<br>
</div>

## Get started
Quick start:<br>
```
docker pull crazyyiwen/alarm-server:latest
docker run -d -p 8000:8000 --name alarm-server crazyyiwen/alarm-server:latest

docker pull crazyyiwen/alarm-chat-client:latest
docker run -d -p 5173:80 --name alarm-chat-client crazyyiwen/alarm-chat-client:latest
open http://localhost:5173/
```

Download and host Docker file - alarm-chat-client(Optional):

```
docker build -t alarm-chat-client .
docker run -d -p 5173:80 --name alarm-chat-client alarm-chat-client
```

Then, open the client side UI in any browser

```
http://localhost:5173/
```

Now you are hosting client side UI successfully, this is a React based light chatbot.<br>


3 Front-End Structure:<br>
```
***It's simple and light weight chatbot***
Each input will call server API and display the response on UI chat window:
here is the partial code:
const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ user_input: input })
      });

<button onClick={sendMessage} disabled={loading}>
```

