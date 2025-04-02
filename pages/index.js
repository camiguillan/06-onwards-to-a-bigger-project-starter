import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList.js';
import Head from 'next/head.js';
import { Fragment } from 'react';

const DUMMY_MEETUPS = [
    {
        id: '1',
        title: 'The first meet up',
        image: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg',
        address: 'address 1',
        description: 'this is a first meet up'
    },
    {
        id: '2',
        title: 'The second meet up',
        image: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg',
        address: 'address 2',
        description: 'this is a second meet up'
    }
]

export default function HomePage(props){
    return <Fragment>
        <Head>
            <title> React Meetups</title>
            <meta  name='description'
                content='Browse a huge list of highly active react meetups'
            /> 
        </Head>
        <MeetupList  meetups={props.meetups} />
    </Fragment>
    

}

// export async function getServerSideProps(context){
//     //runs on the server after deployment -> neever in the client side 
//     //you can fetch data from apis -> that have credentials 
//     //runs for every incoming request 
//     // use when -> you need concrete access to the object and data gets refreshed frequently 

//    const req =  context.req;
//    const res = context.res

//     return {
//         props: {
//              meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){
    //allowed to by async -> return a promise -> waits till the data is loaded 
    // allows to load the data before the page is loaded 
    //executed during the build process
    //you can: fetch data from API 
    //down side: data can be outdated -> only can be updated when re build and re deploy 

    //const id = context.params.meetupId; //we need to pre generate all the paths with the  IDs that we are trying to fetch

    //console.log(id)

   const client = await  MongoClient.connect('mongodb+srv://camiguillan:cami12345@cluster0.zupnnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   //next js will detect this and wil not include it in server side codes 

   const db = client.db();

   const meetupsCollection = db.collection('meetups');

   const meetups = await meetupsCollection.find().toArray(); 

   client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10 //number of secods next will wait till refreshing the data. (new request coming in)
    }
}