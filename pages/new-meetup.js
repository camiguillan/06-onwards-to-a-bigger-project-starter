import { useRouter } from 'next/router.js';
import NewMeetupForm from '../components/meetups/NewMeetupForm.js'
import { Fragment } from 'react';
import Head from 'next/head.js';

export default function NewMeetup(){

    const router  = useRouter()

    async function addMeetupHandler(meetupData){
      const response = await fetch('/api/new-meetup', {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        }
      }) //sends a request to the function presetn in new meet up file

      const data = await response.json(); 

      console.log(data)

      router.push('/')

    }

    return <Fragment>
      <Head>
      <title> React Add New Meetups</title>
            <meta  name='description'
                content='Add all the meetups you want!'
            /> 
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
    
}