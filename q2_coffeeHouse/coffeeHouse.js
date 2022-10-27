class Espresso {
  constructor() {
    this.milk = 60;
    this.cream = 75;
    this.latte = 100;
  }

  getMilkPrice() {
    return this.milk;
  }

  getCreamPrice() {
    return this.cream;
  }

  getLattePrice() {
    return this.latte;
  }
}

class Cappuccino {
  constructor() {
    this.milk = 80;
    this.cream = 90;
    this.latte = 125;
  }

  getMilkPrice() {
    return this.milk;
  }

  getCreamPrice() {
    return this.cream;
  }

  getLattePrice() {
    return this.latte;
  }
}

class Latte {
  constructor() {
    this.milk = 100;
    this.cream = 125;
    this.latte = 150;
  }

  getMilkPrice() {
    return this.milk;
  }

  getCreamPrice() {
    return this.cream;
  }

  getLattePrice() {
    return this.latte;
  }
}

let totalPrice = 0;

let form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let selectedCoffee = document.getElementById("coffee").value;
  let selectedAddOn = document.getElementById("addon").value;

  // console.log(selectedCoffee);
  // console.log(selectedAddOn);

  let price = 0;
  switch (selectedCoffee) {
    case "espresso":
      let esp_object = new Espresso();
      switch (selectedAddOn) {
        case "milk":
          price = esp_object.getMilkPrice();
          break;
        case "cream":
          price = esp_object.getCreamPrice();
          break;
        case "latte":
          price = esp_object.getLattePrice();
          break;

        default:
      }
      break;

    case "cappuccino":
      let cap_object = new Cappuccino();
      switch (selectedAddOn) {
        case "milk":
          price = cap_object.getMilkPrice();
          break;
        case "cream":
          price = cap_object.getCreamPrice();
          break;
        case "latte":
          price = cap_object.getLattePrice();
          break;

        default:
      }
      break;

    case "latte":
      let lat_object = new Latte();
      switch (selectedAddOn) {
        case "milk":
          price = lat_object.getMilkPrice();
          break;
        case "cream":
          price = lat_object.getCreamPrice();
          break;
        case "latte":
          price = lat_object.getLattePrice();
          break;

        default:
      }
      break;
  }

  // console.log(price);

  if (selectedCoffee !== "none" && selectedAddOn !== "none") {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(selectedCoffee));
    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(selectedAddOn));
    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(price));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("bill-body").appendChild(tr);

    totalPrice += price;
    console.log("totalPrice = ", totalPrice);
    document.getElementsByClassName(
      "total"
    )[0].innerText = `Total: Rs. ${totalPrice}`;
  }
});

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("resetted");
  const billBody = document.getElementById("bill-body");
  billBody.innerHTML = "";

  totalPrice = 0;
  console.log("totalPrice = ", totalPrice);
  document.getElementsByClassName(
    "total"
  )[0].innerText = `Total: Rs. ${totalPrice}`;
});
