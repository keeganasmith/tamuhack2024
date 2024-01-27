import EmailList from "../components/EmailList"

const EmailScreen = () => {

    const sampleEmails = ['john@example.com', 'jane@example.com', 'bob@example.com'];

    return  (
        <EmailList emails={sampleEmails}/>
    )
}

export default EmailScreen;