import { MongoClient } from "mongodb";

export default async function handler(req, res){

    if(req.method == 'POST'){
        const data = req.body; 
       const client =  MongoClient.connect('mongodb+srv://camiguillan:cami12345@cluster0.zupnnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        //never run this in a client side code 
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        
        const result = await meetupsCollection.insertOne(data);

        client.close()

        //use the res object to send back a response 

        res.status(201).json({message: 'meetup inserted successfully'}); //something was inserted successsfully 
    }

}

//mongodb+srv://camiguillan:<db_password>@cluster0.zupnnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0