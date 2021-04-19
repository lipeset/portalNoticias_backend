const express = require('express');
const LastRace = require('../models/lastRace');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const lastrace = await LastRace.find().populate(['pilot', 'team']);

        if (lastrace.length < 1) {
            return res.send("Nenhuma corrida.")
        } else {
            return res.send(lastrace);
        }

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todas as corridas' })
    }
})

router.get('/:lastraceId', async (req, res) => { //GET BY ID
    try {
        const lastrace = await LastRace.findById(req.params.lastraceId).populate('pilot', 'team');

        return res.send(lastrace);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar a corrida' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVA NOTÍCIA
    try {
        const lastrace = await LastRace.create(req.body);

        return res.send({ lastrace });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:lastraceId', async (req, res) => { //ATUALIZAR NOTÍCIA EXISTENTE
    try {
        const lastraceUpdate = req.body;

        const lastrace = await LastRace.findByIdAndUpdate(req.params.lastraceId, lastraceUpdate, { new: true });

        return res.send({ lastrace });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:lastraceId', async (req, res) => { //DELETAR NOTÍCIA
    try {
        await LastRace.findByIdAndRemove(req.params.lastraceId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir a corrida' })
    }
})

module.exports = app => app.use('/lastrace', router);