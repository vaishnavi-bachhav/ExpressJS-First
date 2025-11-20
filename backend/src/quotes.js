import express from "express";

const router = express.Router();

let categories = ['successQuotes', 'perseveranceQuotes', 'happinessQuotes'];

let successQuotes = [
    {
        'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        'author': 'Winston S. Churchill'
    },
    {
        'quote': 'The way to get started is to quit talking and begin doing.',
        'author': 'Walt Disney'
    }
];

let perseveranceQuotes = [
    {
        'quote': 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
        'author': 'Albert Einstein'
    },
    {
        'quote': 'Perseverance is failing 19 times and succeeding the 20th.',
        'author': 'Julie Andrews'
    }
];

let happinessQuotes = [
    {
        'quote': 'Happiness is not something ready made. It comes from your own actions.',
        'author': 'Dalai Lama'
    },
    {
        'quote': 'For every minute you are angry you lose sixty seconds of happiness.',
        'author': 'Ralph Waldo Emerson'
    }
];

// Map category name to the actual array
const quotesMap = {
    successQuotes,
    perseveranceQuotes,
    happinessQuotes
};

// Get categories
router.get("/categories", (req, res) => {
    try {
        let result = categories.map(c => `A possible category is ${c}`);
        return res.status(200).send(result.join("<br>"));
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Something went wrong; please try again."
        });
    }
});

// Quotes of a category
router.get("/quote/:category", (req, res) => {
    try {
        let category = req.params.category;
        if (!categories.includes(category)) {
            return res.status(404).json({
                error: `no category listed for ${category}`
            });
        }

        const quotesArray = quotesMap[category];

        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomIndex];

        return res.status(200).json(randomQuote);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Something went wrong; please try again."
        });
    }
});

// Add a quote
router.post('/quote/new', (req, res) => {
    const { category, quote, author } = req.body;
    if (!category || !quote || !author || !quotesMap[category]) {
        return res.status(400).json({ error: 'invalid or insufficient user input' });
    }
    quotesMap[category].push({ quote, author });
    res.type('text').send('Success!');
});

export default router;