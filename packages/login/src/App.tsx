import { useState } from "react";
import "./App.css";
import { Button } from "yes-my-ui-library";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Login</div>
      <Button
        size="large"
        variant="text"
        sx={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "8px",
          boxShadow: "none",
          ":focus": {
            outline: "none",
          },
        }}
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count}
        Login
      </Button>
    </>
  );
}

export default App;
