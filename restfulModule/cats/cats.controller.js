const catModel = require('./cats.model');
const catsDTO = require('./cats.DTO');

const findAll = async (req, res) => {
        try { 
            const cats = await catModel.findAll();
            const data = {
                cats: catsDTO.getCatsObject(cats)
            }
            res.send(data);
        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }      
}

const findById = async (req, res) => {
    try { 
        const cat = await catModel.findById(req.params.id);
        const data = {
            cat: catsDTO.getCatObject(cat)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const updateById = async (req, res) => {
    try { 
        const cat = await catModel.updateById(req.params.id, req.body)
        const data = {
            cat: catsDTO.getCatObject(cat)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        const data = {
            name: req.body.name,
            age: req.body.age,
            owner: req.body.owner
        }
        await catModel.create(data);
        await res.send({ status: 'create cat success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
     
        const data = {
            cats: await catModel.deleteById(req.params.id)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}






module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}

