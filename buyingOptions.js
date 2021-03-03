module.exports = {
    ebook: {
        sku: 'ebook',
        name: 'Wersja eBook',
        description: 'Sekrety Rozwoju Osobistego - Wersja eBook',
        price: 38.9,
        shipping: 0,
        image: '/images/ebook-mockup.jpg'
    },
    paperCopy: {
        sku: 'papierowa',
        name: 'Wersja papierowa książki',
        description: 'Sekrety Rozwoju Osobistego - Wersja papierowa książki',
        price: 39.9,
        shipping: 14.9,
        image: '/images/ksiazka-2.png'
    },
    bundle: {
        sku: 'pakiet',
        name: 'Pakiet',
        description: 'Sekrety Rozwoju Osobistego - Pakiet',
        originalPrice: 90,
        price: 69.9,
        shipping: 0.0,
        discount: this.originalPrice - this.price,
        image: '/images/pakiet.jpg'
    },
}