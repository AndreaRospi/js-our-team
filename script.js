const schede = [
    {
        'nome': 'Wayne Barnett',
        'posizione': 'Founder & CEO',
        'foto': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'posizione': 'Chief Editor',
        'foto': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'posizione': 'Office Manager',
        'foto': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'posizione': 'Social Media Manager',
        'foto': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'posizione': 'Developer',
        'foto': 'img/scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'posizione': 'Graphic Designer',
        'foto': 'img/barbara-ramos-graphic-designer.jpg'
    },
]
let card;
let container = document.querySelector('.team-container');


for (let i = 0; i < schede.length; i++) {
    // console.log(schede[i]);
    card = `
    <div class="team-card">
          <div class="card-image">
            <img src=${schede[i].foto} alt=${schede[i].nome}/>
          </div>
          <div class="card-text">
            <h3>${schede[i].nome}</h3>
            <p>${schede[i].posizione}</p>
          </div>
    </div> `
    // console.log(card);

    container.innerHTML += card;

}