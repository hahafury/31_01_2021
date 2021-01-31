let containerUserCard = document.createElement('div');
containerUserCard.classList.add('userCard');

document.body.append(containerUserCard);

let userPhoto = document.createElement('div');
userPhoto.classList.add('userPhoto');
containerUserCard.append(userPhoto);

let userPhotoImage = document.createElement('img');
userPhotoImage.setAttribute('src', 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg');
userPhotoImage.setAttribute('alt', 'user photo');
userPhoto.append(userPhotoImage);

let userStat = document.createElement('div');
userStat.classList.add('userStat');
containerUserCard.append(userStat);

let userStatValue = document.createElement('div');
userStatValue.classList.add('userStatValue');
userStat.append(userStatValue);

let userStatValueShots = document.createElement('p');
userStatValueShots.textContent = 183;
userStatValue.append(userStatValueShots);

let userStatValueFollowers = document.createElement('p');
userStatValueFollowers.textContent = 92778;
userStatValue.append(userStatValueFollowers);

let userStatValueProjects = document.createElement('p');
userStatValueProjects.textContent = 30;
userStatValue.append(userStatValueProjects);

let userStatName = document.createElement('div');
userStatName.classList.add('userStatName');
userStat.append(userStatName);

let userStatNameShots = document.createElement('p');
userStatNameShots.textContent = 'shots';
userStatName.append(userStatNameShots);

let userStatNameFollowers = document.createElement('p');
userStatNameFollowers.textContent = 'followers';
userStatName.append(userStatNameFollowers);

let userStatNameProjects = document.createElement('p');
userStatNameProjects.textContent = 'projects';
userStatName.append(userStatNameProjects);

let userButton = document.createElement('div');
userButton.classList.add('userButton');
containerUserCard.append(userButton);

let userButtonFollow = document.createElement('p');
userButtonFollow.textContent = 'Follow';
userButton.append(userButtonFollow);
