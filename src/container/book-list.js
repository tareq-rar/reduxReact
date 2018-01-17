/*** Created by tareq on 28/10/17.*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';
class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li
                    key={ book.title }
                    onClick = { () => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }


    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps({books}){
    //What ever returned from this will show up as props
    //inside of bookList
    return {
        books
    };
}

//Anything returned from this function will end up s props
//on the bookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
//promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps )(BookList);