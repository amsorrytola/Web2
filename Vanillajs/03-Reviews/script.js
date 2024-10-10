const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        about: "I am a web developer. I love to code."
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        about: "I am a web designer. I love to design."
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "COOK",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        about: "I am a cook. I love to cook."
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "THE BOSS",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        about: "I am a boss. I love to boss around."
    },
    {
        id: 5,
        name: "John Doe",
        job: "CEO",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        about: "I am a CEO. I love leading teams."
    }
];

let currentReview = 0;
const img = document.querySelector("#image1");
const name = document.querySelector("#Name");
const job = document.querySelector("#Job");
const about = document.querySelector("#about");
const buttons = document.querySelectorAll(".button");
const reviewCard = document.querySelector('.review-card');

function displayReview(index) {
    reviewCard.classList.add('fade-out');
    setTimeout(() => {
        const review = reviews[index];
        img.src = review.img;
        name.textContent = review.name;
        job.textContent = review.job;
        about.textContent = review.about;
        reviewCard.classList.remove('fade-out');
        reviewCard.classList.add('fade-in');
        setTimeout(() => {
            reviewCard.classList.remove('fade-in');
        }, 600);
    }, 600);
}

displayReview(currentReview);

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnType = e.target.textContent;
        if (btnType === "⟩") {
            currentReview++;
            if (currentReview > reviews.length - 1) currentReview = 0;
        } else if (btnType === "⟨") {
            currentReview--;
            if (currentReview < 0) currentReview = reviews.length - 1;
        } else if (btnType === "Surprise Me") {
            currentReview = Math.floor(Math.random() * reviews.length);
        }
        displayReview(currentReview);
    });
});
