import React, { Component } from 'react'
// import BackgroundImage Image rom 'gatsby-background-image'
// import Image from 'gatsby-image'
// import { Link } from 'gatsby'

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch(`/comments${this.props.slug}.json`)
      .then(response => response.json())
      .then(comments => this.setState({ comments }));
  }

  render() {
    return (
      <ul>
        {this.state.comments.map(comment =>
          <li key={comment.id}>
            <span>{comment.author}</span>
            <p>{comment.description}</p>
          </li>
        )}
      </ul>
    );
  }
}

export default Comments;
