'use strict';

const academyMembers = [
    {
      memID: 101,
      name: 'Bob Brown',
      films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
    },
    {
      memID: 142,
      name: 'Sallie Smith',
      films: ['A Good Day', 'A Better Day']
    },
    {
      memID: 187,
      name: 'Fred Flanders',
      films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
    },
    {
      memID: 203,
      name: 'Bobbie Boots',
      films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
    }
  ];
  
  // Who is the Academy member with id 187
  const actor187 = academyMembers.find((member) => member.memID === 187);
  console.log('actor 187 is named', actor187.name);
  
  // Who has been in at least three films:
  console.log('');
  console.log('Actors who have been in at least three films');
  const actorsIn3orMoreFilms = academyMembers.filter((member) => member.films.length >= 3);
  actorsIn3orMoreFilms.forEach((member) => console.log('-', member.name));
  
  console.log('');
  console.log('Actors whose name starts with "Bob"');
  const actorsWhoStartWithBob = academyMembers.filter((member) => member.name.startsWith('Bob'));
  actorsWhoStartWithBob.forEach((member) => console.log(member.name));
  
  console.log('');
  console.log('Actors who have been in a film starting with "A"');
  
  // const startsWithA = (filmName) => filmName.startsWith('A');
  // const containsTitleThatStartsWithA = (films) => films.find(startsWithA);
  
  const actorsInFilmsThatStartWithA = academyMembers.filter((member) =>
    member.films.find((film) => film.startsWith('A'))
  );
  
  actorsInFilmsThatStartWithA.forEach((actor) => console.log('-', actor.name));