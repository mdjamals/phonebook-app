import { LitElement, html } from "lit-element";

export default class FavouriteList extends LitElement {
  constructor() {
    super();
    this.total = 0;
    this.displayAllFavourites = this.displayAllFavourites.bind(this);
  }

  static get properties() {
    return {
      total: Number,
      allContacts: { type: Array },
    };
  }

  firstUpdated() {}

  displayAllFavourites() {
    return this.allContacts.map((contact) => {
      if (contact.favourites == "Yes") {
        return html`
          <div class="card">
            <div class="user-img"></div>
            <div class="fullname">
              <span class="text"
                >${contact.first_name} ${contact.last_name}</span
              >
              <span class="sub">Full Name</span>
            </div>
            <div class="number">
              <span class="text">${contact.phone_number}</span>
              <span class="sub">Phone Number</span>
            </div>
            <div class="state">
              <span class="text">${contact.state}</span>
              <span class="sub">State</span>
            </div>
            <div class="category">
              <span class="text">${contact.category}</span>
              <span class="sub">category</span>
            </div>
          </div>
        `;
      }
    });
  }

  render() {
    return html`
      <style>
        @import "./css/global.css";
        .favourites {
          max-width: 800px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
        }
        h2 {
          color: #3e4162;
          font-weight: 300;
          margin-top: 0;
          grid-column: 1/4;
        }
        .card {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          color: #3d4060;
          padding: 20px 0;
          border-radius: 10px;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
        }
        .card:hover {
          -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
        }
        .card .user-img {
          background-image: url("https://randomuser.me/api/portraits/men/46.jpg");
          background-size: cover;
          background-position: center center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          grid-column: 1/3;
          justify-self: center;
        }
        .fullname,
        .number,
        .state,
        .category {
          font-size: 1.4rem;
          font-weight: 500;
          grid-column: 1/3;
          padding: 10px 0;
        }
        .fullname {
          font-weight: 700;
          text-transform: capitalize;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .number,
        .state {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .text {
          display: block;
          text-align: center;
        }
        .sub {
          display: block;
          color: #b4b5c4;
          font-weight: 300;
          font-size: 0.8rem;
          text-align: center;
        }
      </style>
      <section class="favourites">
        <h2>Favourites</h2>
        ${this.displayAllFavourites()}
      </section>
    `;
  }
}

customElements.define("favourite-list", FavouriteList);
