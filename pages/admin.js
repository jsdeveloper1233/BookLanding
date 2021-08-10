import React from "react";
var axios = require('axios');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: [],
            page: 1,
            pageSize: 0
        }
    }

    componentDidMount() {
        this.reload(1, 10);
    }

    reload(newPage, pageSize) {

        if(newPage < 1){
            newPage = 1;
        }

        axios.get("/api/admin/orders?page=" + newPage + "&pageSize=" + pageSize)
            .then((x) => {
                this.setState({
                    total: x.data.total,
                    page: x.data.page,
                    pageSize: x.data.pageSize,
                    data: x.data.data.map(d => {
                        return {
                            id: d.id,
                            orderNumber: d.orderNumber,
                            body: JSON.parse(d.body),
                            state: d.state,
                            send: d.send,
                            createdAt: d.createdAt,
                            updatedAt: d.updatedAt
                        }
                    })
                });
            });
    }

    changeOrderState(id, orderState){
        axios.post("/api/admin/orders/state", {id: id, state: orderState})
            .then((x) => {
                this.reload(this.state.page, this.state.pageSize);
            });
    }

    getState(state) {
        switch (state) {
            case -1: return "odrzucone";
            case 0: return "oczekuje";
            case 1: return "zapłacone";
            case 2: return "anulowane";
            case 3: return "wysłane";
            case 4: return "zwrócone";
        }

        return "";
    }

    setSend(id, send){
        send = window.prompt('Podaj numer przesyłki', send);
        axios.post("/api/admin/orders/send", {id: id, send: send})
            .then((x) => {
                this.reload(this.state.page, this.state.pageSize);
            });
    }

    getActions(id, state, send) {

        let sendText = !!send ? "Edytuj numer przesyłki" : "Nadaj nr przesyłki";

        if (state === 1) {
            return <div>
                <a href="#" onClick={() => this.changeOrderState(id, 2)}>Anuluj</a>&nbsp;|&nbsp; 
                <a href="#" onClick={() => this.setSend(id, send)}>{sendText}</a>&nbsp;|&nbsp;
                <a href="#" onClick={() => this.changeOrderState(id, 3)}>Wysłano</a>
            </div>
        } else if (state === 3) {
            return <div>
                <a href="#" onClick={() => this.setSend(id, send)}>{sendText}</a>&nbsp;|&nbsp;
                    <a href="#" onClick={() => this.changeOrderState(id, 1)}>Anuluj (zapłacono)</a>&nbsp;|&nbsp; 
                    <a href="#" onClick={() => this.changeOrderState(id, 4)}>Zwrócono</a>
            </div>
        }
    }

    getExtraListItem(s) {
        if(!!s.body.extra) {
            return <li>{s.body.extra.product.sku} (ilość: {s.body.extra.quantity})</li>
        }

        return null;
    }

    render() {

        var canPreviousPage = true;
        var canNextPage = true;
        var pageCount = Math.floor(this.state.total / this.state.pageSize);
        if (this.state.total % this.state.pageSize != 0) {
            pageCount = pageCount + 1;
        }

        return (

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered" style={{width:'auto'}}>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Numer zamówienia</th>
                                        <th>Dodano</th>
                                        <th>Zaktualizowano</th>
                                        <th>Cena</th>
                                        <th>Koszt dostawy</th>
                                        <th>Całkowity koszt</th>
                                        <th>Dostawa elektryczna</th>
                                        <th>Produkty</th>
                                        <th>Klient</th>
                                        <th>Email</th>
                                        <th>Telefon</th>
                                        <th>Adres</th>
                                        <th>Miasto</th>
                                        <th>Kod pocztowy</th>
                                        <th>Województwo</th>
                                        <th>Faktura VAT</th>
                                        <th>VAT Firma</th>
                                        <th>VAT Adres</th>
                                        <th>VAT Miasto</th>
                                        <th>VAT Kod pocztowy</th>
                                        <th>VAT Województwo</th>
                                        <th>Newsletter</th>
                                        <th>Prywatność</th>
                                        <th>Regulamin</th>
                                        <th>Zaznacz wszystko</th>
                                        <th>Stan</th>
                                        <th>Numer przesyłki</th>
                                        <th style={{minWidth: '400px'}}>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "left" }}>
                                    {this.state.data.map((s) => <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.orderNumber}</td>
                                        <td>{new Date(s.createdAt).toLocaleString()}</td>
                                        <td>{new Date(s.updatedAt).toLocaleString()}</td>
                                        <td>{s.body.price/100}</td>
                                        <td>{s.body.shipping}</td>
                                        <td>{s.body.price/100 + s.body.shipping}</td>
                                        <td>{s.body.electronicShipping ? "TAK" : "NIE"}</td>
                                        <td>
                                            <ul>
                                                <li>{s.body.product.sku} (ilość: {s.body.quantity})</li>
                                                {this.getExtraListItem(s)}
                                            </ul>
                                        </td>
                                        <td>{s.body.cname}</td>
                                        <td>{s.body.email}</td>
                                        <td>{s.body.phone}</td>
                                        <td>{s.body.address}</td>
                                        <td>{s.body.city}</td>
                                        <td>{s.body.zip}</td>
                                        <td>{s.body.state}</td>
                                        <td>{s.body.vat  ? "TAK" : "NIE"}</td>
                                        <td>{s.body.vatCompany}</td>
                                        <td>{s.body.vatAddress}</td>
                                        <td>{s.body.vatCity}</td>
                                        <td>{s.body.vatZip}</td>
                                        <td>{s.body.vatState}</td>
                                        <td>{s.body.newsletter ? "TAK" : "NIE"}</td>
                                        <td>{s.body.privacy ? "TAK" : "NIE"}</td>
                                        <td>{s.body.terms ? "TAK" : "NIE"}</td>
                                        <td>{s.body.selectAll ? "TAK" : "NIE"}</td>
                                        <td>{this.getState(s.state)}</td>
                                        <td>{s.send}</td>
                                        <td>{this.getActions(s.id, s.state, s.send)}</td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pagination" style={{ padding: '0.5rem', width: "800px", margin: "auto" }}>
                    <button style={{margin: "5px"}} onClick={() => this.reload(1, this.state.pageSize)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button style={{margin: "5px"}} onClick={() => this.reload(this.state.page-1, this.state.pageSize)} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button style={{margin: "5px"}} onClick={() => this.reload(this.state.page+1, this.state.pageSize)} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button style={{margin: "5px"}} onClick={() => this.reload(pageCount, this.state.pageSize)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                    <span style={{margin: "5px"}}>
                        Strona{' '}
                        <strong>
                            {this.state.page} z {pageCount}
                        </strong>{' '}
                    </span>
                    <span style={{margin: "5px"}}>
                        | Idź do strony:{' '}
                        <input
                            type="number"
                            defaultValue={this.state.page}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) : 1
                                this.reload(page, this.state.pageSize);
                            }}
                            style={{ width: '100px' }}
                        />
                    </span>{' '}
                    <span style={{margin: "5px"}}>
                        | Liczba wierszy na stronie:{' '}
                        <select
                            value={this.state.pageSize}
                            onChange={e => {
                                this.reload(1, Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            </div>
        );
    }
}

export default Admin;