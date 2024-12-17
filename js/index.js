// async function getApi() {
//   const option = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "69668ac10dmshdbd16241381aaffp13675fjsnde254f9ffb68",
//       "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//     },
//   };
//   try {
//     let resGames = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMORPG`,
//       option
//     );
//     let data = await resGames.json();
//     if (data) {
//       console.log(data);
//       //   new Ui().DisplayGames(data);
//     } else {
//       throw new Error("data loaded");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// getApi();
import { Games } from "./games.module.js";

new Games();

/*
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '69668ac10dmshdbd16241381aaffp13675fjsnde254f9ffb68',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

---specific


const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '69668ac10dmshdbd16241381aaffp13675fjsnde254f9ffb68',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    mmorpg
    shooter
    sailing
    permadeath
    superhero
    pixel


*/
