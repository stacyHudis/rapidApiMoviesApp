const express = require('express');
const router  = express.Router();
const axios   = require('axios');

// retrieve all movies by title search
router.get('/movies', async (req, res) => {
    try {
        let page = parseInt(req.query.page);

        //omdb API call
        const { data } = await axios({
            method: 'GET',
            url: process.env.API_URL,
            params: {
                s: req.query.s,
                page: page,
                apiKey: process.env.API_KEY},
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json({ notes: data })
    } catch (e) {
        res.status(500).send('Error.')
    }
});

//retrieve specific movie by movieId
router.get('/movies/:movieId', async (req, res) => {
    try {
        // omdb api call
        const { data } = await axios({
            method: 'GET',
            url: process.env.API_URL,
            params: {
                i: req.params.movieId,
                apiKey: process.env.API_KEY},
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json({ notes: data })
    } catch (e) {
        res.status(500).send('Error.')
    }
});

module.exports = router;
