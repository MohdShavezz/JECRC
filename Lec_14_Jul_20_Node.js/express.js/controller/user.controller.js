let users = [
    { id: 1, name: 'peter', age: 23 },
    { id: 2, name: 'john', age: 22 },
]
// controller action methods are for db ineraction
export function getUser(req, res) {
    try {
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}
export function getUserById(req, res) {
    const userId = req.params.id
    // console.log(userId)
    try {
        const user = users.find(u => u.id == userId)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export function deleteUserById(req, res) {
    const userId = req.params.id
    try {
        users = users.filter(u => u.id != userId)
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}
export function addUser(req, res) {
    const user = req.body
    // console.log(user)
    try {
        const newUser = { id: users.length + 1, ...user }
        users.push(newUser)
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}
export function updateUser(req, res) {
    const userId = req.params.id
    const updatedData = req.body // updated data
    try {
        //find userby id 
        const ind=users.findIndex(u=>u.id==userId)
        if(ind==-1){
            res.send('not found')
            return
        }
        users[ind]={...users[ind],...updatedData}
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}

