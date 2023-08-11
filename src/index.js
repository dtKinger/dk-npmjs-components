import { carousel } from "./carousel.js";
import './carousel.css';

import { mobileNav } from "./nav-menu.js"
import './nav-menu.css';

// Init Carousel
carousel();

// Init navigation
mobileNav();

// Scrape amazon review

// async function readReview () {
//   try{
//   const response = await fetch(`https://www.amazon.ca/gp/customer-reviews/R28I38Q58RNFHB/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BVD31QJB`, {mode: 'no-cors'});
//   const responseInfo = await response.json();
//   console.log(responseInfo);
//   } catch (err) {
//     console.log(`There was a problem, maybe resolve that first`)
//     console.error(err)
//   }
// }
// readReview()
