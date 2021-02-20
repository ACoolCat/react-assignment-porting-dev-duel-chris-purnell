const UserData = (props) => {
    const { username, name, location, bio, 'avatar-url': avatarUrl } = props.userResponse;

    return (
        <section className="user-results">
            <div>{username}</div>
            <div>{name}</div>
            <div>{location}</div>
            <div>{bio}</div>
            <img src={avatarUrl} alt="avatar"/>

        </section>
    )
}

export default UserData