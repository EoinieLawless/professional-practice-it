import React from "react";


export class Footer extends React.Component {
    

    render() {

        const containerStyle = {
            position: "relative",
            minHeight: "100vh",
            width: "100%",
          };
      
          const footerStyle = {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50px",
          };
        
        return (
            <div className="containerStyle">
              
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" bottom="0">
                
              <p className="col-md-4 mb-0 text-muted">&copy; Salthill Devon FC</p>
          
              
          
              <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="https://salthilldevon.com/" className="nav-link px-2 text-muted">Orignal Website</a></li>
                <li className="nav-item"><a href="https://www.facebook.com/salthilldevon/posts/3774852479230950/" className="nav-link px-2 text-muted">Facebook</a></li>
                <li className="nav-item"><a href="#/about" className="nav-link px-2 text-muted">About</a></li>
              </ul>
            </footer>
          

          </div>


        );
    }
}
