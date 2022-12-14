import {FunctionComponent, useState} from "react";
import instance from "../instanceAxios";

type Props = {};
const Login: FunctionComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassWord] = useState<string>("");

    const handleSubmit = () => {
        instance
            .post("/login", {
                username: username,
                password: password,
            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                margin: "auto",
            }}
        >
            <label htmlFor="username">Username</label>
            <input
                value={username}
                onChange={(text) => {
                    setUsername(text.target.value);
                }}
                name="username"
            />
            <label htmlFor="">Password</label>
            <input
                value={password}
                onChange={(text) => {
                    setPassWord(text.target.value);
                }}
                type="password"
            />

            <button onClick={handleSubmit} type="submit">
                Login
            </button>
        </div>
    );
};

export default Login;


