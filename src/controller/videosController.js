const express = require('express');
const Video = require('../models/videos');

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const videos = await Video.find();

        if (videos.length < 1) {
            return res.send("Nenhum vídeo.")
        } else {
            return res.send(videos);
        }

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todos os vídeos' })
    }
})

router.get('/:videoId', async (req, res) => { //GET BY ID
    try {
        const videos = await Video.findById(req.params.videoId);

        return res.send(videos);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao mostrar o vídeo' })
    }
})

router.post('/register', async (req, res) => { //ADD NOVA NOTÍCIA
    try {
        const videos = await Video.create(req.body);

        return res.send({ videos });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:videoId', async (req, res) => { //ATUALIZAR NOTÍCIA EXISTENTE
    try {
        const videosUpdate = req.body;

        const videos = await Video.findByIdAndUpdate(req.params.videoId, videosUpdate, { new: true });

        return res.send({ videos });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:videoId', async (req, res) => { //DELETAR NOTÍCIA
    try {
        await Video.findByIdAndRemove(req.params.videoId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir o vídeo' })
    }
})

module.exports = app => app.use('/videos', router);