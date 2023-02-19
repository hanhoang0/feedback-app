// Basic React code is at the end of the page
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeadbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (//return only one parent element
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        
      </div>
    </>
          
  )
}

export default App
/*
function App(){
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment 1'},
    {id: 2, text: 'Comment 2'},
    {id: 3, text: 'Comment 3'}
  ]
  const loading = false
  const showComments = true

  if (loading) return <h1>Loading...</h1>

  const commentBlock = (
    <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.index}>{comment.text}</li>
          ))}
        </ul>
      </div>
  )
  return (//return only one parent element
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}

    </div>      
  )
}
*/
