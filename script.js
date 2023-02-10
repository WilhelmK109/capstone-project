// Mobile menu
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

const featuredSpeakers = [
  {
    image: 'img/pstr-festus-negumbo.jfif',
    name: 'Pstr Festus Negumbo',
    title: 'Overseer, Foursquare Church, Namibia',
    experience: 'Has ten years of ministering the good news of God',
  },
  {
    image: 'img/pstr-gabriel-francis.jfif',
    name: 'Pstr Gabriel Francis',
    title: 'Overseer, Foursquare Church, South Africa',
    experience: 'Has twenty five years of ministering the good news of God',
  },
  {
    image: 'img/rev-sam-aboyeji.jpg',
    name: 'Rev Sam Aboyeji',
    title: 'Overseer, Foursquare Church, Nigeria',
    experience: 'Has fifteen years of ministering the good news of God',
  },
  {
    image: 'img/br-wilhelm.jpg',
    name: 'Br Wilhelm Kamulunga',
    title: 'Leader, Foursquare Church Otjomuise, Namibia',
    experience: 'Has five years of ministering the good news of God',
  },
  {
    image: 'img/rev-sam-aboyeji.jpg',
    name: 'Rev Sam Aboyeji',
    title: 'Overseer, Foursquare Church, Nigeria',
    experience: 'Has fifteen years of ministering the good news of God',
  },
  {
    image: 'img/br-wilhelm.jpg',
    name: 'Br Wilhelm Kamulunga',
    title: 'Leader, Foursquare Church Otjomuise, Namibia',
    experience: 'Has five years of ministering the good news of God',
  },
];

function CreateSpeaker(speaker) {
  const featuredSpeaker = document.createElement('li');
  featuredSpeaker.classList.add('speaker-li');

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('speakers-image');
  featuredSpeaker.appendChild(imageDiv);

  const speakerImage = document.createElement('img');
  speakerImage.src = speaker.image;
  speakerImage.classList.add('speaker-pic');
  imageDiv.appendChild(speakerImage);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('speaker-info');
  featuredSpeaker.appendChild(titleDiv);

  const speakerName = document.createElement('h3');
  speakerName.classList.add('heading3');
  speakerName.textContent = speaker.name;
  titleDiv.appendChild(speakerName);

  const speakerTitle = document.createElement('p');
  speakerTitle.classList.add('p');
  speakerTitle.textContent = speaker.title;
  titleDiv.appendChild(speakerTitle);

  const hr = document.createElement('hr');
  hr.classList.add('hr2');
  titleDiv.appendChild(hr);

  const speakerExp = document.createElement('p');
  speakerExp.classList.add('exp');
  speakerExp.textContent = speaker.experience;
  titleDiv.appendChild(speakerExp);

  document.querySelector('.speakers-list').appendChild(featuredSpeaker);
  return featuredSpeaker;
}

const speakersArray = [];
window.onload = () => {
  for (let i = 0; i < featuredSpeakers.length; i += 1) {
    const ftSpeaker = CreateSpeaker(featuredSpeakers[i]);
    speakersArray.push(ftSpeaker);
  }
};
