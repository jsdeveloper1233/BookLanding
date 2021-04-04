var options = {
    ebook: {
        sku: 'ebook',
        name: 'Wersja eBook',
        description: 'Sekrety Rozwoju Osobistego - Wersja eBook',
        price: 38.90,
        shipping: 0,
        electronicShipping: true,
        image: '/images/ebook-mockup.jpg',
        template: 'd-43a4ce7ca5344d3c89282454be042e30',
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
    paperCopy: {
        sku: 'papierowa',
        name: 'Wersja papierowa książki',
        description: 'Sekrety Rozwoju Osobistego - Wersja papierowa książki',
        price: 39.90,
        shipping: 14.90,
        electronicShipping: false,
        image: '/images/ksiazka-2.png',
        template: 'd-889a4f6a165a425cb98e7dae11baa998',
        links: [
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
        image: '/images/pakiet.jpg',
        template: 'd-58f0808630ff4b2483efc4b88e8995f0',
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