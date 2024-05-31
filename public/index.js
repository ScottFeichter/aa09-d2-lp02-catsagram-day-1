console.log(`CONNECTION TEST`);

// ==================  DOM Content Loaded ========================

document.addEventListener(`DOMContentLoaded`, async () => {
  const body = document.body;

  const header = createHeader("kitties!");
  const catContainer = await createCatContainer();
  const controlsContainer = createControlsContainer();

  body.appendChild(header);
  body.appendChild(catContainer);
  body.appendChild(controlsContainer);

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
    console.log("RAN: getCatImageSrc() - catch: Failed to fetch image. Error details: ", e);
  }


};

// ==================  controlsContainer ========================

const createControlsContainer = () => {
  const controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("id", "controlsContainer");

  const newCatButtonContainer = createNewCatButton();
  controlsContainer.appendChild(newCatButtonContainer);

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

  newCatButtonContainer.appendChild(newCatButton);
  return newCatButtonContainer;
};

const createVoteButtons = (yes, no) => {
  const voteButtonsContainer = document.createElement("div");
  voteButtonsContainer.setAttribute(`id`, `voteButtonsContainer`);

  const purrr = document.createElement("button");
  purrr.setAttribute("class", "voteButton");
  purrr.innerText = yes;

  const hisss = document.createElement("button");
  hisss.setAttribute("class", "voteButton");
  hisss.innerText = no;

  voteButtonsContainer.appendChild(purrr);
  voteButtonsContainer.appendChild(hisss);
  return voteButtonsContainer;
};

const createCommentsBox = () => {};
