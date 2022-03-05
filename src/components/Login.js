import React from "react";

//styles
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Wellcome to Metagram!</h2>
                <div className={styles.button}>
                    <img src="" alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;
