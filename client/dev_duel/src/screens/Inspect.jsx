import UserData from '../components/UserData';
import axios from 'axios';
import { useState } from 'react';


const Inspect = () => {
    const [username, updateUsername] = useState('');
    let [userResponse, updateUserResponse]= useState({});

    const onChange = (event) => {
        updateUsername(event.target.value)
    }

    const sendUserRequest = async(event) => {
        event.preventDefault();
        let { data } = await axios.get(`http://localhost:3000/api/user/${username}`);
        updateUserResponse(data);
        document.getElementsByClassName('user-results')
    }

    return (
        <div>
            <div className="formContainer">
                <form onSubmit={sendUserRequest}>
                    <input name="username" type="text" placeholder="username" onChange={onChange} />
                    <button type="submit">inspect</button>
                </form>
            </div>
                <UserData userResponse={userResponse}></UserData>
        </div>
    )

}

export default Inspect