var options = {
    paperCopy: {
        sku: 'papierowa',
        name: 'Wersja papierowa książki "Sekrety Rozwoju Osobistego',
        description: 'Sekrety Rozwoju Osobistego - Wersja papierowa książki',
        price: 39.90,
        shipping: 14.90,
        electronicShipping: false,
        image: '/images/sekrety-rozwoju-osobistego-papier-gr-s.jpg',
        template: 'd-6160895a947c42fba0dd968343725a14',
        links: [
        ]
    },
    ebook: {
        sku: 'ebook',
        name: 'Wersja eBook',
        description: 'Sekrety Rozwoju Osobistego - Wersja eBook',
        price: 38.90,
        shipping: 0,
        electronicShipping: true,
        image: '/images/sekrety-rozwoju-osobistego-ebook-gr-s.jpg',
        template: 'd-6160895a947c42fba0dd968343725a14',
        extra: {
            key: 'paperCopy',
            title: 'Kup jeszcze książkę papierową!',
            text: 'Testowy tekst. Dodaj jeszcze to do koszyka'
        },
        links: [
            {
                file: "files/sample.pdf",
                name: "sample"
            }
        ]
    },
    bundle: {
        sku: 'pakiet',
        name: 'Pakiet',
        description: 'Sekrety Rozwoju Osobistego - Pakiet',
        originalPrice: 90,
        price: 69.90,
        shipping: 0.0,
        electronicShipping: false,
        discount: 0, // to pole jest automatycznie wyliczane poniżej
        image: '/images/ksiazka-bundle-s.jpg',
        template: 'd-6160895a947c42fba0dd968343725a14',
        links: [
            {
                file: "files/sample.pdf",
                name: "sample"
            },
            {
                file: "files/other/Koło Zgody - Polish Wheel of Consent.pdf",
                name: "Koło Zgody - Polish Wheel of Consent"
            }
        ]
    },
    czygrupajestsekta: {
        sku: 'czygrupajestsekta',
        name: 'Czy grupa jest sektą?',
        description: 'Czy grupa jest sektą?',
        originalPrice: 90,
        price: 10.90,
        shipping: 0.0,
        discount: 0, // to pole jest automatycznie wyliczane poniżej
        image: '/images/pakiet.jpg',
        template: 'd-58f0808630ff4b2483efc4b88e8995f0'
    },
    test: {
        sku: 'test',
        name: 'Test',
        description: 'Testowy produkt',
        originalPrice: 123,
        price: 100,
        shipping: 20.00,
        electronicShipping: false,
        discount: 0, // to pole jest automatycznie wyliczane poniżej
        image: '/images/pakiet.jpg',
        template: 'd-58f0808630ff4b2483efc4b88e8995f0'
    }
}

options.bundle.discount = Math.round((options.bundle.originalPrice - options.bundle.price) * 100) / 100;

module.exports = options;