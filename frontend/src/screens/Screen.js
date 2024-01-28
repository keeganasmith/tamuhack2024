
import React, { useState } from 'react';

const EmailScreen = () => {

    const sampleEmails = ['john@example.com', 'jane@example.com', 'bob@example.com'];
    const [selectedEmail, setSelectedEmail] = useState(null);

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    return  (
        <EmailList emails={sampleEmails} selectedEmail={selectedEmail} onEmailClick={handleEmailClick} />
    )
}

export default Screen;