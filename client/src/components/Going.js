import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../hooks'

export default function Going(){
const { going } = useUsers('')
    return(
        <div>
            <div>
                <div>
                    <Link style={{textDecoration: 'none'}} className="goback" to={'/'}>Go Back</Link>
                </div>
                <div className="allgoingornot">
                {going.map((item,i) => (
                    <div className="eachgoingornot" key={i}>
                    <div className="imgsgoingornot">
                        <img className="noimg"alt='people' src={item.picture} />
                    </div>
                    <div className="alltext">
                    <div className="namegoingornot">
                        <p className="nn">Name:</p> <p className="nnn"> {item.fname} {item.lname}</p>
                    </div>
                    <div className="phonegoingornot">
                        <p className="pp">Phone:</p> <p className="ppp"> {item.phone}</p>
                    </div>
                    <div className="emailgoingornot">
                        <p className="ee">Email:</p> <p className="eee"> {item.email}</p>
                    </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}