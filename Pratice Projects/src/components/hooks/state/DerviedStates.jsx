import React from 'react'

const users = [
    
        {name: "Alice", age:25},
        {name: "Faizan", age:26},
        {name: "Noman", age:22},
        {name: "kamran", age:23},

    
];

const userLenght = users.length;
const userAvg = users.reduce((ac,e) => ac+ e.age, 0)/ userLenght;
export default function DerviedStates() {
  return (
    <>
    <div>
        <h1>Hello Users</h1>
        <ul>
        {users.map((e, index)=>{
            return(
                <li key={index}>
                    {e.name} - {e.age} year old

                </li>

            );
        })}
                            <br />
                    <h2>Total Data of Users is {userLenght}</h2>
                    <br />
                    <h2>Total Average Age of Users is {userAvg}</h2>

        </ul>
    </div>
    </>
  )
}
