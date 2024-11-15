// التأثيرات التفاعلية يمكن أن تشمل تغيير لون الشهادات أو التفاعل مع الصفحة عند التمرير.

document.addEventListener("DOMContentLoaded", () => {
    const certificates = document.querySelectorAll(".certificate");
    
    certificates.forEach(certificate => {
        certificate.addEventListener("mouseover", () => {
            certificate.style.transform = "scale(1.05)";
            certificate.style.transition = "transform 0.3s ease-in-out";
        });

        certificate.addEventListener("mouseout", () => {
            certificate.style.transform = "scale(1)";
        });
    });
});
