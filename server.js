const express = require('express');
const { sequelize, Corrida } = require('./models');

const app = express();
const port = 3000;

app.use(express.json());

sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas sincronizadas!')
});

app.get('/', (req, res) => {
    res.send('API de Corridas com Sequelize funcionando!');
});

app.post('/corrida', async (req,res) => {
    const { nomeDoEvento, dataDoEvento, pilotos } = req.body;

    try {
        const pilotosString = Array.isArray(pilotos) ? pilotos.join(', ') : pilotos;

        const corrida = await Corrida.create({ 
            nomeDoEvento, 
            dataDoEvento, 
            pilotos: pilotosString
        });
        res.status(201).json(corrida);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/todasAsCorridas', async (req,res) => {
    try {
        const todasAsCorridas = await Corrida.findAll();

        todasAsCorridas.forEach(corrida => {
            corrida.pilotos = corrida.pilotos.split(', ');
        });

        res.json({ todasAsCorridas });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/corrida/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const corrida = await Corrida.findByPk(id);
        if (!corrida) {
            return res.status(404).json({ error: 'Corrida não encontrada' });
        }
        corrida.pilotos = corrida.pilotos.split(', ');
        res.json({ corrida });    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/corrida/:id', async (req, res) => {
    const { id } = req.params;
    const { nomeDoEvento, dataDoEvento, pilotos } = req.body;

    try {
        const corrida = await Corrida.findByPk(id);
        if (!corrida) {
            return res.status(404).json({ error: 'Corrida não encontrada!' });
        }

        corrida.nomeDoEvento = nomeDoEvento;
        corrida.dataDoEvento = dataDoEvento;
        corrida.pilotos = Array.isArray(pilotos) ? pilotos.join(', ') : pilotos;
        await corrida.save();

        res.json({ message: 'Corrida atualizada com sucesso', corrida });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/corrida/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const corrida = await Corrida.findByPk(id);
        if (!corrida) {
            return res.status(404).json({ error: 'Corrida não encontrada!' });
        }

        await corrida.destroy();
        res.json({ message: 'Corrida deletada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.listen(port, () => {
    console.log('Servidor em funcionamento!');
})
