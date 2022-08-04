const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};




const{title :t ,
      developer :d ,
      releases: {
      "Oath In Felghana":[u,j] ,
      "Ark Of Napishtim" : {
       US :u_price,
       JAP :j_price,
      },
      Origin :or,
    },
      oath = Object.keys(game.releases)[0],
      ark = Object.keys(game.releases)[1]
} = game







console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${oath} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${ark}`);
// Although I Love Ark Of Napishtim

console.log(`${ark} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${ark} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
