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
      wordsArr: ["a", "b"]

    }
  }

  render() {
    console.log(this.state.wordsArr);
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
    this.toWords(this.state.userText)
    console.log("user text: " + this.state.userText);
    for (let i = 0; i < this.state.wordsArr.length; i++) {
      console.log("in the for loop " + this.state.wordsArr[i])
      this.pigLatify(i, this.state.wordsArr[i]);
    }
    this.setState({ finalText: this.state.wordsArr.join("") })
  }

  //This will compare all functions to update the working text
  //No return, just set state
  pigLatify = (index, string) => {    // next steps: pass entire array of user text instead
    if(this.isFirstVowel(string)){    // and initialize an empty local array. at each step, push to local arr then at the very
                                      // end, set state of wordsArr to that local array
      //push "-way" to the end of the word
      let { wordsArr } = this.state
      wordsArr[index] = string + "-way"
      console.log("if vowel " + wordsArr);
      this.setState({ wordsArr: this.wordsArr })

    } else if (this.isConsonant(0)){
      let i = 0
      console.log("if not vowel " + this.state.wordsArr);
      do{
        this.isConsonant(i)
        if (string[i].toLowerCase() === 'q') {
          i += 2;
          break;
        } else {
          i++
        }
      } while(this.isConsonant(i))

      let userTextArr = string.split('');
      let consonants = userTextArr.splice(0, i);
      this.setState({
        finalText: `${userTextArr.join('')}-${consonants.join('')}ay`
      })

    } else {
      console.log("Invalid");
      //this.setState({finalText: "INVALID"})
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
  isConsonant = (index) => {
    if(this.state.vowels.includes(this.state.userText[index])){
      return false
    }else{
      return true
    }
  }
  //takes a string, returns an array of words separated at " "
  toWords = (string) => {
    this.setState({wordsArr: string.split(" ")})
    console.log(this.state.wordsArr);
  }

}

export default App;
