import { useState, useContext } from 'react';
import UserContext, {userState} from './store';

function ConsumerComponent() {  
    const user = useContext<userState>(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

function UseContextComponent() {
    const [user, setUser] = useState<userState>({
        first: "Anthony",
        last: "Macias",
    });
    
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
            <button 
                onClick={() => setUser({
                    first: "John",
                    last: "Doe",
                })
            }
        >
                Change Context
            </button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;
