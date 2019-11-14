import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from "../hooks"
import Icon from '../lib/Icon'

export default function Main(){
    const {  invite, isgoing, notgoing, going, naygoing  } = useUsers()
 
function handleNotGoing(invite){
        notgoing(invite)
}
function handleGoing(invite){
        isgoing(invite)
    
}

    return(
    <div>
        <div className="whosgoing">
            <Link className="arethey" style={{textDecoration:"none"}}  to={'/Going'}><p>GOING: {going.length}</p></Link>
            <Link className="arethey" style={{textDecoration:"none"}} to={'/NotGoing'}><p>NOT GOING: {naygoing.length}</p></Link>
        </div>
        <div className="solo">
            <div className="img">
                <img className="singleimg" alt='people' src={invite.picture} />
            </div>
            <div className="aa">
                <div className="a">
                    <p className="name">Name: </p>
                    <p className="fullname">{invite.fname} {invite.lname}</p>
                    </div>
                <div className="a">
                    <p className="phone">Phone: </p>
                    <p className="number"> {invite.phone}</p>
                </div>
                <div className="a">
                    <p className="email">Email:</p>
                    <p className="fullemail">{invite.email}</p>
                </div>
            </div>
            <div className="addornot">
                <span className="buttons b" onClick={(e) => handleNotGoing(invite)}><Icon icon="times"></Icon></span>
                <span className="buttons c" onClick={(e) => handleGoing(invite)}><Icon icon ="check"></Icon></span>
            </div>
        </div>
    </div>
    )
}


