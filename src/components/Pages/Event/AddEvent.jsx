import React, {useState} from "react";
import './AddEvent.style.css'
import TextField from '@material-ui/core/TextField';

const  AddEvent = () =>{

   const [eventType , setEventType] = useState("");
   const [eventName , setEventName] = useState("");
   const [organizerName , setOrganizerName] = useState("");
   const [mainSpeakerName , setMainSpeakerName] = useState("");
   const [dateTime , setDateTime] = useState("");
   const [place_Link , setPlace_Link] = useState("");
   const [description  , setDescription ] = useState("");
   const [noOfPeople  , setNoOfPeople ] = useState("");
   const [sponsor   , setSponsor  ] = useState("");
   const [status  , setStatus ] = useState("");


    return(
        <div className="card">
            <div className="form-wrapper">
                <form>
                    <h1 className="event-header">Add Event</h1>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Conference</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Research Paper</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Workshop</label>
                    </div>
                    <div className="material-textfield" data-testid='event-name-field'>
                        <input value={eventName}
                               onChange={(e) => setEventName(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='eventname'
                               data-testid='event-name-field'/>
                        <label className="input-lable" data-testid='event-name-field-label'>Event Name</label>
                    </div>
                    <div className="material-textfield" data-testid='organizer-name-field'>
                        <input value={organizerName}
                               onChange={(e) => setOrganizerName(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='organizerName'
                               data-testid='organizer-name-field'/>
                        <label className="input-lable" data-testid='organizer-name-field-label'>Organizer Name</label>
                    </div>
                    <div className="material-textfield" data-testid='mainspeaker-name-field'>
                        <input value={mainSpeakerName}
                               onChange={(e) => setMainSpeakerName(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='mainSpeakerName'
                               data-testid='mainspeaker-name-field'
                               id='userName' />
                        <label className="input-lable" data-testid='mainspeaker-name-field-label'>Main Speaker Name</label>
                    </div>
                    <div className="material-textfield" data-testid='place-link-field'>
                        <input value={place_Link}
                               onChange={(e) => setPlace_Link(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='place-link'
                               data-testid='place-link-field'/>
                        <label className="input-lable" data-testid='place-link-field-label'>Place or Link</label>
                    </div>





                    <div>
                        <TextField
                            id="date"
                            type="date"
                            label="Select a date"
                            defaultValue="yyyy-mm-dd"
                            className="textField-clock"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="material-textfield" data-testid='description-field'>
                        <textarea value={description}
                               onChange={(e) => setDescription(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='description'
                               data-testid='description-field'/>
                        <label className="input-lable" data-testid='description-field-label'>Description</label>
                    </div><div className="material-textfield" data-testid='sponsor-field'>
                        <input value={sponsor}
                               onChange={(e) => setSponsor(e.target.value)}
                               className="input-fields"
                               type='text'
                               placeholder=' '
                               name='sponsor'
                               data-testid='place-link-field'/>
                        <label className="input-lable" data-testid='sponsor-field-label'>Sponsor </label>
                    </div>
                    <div className="material-textfield" data-testid='noOfPeople-field'>
                    <input value={noOfPeople}
                           onChange={(e) => setNoOfPeople(e.target.value)}
                           className="input-fields"
                           type='text'
                           placeholder=' '
                           name='noOfPeople'
                           data-testid='noOfPeople-field'/>
                    <label className="input-lable" data-testid='noOfPeople-field-label'>Limit of people</label>
                    </div>

                    <button className="auth-button" type="submit">Send</button>


                </form>
            </div>

        </div>
    )
}
export default AddEvent