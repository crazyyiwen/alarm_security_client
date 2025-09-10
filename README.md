<picture class="github-only">
  <img alt="Alarm.com Logo" src="https://media.licdn.com/dms/image/v2/C4E0BAQH7Ef_zBPUQnw/company-logo_200_200/company-logo_200_200/0/1631327773224?e=1760572800&v=beta&t=F4eDHsvrfiFP7QhJraL5DjXVaeiKeSSlcwtZ-z8Nt1g" width="40%">
</picture>

<div>
<br>
</div>

## Get started
Quick start: [Docs](https://crazyyiwen2015.atlassian.net/wiki/x/vgAC):<br>

Download and host Docker file - alarm-chat-client:

```
docker build -t alarm-chat-client .
docker run -d -p 5173:80 --name alarm-chat-client alarm-chat-client
```

Then, open the client side UI in any browser

```
http://localhost:5173/
```

Now you are hosting client side UI successfully, this is a React based light chatbot.<br>


Documentation: [Server side documentation](https://crazyyiwen2015.atlassian.net/wiki/x/i4AB):<br>

