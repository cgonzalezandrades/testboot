$.ajax({
  url: "https://api.spotify.com/v1/users/{user_id}/playlists",
  type:"GET",
  context: document.body
}).done(function(response) {
  
  console.log(response)
});