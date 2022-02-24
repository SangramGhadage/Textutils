import React from 'react'

export default function About() {
    const [btntext, setBtntext] = useState('Enable dark mode')
    const toggleStyle = () =>{
       if (myStyle.color ==='black'){
           setmyStyle({
            color: 'white',
            backgroundColor:'black'
           })
           setBtntext('Enable light mode')
        }
        else{
            setmyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtntext('Enable dark mode')
        }
    }
    return (
        <div>
            
        </div>
    )
}
