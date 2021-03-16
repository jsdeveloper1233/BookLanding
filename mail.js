const axios = require('axios')

class Mails {

    constructor() {

    }


//email do autora, potwierdzenie że transakcja zakończyła się sukcesem
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
                    Produkt zamówiony: ${product}<br/>
                    Ilość sztuk: ${quantity}<br/>
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

    //email do klienta, zamówienie zostało przyjęte, transakcja została rozpoczęta
    async sendNewOrderEmail(order, state) {
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
                    <p>Szczegóły dotyczące zamówienia #${order.id} z dnia ${(new Date()).toLocaleDateString('pl-PL')}</p>
                    <p>Metoda płatności: Przelew elektroniczny - Przelewy24</p>
                    <p>Po zatwierdzeniu płatności, otrzymasz kolejną wiadomość z potwierdzeniem pomyślnego zamówienia.</p>
                    <p>W razie problemów lub pytań prosimy o kontakt.</p>

                    <div>Adres dostarczenia:</div>
                    <div>
                    ${state.cname} <br/>
                    ${state.address}, ${state.zip} ${state.city} <br/>
                    Tel: ${state.phone} <br/>
                    Email: ${state.email}
                    </div>
                    <br/>
                    
                    <div>Dane na rachunku/fakturze:</div>
                    <div>
                    ${state.vat
                                ? `${state.vatCompany} <br/>
                    ${state.vatNip} <br/>
                    ${state.vatAddress}, ${state.vatZip} ${state.vatCity} <br/>
                    Tel: ${state.phone} <br/>
                    Email: ${state.email}`
                                : `${state.cname} <br/>
                    ${state.address}, ${state.zip} ${state.city} <br/>
                    Tel: ${state.phone} <br/>
                    Email: ${state.email}`}
                    
                    </div>

                    <p>Metoda dostawy: Przesyłka kurierska (koszt dostawy wyniósł ${state.shipping} zł)</p>

                    <p>
                    Zakupione produkty:
                    <br />
                    ${state.product}
                    <br />
                    ${state.extra ? state.extra.product.name : ''}
                    </p>

                    <p>
                        Kwota do zapłaty: ${state.price / 100} zł
                    </p>
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

    //email do klienta, zamówienie zostało anulowane
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