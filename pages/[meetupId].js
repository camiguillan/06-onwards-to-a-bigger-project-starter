import { MongoClient, ObjectId} from "mongodb";
import MeetupDetails from "../components/meetups/meetupDetail"

export default function MeetupDetail(props){
    return <MeetupDetails title={props.title} 
    image={props.image}
    description={props.description}
    address={props.address}
    />

}

export async function getStaticPaths(){
       const client =  MongoClient.connect('mongodb+srv://camiguillan:cami12345@cluster0.zupnnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       //next js will detect this and wil not include it in server side codes 
    
       const db = client.db();
    
       const meetupsCollection = db.collection('meetups');
    
       const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); //we only get the fields we need  
        client.close();


    //
    return {
        fallback: false ,
        //weather this path contains all the suported id values or not
        //if it set to false -> we defined all the suported id values we need 
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id
            },
        }))
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client =  MongoClient.connect('mongodb+srv://camiguillan:cami12345@cluster0.zupnnxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       //next js will detect this and wil not include it in server side codes 
    
    const db = client.db();

        
    
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId) })
    

    const meetup = {
        id: meetupId,
        title: `Meetup ${meetupId}`,
        image: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg',
        address: `Address for meetup ${meetupId}`,
        description: `Description for meetup ${meetupId}`
    };

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                image: selectedMeetup,image
            }
        }
    }
}