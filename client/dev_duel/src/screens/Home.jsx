  
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledHome = styled.div`
    margin: auto;
    border-radius: 15px;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 500px;
    height: 500px;
    background-color: lightblue;
    transition: 0.3s;
    padding: 2px 16px;
`

const Home = () => {
    return (
        <StyledHome>
            <main>
            <span>dev-duel</span>
                    <hr />
                    <section>
                        <div className="link-container">
                            <Link to='/inspect'>
                                <button className="inspect" style={{color:"purple", fontSize: "50px", height:"100px", width:"200px"}}>inspect</button>
                            </Link>
                        </div>
                        <hr />
                        <div className="link-container">
                            <Link to='/duel'>
                                <button className="inspect" style={{color:"purple", fontSize: "50px", height:"100px", width:"200px"}}>duel</button>
                            </Link>
                        </div>
                    </section>
            </main>
        </StyledHome>


        
    )
}

export default Home