const card = document.querySelector("#card");
const userBackgroundImage = document.querySelector("#backgroundImage");
const userPicture = document.querySelector("#picture");
const userName = document.querySelector("#name");
const userTitle = document.querySelector("#title");
const userMutualConnections = document.querySelector("#mutualConnections");

/*
function getData() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //background Image
      backgroundImage = data[0].backgroundImage;
      card.style.backgroundImage = "url(" + backgroundImage + ")";

      //picture
      const picture = data[0].picture;
      userPicture.src = picture;

      // name
      //const title = data[0].name.title;
      const first = data[0].name.first;
      const last = data[0].name.last;
      const completeName = first + " " + last;
      userName.textContent = completeName;

      // title
      const jobTitle = data[0].title;
      userTitle.textContent = jobTitle;

      // mutual connections
      const mutualConnections = data[0].mutualConnections;
      userMutualConnections.textContent =
        mutualConnections + " mutual connections";
    });
}
*/

function createData() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((element) => {
        console.log(element.picture);
      });

      //background image
      backgroundImage = data[0].backgroundImage;
      card.style.backgroundImage = "url(" + backgroundImage + ")";

      // picture
      const newImg = document.createElement("img");
      const newPic = data[0].picture;
      newImg.src = newPic;
      newImg.classList.add("test");
      card.appendChild(newImg);

      console.log(newImg);

      //name
      const newH2 = document.createElement("h2");
      const first = data[0].name.first;
      const last = data[0].name.last;
      const completeName = first + " " + last;
      newH2.textContent = completeName;
      card.appendChild(newH2);
      console.log(newH2);

      //title
      const newPara = document.createElement("p");
      const jobTitle = data[0].title;
      newPara.textContent = jobTitle;
      card.appendChild(newPara);
      console.log(newPara);

      //mutual connections
      const newSmall = document.createElement("small");
      const mutualConnections = data[0].mutualConnections;
      newSmall.textContent = mutualConnections;
      card.appendChild(newSmall);
      console.log(newSmall);
    });
}

createData();
//getData();
