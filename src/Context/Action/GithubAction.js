import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}`},
})

export const searchUsers = async (text) =>{

    const params = new URLSearchParams({
        q: text 
    })

    // The axios way of getting API, this gets rid of useing the fetch API call

    const response = await github.get(`/search/users?${params}`)
    // axios returns an obect that has a property of the API call
    return response.data.items




    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    // headers:{
    //     Authorization: `token ${GITHUB_TOKEN}`

    // }})


    // const {items} = await response.json();


    // return items;

}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// single user
// export const getUser = async (login) =>{
//     // the function is on the bottom and its a dispatch for our 
    
//     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers:{
//         Authorization: `token ${GITHUB_TOKEN}`

//     }})

//     // we are making an if statement just in case we get a 404 error
//     if(response.status === 404){
//         window.location = '/notfound'
//     } else {
//        const  data = await response.json();
//        return data

//         // dispatch({
//         //     type: 'GET_USER',
//         //     payload: data,
//         // })
//     }

   
// }
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////

//    export const getUserRepos = async (login) =>{
        

//         const params = new URLSearchParams({
//             sort: 'created',
//             per_page: 10,
//             // page: 1
//         })

//         const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//         headers:{
//             Authorization: `token ${GITHUB_TOKEN}`

//         }})
   
//         const data = await response.json();
//         return data;
       
//         // dispatch({
//         //     type: 'GET_USERS_REPOS',
//         //     payload: data,
//         // })

//     }

    export const getUserAndRepos = async(login) =>{
        // in axios if you use Promise all you can make a promise of arrays to get your data make multiple 
        const params = new URLSearchParams({
                        sort: 'created',
                        per_page: 10,
                        // page: 1
                    })


        const [user, repos] = await Promise.all([
            github.get(`/users/${login}`), 
            github.get(`/users/${login}/repos?${params}`)
        ])

        return {user: user.data, repos: repos.data}
    }
