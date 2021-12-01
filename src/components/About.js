import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    //     {color: 'black',
    //     backgroundColor: 'white',
    //     background: 'white',
    //     border: '1px solid black'})

    let myStyle={
        color:props.mode === 'dark'?'white' : '#212223',
        backgroundColor:props.mode === 'dark'?'#212223' : 'white',
        border: props.mode === 'dark'?'1px solid white': '0.5px solid #212223'
    }

        // const [btnText, setbtnText] = useState('Dark Mode')

        // const enableDarkMode = ()=>{
        //     console.log('dark mode is clicked')
        //     if(myStyle.color === 'black'){
        //         setmyStyle({color: 'white',
        //         backgroundColor: 'black',
        //         background: 'black',
        //         border: '1px solid white'})
        //         setbtnText('Light Mode')
        //     }
            // else{
            //     setmyStyle({color: 'black',
            //                 backgroundColor: 'white',
            //                 background: 'white',
            //                 border: '1px solid black'})
            //     setbtnText('Dark Mode')
            // }
                   
        // }
    return (
        <div className="container" style={{color:props.mode === 'dark'?'white' : 'black',backgroundColor:props.mode === 'dark'?'#212223' : 'white'}}>
            <h1 className="my-4">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"             data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" className="btn btn-dark my-4" onClick={enableDarkMode} >{btnText}</button>
            </div> */}
        </div>
    )
}