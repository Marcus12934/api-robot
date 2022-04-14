const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const url = "mongodb://root:password@localhost:27017"

let getAllRobots = async (req, res) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('local')
    const collection = db.collection('products')
    const products = await collection.find({}).toArray()

    res.json(products)
}

let getAprons = async (req, res) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('local')
    const collection = db.collection('products')
    const products = await collection.find({category: "Aprons"}).toArray()

    res.json(products)
}

let getBaseballHats = async (req, res) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('local')
    const collection = db.collection('products')
    const products = await collection.find({category: "Baseball Hats"}).toArray()

    res.json(products)
}

let getMugs = async (req, res) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('local')
    const collection = db.collection('products')
    const products = await collection.find({category: "Mugs"}).toArray()

    res.json(products)
}

let getTShirts = async (req, res) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('local')
    const collection = db.collection('products')
    const products = await collection.find({category: "T-shirts"}).toArray()

    res.json(products)
}

module.exports.getAllRobots = getAllRobots
module.exports.getAprons = getAprons
module.exports.getBaseballHats = getBaseballHats
module.exports.getMugs = getMugs
module.exports.getTShirts = getTShirts
