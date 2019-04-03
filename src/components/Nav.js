import React, {Component} from 'react';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'baseline',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'var(--main-purple)',
    color: '#FFF',
    justifyContent: 'space-around',
    height: '5rem',
    zIndex: 5,
    boxShadow: '0px 4px 19px -2px rgba(38,38,38,0.9)',
  },
  nav__logo: {
    padding: '0rem 2rem',
    display: 'flex',
    cursor: 'pointer',
    height: '5rem',
    backgroundColor: '#FFF',
    color: 'var(--main-purple)',
    border: '3px solid var(--main-purple)',
    fontSize: '3rem',
    transform: 'scale(1, 1)',
    transition: '0.2s',
  },
  nav__feedbackInformation: {
    minWidth: '250px',
  },
  nav__score: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
  },
  nav__score__divider: {
    padding: '1rem',
  },
};

class Nav extends Component {
  state = {
    hovered: false,
  };
  render() {
    const {
      nav,
      nav__logo,
      nav__feedbackInformation,
      nav__score,
      nav__score__current,
      nav__score__divider,
      nav__score__total,
    } = styles;
    // const h = this.state.hovered ?  : `color: 'green'`;
    // console.log(h);
    return (
      <nav style={nav}>
        <h2
          style={{
            ...nav__logo,
            transform: `${this.state.hovered ? 'scale(0.9,0.9)' :'scale(1,1)'}`,
          }}
          onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
          onClick={this.props.sortImages}
        >
          !2
        </h2>
        <div style={nav__feedbackInformation}>{this.props.navFeedback}</div>
        <div style={nav__score}>
          <div style={nav__score__current}>
            Score: {this.props.currentScore}
          </div>
          <div style={nav__score__divider}>|</div>
          <div style={nav__score__total}>
            Total Score: {this.props.highScore}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
