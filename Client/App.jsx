
import EntryForm from './EntryForm.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Feed from './Feed.jsx'
const App = () => {
    return (
        
        <div className = "router">
            <EntryForm></EntryForm>
        </div>
    )
}
export default App