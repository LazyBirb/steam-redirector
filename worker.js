export default {
  async fetch(request, env) {
    
    const { search, pathname, hostname } = new URL(request.url);

    var steamURL = "steam:/" + pathname;

    const help = `
    <html>
    <head>
    <title>Help page!!</title>
    </head>
    <body>
    <p>Welcome to the Steam Protocol Redirector, a API that makes the "steam://" protocol easier to share by having a HTTP(S) API that redirects to that protocol.
    <br>
    <br>
    <br>
    The API is held simple, just replace the "steam://" with the domain. 
    <br>
    <br>
    Example:
    <br>
    steam://install/440 --> ${hostname}/install/440
    <br>
    <br>
    <br>
    The API responds with a 302 temporary redirect, your browser will then ask to open Steam.<br><br>LazyBirbo @ 2025
    <br>E-Mail: <a href="mailto:github@lazybirbo.de">github@lazybirbo.de</a><br>GitHub Repository: <a href="https://github.com/LazyBirb/steam-redirector" target="_blank" rel="noopener noreferrer">https://github.com/LazyBirb/steam-redirector</a>
    </p>
    </body>
    </html>
    `


    if (pathname === "/")
    {
      return new Response(help,{headers: {"content-type": "text/html;charset=UTF-8","bird-type": "LazyBirbo"}});
    }

    return Response.redirect(steamURL,302);
    
    //return new Response("Hello world")
  }
}
