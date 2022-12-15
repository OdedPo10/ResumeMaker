import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const BgOption = () => {

    let nextPage = () => {
        let navigat = useNavigate();
        navigate("/techs");
    }
    return (
        <React.Fragment>

            <div className="bgOption">
                <h2 style={{ width: '14cm', color: 'black' }}>chose your favorite tamplate!</h2>
                <button className="btn btn-outline-dark" onClick={() => nextPage()}>next</button>
                <div value='1' onClick={(e) => this.props.handleTamplate(e)} className="singleOption1"></div>
                <div key='2' onClick={(e) => this.props.handleTamplate(e)} className="singleOption2"></div>
                <div key='3' onClick={(e) => this.props.handleTamplate(e)} className="singleOption3"></div>
                <div key='4' onClick={(e) => this.props.handleTamplate(e)} className="singleOption4"></div>
                <div key='5' onClick={(e) => this.props.handleTamplate(e)} className="singleOption5"></div>
                <div key='6' onClick={(e) => this.props.handleTamplate(e)} className="singleOption6"></div>
                <div key='7' onClick={(e) => this.props.handleTamplate(e)} className="singleOption7"></div>
                <div key='8' onClick={(e) => this.props.handleTamplate(e)} className="singleOption8"></div>
                <div key='9' onClick={(e) => this.props.handleTamplate(e)} className="singleOption9"></div>
                <div key='10' onClick={(e) => this.props.handleTamplate(e)} className="singleOption10"></div>
                <div key='11' onClick={(e) => this.props.handleTamplate(e)} className="singleOption11"></div>
                <div key='12' onClick={(e) => this.props.handleTamplate(e)} className="singleOption12"></div>
            </div>
        </React.Fragment>
    );
}

export default BgOption;