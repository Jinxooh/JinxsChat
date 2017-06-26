import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

class Content extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillMount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }
    
    handleKeyDown = (e) => {
        if(e.keyCode === 27){
            const { hide } = this.props;
            hide();
        }
    }

    handleClickOutside = () => {
        const { hide } = this.props;
        hide();
    }

    render() {
        const { hidden, children } = this.props;
        return hidden ? null : <div>{children}</div>;
    }
}

Content = onClickOutside(Content);

class EyeCatchy extends Component {
    handleHide = () => {
        const { onHide } = this.props;
        onHide();
    }

    render() {
        const { hidden, children } = this.props;
        const { handleHide } = this;
        return (
            <Content hidden={hidden} hide={e=>{ handleHide()}}>
                {children}
            </Content>
        )
    }
}

EyeCatchy.propTypes = {
    onHide: PropTypes.func,
    hidden: PropTypes.bool,
}


export default EyeCatchy;
  