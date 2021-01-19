import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

const SORT_OPTIONS = {
'OEFENING_ASC': {column: 'titel', direction: 'asc'},
'OEFENING_DESC': {column: 'titel', direction: 'desc'}
}


function useOefening(sortBy = 'OEFENING_ASC') {
const [oefeningen, setOefeningen] = useState ([])

useEffect(() => {
    const unsubscribe = firebase
        .firestore()
        .collection('oefeningen')
        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
        .onSnapshot((snapshot) => {
            const newOefeningen = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        setOefeningen(newOefeningen)
    })

    return () => unsubscribe()
}, [sortBy])

return oefeningen
}

const onDelete = () => {
    const db = firebase.firestore()
   // db.collection('oefeningen').doc(oefening.titel).delete()
}

const OefeningLijst =  () => {
    const [sortBy, setSortBy] = useState('OEFENING_ASC')
    const oefeningen = useOefening(sortBy)


    return (
        <div>
        <h2>Oefeningen Lijst</h2>
        <div>
        <label>Sorteren:</label>{' '}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
            <option disabled>---</option>
            <option value="OEFENING_ASC">Naam (a-z)</option>
            <option value="OEFENING_DESC">Naam (z-a)</option>
        </select>
        </div>
        <ol>
            {oefeningen.map((oefening) =>
                        <li key={oefening.id}>
                        <div className="oefening-toevoegen">
                            {oefening.titel} 
                            <code className="reps">{oefening.reps} reps </code>
                            <button onClick={onDelete}>Verwijder</button>
                        </div>
                    </li>
            )}

        </ol>
        </div>
    )
}

export default OefeningLijst