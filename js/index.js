"use strict";
// IMPORTS:

import { Progress } from "./components/progress/Progress.js";
import { Services } from "./components/services/Services.js";
import { progressData } from "./data/progressData.js";
import { servicesData } from "./data/servicesData.js";


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
/* EDUCATION end */

/* WORKING HOURS start */
/* WORKING HOURS end */

/* MY RECENT WORK start */
/* MY RECENT WORK end */

/* OUR CLIENT start */
/* OUR CLIENT end */

/* TRUSTED BY start */
/* TRUSTED end */

/* CONTACT start */
/* CONTACT end */

/* FOOTER start */
/* FOOTER end */







