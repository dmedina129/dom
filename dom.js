const main = document.querySelector('main');
const joke = "What does a pig put on dry skin? Oinkment.";
const joke2 = "What did one plate say to the other plate? Dinner's on me."
const joke3 = "How do celebrities stay cool? They have many fans."

const template = `
    <main>
        <header> My Jokes </header>
        <ul>
        <li> ${joke}</li>
        <li> ${joke2}</li>
        <li> ${joke3}</li>
        </u/
    </main>
`;
main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!"
main.appendChild(p);
