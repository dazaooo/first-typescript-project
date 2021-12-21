"use strict";
document.addEventListener("DOMContentLoaded", function () {
    sayGreeting();
});
const sayGreeting = () => {
    setTimeout(() => {
        var _a;
        let greeting = document.createElement("p");
        greeting.innerText = "I'm using TypeScript";
        (_a = document.getElementById("info")) === null || _a === void 0 ? void 0 : _a.appendChild(greeting);
    }, 3000);
};
