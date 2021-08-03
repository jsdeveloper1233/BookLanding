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
                            send: d.send
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
        if (state === 1) {
            return <div>
                <p>
                    <button onClick={() => this.changeOrderState(id, 2)}>Anuluj</button>
                </p>
                <p>
                    <button onClick={() => this.setSend(id, send)}>Nadaj nr przesyłki</button>
                </p>
                <p>
                    <button onClick={() => this.changeOrderState(id, 3)}>Wysłano</button>
                </p>
            </div>
        } else if (state === 3) {
            return <div>
                <p>
                    <button onClick={() => this.setSend(id, send)}>Nadaj nr przesyłki</button>
                </p>
                <p>
                    <button onClick={() => this.changeOrderState(id, 4)}>Zwrócono</button>
                </p>

            </div>
        }
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
                    <div className="col-lg-12 col-md-12">
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Numer zamówienia</th>
                                        <th style={{ maxWidth: "200px" }}>Zamówienie</th>
                                        <th>Stan</th>
                                        <th>Numer przesyłki</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "left" }}>
                                    {this.state.data.map((s) => <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.orderNumber}</td>
                                        <td>
                                            {
                                                Object.keys(s.body).map((key) =>
                                                    <div key={key}><b>{key}</b>: {JSON.stringify(s.body[key])}</div>)
                                            }
                                        </td>
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