import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import PigHat from './images/pigHat.jpg'

class Display extends Component {
  render() {
    console.log(this.props);

    return (
      <div id="background">
        <div className="App">
                  <header className="section">
                    <h1>LEARN Pig Latin</h1>
                    <hr/>
                    <p className="subTitle">
                      Convert English to Pig Latin. Pig Latin is a pseudo language constructed from a simple set of rules (see below).
                    </p>
                  </header>

                  <main className="section">
                    <br/>
                    <div id="piggy"><img src={PigHat} alt="Pig in hat" title="I'm a latin piggy!"/></div>
                    <h3>In Pig Latin</h3>
                    <p className="textField">{this.props.text}</p>
                    <br/>
                    <h3>Enter text you would like to translate.</h3>
                      <textarea type="text" className="textField"  onChange={this.props.store}/>
                      <button className="section" onClick={this.props.translate}>Translate</button>
                      <br/>
                      <br/>
                    <h3>Rules of Pig Latin</h3>
                    <ol id="rules" className="subTitle">
                      <li>For words beginning with a vowel, add "way" to the end.</li>
                      <li>For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".</li>
                      <li>If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!</li>
                      <li>For words beginning with "y", treat "y" as a consonant.</li>
                    </ol>
                  </main>
      </div>
    </div>
    );
  }
}

export default Display;
