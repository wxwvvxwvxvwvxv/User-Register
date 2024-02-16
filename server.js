const createApp = require('./app')
const validateUsername = require('./validation/validateUsername')
const validatePassword = require('./validation/validatePassword')


const port = 3000;

const app = createApp(validateUsername, validatePassword)

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});