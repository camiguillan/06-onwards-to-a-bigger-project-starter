import MeetupList from '../components/meetups/MeetupList.js';

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
    return <MeetupList  meetups={props.meetups} />

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




export async function getStaticProps(context){
    //allowed to by async -> return a promise -> waits till the data is loaded 
    // allows to load the data before the page is loaded 
    //executed during the build process
    //you can: fetch data from API 
    //down side: data can be outdated -> only can be updated when re build and re deploy 

    //const id = context.params.meetupId; //we need to pre generate all the paths with the  IDs that we are trying to fetch

    //console.log(id)

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 //number of secods next will wait till refreshing the data. (new request coming in)
    }
}