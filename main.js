// 1. Prompt orqali ism so'rash
let ism = prompt("Ismingizni kiriting:");

// 2. Yangi element (h1) yaratish
let title = document.createElement("h1");

// 3. Elementga ismni yozish va CSS stillarini qo'shish
title.textContent = ism;

// Style berish (Talabga ko'ra)
title.style.color = "white";
title.style.backgroundColor = "rebeccapurple";
title.style.padding = "20px";
title.style.textAlign = "center";
title.style.borderRadius = "10px";
title.style.fontFamily = "sans-serif";
title.style.marginTop = "50px";

// 4. Elementni sahifaning (body) boshiga qo'shish
document.body.prepend(title);
