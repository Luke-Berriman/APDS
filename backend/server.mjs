import http from "http"

const PORT = 3000
const server = http.createServer((req,res)=>{
    res.end('We are cooked')
}
)

server.listen(PORT)