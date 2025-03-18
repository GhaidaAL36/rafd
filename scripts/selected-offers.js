document.addEventListener("DOMContentLoaded", function() {
    const offersContainer = document.getElementById("offers-list");
    const offers = JSON.parse(sessionStorage.getItem("offers"));

    if (!offers || offers.length === 0) {
        offersContainer.innerHTML = '<p>لا توجد عروض متاحة.</p>';
        return;
    }

    offers.forEach(offer => {
        const offerElement = document.createElement("div");
        offerElement.classList.add("offer-card");

        offerElement.innerHTML = `
            <h2>${offer.bank}</h2>
            <p>نسبة الفائدة: ${offer.interestRate}%</p>
            <p>القسط الشهري: ${offer.monthlyInstallment} ريال</p>
    
            <div class="extra-info">
                
                <p>مدة السداد: ${offer.duration} شهر</p>
                <p>إجمالي السداد: ${offer.totalRepayment} ريال</p>
                <a href="#" class="apply-btn">قدم بطلب القرض</a>
            </div>
        `;

        offersContainer.appendChild(offerElement);
    });
});
