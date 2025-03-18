document.getElementById("comparison-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const salary = parseFloat(document.getElementById("salary").value);
    const requestedAmount = parseFloat(document.getElementById("requested-amount").value);
    const duration = parseInt(document.getElementById("duration").value);

    if (isNaN(salary) || isNaN(requestedAmount) || isNaN(duration) || salary <= 0 || requestedAmount <= 0 || duration <= 0) {
        alert("يرجى إدخال قيم صحيحة.");
        return;
    }

    const offers = calculateOffers(salary, requestedAmount, duration);

    if (offers.length === 0) {
        alert("المبلغ المطلوب غير متاح بناءً على راتبك.");
        return;
    }

    sessionStorage.setItem("offers", JSON.stringify(offers));
    window.location.href = "selected-offers.html";
});

// Function to calculate loan offers
function calculateOffers(salary, requestedAmount, duration) {
    const fakeBanks = [
        { name: "بنك الراجحي", interestRate: 3.5 },
        { name: "بنك الرياض", interestRate: 4.2 },
        { name: "بنك الأهلي", interestRate: 5.0 }
    ];

    const offers = [];

    fakeBanks.forEach(bank => {
        const maxLoanAmount = salary * 10;

        if (requestedAmount <= maxLoanAmount) {
            const totalRepayment = requestedAmount * (1 + (bank.interestRate / 100) * (duration / 12));
            const monthlyInstallment = totalRepayment / duration;

            if (monthlyInstallment <= salary * 0.5) {
                offers.push({
                    bank: bank.name,
                    interestRate: bank.interestRate,
                    monthlyInstallment: monthlyInstallment.toFixed(2),
                    totalRepayment: totalRepayment.toFixed(2)
                });
            }
        }
    });

    return offers;
}
