export class Ui {
  constructor() {
    this.rowData = document.querySelector("#rowData");
    this.content = document.querySelector(".content");
    this.sectionDetails = document.querySelector(".show-details");
  }
  DisplayGames(data) {
    this.content.classList.remove("d-none");
    this.sectionDetails.classList.add("d-none");
    let blackBox = "";
    blackBox += data.map((e) => {
      return `<div class="col-md-6 col-lg-3">
            <div class="inner" data-id=${e.id}>
              <div class="div-padding" data-id=${e.id}>
                <div class="img-content" data-id=${e.id}>
                  <img src="${e.thumbnail}" alt="" class="img-fluid rounded-2" />
                </div>
                <div data-id=${
                  e.id
                } class="title-content d-flex justify-content-between align-items-center">
                  <h5>${e.title}</h5>
                  <span class="badge">Free</span>
                </div>
                <p class="text-white-50 text-center">
                  ${e.short_description.slice(
                    0,
                    "A 3D Norse-themed browser MMORPG developed and published by Game Hollywood Games"
                      .length
                  )}.. 
                </p>
              </div>
              <div data-id=${
                e.id
              } class="content-footer d-flex justify-content-between align-items-center">
                <span class="badge">${e.genre}</span>
                <span class="badge">${e.platform}</span>
              </div>
            </div>
          </div>`;
    });
    // console.log(blackBox.split(",").join(""));
    this.rowData.innerHTML = blackBox.split(",").join("");
  }
  DisplayDetailsGame(data) {
    this.content.classList.add("d-none");
    this.sectionDetails.classList.remove("d-none");
    let blackBox = `
  
      <div class="container py-3">
        <div class="title-details p-3 d-flex align-items-center justify-content-between">
          <h2>Details Game</h2>
          <span id="close"><i class="fa-solid fa-x"></i></span>
        </div>
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="inner-details">
              <div class="img-details">
                <img src="${data.screenshots[0].image}" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="inner-details">
              <h3>Title: Throne And Liberty</h3>
              <p>Category: <span class='badge '>${data.genre}</span> </p>
              <p>Platform: <span class='badge '>${data.platform}</span></p>
              <p>Status: <span class='badge '>${data.status}</span></p>
              <p class="description-details">
                  ${data.description}
              </p>
              <a href='${data.game_url}' target='_blank' class="btn btn-outline-warning">Show Game</a>
            </div>
          </div>
        </div>
      </div>
   
    `;
    this.sectionDetails.innerHTML = blackBox.split(",").join("");
  }
}
