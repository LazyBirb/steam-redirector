export default {
  async fetch(request, env) {
    
    const { search, pathname } = new URL(request.url);

    var steamURL = "steam:/" + pathname;

    if (steamURL === "steam:/")
    {
      steamURL = "steam://";
    }


    return Response.redirect(steamURL,302);
    
    //return new Response("Hello world")
  }
}
