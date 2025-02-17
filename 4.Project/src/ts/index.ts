
import { Pizza, PizzaModel } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;
function createPizzaTemplate(Pizza:PizzaModel):string{
    return `
    <div class = "pizza">
    <h2>${Pizza.price}</h2>
    <p class="toppings">${Pizza.toppings.join(', ')}</p>
        <p>${Pizza.description}</p>
        <span>$${Pizza.price}</span>
    </div>  
    `
}

function renderTemplates(templates: string[], parent: Element): void {
  const templateElement = document.createElement("template");

  for (const t of templates) {
    templateElement.innerHTML += t;
  }

  parent.append(templateElement.content);
}

document.addEventListener('DOMContentLoaded', async () => {
 const pizzas = await Pizza.loadAll()
 console.log(pizzas);

 const PizzaTemplates = pizzas.map(createPizzaTemplate)
  renderTemplates(PizzaTemplates,rootElement)
})