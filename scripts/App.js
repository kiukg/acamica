import Hotels from "../components/Hotels";
import Filters from "../components/Filters";
import Header from "../components/Header";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            hotels :hotelsData
        }
    }
    render(){
        return (
            <div>
                <Header></Header>
                <Filters></Filters>
                {this.state.hotels.map(function (item){
                    return(<Hotels {...item}></Hotels>)
                })
                }
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));