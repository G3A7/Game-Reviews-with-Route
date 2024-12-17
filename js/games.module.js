import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Games {
  constructor() {
    this.loader = document.querySelector(".loaderSection");
    this.getApi();
    this.rowData = document.querySelector(".row");
    this.navBarLi = document.querySelectorAll("#navBar li a");
    this.navBarLi.forEach((e1) => {
      e1.addEventListener("click", (e2) => {
        this.navBarLi.forEach((e3) => {
          e3.classList.remove("active");
        });
        e2.target.classList.add("active");
        this.getGameToApi(e2.target.dataset.game);
      });
    });
  }
  async getApi(game = "MMORPG") {
    const option = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "69668ac10dmshdbd16241381aaffp13675fjsnde254f9ffb68",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      this.loader.classList.remove("d-none");
      let resGames = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,
        option
      );
      let data = await resGames.json();
      if (data) {
        // console.log(data);
        new Ui().DisplayGames(data);

        this.rowData.addEventListener("click", (e) => {
          if (e.target.parentElement.dataset.id) {
            new Details(e.target.parentElement.dataset.id);
          }
        });
        this.loader.classList.add("d-none");
      } else {
        throw new Error("data loaded");
      }
    } catch (err) {
      console.log(err);
    }
  }
  getGameToApi(game) {
    this.getApi(game);
  }
}
