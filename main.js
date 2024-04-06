const secPost = document.getElementsByClassName("posts");
const section = document.querySelector("section");

section.setAttribute("class", "featured");


const article = document.createElement("article");

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

const paraGraph = document.createElement("p");
paraGraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paraGraph);

const aside = document.createElement("aside");
const para = document.createElement("p");
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
const span = document.createElement("span");
span.textContent = "4 minutes";
const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more...";


aside.append(para);
para.append(span);
span.append(strong);
para.append(link);

article.append(img);
article.append(h3);
article.append(paraGraph);
article.append(aside);



secPost[0].append(article);

let secPostArt = secPost[0].getElementsByTagName('article');
secPost[0].insertBefore(secPostArt[1],secPostArt[0]);


const uL = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("li");
uL[0].removeChild(li[0]);

const featuredAside = section.getElementsByTagName("aside");
const featuredSpan = featuredAside[0].getElementsByTagName("span");
featuredSpan[0].remove();


article.remove()

const allH3Ele = document.querySelectorAll("h3");
const body = document.getElementsByTagName("body");

allH3Ele[0].remove();
allH3Ele[1].remove();

console.log(allH3Ele);
