const Data = require('../models/dataModel')

const createData = async (req, res) => {
  try {
    const { name, phoneNumber, email, hobbies } = req.body

    const newData = await Data.create({ name, phoneNumber, email, hobbies })
    newData.save()
    return res.json({ message: 'success',  newData })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error saving data', error: error.message })
  }
}

const getData = async (req, res) => {
  try {
    const data = await Data.find()
    return res.json({ message: 'success', data })
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving data' })
  }
}

const updateData = async (req, res) => {
  try {
    const { id, updateData } = req.body
    
    const updatedData = await Data.findByIdAndUpdate(id, updateData, { new: true })

    return res.json({ message: 'success',  updatedData })
  } catch (error) {
    return res.status(500).json({ error: 'Error updating data' })
  }
}

const deleteData = async (req, res) => {
  try {
    const { id } = req.body

    await Data.findByIdAndRemove(id)

    return res.json({ message: 'Data deleted and renumbered' })
  } catch (error) {
    return res.status(500).json({ error: 'Error renumbering data' })
  }
}

module.exports = { createData, getData, updateData, deleteData }
