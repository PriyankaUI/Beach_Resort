import React from 'react'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'
import RoomsFilter from './RoomsFilter'
import Roomslist from './Roomslist'

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <Roomslist rooms={sortedRooms} />
        </div>
    )
}
export default withRoomConsumer(RoomsContainer)
// import React from 'react'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'
// import RoomsFilter from './RoomsFilter'
// import Roomslist from './Roomslist'

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log(value)
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             room container
//                             <RoomsFilter rooms={rooms} />
//                             <Roomslist rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }

 //export default RoomsContainer
