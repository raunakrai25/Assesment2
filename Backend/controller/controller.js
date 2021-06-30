const axios = require('axios')

exports.api = (req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(()=>{
        console.log('running Fine')
        return res.status(200).send(response.data);
    })
    .catch((error)=>{
        console.log(error)
        return res.status(200).send('error')
    })
}

exports.getComments = (req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/:id/comments')
    .then(()=>{
        console.log('running Fine')
        return res.status(200).send(response.data);
    })
    .catch((error)=>{
        console.log(error)
        return res.status(200).send('error')
    })
}