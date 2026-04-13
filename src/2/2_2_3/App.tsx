import { useState } from 'react';

// Хуки (например, useState) всегда должны вызываться только на самом верхнем уровне компонента.
// Ошибка возникала из-за того, что useState находился внутри условного блока else.
export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return <h1>Thank you!</h1>;
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}
        >
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) =>
                    setMessage(e.target.value)
                }
            />
            <br />
            <button type="submit">Send</button>
        </form>
    );
}
