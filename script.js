let equity = document.querySelector(".eq");
let f_and_o = document.querySelector(".fo");
let head  = document.querySelectorAll(".head");

equity.style.borderBottom = "var(--select)"
equity.style.color = "#000"



equity.addEventListener("click",()=>{
      
    if(f_and_o.style.borderBottom == "var(--select)"){
        f_and_o.style.borderBottom = "none"
        f_and_o.style.color = "var(--color)"
    }
    equity.style.borderBottom = "var(--select)"
    equity.style.color = "#000"
    scrollTo(0,300);
    head[0].innerHTML = " <h2>Intraday Equity</h2>"
    head[1].innerHTML = " <h2>Delivary Equity</h2>"
    dp.innerHTML = "DP charges"
    total()
    total_2()
   
    
})




f_and_o.addEventListener("click",()=>{
    if(equity.style.borderBottom == "var(--select)"){
        equity.style.borderBottom = "none"
        equity.style.color = "var(--color)"
    }
    f_and_o.style.borderBottom = "var(--select)"
    f_and_o.style.color = "#000"
    scrollTo(0,300);
    head[0].innerHTML = " <h2>Futures</h2>"
    head[1].innerHTML = " <h2>Options</h2>"
    dp.innerHTML = "Clearing charges"
    total()
   
    total_2()
    
})



const total  = ()=>{
    
    turnover.innerHTML = (buy.value * quntity.value) +(sell.value * quntity.value);
    
    if(head[0].innerText === "Intraday Equity"){
        if(brokerage.value === ""){
            brokerage.value = 0
           }

        stt.innerHTML = Math.floor((sell.value * quntity.value) * (0.025 / 100));

        if(stt.innerHTML % 5 != 0 && stt.innerHTML >= 1.5){
            stt.innerHTML = Math.floor(sell.value * quntity.value * .025 /100 + 1 )  
        }
        if(nse.checked){

            exchange.innerHTML = (turnover.innerHTML * 0.00335 / 100).toString().slice(0,4);
        }
        else{
            exchange.innerHTML = (turnover.innerHTML * 0.00375 / 100).toString().slice(0,4);

        }

    stamp.innerHTML =((buy.value * quntity.value) * 0.003 / 100 ).toString();
    if(stamp.innerHTML.split(".")[1][0] - 0 >= 5 ){
        stamp.innerHTML =parseInt((buy.value * quntity.value) * 0.003 / 100 )+1;
    
        }
        else{
        stamp.innerHTML =parseInt((buy.value * quntity.value) * 0.003 / 100 );
    
        };


    }
    else{
        if(brokerage.value === ""){
            brokerage.value = 0
           }
        stt.innerHTML = Math.floor((sell.value * quntity.value) * (0.0125 / 100));
        
        if(stt.innerHTML % 5 != 0 && stt.innerHTML >= 1.5 ){
            stt.innerHTML = Math.floor(sell.value * quntity.value * .0125 /100 )+1 
        }
    exchange.innerHTML = (turnover.innerHTML * 0.0020 / 100).toString().slice(0,5);
    stamp.innerHTML =((buy.value * quntity.value) * 0.002 / 100 ).toString();
    if(stamp.innerHTML.split(".")[1][0] - 0 >= 5 ){
        stamp.innerHTML =parseInt((buy.value * quntity.value) * 0.002 / 100 )+1;
    
        }
        else{
        stamp.innerHTML =parseInt((buy.value * quntity.value) * 0.002 / 100 );
    
        };
        

    }
    clearing.innerHTML = "0";
    sebi.innerHTML = (turnover.innerHTML * .0001 /100).toString().slice(0,4);
    gst.innerHTML = ((parseFloat(brokerage.value) + parseFloat(sebi.innerHTML) + parseFloat(exchange.innerHTML)) *(18 /100)).toString().slice(0,4);
   
    
    total_charges.innerHTML = (parseFloat(brokerage.value)+parseFloat(stt.innerHTML)+ parseFloat(exchange.innerHTML)+parseFloat(sebi.innerHTML)+parseFloat(stamp.innerHTML)+parseFloat(gst.innerHTML)).toString().slice(0,4);
    profit.innerHTML =  (sell.value * quntity.value ) - (buy.value * quntity.value) - total_charges.innerHTML;
    if(profit.innerHTML < 0){
        profit.style.color = "red"
    }
    else{
        profit.style.color = "green"
        
    }


   
}
const total_2  = ()=>{
    turnover_2.innerHTML = (buy_2.value * quntity_2.value) +(sell_2.value * quntity_2.value);

    if(head[1].innerText === "Delivary Equity")
{
    brokerage_2.readOnly = true
    

    
    stt_2.innerHTML = Math.floor(turnover_2.innerHTML * 0.1 / 100);
            if(stt_2.innerHTML % 5 != 0 && stt_2.innerHTML >= 1.5 ){
                stt_2.innerHTML = Math.floor(turnover_2.innerHTML * .1 /100 + 1 )  
            }
            if(d_nse.checked){

                exchange_2.innerHTML = (turnover_2.innerHTML * 0.00335 / 100).toString().slice(0,4);
            }
            if(d_bse.checked){
                exchange_2.innerHTML = (turnover_2.innerHTML * 0.00375 / 100).toString().slice(0,4);
    
            }
    clearing_2.innerHTML = 15.93;
    stamp_2.innerHTML =((buy_2.value * quntity_2.value) * 0.015 / 100 ).toString();
    if(stamp_2.innerHTML.split(".")[1][0] - 0 >= 5 ){
    stamp_2.innerHTML =parseInt((buy_2.value * quntity_2.value) * 0.015 / 100 )+1;

    }
    else{
    stamp_2.innerHTML =parseInt((buy_2.value * quntity_2.value) * 0.015 / 100 );

    }

        
}
else{
    brokerage_2.readOnly = false
    if(brokerage_2.value === ""){
        brokerage_2.value = 0
       }
    stt_2.innerHTML = Math.floor((sell_2.value * quntity_2.value)* 0.0625 / 100);
            if(stt_2.innerHTML % 5 != 0 && stt_2.innerHTML >= 1.5 ){
                stt_2.innerHTML = Math.floor((sell_2.value * quntity_2.value) * 0.0625 /100 ) +1 
            }
    exchange_2.innerHTML = (turnover_2.innerHTML * 0.05 / 100).toString().slice(0,4);
    clearing_2.innerHTML = "0";
    stamp_2.innerHTML =((buy_2.value * quntity_2.value) * 0.003 / 100 ).toString();
    if(stamp_2.innerHTML.split(".")[1][0] - 0 >= 5 ){
    stamp_2.innerHTML =parseInt((buy_2.value * quntity_2.value) * 0.003 / 100 )+1;

    }
    else{
    stamp_2.innerHTML =parseInt((buy_2.value * quntity_2.value) * 0.003 / 100 );

    }


}
    sebi_2.innerHTML = (turnover_2.innerHTML * .0001 /100).toString().slice(0,4);
    
   
    gst_2.innerHTML = ((parseFloat(brokerage_2.value)+parseFloat(sebi_2.innerHTML) + parseFloat(exchange_2.innerHTML)) *(18 /100)).toString().slice(0,4) ;
    total_charges_2.innerHTML = (parseFloat(brokerage_2.value)+ parseFloat(stt_2.innerHTML)+ parseFloat(exchange_2.innerHTML)+parseFloat(sebi_2.innerHTML)+parseFloat(stamp_2.innerHTML)+parseFloat(gst_2.innerHTML)+parseFloat(clearing_2.innerHTML)).toString().slice(0,6)
    profit_2.innerHTML =  (sell_2.value * quntity_2.value ) - (buy_2.value * quntity_2.value) - total_charges_2.innerHTML;
    if(profit_2.innerHTML < 0){
        profit_2.style.color = "red"
    }
    else{
        profit_2.style.color = "green"
        
    }
}


 



total()
buy.oninput = total
sell.oninput = total
quntity.oninput = total
brokerage.oninput = total
nse.oninput = total
bse.oninput = total
total_2()
buy_2.oninput = total_2
sell_2.oninput = total_2
quntity_2.oninput = total_2
brokerage_2.oninput = total_2
d_nse.oninput = total_2
d_bse.oninput = total_2
