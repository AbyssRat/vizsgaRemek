import "./config/env.js";
import app from "./app.js";


const PORT = process.env.PORT || 3000;

//console.log("ENV CHECK:", process.env);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
