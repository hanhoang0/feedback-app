import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

function Post() {
  const status = 200 //status 200 means everying is ok
  const navigate = useNavigate() 

  const onClick = () => {
    console.log('Hello')
    navigate('/about') //redirect
  }
  if (status === 404){
    return <Navigate to='/notfound'/>
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Testing Nested Route</h1>} />
      </Routes>
    </div>
  )
}

export default Post
