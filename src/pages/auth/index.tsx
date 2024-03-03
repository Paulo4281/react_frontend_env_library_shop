import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Form } from "../../components/form"
import { FormEvent, useState } from "react"
import { BASE_URL } from "../../utils/constants"
import { useEffect } from "react"
import axios from "axios"

function AuthPage() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (post) {
            console.log(post)
        }
    }, [post]);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/user/auth`, {
                mail,
                password
            })
            setPost(response.data)
        } catch(error) {
            console.error(`Error: ${error}`)
        }
    }

    return (
        <div>
            <Form method="POST">
                <Input type="text" id="input_email" value={mail} onChange={(mail) => setMail(mail || "")} />
                <Input type="password" id="input_password" value={password} onChange={(password) => setPassword(password || "")} />
                <Button text="Login" onClick={handleLogin} />
            </Form>
        </div>
    )
};

export { AuthPage }