"use strict";
// IMPORTS:

import { Progress } from "./components/progress/Progress.js";
import { Services } from "./components/services/Services.js";
import { progressData } from "./data/progressData.js";
import { servicesData } from "./data/servicesData.js";
import { Education } from "./components/education/Education.js";
import { educationData } from "./data/educationData.js";
import { count1, count2, count3, count4 } from "./components/working-hours/data-count.js";
import { Gallery } from './components/gallery/Gallery.js';
import { PortfolioItem } from './components/gallery/PortfolioItem.js';
import { portfolioData } from './data/portfolioData.js';



// CODE EXECUTION:

/* HEADER start */
/* HEADER end */

/* HERO start */
particlesJS.load('particles-js', './js/particles.json');
/* HERO end */

/* ABOUT ME start */
const progress = new Progress('.about-progress-bar', progressData);
/* ABOUT ME end */

/* SERVICES start */
const services = new Services('services_box', servicesData);
/* SERVICES end */

/* HIRE ME start */
/* HIRE ME end */

/* EDUCATION start */
const education = new Education("education_box", educationData);
/* EDUCATION end */

/* WORKING HOURS start */
const data1 = parseInt(document.getElementById('fact-1').innerText);
const data2 = parseInt(document.getElementById('fact-2').innerText);
const data3 = parseInt(document.getElementById('fact-3').innerText);
const data4 = parseInt(document.getElementById('fact-4').innerText);

count1(data1, data1, 'fact-1');
count2(data2, data2, 'fact-2');
count3(data3, data3, 'fact-3');
count4(data4, data4, 'fact-4');
/* WORKING HOURS end */

/* MY RECENT WORK start */
const gallery = new Gallery('work', portfolioData, PortfolioItem);
/* MY RECENT WORK end */

/* OUR CLIENT start */
/* OUR CLIENT end */

/* TRUSTED BY start */
/* TRUSTED end */

/* CONTACT start */
/* CONTACT end */

/* FOOTER start */
/* FOOTER end */







