import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and Course Promotions</h1>
                <ReactTypingEffect
                  text={["Bootstrap,", "SMU Bootcamp,", "Udemy-Online,", "MDN Web-Docs"]}
                  cursorRenderer={cursor => <h1>{cursor}</h1>}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text.split('').map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                             key={key}
                             style={i%1 === 0 ? { color: 'orange'} : {}}
                            >{char}</span>
                          );
                        })}
                      </h1>
                    );
                  }}        
                />


            </div>
        </div>
    )
}

export default Header;
