import React from 'react'
import {Link} from 'react-router-dom'




class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)





  }


  componentDidMount(){





  }

  componentDidUpdate(prevProps){



  }





  render() {

    console.log(this.state)

    return (
      <div className='main'>
        <img src="./assets/tom.png" className="js-image" />

      </div>



    )
  }
}
export default Main
