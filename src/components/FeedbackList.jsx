import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import spinner from './assets/spinner.gif'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading && feedback.length === 0){
    return <p>No Feedback Yet</p>
  }

  return isLoading ? 
  <img
    src={spinner}
    alt='Loading...'
    style={{width: '100px', margin: 'auto', display:'block'}}
  /> : (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item}
        />
      ))}
    </div>
  )
      
}


export default FeedbackList
