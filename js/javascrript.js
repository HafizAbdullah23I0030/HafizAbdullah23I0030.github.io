// Scroll to Top Button Script
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Accordion Script
document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const section = btn.parentElement;
        section.classList.toggle("active");
    });
});
