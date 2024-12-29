// app/loading.js
"use client";

import "./loading.css";
const styles = {
    loading:{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "var(--primary)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}

export default function Loading() {
    return (
        <div style={styles.loading}>
            <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
            </div>
        </div>
    );
}
