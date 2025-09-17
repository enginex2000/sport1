function showReply(message, type="info") {
    if (message && message.trim() !== "") {
        Swal.fire({
            title: 'ข้อความอัตโนมัติ',
            text: message,
            icon: type,
            confirmButtonText: 'ปิด',
            timer: 5000,
            timerProgressBar: true,
            position: 'center'
        });
    }
}

function updateTimes(bookedDict, maintenance=false) {
    const court = document.getElementById("courts").value;
    const timeSelect = document.getElementById("times");
    const selectedDate = document.getElementById("datePicker").value;

    const bookedTimes = (bookedDict[selectedDate] && bookedDict[selectedDate][court]) || [];

    for (let option of timeSelect.options) {
        let baseText = option.getAttribute("data-label") || option.value;
        option.text = baseText;
        option.disabled = false;

        if (bookedTimes.includes(option.value)) {
            option.disabled = true;
            option.text += " (ถูกจองแล้ว)";
        }

        if (maintenance) {
            option.disabled = true;
            option.text += " (ปิดปรับปรุง)";
        }
    }
}
