var options = {
    paperCopy: {
        sku: 'papierowa',
        name: 'Wersja papierowa książki "Sekrety Rozwoju Osobistego',
        description: 'Sekrety Rozwoju Osobistego - Wersja papierowa książki',
        price: 49.90,
        shipping: 14.90,
        electronicShipping: false,
        image: '/images/sekrety-rozwoju-osobistego-papier-gr-s.jpg',
        template: 'd-6160895a947c42fba0dd968343725a14',
        links: [
        ],
        mailerLiteGroupID: 107311903
    },
    ebook: {
        sku: 'ebook',
        name: 'Wersja eBook',
        description: 'Sekrety Rozwoju Osobistego - Wersja eBook',
        price: 49.90,
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
        ],
        mailerLiteGroupID: 107311903
    },
    bundle: {
        sku: 'pakiet',
        name: 'Pakiet',
        description: 'Sekrety Rozwoju Osobistego - Pakiet',
        originalPrice: 131.60,
        price: 89.90,
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
        ],
        mailerLiteGroupID: 107311903
    },
    radykalnaEbook: {
        sku: 'radykalnaPrawdaEbook',
        name: 'Radykalna prawda w związku e-book',
        description: 'Radykalna prawda w związku - Wersja e-book',
        price: 16.90,
        shipping: 0,
        electronicShipping: true,
        image: '/images/radykalna-prawda-w-zwiazku-s.jpg',
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
        ],
        mailerLiteGroupID: 107311903
    },
    // ebookRadykalnaSekrety: {
    //     sku: 'ebookRadykalnaSekrety',
    //     name: 'Radykalna prawda w związku e-book + Sekrety rozwoju osobistego ebook',
    //     description: 'Radykalna prawda w związku i Sekrety rozwoju osobistego - Wersje e-book',
    //     price: 48.90,
    //     shipping: 0,
    //     electronicShipping: true,
    //     image: '/images/radykalna-sekrety-ebooks.jpg',
    //     template: 'd-6160895a947c42fba0dd968343725a14',
    //     // extra: {
    //     //     key: 'paperCopy',
    //     //     title: 'Kup jeszcze książkę papierową!',
    //     //     text: 'Testowy tekst. Dodaj jeszcze to do koszyka'
    //     // },
    //     links: [
    //         {
    //             file: "files/sample.pdf",
    //             name: "sample"
    //         }
    //     ],
    //     mailerLiteGroupID: 107311903
    // },
}

options.bundle.discount = Math.round((options.bundle.originalPrice - options.bundle.price) * 100) / 100;

module.exports = options;