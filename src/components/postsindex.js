import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <div className="col-xs-6">
                            <strong>{post.title}</strong>
                        </div>
                        <div className="col-xs-6 pull-xs-right">
                            <span className="">[{post.categories}]</span>
                        </div>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group col-xs-12">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);