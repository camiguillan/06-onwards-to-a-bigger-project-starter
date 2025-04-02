import MeetupList from '../components/meetups/MeetupList.js'

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

export default function HomePage(){
    return <MeetupList  meetups={DUMMY_MEETUPS} />
}