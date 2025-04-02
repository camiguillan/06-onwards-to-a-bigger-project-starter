import MeetupDetails from "../components/meetups/meetupDetail"

export default function MeetupDetail(){
    return <MeetupDetails title='first meet up' image='https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg' 
    description='some first meet up'
    address='adress 1'
    />

}

export async function getStaticPaths(){
    //
    return {
        fallback: false ,
        //weather this path contains all the suported id values or not
        //if it set to false -> we defined all the suported id values we need 
        paths: [
            {params: {
                meetupId: '1'
            }},
            {params: {
                meetupId: '2'
            }},
        ]
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const meetup = {
        id: meetupId,
        title: `Meetup ${meetupId}`,
        image: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg',
        address: `Address for meetup ${meetupId}`,
        description: `Description for meetup ${meetupId}`
    };

    return {
        props: { meetup }
    };
}