const express = require('express');
const Pilot = require('../models/pilot');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const pilots = await Pilot.find();

        return res.send(pilots);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todos os pilotos' })
    }
})

router.get('/:pilotId', async (req, res) => { //GET BY ID
    try {
        const pilot = await Pilot.findById(req.params.pilotId);

        return res.send(pilot);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar o piloto' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVO PILOTO
    try {
        const { name } = req.body;

        if (await Pilot.findOne({ name }))
            return res.status(400).send({ error: 'Piloto já existe' });

        const pilot = await Pilot.create(req.body);

        return res.send({ pilot });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:pilotId', async (req, res) => { //ATUALIZAR PILOTO EXISTENTE
    try {
        const pilotUpdate = req.body;

        const pilot = await Pilot.findByIdAndUpdate(req.params.pilotId, pilotUpdate, { new: true });

        return res.send({ pilot });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:pilotId', async (req, res) => { //DELETAR PILOTO
    try {
        await Pilot.findByIdAndRemove(req.params.pilotId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir piloto' })
    }
})

module.exports = app => app.use('/pilots', router);