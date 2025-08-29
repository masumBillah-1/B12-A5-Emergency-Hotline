

const heartCountElement = document.getElementById('heart-count');
const coinElement = document.getElementById('coins');
const copyCountElement = document.getElementById('copy-count');
const clearBtn = document.querySelector('.clear-btn');
const callHistory = document.querySelector('.call-history');

// count update  function 

function updateCount(element,amount){
    let currentCount = parseInt(element.innerText);

    currentCount  += amount;
    element.innerText = currentCount;
}



// all card calls 
const cards = document.querySelectorAll('.card')

// loop calls 
for(const card of cards){
    const heartBtn = card.querySelector(".btn-1");
    const heartIcon = heartBtn?.querySelector("i");
    const copyBtn = card.querySelector('.copy-btn');
    const callBtn = card.querySelector('.call-btn');
    const serviceName = card.querySelector('h3').innerText;
    const serviceNumber = card.querySelector('h2').innerText;


    // 💖 Heart Icon click 
    
    if(heartBtn && heartIcon){
            heartIcon.addEventListener('click',function(e){

                e.preventDefault();

                // toggle icon class add 

                const isActive = heartIcon.classList.toggle('fa-solid');
                heartIcon.classList.toggle("text-red-500");

                if(isActive){
                    updateCount(heartCountElement,1)
                }else{
                    updateCount(heartCountElement, -1)
                }         

            })

    }

    // 📋 Copy button add
    if(copyBtn){
        copyBtn.addEventListener('click',function(){
            navigator.clipboard.writeText(serviceNumber);
            alert(`📋 ${serviceName} ${serviceNumber} copied`)
            updateCount(copyCountElement, 1)
        })
    }

    // 📞 Call button Add

    if(callBtn){
        callBtn.addEventListener('click',function(){

            let coins = parseInt(coinElement.innerText);

            if(coins < 20 ){
                alert(`Not enough 💰coins to make a call!`)
                return;
            }

            // update coin 

            updateCount(coinElement, -20)

            alert(`📞Calling ${serviceName} ${serviceNumber}... `);

            // Add Call History 

            const div = document.createElement('div');


            div.className = "flex justify-between items-center bg-[#86848413] p-2 rounded-sm mt-3";
            div.innerHTML = `

                <div>
                    <h4 class="font-[600] text-[12px]">${serviceName}</h4>
                    <h5 class="font-[500] text-[#6d6c6c]">${serviceNumber}</h5>
                </div>
                <p class="text-[11px] font-bold">${new Date().toLocaleTimeString()}</p>
            
            `;


            callHistory.appendChild(div);

        });
    }

    
    

};


// clear history Function 


if(clearBtn){
    clearBtn.addEventListener('click',function(){

        if(callHistory.children.length === 0){
            alert('⚠ Call history is already empty!')
            return
        }
        callHistory.innerHTML = '';
        alert('Call history cleared successfully!')
    })
}



