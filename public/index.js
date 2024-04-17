console.log(`CONNECTION TEST`);

const createHeader = (content) => {
  const headerH1 = document.createElement("h1");
  headerH1.innerText = content;
  headerH1.setAttribute("style", "font-size: 400px");

  const header = document.createElement("header");
  header.appendChild(headerH1);
  // why is my css not happening on the header?
  return header;
};

// const createCatContainer = (img) => {
//   const catContainer = document.createElement("div");
//   catContainer.setAttribute("style", "text-align: center");
//   catContainer.appendChild(img);
//   return catContainer;
// };

const createButtons = (si, no) => {
  const buttonContainer = document.createElement("div");

  const yes = document.createElement("button");
  yes.innerText = si;

  const nay = document.createElement("button");
  nay.innerText = no;

  buttonContainer.appendChild(yes);
  buttonContainer.appendChild(nay);
  return buttonContainer;
};

// ==================  DOM Content Loaded ========================

document.addEventListener(`DOMContentLoaded`, () => {
  const body = document.body;

  const header = createHeader("kitties!");
  // const catContainer = createCatContainer("image");
  const buttonContainer = createButtons("purrr", "hisss");

  body.appendChild(header);
  // body.appendChild(catContainer);
  body.appendChild(buttonContainer);
});
