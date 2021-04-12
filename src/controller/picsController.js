const express = require('express');
const Pic = require('../models/pics');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const pics = await Pic.find();

        if (pics.length < 1) {
            return res.send("Nenhuma foto.")
        } else {
            return res.send(pics);
        }

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todas as fotos' })
    }
})

router.get('/:picId', async (req, res) => { //GET BY ID
    try {
        const pics = await Pic.findById(req.params.picId);

        return res.send(pics);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao mostrar a foto' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVA NOTÍCIA
    try {
        const pics = await Pic.create(req.body);

        return res.send({ pics });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:picId', async (req, res) => { //ATUALIZAR NOTÍCIA EXISTENTE
    try {
        const picsUpdate = req.body;

        const pics = await Pic.findByIdAndUpdate(req.params.picId, picsUpdate, { new: true });

        return res.send({ pics });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:picId', async (req, res) => { //DELETAR NOTÍCIA
    try {
        await Pic.findByIdAndRemove(req.params.picId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir a notícia' })
    }
})

module.exports = app => app.use('/pics', router);