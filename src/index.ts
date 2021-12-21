document.addEventListener("DOMContentLoaded", function () {
  sayGreeting();
});

const sayGreeting = (): void => {
  setTimeout(() => {
    let greeting: HTMLElement = document.createElement("p");
    greeting.innerText = "I'm using TypeScript!";
    document.getElementById("info")?.appendChild(greeting);
  }, 3000);
};
