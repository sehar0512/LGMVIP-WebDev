import React, {Component}  from 'react';
import Search from '../src/components/Search';
import CardList from '../src/components/CardList';
import Scroll from '../src/components/Scroll';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Loader from './loader';

class App extends Component{

    constructor(){
        super()
        //defining the states
        this.state={
            robots: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }

    //function when the button is clicked .
    //it fetches the api
    //and stores in robots
    onButtonSubmit = () => {
        //changes the state of the button is clicked
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            //fetches the api which is provided in letsgrowmore
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }

    //function used to change the searchfield
    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){
        
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })

        //when the user has not clicked the button and the api is not fetched
        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='tc'>Click on "Get Users" to get all Details</h1>
                <Footer></Footer>
              </>
            );

        }

        //when the button is clicked and the api is being called
        //but no data is fetched
        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'>Loading...</h1>
                  <Loader className='loader'></Loader>
                  <Footer></Footer>
                </>
              );
        }
        //when the button is clicked and the api has fetched data
        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div className='tc'>
                      <h1>Users Information</h1>
                      <Search searchChange={this.onSearchChange}/>
                      <Scroll>
                        <CardList robots={filteredRobots}/>
                    
                      </Scroll>
                  </div>

                 </>
              );
        }
    }
}

export default App;
