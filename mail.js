const axios = require('axios')

class Mails {

    constructor() {

    }

    // MAIL DO KLIENTA
    //email do klienta, zamówienie zostało przyjęte, transakcja została rozpoczęta
    //*********************************************** */
    async sendNewOrderEmail(order, state) {
        const {cname, email, address, zip, city, phone, vatCompany, vatNip,  vatAddress, vatZip, vatCity, quantity, shipping, price, product, extra} = state;
        await axios.post("https://api.sendgrid.com/v3/mail/send", {
            "personalizations": [
                {
                    "to": [
                        {
                            "email": email,
                            "name": cname
                        }
                    ],
                    "dynamic_template_data": {
                        "data": `
                        <p>Witaj ${cname}, <br />
                        <br />
                        Dziękujemy za złożenie zamówienia w Sekretyrozwojuosobistego.pl.<br />
                        Jak tylko płatność będzie potwierdzona, wyślemy Ci kolejną wiadomość z potwierdzeniem zaksięgowania płatności.
                        </p>
                        <strong>Szczegóły dotyczące zamówienia</strong>
                        <p><strong>Numer zamówienia:</strong> #${order.id} <br />
                        <strong>Data zamówienia:</strong> ${(new Date()).toLocaleDateString('pl-PL')}</p>
                    `,
                    "shippingAddress": `
                    <p>
                    ${cname}<br />
                    ${address} <br/>
                    ${zip} ${city} <br/>
                    ${phone}
                    </p>`,
                    
                    "invoiceData": `<p>
                    Firma: ${vatCompany}</br>
                    NIP: ${vatNip}</br>
                    Adres: ${vatAddress} <br/>
                    Kod: ${vatZip} ${vatCity}
                    </p>`,

                    "shippingMethod": shipping > 0 ? `<p>Kurierem 24h-48h</p>` : `<p>Wysyłka elektroniczna</p>`,

                    "totalPrice": `<p>Kwota do zapłaty: ${price / 100} zł </p>`,

                    "productBought": `${product.name}`, //drugi produkt ${extra.product.name}
                    "productBoughtQty": `${quantity}`, //ilość drugiego produktu ${extra.quantity}



                },
                    
                },
            ],
            "from": {
                "email": "sergio@sergiosdorje.com",
                "name": "Sergio S Dorje"
            },
            "template_id": "d-6c787146340a43e9bfa66a707882d7fb"
        }, {
            headers: {
                "Authorization": process.env.SENDGRID_AUTH_TOKEN
            }
        })
    }



// MAIL DO ADMINA
// email do Admina, potwierdzenie że transakcja zakończyła się sukcesem
//*********************************************** */
    async sendAuthorEmail({ cname, email, phone, address, city, state, zip, newsletter, product, quantity, privacy, terms, comment, statement, vat, vatCompany, vatNip, vatAddress, vatCity, vatState, vatZip }) {
        await axios.post("https://api.sendgrid.com/v3/mail/send", {
            "personalizations": [
                {
                    "to": [
                        {
                            "email": "sergio@sergiosdorje.com",
                            "name": "Sergio S Dorje"
                        }
                    ],
                    "dynamic_template_data": {
                        "data": `<h2>Wyślij do:</h2>
                    <div>
                    Imię i nazwisko: ${cname} <br/>
                    Adres: ${address} <br/>
                    Kod: ${zip} <br/>
                    Miejscowość: ${city} <br/>
                    <br/>
                    Tel: ${phone} <br/>
                    Email: ${email}
                    </div>
                    <br/>
                    <div>
                    <h2>Zamówienie</h2>
                    Produkt zamówiony: ${product.name}<br/>
                    Ilość sztuk: ${quantity}<br/>
                    ${product.extra ? `Produkt zamówiony: ${extra.product.name}<br/>
                    Ilość sztuk: ${extra.quantity}<br/>` : ''}
                    Komentarz: ${comment}
                    </div>
                    <br/>
                    <div>
                    <h2>Dodatkowe informacje</h2>
                    Polityka prywatnośći zaznaczona: ${privacy}<br/>
                    Regulamin zaakceptowany: ${terms}<br/>
                    Zapisał się do newslettera: ${newsletter}
                    <br/>
                    <br/>
                    <h2>Dane do faktury</h2>
                    Wystawić fakturę: ${vat}</br>
                    Firma: ${vatCompany}</br>
                    NIP: ${vatNip}</br>
                    Adres: ${vatAddress} <br/>
                    Kod: ${vatZip} <br/>
                    Miejscowość: ${vatCity} <br/>
                    <br/>
                    <br/>
                    Tytuł przelewu: ${statement}
                    </div>
                    `

                        // "data": "Name: "+cname+" <br/> Email: "+email+"<br/> Phone: "+phone+"<br/> Address: "+address+"<br/> City: "+city+"<br/> State: "+state+"<br/>ZIP: "+zip+ "<br/> Subscribed to newsletter: "+newsletter +"<br/> Product:" + product + "<br/> Quantity:" + quantity + "<br/> Privacy:" + privacy + "<br /> Terms:" +  terms+ "<br/> Comment: "+comment
                    },
                },
            ],
            "from": {
                "email": "sergio@sergiosdorje.com",
                "name": "Sergio S Dorje"
            },
            "template_id": "d-e915b50ef86944e6a1c1b050174aca00"
        }, {
            headers: {
                "Authorization": process.env.SENDGRID_AUTH_TOKEN
            }
        })
    }

    
    // MAIL DO KLIENTA
    //email do klienta, zamówienie zostało anulowane
    //*********************************************** */
    async sendRejectOrderEmail(order, state) {
        await axios.post("https://api.sendgrid.com/v3/mail/send", {
            "personalizations": [
                {
                    "to": [
                        {
                            "email": state.email,
                            "name": state.cname
                        }
                    ],
                    "dynamic_template_data": {
                        "data": `
                    <p>Szanowni Państwo,</p>

                    <p>Zamówienie #${order.id} z dnia ${order.createdAt.toLocaleDateString('pl-PL')} zostało anulowane. W razie jakichkolwiek pytań prosimy o kontakt.</p>
                    
                    
                    <p>Serdecznie pozdrawiamy,</p>
                    <p>Sekretyrozwojuosobistego.pl</p>
                    <
                    `

                        // "data": "Name: "+cname+" <br/> Email: "+email+"<br/> Phone: "+phone+"<br/> Address: "+address+"<br/> City: "+city+"<br/> State: "+state+"<br/>ZIP: "+zip+ "<br/> Subscribed to newsletter: "+newsletter +"<br/> Product:" + product + "<br/> Quantity:" + quantity + "<br/> Privacy:" + privacy + "<br /> Terms:" +  terms+ "<br/> Comment: "+comment
                    },
                },
            ],
            "from": {
                "email": "sergio@sergiosdorje.com",
                "name": "Sergio S Dorje"
            },
            "template_id": "d-e915b50ef86944e6a1c1b050174aca00"
        }, {
            headers: {
                "Authorization": process.env.SENDGRID_AUTH_TOKEN
            }
        })
    }
}

module.exports = Mails;