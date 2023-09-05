import { Component } from "react";

class Counter extends Component{
    //constructor()
    state = {
        counter: 0,
        items: [],
    }

    // handleClick = () => {
    //        // console.log('this.state', this.state)
    //        //this.state.counter++

    //     //    this.setState({
    //     //     counter: 10,
    //     //     items: [123,123],
    //     //    })

    //     // this.setState((prevState)=>{
    //     //     //console.log('prevState', prevState);
    //     //     return {counter:prevState.counter+1}
    //     // })
    //     //console.log('state :', this.state);

    //     this.setState((prevState)=> ({counter:prevState.counter+1}))
    // }
    
    handleClickIncrement = () => {
        this.setState((prevState)=> ({counter:prevState.counter+1}))
    }
    handleClickDecrement = () => {
        this.setState((prevState)=> ({counter:prevState.counter-1}))
    }
    

    render() {
        //console.log('state 2:', this.state);
        return <div className='position-absolute top-50 start-50 translate-middle'>
        <div
            className='card bg-dark text-white '
            style={{ width: '600px' }}
        >
            <div className='card-body'>
                <h5 className='card-title text-center fs-1'>Counter</h5>
                <p
                    className='card-text  text-center'
                    style={{ fontSize: '80px' }}
                >
                {this.state.counter}
                </p>
                <div className='d-flex justify-content-center px-5'>
                    <button onClick={this.handleClickIncrement}
                        className='btn btn-outline-success me-5'
                    >
                        <i className='bi bi-plus-circle fs-1'></i>
                    </button>
                    <button onClick={this.handleClickDecrement} className='btn  btn-outline-danger ms-5'>
                        <i className='bi bi-dash-circle fs-1'></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
}


export default Counter


// const Counter = () => {
//     // const handleClick = (evt) => (
//     //     console.log('evt', evt)
//     // )
//     let counter = 0
//     const handleClick = () => {
//         counter++;
//         console.log('counter', counter)
//     }
// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 					{counter}
//                     </p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button onClick={handleClick}
// 							className='btn btn-outline-success me-5'
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
//
//export default Counter


// 1 - вариант
//document.addEventListener('')

// 2 вариант - взял React
//const div = document.createElement('div');
//div.onClick();
//div.addEventListener('click', callBack)
//div.addEventListener('click', ()=>{})
//div.addEventListener('click', handleClick(params));
//function handleClick(ent){}