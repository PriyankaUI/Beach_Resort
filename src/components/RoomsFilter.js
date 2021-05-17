import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'


const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handelChange, type, capacity, price, minPrice, maxPrice, size, minSize, maxSize, breakfast, pets } = context;
    //get uniue types
    let types = getUnique(rooms, 'type')
    //add all
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => {
        return (<option key={index} value={item}>{item}</option>)
    });

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return (<option key={index} value={item}>{item}</option>)
    });

    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/* room types */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handelChange}>
                        {types}
                    </select>
                </div>
                {/* room types end */}
                {/* guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests </label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handelChange}>
                        {people}
                    </select>
                </div>
                {/* guest  end */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handelChange} className="form-control" />
                </div>
                {/* end room price */}
                {/*  room size */}
                <div className="form-group">
                    <label htmlFor="size">Room size </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handelChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handelChange} className="size-input" />
                    </div>

                </div>
                {/* end room price */}
                 {/* extras */}
                 <div className="form-group">
                 <div className="single-extra">
                 <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handelChange} />
                 <label htmlFor="breakfast">Breakfast</label>
                 </div>
                 <div className="single-extra">
                 <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handelChange} />
                 <label htmlFor="pets">Pets</label>
                 </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}

export default RoomsFilter
