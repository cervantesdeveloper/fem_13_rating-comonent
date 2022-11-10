const d = document;

import submitRate from "./modules/submit_rate.js";

d.addEventListener("submit", e =>{
    e.preventDefault();
    submitRate(".card-rating", e);
});