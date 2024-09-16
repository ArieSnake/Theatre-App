import { useContext } from "react"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"
import axios from "axios"

interface IProps {
    event:IEvent
}

export const Event: React.FC<IProps> = ({ event }) => {
    const context = useContext(Context)
    
    if (!context) {
        throw new Error("Context is undefined.")
    }

    const { dispatch } = context

    const handleDelete = () => {
        axios.delete('http://localhost:3004/events/' + event.id)
        .then(() => {
            dispatch({
                type: ActionTypes.RemoveEvent,
                payload: event.id
            })
        })
        .catch((error) => {
            console.error("Failed to delete the event", error)
        })
    }

    return (
        <div>
            <img src={event.cover} alt={event.title} />
            <p>{event.title}</p>
            <p>{event.date} at {event.time}</p>
            <strong>{event.type}</strong>
            <p>By {event.composer}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}