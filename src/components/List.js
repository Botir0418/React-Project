import React from 'react';
import Card from './Card';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            loading:true
        };
    }

    async componentDidMount(){
        const movies = await fetch('../assets/data.json');
        const moviesJSON = await movies.json();
        if(moviesJSON){
            this.setState({
                data: moviesJSON,
                loading: false
            })
        }
    }

    render() {
        const {data, loading} = this.state;

        if(loading){
            return <h1>Loading...</h1>
        }
        
        return (
            <div className='row'>
                {data.map(movie =>(
                    <div key={movie.id} className='col-md-2'>
                <Card movie={movie} />
                    </div>
                ))}
            </div>
        );
    }
}
export default List;
