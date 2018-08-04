const catModel = require('./cats.services');


const findAll = async (req, res) => {
        try { 
         
            const data = {
                cats: await catModel.findAll()
            }
            res.send(data);
        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }      
}

const findById = async (req, res) => {
    try { 
        const data = {
            cat: await catModel.findById(req.params.id)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const updateById = async (req, res) => {
    try { 
        const data = {
            cat: await catModel.updateById(req.params.id, req.body)
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

