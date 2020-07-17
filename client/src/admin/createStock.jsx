import React, { Component } from 'react'

import '../css/admin.css'
// import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom'
// const Button = styled.a.attrs({
//     className: `btn btn-default`
// })``
export default class CreateStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            gender: '',
            item_name: '',
            sizes: [
                { id: 1, value: "L" },
                { id: 2, value: "M" },
                { id: 3, value: "S" },
                { id: 4, value: "XS"}
            ],
            checkedItems: new Map(),
            checkedSizes: [],
            price: '',
            colors: '',
            files: [],
            imgCollection: []
        }
        console.log(this.state.checkedSizes)
    }

    onImgChange = e => {
        e.preventDefault();
        // FileList to Array
        let files = Array.from(e.target.files);
        // File Reader for Each file and and update state arrays
        files.forEach((file, i) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState(prevState => ({
                    files: [...prevState.files, file],
                    imgCollection: [...prevState.imgCollection, reader.result]
                }));
            }

            reader.readAsDataURL(file);
        });

    }
    handleCategory = event => {
        this.setState({
            category: event.target.value
        })
    }
    handleGender = event => {
        this.setState({
            gender: event.target.value
        })
    }
    handleName = event => {
        this.setState({
            item_name: event.target.value
        })
    }

    toggleChangeMJ = (event, prevState) => {
        var isMJ = event.target.isChecked
        var name = event.target.name
        this.setState({
            sizes: Object.assign({}, this.state.sizes, { isMJ: !isMJ, name })
        });

    }


    toggleChangeSizes = (event) => {
        var isChecked = event.target.checked;
        var item = event.target.value;
        var name = event.target.name  
        console.log(item)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        //console.log(isChecked)
        this.setState(prevState => ({
           checkedItems: prevState.checkedItems.set(item, isChecked),
                checkedSizes: isChecked ?[...prevState.checkedSizes, name]:[name,'']
                // [!isChecked.checked]
           
}));
        
    }
    toggleChangeDrake = (event, prevState) => {
        var isDrake = event.target.isChecked
        var name = event.target.name
        this.setState(() => ({
            sizes: Object.assign({}, this.state.sizes, { isDrake: !isDrake, name }),

        }));

    }
    handlePrice = event => {
        const price = (event.target.validity.valid) ? event.target.value : this.state.price;
        this.setState({
            price
        })
    }
    handleColors = event => {
        this.setState({
            colors: event.target.value
        })
    }
    
    render() {
        const { category, gender, item_name, checkedSizes, price, colors, imgCollection } = this.state;
        console.log(checkedSizes)
        return (
            <div className='admin'>
                <h4>CREATE STOCK</h4>
                <form className='row col-lg-12 adminForm' method="post" encType="multipart/form-data" action="http://localhost:3000/api/stock">
                    <div className='col-md-6 createStock'>
                        <span className='mandatory'>*</span> Category <br />
                        <input type='text' value={category} onChange={this.handleCategory} name='category' required={true} /><br />
                        <span className='mandatory'>*</span> Name <br />
                        <input type='text' value={item_name} onChange={this.handleName} name='item_name' required={true} /><br />
                        <span className='mandatory'>*</span> Sizes <br />
                       
                         <input type="text" name='checkedSizes' value={checkedSizes} readOnly={true} />
                           
                        <div className='row'>

                            {
                                this.state.sizes.map((item,i) => (
                                    <li className='checkb' key={i}>
                                        <label>
                                            {item.value} <input
                                                type="checkbox"
                                                value={item.id} name={item.value}
                                                onChange={this.toggleChangeSizes}
                                            />
                                        </label>
                                    </li>
                                ))
                            }</div>
                        <br />
                        <span className='mandatory'>*</span>
                        <input type='file' accept="image/jpeg,image/jpg,image/png" name='imgCollection' onChange={this.onImgChange} multiple={true} required={true} />
                    </div>
                    <div className='col-md-6 createStock'>
                        {/* <span className='mandatory'>*</span> Gender <br />
                        <input type='text' required={true} /><br /> */}
                        <span className='mandatory'>*</span> Gender <br />
                        <select value={gender} onChange={this.handleGender} name='gender'>
                            <option>Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Kids">Kids</option></select><br />
                        <span className='mandatory'>*</span> Price <br />
                        <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} value={price} onChange={this.handlePrice} name='price' required={true} /><br />
                        Colors <br />
                        <input type='text' value={colors} onChange={this.handleColors} name='colors' /><br />
                        {imgCollection.map(function (imgCollection, i) {
                            return <img key={i} src={imgCollection} className='imgbeforeSubPreview' alt="stock" />
                        })}
                    </div>
                    <button type='submit' className='btn btn-success'>Create</button>
                    <Link className='btn btn-default' to={'/'}>Cancel</Link>
                </form>
            </div>
        )
    }
}