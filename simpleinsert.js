const { MongoClient } = require('mongodb');
const data = require('./listingData');

const dbName = 'jobs';
const colName = 'listings';

// const userName = 'holowaychuk';
// const password = 'express';
// const hostname = 'mongodb.com';

const url = `mongodb+srv://humdrumjobs:Humdrumjobs2024!@humdrumcluster.5qsd0.mongodb.net/humdrumcluster
`;

async function main(){
    const client = new MongoClient(url);

    try {
        await client.connect();
        
        const result = await client.db(dbName).collection(colName).insertMany(data);

        console.log(`Inserted ${result.insertedCount} docs`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

const client = new MongoClient(url);


const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
