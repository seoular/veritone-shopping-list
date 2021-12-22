import * as React from 'react';
import './LoadingScreen.css';

class LoadingScreen extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  componentDidMount(){

  }
  componentDidUpdate(prevProps){
  }
  
  render() {
    return (
      <div>
        <div className="loadingScreenContainer"/>
        <div className="loadingScreenRectangle"/>
        <div className="loadingScreenEllipse"/>
      </div>
    );
  }
}



export default LoadingScreen;