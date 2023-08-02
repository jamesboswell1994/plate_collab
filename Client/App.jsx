
import EntryForm from './EntryForm.jsx'
import Feed from './Feed.jsx'
import AccountCreator from './AccountCreator.jsx'
import {BrowserRouter, Routes, Router, Switch, Route} from 'react-router-dom'
const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/feed" element= {<Feed/>} />
            <Route path="/create" element= {<AccountCreator/>} />
            <Route exact path="/" element= {<EntryForm/>}>
            </Route>
          </Routes>
        </BrowserRouter>
    )
}
export default App


// <div className = "router">
// <EntryForm></EntryForm>
// </div>