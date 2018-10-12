import React, { Component } from 'react';
import Display from './Display'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userText: "", //text from the user
      finalText: "", //translated text
      workingText: "", //temp storage for text
      vowels: ["a", "e", "i", "o", "u"] //but never "y"

    }
  }
  render() {
    return (
      <div className="App">
          <Display store={this.handleClickStore} translate={this.handleTranslatedText} text={this.state.finalText}/>

      </div>
    );
  }

  handleClickStore = (e) => {

    this.setState({userText: e.target.value})
    console.log(this.state.userText);

  }

  handleTranslatedText = () => {
    this.pigLatify();
  }

  //This will compare all functions to update the working text
  //No return, just set state
  pigLatify(){
    if(this.isFirstVowel(this.state.userText)){
      //push "-way" to the end of the word
      this.setState({
                      finalText: this.state.userText + "-way"
                    })

    }else if (this.isConsonant(0)){
      let i = 0
      do{
        this.isConsonant(i)
        i++
      }while(this.isConsonant(i))

      let userTextArr = this.state.userText.split('');
      let consonants = userTextArr.splice(0, i);
      this.setState({
        finalText: `${userTextArr.join('')}-${consonants.join('')}ay`
//        workingText: `${this.userTextArr}-${this.consonants}ay`
      })


    }else{
      console.log("Invalid");
      //this.setState({finalText: "INVALID"})
    }
    //Needed to update the text on the display
    //this.setState({finalText: this.state.workingText})
  }

  //takes in the user text to determine if the first letter is a vowel.
  //Returns bool
  isFirstVowel(string){

    if(this.state.vowels.includes(string[0])){
      return true
    }else{
      return false
    }
  }

  //Takes in the user text to determine if a letter is a consonant
  //Returns bool
  isConsonant(index){
    if(this.state.vowels.includes(this.state.userText[index])){
      return false
    }else{
      return true
    }

  }

}

export default App;
