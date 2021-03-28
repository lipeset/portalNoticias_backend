const express = require('express');
const Classification = require('../models/teamClassification');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const classif = await Classification.find().populate('team');

        if (classif.length < 1) {
            return res.send("Nenhuma classificação.")
        } else {
            return res.send(classif);
        }

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todas as classificações' })
    }
})

router.get('/:classificationId', async (req, res) => { //GET BY ID
    try {
        const classif = await Classification.findById(req.params.classificationId).populate('team');

        return res.send(classif);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar a classificação' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVA CLASSIFICAÇÃO
    try {
        const classif = await Classification.create(req.body);

        return res.send({ classif });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:classificationId', async (req, res) => { //ATUALIZAR CLASSIFICAÇÃO EXISTENTE
    try {
        const classificationUpdate = req.body;

        const classif = await Classification.findByIdAndUpdate(req.params.classificationId, classificationUpdate, { new: true });

        return res.send({ classif });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:classificationId', async (req, res) => { //DELETAR NOTÍCIA
    try {
        await Classification.findByIdAndRemove(req.params.classificationId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir a classificação' })
    }
})

module.exports = app => app.use('/teamclassification', router);