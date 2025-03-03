import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { database, ref, set, push } from "../firebaseConfig";

const Dashboard = () => {
    const navigate = useNavigate();
    const [ text, setText ] = useState(' Enter the text here..');

    const handleLogout = () => {
        navigate('/');
    }

    const handleSubmit = () => {
        const data = ref(database, "surveycontent/");
        const newData = push(data);
        set(newData, {text})
        .then(() => alert("Data saved successfully"))
        .catch((error) => console.log(error));
    }
    return(
        <>
        <div className="dashboard">
            Hi! Welcome to our website Herbal 100%.
        </div>
        <br/>
        <div>
            <button onClick={handleLogout}> Logout </button>
        </div>

        <br/>
        <div>
            <textarea name="text" id="text" onChange={(e) => setText(e.target.value)} value={text}></textarea>
        </div>
        <br/>
        <div>
            <button onClick={handleSubmit}> Submit </button>
        </div>
        </>
    )
}
export default Dashboard;