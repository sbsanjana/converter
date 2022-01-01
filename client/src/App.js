import React from 'react';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
        console.log(event.target.files[0]);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const { selectedFile } = this.state;
        formData.append('inputFile', selectedFile);
        console.log(formData)
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData,
        });
    };

    render() {
        return (
            < div >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload a file: <br /><br />
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                    </label>
                    <br /><br />
                    <button type="submit">
                        Upload
                    </button>
                </form >
            </div >
        );
    }
}