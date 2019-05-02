import React from 'react';
import axios from 'axios';
import CharacterDetails from './CharacterDetails';


class Characters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pageNumber: 1,
          characters: []     
        };
      }
    
      componentDidMount() {
        this._getCharactersForPage();
      }
    
      render() {
        return (
            <div>
            {this.state.characters.map(c => <CharacterDetails data={c} />)}
            <button onClick={this._decrementPageNumber}>Previous</button>
            <button onClick={this._incrementPageNumber}>Next</button>
            {/* <h6>{this.state.pageNumber}</h6> */}
      </div>
        );
      }

      _getCharactersForPage = async () => {
        const response = await axios.get(`https://my-little-cors-proxy.herokuapp.com/https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`);
          console.log(response.data);
          this.setState({
            characters: response.data
          }, () => {
            console.log('done setting state');
          });
      }
      
      _incrementPageNumber = () => {
        this.setState({
          pageNumber: this.state.pageNumber + 1
        }, () => {
          this._getCharactersForPage();
        });
      }
      
      _decrementPageNumber = () => {
        this.setState({
          pageNumber: this.state.pageNumber - 1
        }, this._getCharactersForPage); 
      }



    }



export default Characters;