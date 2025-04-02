import { Fragment } from "react"
import classes from './meetupDetail.module.css'

export default function MeetupDetails(props){
    console.log(props)
    return <section  className={classes.detail}  >
        <img  src={props.image}   alt='first meet up'  />
        <h1> {props.title} </h1>
        <address> {props.adress} </address>
        <p> {props.description}  </p>
    </section>

}