console.log(`CONNECTION TEST`);
let HISSS = 0;
let PURRR = 0;


// ==================  DOM Content Loaded ========================

document.addEventListener(`DOMContentLoaded`, async () => {
  const body = document.body;

  const header = createHeader("kitties!");
  const catContainer = await createCatContainer();
  const controlsContainer = createControlsContainer();
  const scoresContainer = createScoresContainer();

  body.appendChild(header);
  body.appendChild(catContainer);
  body.appendChild(controlsContainer);
  body.appendChild(scoresContainer);

  console.log("DOMContentLoaded");
});

// ==================  Header ========================

const createHeader = (content) => {
  const headerH1 = document.createElement("h1");
  headerH1.innerText = content;

  const header = document.createElement("header");
  header.appendChild(headerH1);

  console.log(`RAN: createHeader() - header with h1 of "${content}" created`);
  return header;
};

// ==================  catContainer ========================

const createCatContainer = async () => {
  const catContainer = document.createElement("div");
  catContainer.setAttribute("id", "catContainer");

  const catImage = await createCatImage();

  catContainer.appendChild(catImage);
  return catContainer;
};

createCatImage = async () => {
  const catImage = document.createElement("img");
  catImage.src = await getCatImageSrc();
  // console.log("catImage.src: ", catImage.src);

  console.log(`RAN: createCatImage()`);
  return catImage;
};

getCatImageSrc = async () => {
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    const kittenData = await kittenResponse.json();
    // console.log("kittenData: ", kittenData);

    const kittenDataSrc = kittenData[0].url;
    // console.log("kittenDataSrc: ", kittenDataSrc);

    console.log(`RAN: getCatImageSrc() - try`);
    return kittenDataSrc;
  } catch (e) {
    console.log(
      "RAN: getCatImageSrc() - catch: Failed to fetch image. Error details: ",
      e
    );
  }
};

// ==================  controlsContainer ========================

const createControlsContainer = () => {
  const controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("id", "controlsContainer");

  const voteButtonsContainer = createVoteButtons(`purrr`, `hisss`);
  controlsContainer.appendChild(voteButtonsContainer);

  console.log(`RAN: createControlsContainer()`);
  return controlsContainer;
};

const createNewCatButton = () => {
  const newCatButtonContainer = document.createElement("div");
  newCatButtonContainer.setAttribute("id", "newCatButtonContainer");

  const newCatButton = document.createElement("button");
  newCatButton.setAttribute("id", "newCatButton");
  newCatButton.innerText = "new kitty";

  newCatButton.addEventListener("click", async function newKittyHandler(e) {
    let oldCatContainer = document.getElementById("catContainer");
    let newCatContainer = await createCatContainer();
    newCatContainer.setAttribute("id", "catContainer");
    document.body.replaceChild(newCatContainer, oldCatContainer);
    PURRR = 0;
    let purrrScore = document.getElementById("purrrScore");
    purrrScore.innerHTML = PURRR;
    HISSS = 0;
    let hisssScore = document.getElementById("hisssScore");
    hisssScore.innerHTML = HISSS;
    console.log(`RAN: newKittyHandler()`);
  });

  newCatButtonContainer.appendChild(newCatButton);
  return newCatButtonContainer;
};

const createVoteButtons = (yes, no) => {
  const voteButtonsContainer = document.createElement("div");
  voteButtonsContainer.setAttribute(`id`, `voteButtonsContainer`);

  const purrr = document.createElement("button");
  purrr.setAttribute("class", "voteButton");
  purrr.innerText = yes;
  purrr.addEventListener("click", handlePurrr);
  voteButtonsContainer.appendChild(purrr);

  const newCatButtonContainer = createNewCatButton();
  voteButtonsContainer.appendChild(newCatButtonContainer);

  const hisss = document.createElement("button");
  hisss.setAttribute("class", "voteButton");
  hisss.innerText = no;
  hisss.addEventListener("click", handleHisss);
  voteButtonsContainer.appendChild(hisss);




  return voteButtonsContainer;
};

// ==================  scoresContainer ========================
const createScoresContainer = () => {
  const scoresContainer = document.createElement("div");
  scoresContainer.setAttribute("id", "scoresContainer");

  let purrrScoreContainer = document.createElement("div");
  purrrScoreContainer.setAttribute("id", "purrrScoreContainer");
  let purrrScoreText = document.createElement("p");
  purrrScoreText.innerText = "purrrs: ";
  let purrrScore = document.createElement("p");
  purrrScore.setAttribute("id", "purrrScore");
  purrrScore.innerText = PURRR;

  purrrScoreContainer.appendChild(purrrScoreText);
  purrrScoreContainer.appendChild(purrrScore);
  scoresContainer.appendChild(purrrScoreContainer);

  let hisssScoreContainer = document.createElement("div");
  hisssScoreContainer.setAttribute("id", "hisssScoreContainer");
  let hisssScoreText = document.createElement("p");
  hisssScoreText.innerText = "hissses: ";
  let hisssScore = document.createElement("p");
  hisssScore.setAttribute("id", "hisssScore");
  hisssScore.innerText = HISSS;

  hisssScoreContainer.appendChild(hisssScoreText);
  hisssScoreContainer.appendChild(hisssScore);
  scoresContainer.appendChild(hisssScoreContainer);

  console.log("RAN: createScoresContainer");
  return scoresContainer;
};


const handlePurrr = () => {
  PURRR++
  let purrrScore = document.getElementById("purrrScore");
  purrrScore.innerHTML = PURRR;
};

const handleHisss = () => {
  HISSS++
  let hisssScore = document.getElementById("hisssScore");
  hisssScore.innerHTML = HISSS;
};

// ================== commentsContainer ========================


const createCommentsContainer = () => {};
