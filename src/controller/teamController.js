const express = require('express');
const Team = require('../models/team');
const Pilot = require('../models/pilot')

const router = express.Router();


router.get('/', async (req, res) => { //GET ALL
    try {
        const teams = await Team.find().populate(['pilots']);

        return res.send(teams);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todas as equipes' })
    }
})

router.get('/:teamId', async (req, res) => { //GET BY ID
    try {
        const team = await Team.findById(req.params.teamId).populate(['pilots']);

        return res.send(team);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar a equipe' })
    }
})

router.post('/register', async (req, res) => { //POSTAR NOVA EQUIPE
    try {
        const { fullName, alias, pilots } = req.body;

        const team = await Team.create({ fullName, alias });

        if (pilots != undefined) {
            await Promise.all(pilots.map(async pilot => {
                const teamPilot = new Pilot({ ...pilot, team: team._id });

                await teamPilot.save();
                team.pilots.push(teamPilot);
            }));
        }

        await team.save();

        return res.send({ team });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' });
    }
});

router.put('/:teamId', async (req, res) => { //ATUALIZAR EQUIPE EXISTENTE
    try {
        const { pilots } = req.body;
        const fullTeam = req.body;

        const team = await Team.findByIdAndUpdate(req.params.teamId, fullTeam, { new: true });

        if (pilots != undefined) {
            team.pilots = [];
            await Pilot.remove({ team: team._id });

            await Promise.all(pilots.map(async pilot => {
                const teamPilot = new Pilot({ ...pilot, team: team._id });

                await teamPilot.save();

                team.pilots.push(teamPilot);
            }));
        }

        await team.save();

        return res.send({ team });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Falha na atualização' })

    }
});

router.delete('/:teamId', async (req, res) => { //DELETAR EQUIPE
    try {
        await Team.findByIdAndRemove(req.params.teamId);

        return res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir equipe' })
    }
})

module.exports = app => app.use('/teams', router);