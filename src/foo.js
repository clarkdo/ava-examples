import React from 'react';

export const Foo = (props) =>
  <div className="Foo">
    <span className="bar">bar</span>
      {props.children}
    <span className="bar">bar</span>
    <button className="save" onClick={props.onButtonClick} />
  </div>;

Foo.propTypes = {
  children: React.PropTypes.element,
  onButtonClick: React.PropTypes.func,
};

// export class Foo extends React.Component {
//   static get propTypes() {
//     return {
//       children: React.PropTypes.element,
//       onButtonClick: React.PropTypes.func,
//     };
//   }
//   render() {
//     return (
//       <div className="Foo">
//         <span className="bar">bar</span>
//           {this.props.children}
//         <span className="bar">bar</span>
//         <button className="save" onClick={this.props.onButtonClick} />
//       </div>
//     );
//   }
// }
