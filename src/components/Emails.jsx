import Email from "./Email";

const Emails = ({emails, toggleRead, toggleStar}) => {

    return (
        <>
        <main className="emails">
            <ul>
            {emails.map((email, index) => (
                <li
                key={index}
                className={`email ${email.read ? 'read' : 'unread'}`}
                >
                <Email index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
                </li>
            ))}
            </ul>
        </main>
        </>
    )
}

export default Emails;