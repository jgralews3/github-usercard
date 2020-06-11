/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard (obj){
  let cardDiv = document.createElement ('div');
  let cardImg = document.createElement ('img');
  let cardInfo = document.createElement ('div');
  let cardName = document.createElement ('h3');
  let cardUser = document.createElement ('p');
  let cardLocation = document.createElement ('p');
  let cardProfile = document.createElement ('p');
  let cardLink = document.createElement ('a');
  let cardFollowers = document.createElement ('p');
  let cardFollowing = document.createElement ('p');
  let cardBio = document.createElement ('p');

  cardDiv.appendChild (cardImg);
  cardDiv.appendChild (cardInfo);
  cardInfo.appendChild (cardName);
  cardInfo.appendChild (cardUser);
  cardInfo.appendChild (cardLocation);
  cardInfo.appendChild (cardProfile);
  cardInfo.appendChild (cardLink);
  cardInfo.appendChild (cardFollowers);
  cardInfo.appendChild (cardFollowing);
  cardInfo.appendChild (cardBio);

  cardDiv.classList.add ('card');
  cardInfo.classList.add ('card-info');
  cardName.classList.add ('name');
  cardUser.classList.add ('username');

  cardImg.src = obj.data.avatar_url;
  cardName.textContent = "Name: "+obj.data.name;
  cardUser.textContent = "Username: "+obj.data.login;
  cardLocation.textContent = "Location: "+obj.data.location;
  cardLink.textContent = "Profile";
  cardLink.href = obj.data.html_url;
  cardFollowers.textContent = "Followers: "+obj.data.followers;
  cardFollowing.textContent = "Following: "+obj.data.following;
  if (obj.data.bio === null){
    cardBio.textContent = "Bio: None provided.";
  } else {cardBio.textContent = "Bio: "+obj.data.bio;}
  return cardDiv
}

let container = document.querySelector ('.cards');
axios.get("https://api.github.com/users/jgralews3")
.then(res => {
  container.appendChild(createCard(res))})
.catch (err => {console.log ("Error")});


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'bigknell'];
followersArray.forEach ((user) => {
  axios.get (`https://api.github.com/users/${user}`)
  .then(res => {
    console.log (res);
    container.appendChild(createCard(res))})
  .catch (err => {console.log ("Error")});
});


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
