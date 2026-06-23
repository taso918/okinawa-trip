/* ==========================================
   Okinawa Trip 2026
   Kana & Masatoshi
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const fades = document.querySelectorAll(".fade");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    fades.forEach((fade) => {
        observer.observe(fade);
    });
});
