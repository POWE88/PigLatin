import React, { Component } from 'react';
import Display from './Display'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userText: "", //text from the user
      finalText: "", //translated text
      vowels: ["a", "e", "i", "o", "u"], //but never "y"

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
    console.log("user text: " + this.state.userText);
    this.toWords(this.state.userText)


    }


  //This will compare all functions to update the working text
  //No return, just set state
  pigLatify = (string) => {    // next steps: pass entire array of user text instead
    console.log("pigLatify: " + string);
    let i = 0

    if(this.isFirstVowel(string)){    // and initialize an empty local array. at each step, push to local arr then at the very

      //push "-way" to the end of the word

      return string + "-way "

    } else if (this.isConsonant(i, string)){

      do{

        if (string[i].toLowerCase() === 'q') {
          i += 2;
          break;
        } else {
          i++
        }

      } while(this.isConsonant(i, string))


      let userTextArr = string.split('');
      let consonants = userTextArr.splice(0, i);
      return `${userTextArr.join('')}-${consonants.join('')}ay `

    } else {
      console.log("Invalid");

    }
    //Needed to update the text on the display
    //this.setState({finalText: this.state.workingText})
  }

  //takes in the user text to determine if the first letter is a vowel.
  //Returns bool
  isFirstVowel = (str) => {
    if(this.state.vowels.includes(str[0])){
      return true
    }else{
      return false
    }
  }

  //Takes in the user text to determine if a letter is a consonant
  //Returns bool
  isConsonant = (index, string) => {
    if(this.state.vowels.includes(string[index])){
      console.log("isConsonant false: " + string[index]);
      return false
    }else{
      console.log("isConsonant true: " + string[index]);
      return true
    }
  }

  //takes a string, returns an array of words separated at " "
  toWords = (string) => {

    let copyArr = string.split(" ");
    let translatedArr = [];

    for (let i = 0; i < copyArr.length; i++) {
      console.log("toWord: " + copyArr[i]);
      translatedArr.push(this.pigLatify(copyArr[i]))
    }

    this.setState({finalText: translatedArr.join("")})
  }
}

export default App;
