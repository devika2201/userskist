import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueid: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Yagna',
    role: 'blogger',
  },
  {
    uniqueid: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Yagna',
    role: 'blogger',
  },
  {
    uniqueid: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Yagna',
    role: 'blogger',
  },
  {
    uniqueid: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Yagna',
    role: 'blogger',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">UsersList</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={each.uniqueid} />
      ))}
    </ul>
  </div>
)

export default App
