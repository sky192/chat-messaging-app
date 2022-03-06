import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";

//components
import Navbar from "./Navbar";

//styles
import styles from "./Chats.module.css";

const Chats = () => {
    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/");
    };
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh - 50px)"
                projectId="
2aeede37-4634-425e-8861-153f39b8005d"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;
