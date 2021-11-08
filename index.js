const http = require('./app')
const port = 2709

http.listen(port, () => console.log(`Server has been started on ${port}`))