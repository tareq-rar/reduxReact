/*** Created by tareq on 28/10/17.*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
export default class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.props} class="list-group-item">{book.title}</li>
            )
        });
    }


    render(){
        return(
            <ul class="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}