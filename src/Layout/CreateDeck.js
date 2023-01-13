import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api';

function CreateDeck() {
    const initialFormState = {
        name: "",
        description: "",
    };
    // new state variable
    const [newDeck, setNewDeck] = useState({...initialFormState});
    const history = useHistory();
    // event listeners
    const handleChange = ({target}) => {
        setNewDeck ({
            ...newDeck,
            [target.name]: target.value,
        });
    }
    async function handleSubmit (event) {
        event.preventDefault();
        const abortController = newAbortController();
        const response = await (
            {...newDeck},
            abortController.signal
        );
        history.push("/");
        return response;
    }
    async function handleCancel() {
        history.push("/");
    }
    // rendering display
    return (
        <div>
            <ol className = "breadcrumb">
                <li className = "breadcrumb-item">
                    <Link to = "/">Home</Link>
                </li>
                <li className = "breadcrumb-item active">Create Deck</li>
            </ol>
        <form onSubmit = {(event) => handleSubmit(event)}>
            <h1>Create Deck</h1>
            <div className = "form-group">
                <label htmlFor = "name">Name</label>
                <input
                id = "name"
                name = "name"
                className = "form-control"
                onChange = {handleChange}
                type = "text"
                placeholder = "Deck Name"
                value = {newDeck.name}
                required
                /> 
        </div>   
        <div className = "form-group">
            <label htmlFor = "description">Description</label>
            <textarea
                id = "description"
                name = "description"
                className = "form-control"
                onChange = {handleChange}
                type = "text"
                placeholder = "Brief description of the deck"
                value = {newDeck.description}
                required
            />
        </div>
        <button 
            className = "btn btn-secondary mx-1" 
            onClick = {() => handleCancel()}
        >
            Cancel
        </button>
        <button className = "btn btn-primary mx-1" type="submit">
            Submit
        </button>
    </form>
</div>
);
}

export default CreateDeck;