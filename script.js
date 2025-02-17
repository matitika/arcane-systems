document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll(".book-now-btn");

    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "booking.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#appointment-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        defaultHour: 10,
        defaultMinute: 0,
        disableMobile: true
    });
});

function confirmBooking() {
    window.location.href = "confirmation.html";
}
