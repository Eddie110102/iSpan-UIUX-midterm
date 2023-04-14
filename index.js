const box = document.getElementsByClassName("box")[0];
const content = '<div class="blankContent"></div>';

const data = [
  {
    link: "wevinyl",
    img: "./wevinyl/img/logo.png",
    imgAlt: "wevinyl-logo",
    p: "黑膠唱片",
    title: "黑膠唱片 - 王祐翔",
  },
  {
    link: "musics",
    img: "./musics/Interim-report-img/Music/tom-jerry/cute-jerry-2.png",
    imgAlt: "musics-logo",
    p: "音樂",
    title: "音樂 - 王庭笠",
  },
  {
    link: "fontIntroduction",
    img: "./fontIntroduction/img/logo.png",
    imgAlt: "fontIntroduction-logo",
    p: "沾沾字喜",
    title: "沾沾字喜 - 黃昱潔",
  },
  {
    link: "climbing",
    img: "./climbing/images/logo-singleword.svg",
    imgAlt: "climbing-logo",
    p: "小岩究",
    title: "小岩究 - 彭紹慈",
  },
  {
    link: "muse",
    img: "./muse/MAIN_BG.jpg",
    imgAlt: "muse-logo",
    p: "Muse",
    title: "Muse - 陳又瑞",
  },
];

data.forEach((data) => {
  let result = `<div class="content">
    <p>${data.p}</p>
    <div class="card">
    <a href="${data.link}" target="_blank" ${
    data.link == "wevinyl" ? 'class="vinyl"' : ""
  }>
    <img src="${data.img}" alt="${data.imgAlt}" />
    <h2>${data.title}</h2>
    </a>
    </div>
    </div>`;
  box.innerHTML += result;
});

// 增加空白卡片，以便排版
if (data.length % 4 !== 0) {
  for (let i = 0; i < 4; i++) {
    box.innerHTML += content;
  }
}