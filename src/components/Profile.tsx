import "./../Profile.css"

export default function Profile() {
    return (
        <main>
            <img src="./src/assets/myphoto.jpg" alt="Profile photo"/>
            <h1>Roman Hryvusevich</h1>
            <h3>Fullstack developer</h3>
            <div className="contacts">
                <button className="email">
                    <img src="./src/assets/Mail.svg"/>
                    <p>Email</p>
                </button>
                <button className="linkedin">
                    <i className="fa-brands fa-linkedin"/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </main>
    )
}