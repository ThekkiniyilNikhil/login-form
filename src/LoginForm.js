import React from 'react';
import './App.css';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
        isValidate: false
    }
  }

  /** Access value entered in input box */
  getUserName = (e) => {
      if(e.target.value.length > 4) {
        this.setState({
            isValidate: false
        })
      }
  }

  /** Detect focus out from input box */
  inputFocutOut = (e) => {
      if(e.target.value.length < 4) {
          this.setState({
              isValidate: true
          })
      }
  }

  render() {
    return (
      <>
        <div className={'appLoginInput'+ (this.state.isValidate ? ' validationError': '')}>
            <input 
                type='text'
                placeholder='example@gmail.com'
                onChange={this.getUserName}
                onBlur={this.inputFocutOut}/>
            <label>username</label>
                
            {
                this.state.isValidate ? (
                    <div className='errorMessage'>
                        The Username needs to be atleast 4 characters long
                    </div>
                ) : null
            }
        </div>
        <div className='appLoginInput'>
            <input 
                type='text'
                placeholder='******'/>
            <label>password</label>
        </div>
        <div className={'appLoginInputBtn'+ (this.state.isValidate ? ' validationError': '')}>
            <input type='button' value='OK'/>
        </div>
      </>
    );
  }
}

