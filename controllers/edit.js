const ItemList = require('../models/ItemList')

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id
        console.log(id);
        try {
            const items = await ItemList.find()
            res.render('edit.ejs', {itemList: items, itemId: id})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
      deleteItem: async (req, res) => {
        // try {
        //     const items = await ItemList.find()
        //     res.render('index.ejs', {itemList: items})
        // } catch (err) {
        //     if (err) return res.status(500).send(err)
        // }
    },
    updateItem: async (req, res) => {
        // const newItem = new ItemList(
        //     {
        //         textInput: req.body.textInput,
        //         numInput: req.body.numInput,
        //     }
        // )
        // try {
        //     await newItem.save()
        //     console.log(newItem)
        //     res.redirect('/')
        // } catch (err) {
        //     if (err) return res.status(500).send(err)
        //     res.redirect('/')
        // }
    }
}