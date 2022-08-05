let arr = [
  "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7661068/pexels-photo-7661068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
  "https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
let i = 0;
let id;
let scrooling = document.querySelector("#scrolling");
id = setInterval(() => {
  if (i == arr.length) {
    i = 0;
  } else {
    scrooling.innerHTML = null;
    let appendagain = arr[i];
    let make = document.createElement("img");
    make.setAttribute("id", "scrool");
    make.setAttribute("src", appendagain);
    scrooling.append(make);
    i++;
  }
}, 3000);

let takepart3 = document.querySelector("#part_3_1");

let part3 = [
  {
    img: "https://images.pexels.com/photos/8278921/pexels-photo-8278921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "PRAVALLIKA",
    role: "CEO and Founder",
  },
  {
    img: "https://images.pexels.com/photos/12903030/pexels-photo-12903030.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "MATHENEE",
    role: "SDE-1-Developer",
  },
  {
    img: "https://images.pexels.com/photos/12903025/pexels-photo-12903025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "GLORIA",
    role: "Head of Development",
  },
  {
    img: "https://images.pexels.com/photos/6326032/pexels-photo-6326032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "PAUL TORRES",
    role: "Graphical Designer",
  },
];

let newfunction = (data) => {
  data.forEach((ele, index) => {
    let create = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("src", ele.img);

    let two = document.createElement("h3");
    two.innerText = ele.name;

    let three = document.createElement("p");
    three.innerHTML = ele.role;

    create.append(one, two, three);

    takepart3.append(create);
  });
};
newfunction(part3);

let thirdpart = document.querySelector("#part_4_1");

let thridarray = [
  {
    img: "https://images.pexels.com/photos/34101/boat-speeding-tactical-military-training.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    patner: "PATNERSHIP GUIDELINES",
  },
  {
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    patner: "PATNERSHIP GUIDELINES",
  },
  {
    img: "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    patner: "PATNERSHIP GUIDELINES",
  },
  {
    img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    patner: "PATNERSHIP GUIDELINES",
  },
  {
    img: "https://images.pexels.com/photos/1891883/pexels-photo-1891883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    patner: "PATNERSHIP GUIDELINES",
  },
  {
    img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
    patner: "PATNERSHIP GUIDELINES",
  },
];

let thirdfunction = (data) => {
  data.forEach((ele) => {
    let three = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("src", ele.img);

    let two = document.createElement("h3");
    two.innerText = ele.patner;

    three.append(one, two);
    thirdpart.append(three);
  });
};
thirdfunction(thridarray);

let takefive = document.querySelector("#part_5_1");
let fourthfunction = [
  {
    img: "https://img.icons8.com/windows/2x/settings--v2.gif",
    down: "EASY THEME SETUP",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/fluency/344/drawing.png",
    down: "PERFECT DESIGN",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/ios-filled/344/media-queries.png",
    down: "RESPONSIVE DESIGN",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/ios/344/last-24-hours.png",
    down: "24/7 SUPPORT",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/windows/2x/settings--v2.gif",
    down: "EASY THEME SETUP",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/fluency/344/drawing.png",
    down: "PERFECT DESIGN",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/ios-filled/344/media-queries.png",
    down: "RESPONSIVE DESIGN",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
  {
    img: "https://img.icons8.com/ios/344/last-24-hours.png",
    down: "24/7 SUPPORT",
    text: "When people ask me what’s the ROI of Social, I ask them… what’s the ROI of Trust, and what’s the ROI of Loyalty. The answer, when used to build relationships the results will be… longer  ",
  },
];

let thiidfouthfunction = (data) => {
  data.forEach((ele, index) => {
    let create = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("src", ele.img);

    let two = document.createElement("h3");
    two.innerHTML = ele.down;

    let three = document.createElement("p");
    three.innerText = ele.text;

    create.append(one, two, three);
    takefive.append(create);
  });
};

thiidfouthfunction(fourthfunction);

let takesix = document.querySelector("#part_6_1");
let arraysix = [
  {
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    design: "PRODUCT DESIGN:EAMES CHAIRS",
    txt: "Eames designs are certain iconic. Everyone of us know atleast two or three of their famous chairs. I would ever risk saying the most of us dream.",
  },
  {
    img: "https://images.pexels.com/photos/972100/pexels-photo-972100.jpeg?auto=compress&cs=tinysrgb&w=600",
    design: "ELEGANT AND COLOURFUL LOGOS",
    txt: "I've always found a logo design to be one of the most challenging to get right their so much that a logo can say about a brand without saying it.",
  },
  {
    img: "https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600",
    design: "A SHOWCASE OF CREATIVE ARTS",
    txt: "I'ts alwasy intresting to see another's designer take on a famous website, App or even phicial product. Different degisiners and their own personality.",
  },
];

let sixthfunction = (data) => {
  data.forEach((ele) => {
    let create = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("src", ele.img);

    let two = document.createElement("h3");
    two.innerText = ele.design;

    let three = document.createElement("p");
    three.innerText = ele.txt;

    create.append(one, two, three);
    takesix.append(create);
  });
};
sixthfunction(arraysix);

// Maps
const api_key = "0a7a1dbcbb604d9ce6a32c6ceb2ca4ed";
let takeshot = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

let one = document.querySelector("#boom");
one.addEventListener("click", myfunction);

let mamma = document.querySelector("#back");
function myfunction() {
  let city = document.querySelector("#wheather").value;
  let dataone = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  async function hello() {
    try {
      let boom = await fetch(dataone);
      let boomone = await boom.json();
      bollobhai(boomone);
      console.log(boomone);
    } catch (err) {
      console.log(err);
    }
  }
  hello();
}
function bollobhai(data) {
  let cre = document.createElement("div");
  mamma.innerHTML = null;

  let three = document.createElement("h3");
  three.innerText = `name :${data.name}`;

  let iframe = document.querySelector("#gmap_canvas");
  iframe.src = `https://maps.google.com/maps?q=${data.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  cre.append(one, two, three, four, five, six, seven);

  document.querySelector("#back").append(cre);
}
