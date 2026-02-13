import { useState } from "react";

function Toggle() {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => { 
        setIsDark(!isDark);
    };

    return (
        <div

            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
      >
            <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>

            <button onClick={toggleMode}>Toggle Mode</button>
        </div>
    );
}

export default Toggle;

        
