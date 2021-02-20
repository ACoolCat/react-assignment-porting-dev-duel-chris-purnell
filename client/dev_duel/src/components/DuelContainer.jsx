import UserData from "./UserData";

const DuelContainer = (props) => {
    return (
        <section className="duel-container hide">
            <UserData userResponse={props.user1Response} side="left" />
            <UserData userResponse={props.user2Response} side="right" />
        </section>
    );
}

export default DuelContainer;