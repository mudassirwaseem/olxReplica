import React from 'react'
import olx from '../images/olx1.jpg'



// class Nav extends React.Component{
//     render(){
//         return(
//             <div>
//                   {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
//             <a className="nav-link" href="#">Features</a>
//             <a className="nav-link" href="#">Pricing</a>
//             <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
//           </div>
//         </div>
//       </nav> */}
//             </div>
//         )
//     }
// }


class Cover extends React.Component{
    render(){
        return(
            <div>
                
                <h1>
                    <img className='olxPic' width="1345px" height="240px" src={olx}/>
                </h1> 
            </div>
        )
    }
}





export default Cover;;