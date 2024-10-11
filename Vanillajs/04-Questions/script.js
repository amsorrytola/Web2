document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.parentElement.nextElementSibling;
            const isActive = answer.style.display === "block";

            document.querySelectorAll(".answer").forEach((ans) => {
                ans.style.display = "none";
            });

            document.querySelectorAll(".btn").forEach((btn) => {
                btn.textContent = "+";
            });

            if (!isActive) {
                answer.style.display = "block";
                button.textContent = "-";
            }
        });
    });
});
