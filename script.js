document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('kapcsolatForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // ne küldje el automatikusan az űrlapot

        // Mezők lekérése
        const nev = document.getElementById('nev').value.trim();
        const email = document.getElementById('email').value.trim();
        const kor = document.getElementById('kor').value.trim();
        const varos = document.getElementById('varos').value;
        const uzenet = document.getElementById('uzenet').value.trim();

        let hibak = [];

        // Név ellenőrzés
        if (nev.length < 10) {
            hibak.push("A névnek legalább 10 karakter hosszúnak kell lennie.");
        }

        // Email ellenőrzés
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            hibak.push("Az email formátuma érvénytelen.");
        }

        // Életkor ellenőrzés
        if (kor === "" || isNaN(kor) || kor < 1 || kor > 120) {
            hibak.push("Az életkornak 1 és 120 közé kell esnie.");
        }

        // Város ellenőrzés
        if (varos === "") {
            hibak.push("A várost kötelező kiválasztani.");
        }

        // Üzenet ellenőrzés
        if (uzenet.length < 10) {
            hibak.push("Az üzenetnek legalább 10 karakter hosszúnak kell lennie.");
        }

        // Hibák kiírása vagy sikeres üzenet
        if (hibak.length > 0) {
            alert("Hibák:\n\n" + hibak.join("\n"));
        } else {
            alert("Sikeres elküldés! Köszönjük a kitöltést.");
            form.reset(); // ürítjük az űrlapot
        }
    });
});
