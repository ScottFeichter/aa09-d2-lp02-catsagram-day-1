console.log(`CONNECTION TEST`);

// ==================  DOM Content Loaded ========================

document.addEventListener(`DOMContentLoaded`, () => {
  const body = document.body;

  const header = createHeader("kitties!");
  const catContainer = createCatContainer();
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

  return header;
};

// ==================  catContainer ========================

const createCatContainer = () => {
  const catContainer = document.createElement("div");
  catContainer.setAttribute("id", "catContainer");

  const catImage = createCatImage();

  catContainer.appendChild(catImage);
  return catContainer;
};

createCatImage = () => {
  const catImage = document.createElement("img");
  catImage.src = fetchCatImageSrc();
  console.log("catImage.src: ", catImage.src);
  
  catImage.style.margin = "20px";
  catImage.style.maxWidth = "750px";

  return catImage;
};

fetchCatImageSrc = async () => {
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    const kittenData = await kittenResponse.json();
    console.log("kittenData: ", kittenData);
    const kittenDataSrc = kittenData[0].url;
    console.log("kittenDataSrc: ", kittenDataSrc);
    return kittenDataSrc;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }

  return "there is a problem";
};

// ==================  controlsContainer ========================

const createControlsContainer = () => {
  const controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("id", "controlsContainer");

  const newCatButtonContainer = createNewCatButton();
  controlsContainer.appendChild(newCatButtonContainer);

  const voteButtonsContainer = createVoteButtons(`purrr`, `hisss`);
  controlsContainer.appendChild(voteButtonsContainer);

  return controlsContainer;
};

const createNewCatButton = () => {
  const newCatButtonContainer = document.createElement("div");
  newCatButtonContainer.setAttribute("id", "newCatButtonContainer");

  const newCatButton = document.createElement("button");
  newCatButton.setAttribute("id", "newCatButton");
  newCatButton.innerText = "new kitten";

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
