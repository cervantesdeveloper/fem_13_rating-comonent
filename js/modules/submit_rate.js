const d = document;

export default function submitRate(card, e){
    const $card = d.querySelector(card),
        $inputs = e.target.querySelectorAll("input[type='radio']");
    
     let $rate;

         $inputs.forEach(element => {
             if(element.checked){
                 $rate = element.value;
             }
         });


    $card.innerHTML =
    `
            <div class="card-thanks__hero">
                <img src="images/illustration-thank-you.svg" alt="">
            </div>

            <div class="card-thanks__rate">
                You selected ${$rate} out of 5
            </div>

            <div class="card-thanks__message">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
            </div>
        
    `;
    
}