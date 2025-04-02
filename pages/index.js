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

export async function getStaticProps(){
    //allowed to by async -> return a promise -> waits till the data is loaded 
    // allows to load the data before the page is loaded 
    //executed during the build process
    //you can: fetch data from API 
    //down side: data can be outdated -> only can be updated when re build and re deploy 

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 //number of secods next will wait till refreshing the data. (new request coming in)
    }
}