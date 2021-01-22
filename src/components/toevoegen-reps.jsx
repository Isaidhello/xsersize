import React, { useState } from 'react'
import firebase from '../firebase'
import Button from '@material-ui/core/Button';

//hiermee kan je oefeningen en reps uploaden naar firebase
const ToevoegenReps =  () => {
    const [titel, setTitel] = useState('')
    const [reps, setOefening] = useState('')
//voorkomt dat je lege velden doorstuurt
    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('oefeningen')
            .add({
                titel,
                reps: parseInt(reps)
            })
            .then(() => {
                setTitel('')
                setOefening('')
            })
    }

    return (
<form onSubmit={onSubmit}>
    <h4>Voeg reps toe</h4>
    <div>
        <label>Titel</label>
        <input type="text" value={titel} onChange={e => setTitel(e.currentTarget.value)} />
    </div>
    <div>
        <label>Reps</label>
        <input type="number" value={reps} onChange={e => setOefening(e.currentTarget.value)} />
    </div>
    <button>Voeg reps toe</button>
</form>
    )
}

export default ToevoegenReps