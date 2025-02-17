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
