import axios from 'axios';
import { useState } from 'react';
import DuelContainer from '../components/DuelContainer';

const Duel = () => {

    const [firstUsername, updateFirstUsername] = useState('');
    const [secondUsername, updateSecondUsername] = useState('');

    let [user1Response, updateFirstUserRes] = useState({});
    let [user2Response, updateSecondUserRes] = useState({});

    const firstUserOnChangeEvent = (event) => {
        updateFirstUsername(event.target.value);
    }

    const secondUserOnChangeEvent = (event) => {
        updateSecondUsername(event.target.value);
    }

    const sendUsersRequest = async (event) => {
        event.preventDefault();
        let { data } = await axios.get(`http://localhost:3000/api/users/?username=${firstUsername}&username=${secondUsername}`);
        updateFirstUserRes(data[0]);
        updateSecondUserRes(data[1]);

        document.getElementsByClassName('duel-container')[0].classList.remove('hide');
        document.getElementsByClassName('user-results')[0].classList.remove('hide');
        document.getElementsByClassName('user-results')[1].classList.remove('hide');
    }

    return (
        <div className="body">
            <div className="page-container">
                <main>
                    <span>duel</span>
                    <hr />
                    <section className="form-container">
                        <form onSubmit={sendUsersRequest}>
                            <div className="input-container">
                                <input name="username-left" type="text" placeholder="username" onChange={firstUserOnChangeEvent} />
                                <input name="username-right" type="text" placeholder="username" onChange={secondUserOnChangeEvent} />
                            </div>
                            <button type="submit" style={{color:"purple", fontSize: "50px", height:"100px", width:"200px"}}>DUEL</button>
                        </form>
                    </section>
                    <DuelContainer user1Response={user1Response} user2Response={user2Response} />
                </main>
            </div>
        </div>
    );
}

export default Duel;