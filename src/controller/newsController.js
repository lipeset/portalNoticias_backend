const express = require('express');
const New = require('../models/news');
const Pilot = require('../models/pilot');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const news = await New.find().populate('pilots');

        return res.send(news);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todas as notícias' })
    }
})

router.get('/:newId', async (req, res) => { //GET BY ID
    try {
        const news = await New.findById(req.params.newId).populate('pilots');

        return res.send(news);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar a notícia' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVA NOTÍCIA
    try {
        const news = await New.create(req.body);

        return res.send({ news });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:newId', async (req, res) => { //ATUALIZAR NOTÍCIA EXISTENTE
    try {
        const newsUpdate = req.body;

        const news = await New.findByIdAndUpdate(req.params.newId, newsUpdate, { new: true });

        return res.send({ news });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:newId', async (req, res) => { //DELETAR NOTÍCIA
    try {
        await New.findByIdAndRemove(req.params.newId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir a notícia' })
    }
})

module.exports = app => app.use('/news', router);