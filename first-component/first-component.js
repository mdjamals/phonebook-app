import { LitElement, html } from "lit-element";

class CounterComp extends LitElement {
  constructor() {
    super();
    this.total = 0;
    this.showMethod = this.showMethod.bind(this);
  }

  static get properties() {
    return {
      total: Number,
    };
  }

  showMethod(number) {
    console.log("clicked_show" + number);
  }

  firstUpdated() {
    //this.getElementById("hideBtn").addEventListener("click", this.showMethod);
    const hideBtn = this.shadowRoot
      .getElementById("hideBtn")
      .addEventListener("click", (e) => {
        //this.hideMethod();
        console.log("clicked_hide");
        console.log(e);
      });

    const plusBtn = this.shadowRoot.getElementById("addBtn");
    plusBtn.addEventListener("click", (e) => {
      this.total += 1;
      console.log("add btn clicked");
      console.log(this.requestUpdate());
    });

    const subBtn = this.shadowRoot.getElementById("subBtn");
    subBtn.addEventListener("click", (e) => {
      this.total -= 1;
      console.log("sub btn clicked");
    });
  }

  render() {
    return html`
      <style>
        .title {
          background: black;
          color: white;
          padding: 15px 25px;
        }
      </style>
      <div class="title">
        <slot name="header"><div>Forgot Title</div></slot>
        <slot name="content"><div>Forgot Content</div></slot>
        <slot name="footer"><div>Forgot Footer</div></slot>
      </div>
      <button @click="${this.showMethod.bind(null, 1)}">Show</button>
      <button id="hideBtn">Hide</button>

      <div class="total">${this.total}</div>
      <button id="addBtn">+</button>
      <button id="subBtn">-</button>
    `;
  }
}

customElements.define("counter-comp", CounterComp);
