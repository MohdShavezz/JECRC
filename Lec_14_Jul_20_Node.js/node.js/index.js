//http
import http from 'http'
let users = [
    { id: 1, name: 'peter', age: 23 },
    { id: 2, name: 'john', age: 22 },
]

const server = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    if (req.method === "GET" && req.url === '/') { // GET : http://localhost:3000/ 
        res.writeHead(200, { "content-type": "application/json" })
        //search from database
        res.end('asdlfajdflk')
    } else if (req.method === "GET" && req.url === '/users') {  // GET : http://localhost:3000/users GET ALL USERS
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(users))
    } else if (req.method === "GET" && req.url.includes('/users/')) {  // GET : http://localhost:3000/users/3 GET USER BY ID
        let arr = req.url.split('/')
        const userId = +arr[arr.length - 1]      // string    
        const user = users.find(u => u.id === userId)
        if (user) {
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify(user))
        } else {
            res.writeHead(404, { "content-type": "text/plain" })
            res.end('not found.')
        }
    } else if (req.method === "POST" && req.url.includes('/users')) { // POST: http://localhost:3000/api/user {name,age}:paylaod Add User
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const user = JSON.parse(body)
            users.push(user)
            res.writeHead(201, { "content-type": "application/json" })
            res.end(JSON.stringify(users))
        })

    } else if (req.method === "DELETE" && req.url.includes('/users/')) {  // DELETE : http://localhost:3000/users/3 DELETE USER BY ID
        let arr = req.url.split('/')
        const userId = +arr[arr.length - 1]      // +string=> number
        const ind = users.findIndex(u => u.id === userId) // ind, -1
        if (ind == -1) {
            res.end('user not found')
        }
        users.splice(ind, 1)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(users))

    } else if(req.method === "PUT/PATCH" && req.url.includes('/users/')){// PUT/PATCH : http://localhost:3000/users/3 PUT/PATCH 
        // PUT:entire object modifies
        // PATCH:few field of objects modifies
    }
})

server.listen(3000, () => {
    console.log('server is running on 3000.')
})