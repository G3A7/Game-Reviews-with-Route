import { Ui } from "./ui.module.js";
export class Details {
  constructor(id) {
    this.loader = document.querySelector(".loaderSection");
    this.id = id;
    this.content = document.querySelector(".content");
    this.sectionDetails = document.querySelector(".show-details");
    this.getGameId();
  }
  async getGameId() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "69668ac10dmshdbd16241381aaffp13675fjsnde254f9ffb68",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      this.loader.classList.remove("d-none");
      let resGame = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,
        options
      );
      let dataGame = await resGame.json();
      if (dataGame) {
        // console.log(dataGame);
        new Ui().DisplayDetailsGame(dataGame);
        document.querySelector("#close").addEventListener("click", (e) => {
          this.content.classList.remove("d-none");
          this.sectionDetails.classList.add("d-none");
        });
        this.loader.classList.add("d-none");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
