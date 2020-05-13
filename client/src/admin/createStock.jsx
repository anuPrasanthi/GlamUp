import React, { Component } from 'react'
import '../css/admin.css'
import styled from 'styled-components'
const Button = styled.a.attrs({
    className: `btn btn-default`
})``
export default class CreateStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            gender: '',
            item_name: '',
            sizes:[],
            price: '',
            colors: '',
            files: [],
            imgCollection: []
        }
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
    handleCheck=event=>{

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
        const { category, gender, item_name, sizes, price, colors, imgCollection } = this.state;
        return (
            <div>
                <h4>CREATE STOCK</h4>
                <form className='row col-lg-12' method="post" encType="multipart/form-data" action="http://localhost:3000/api/stock">
                    <div className='col-md-6'>
                        <span className='mandatory'>*</span> Category <br />
                        <input type='text' value={category} onChange={this.handleCategory} name='category' required={true} /><br />
                        <span className='mandatory'>*</span> Name <br />
                        <input type='text' value={item_name} onChange={this.handleName} name='item_name' required={true} /><br />
                        <span className='mandatory'>*</span> Sizes <br />
                        {sizes.map((sizes,i)=>{
                            return  <input type="text" key={i} value={sizes} name="sizes" readOnly={true}/>
                        })}
                       
                         <span className='sizesStyle'>XL</span><input type='radio' />
                        <span className='sizesStyle'>L</span><input type='radio' />
                        <span className='sizesStyle'>M</span><input type='radio' />
                        <span className='sizesStyle'>S</span><input type='radio' />
                        <span className='sizesStyle'>XS</span><input type='radio' /> 
                        <br />
                        <span className='mandatory'>*</span>
                        <input type='file' accept="image/jpeg,image/jpg,image/png" name='imgCollection' onChange={this.onImgChange} multiple={true} required={true} />
                    </div>
                    <div className='col-md-6'>
                        {/* <span className='mandatory'>*</span> Gender <br />
                        <input type='text' required={true} /><br /> */}
                        <span className='mandatory'>*</span> Gender <br />
                        <select value={gender} onChange={this.handleGender} name='gender'>
                            <option>Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Kids">Kids</option></select><br />
                        <span className='mandatory'>*</span> Price <br />
                        <input type='text' pattern="[0-9]*" value={price} onChange={this.handlePrice} name='price' required={true} /><br />
                        Colors <br />
                        <input type='text' value={colors} onChange={this.handleColors} name='colors' /><br />
                        {imgCollection.map(function (imgCollection, i) {
                            return <img key={i} src={imgCollection} className='imgPreview' alt="stock" />
                        })}
                    </div>
                    <button type='submit' className='btn btn-success'>Create</button>
                    <Button href={'/'}>Cancel</Button>
                </form>
            </div>
        )
    }
}