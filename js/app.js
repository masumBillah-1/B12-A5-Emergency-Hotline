// Coins element
const coinElement = document.getElementById("coins");
// Call History container (শুধু class দিয়ে ধরছি)
const callHistory = document.querySelector(".call-history");
// Heart count element
const heartCountElement = document.getElementById("heart-count");
// Copy count element (navbar এর copy button এর span)
const copyCountElement = document.querySelector("button span");
// Clear history button
const clearHistoryBtn = document.querySelector(".clear-history-btn");

// Select all cards by class name "card"
const cards = document.querySelectorAll(".card");

// Loop through each card
for (const card of cards) {
    const heartBtn = card.querySelector(".btn-1");
    const heartIcon = heartBtn?.querySelector("i");
    const copyBtn = card.querySelector(".copy-btn");
    const callBtn = card.querySelector(".call-btn");
    const serviceName = card.querySelector("h5").innerText;
    const serviceNumber = card.querySelector("h2").innerText;

    // ❤️ Heart toggle + count
    if (heartBtn && heartIcon) {
        heartBtn.addEventListener("click", function (e) {
            e.preventDefault();

            // Toggle active class
            const isActive = heartBtn.classList.toggle("active");

            // Toggle icon
            heartIcon.classList.toggle("fa-solid");
            heartIcon.classList.toggle("fa-regular");
            heartIcon.classList.toggle("text-red-500");
            heartIcon.classList.toggle("text-gray-500");

            // Update heart count
            let currentCount = parseInt(heartCountElement.innerText);
            heartCountElement.innerText = isActive ? currentCount + 1 : currentCount - 1;
        });
    }

    // 📋 Copy button
    if (copyBtn) {
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(serviceNumber);
            alert("📋 "+ serviceName +" "+ serviceNumber + " copied");
            
            // Update copy count in navbar
            let copyCount = parseInt(copyCountElement.innerText);
            copyCount += 1;
            copyCountElement.innerText = copyCount;
        });
    }

    // 📞 Call button
    if (callBtn) {
        callBtn.addEventListener("click", function () {
            let coins = parseInt(coinElement.innerText);

            if (coins < 20) {
                alert("Not enough coins to make a call!");
                return;
            }

            coins -= 20;
            coinElement.innerText = coins;

            alert("📞Calling.. " + serviceName + " at " + serviceNumber + ". 20 coins deducted.");

            // Add to call history - dynamically fill when call button clicked
            const div = document.createElement("div");
            div.className = "flex justify-between items-center bg-[#86848413] p-2 rounded-sm mt-3";
            div.innerHTML = `
                <div>
                    <h3 class="font-[500]">${serviceName}</h3>
                    <h4 class="font-[600] text-[#6d6c6c]">${serviceNumber}</h4>
                </div>
                <p class="text-[11px]">${new Date().toLocaleTimeString()}</p>
            `;
            callHistory.appendChild(div);
        });
    }
}

// Clear History button functionality
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Check if history is already empty
        if (callHistory.children.length === 0) {
            alert("Call history is already empty!");
            return;
        }
        
        // Clear all data from call history
        callHistory.innerHTML = '';
        alert("Call history cleared successfully!");
    });
}