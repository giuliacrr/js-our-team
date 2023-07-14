const team = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    profilePic: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    profilePic: "img/angela-caroll-chief-editor.jpg",
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    role: "Office Manage",
    profilePic: "img/walter-gordon-office-manager.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    profilePic: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    role: "Developer",
    profilePic: "img/scott-estrada-developer.jpg",
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    profilePic: "img/barbara-ramos-graphic-designer.jpg",
  },
];


for (let i = 0; i < team.length; i++) {
  console.log("---- Team member#" + (i + 1));
  console.log("Nome:" + " " + team[i].firstName, team[i].lastName);
  console.log("Role:" + " " + team[i].role);
  console.log("Profile pic:" + " " + team[i].profilePic);
  //Creating the card
  const cards = document.getElementById("cards-container");
  //Printing the cards in the container "cards"
  cards.innerHTML += `
  <div class="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center mt-3">
    <div class="card border-ow custom-color">
      <img src="${team[i].profilePic}" class="card-img-top" alt="member">
      <div class="card-body text-center text-white custom-color">
        <h5 id="name-surname" class="card-title fw-bold">${team[i].firstName + " " + team[i].lastName}</h5>
        <p id="role" class="card-text">${team[i].role}</p>
      </div>
    </div>
  </div>
`
}