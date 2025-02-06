import React from 'react'

export default function Profile() {
  return (
    <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard name="Faizan" age={25}
        greeting = {
            <div>
                <strong>Hello Faizan,</strong>
            </div>
        }
        />

<ProfileCard name="Bilal" age={23}
        greeting = {
            <div>
                <strong>Hello Bilal,</strong>
            </div>
        }
        />
        
    </div>
  )
}


function ProfileCard(props) {
    const {name, age,greeting} = props;
    return(
        <>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>{greeting}</h3>
        </>
    )
    
}