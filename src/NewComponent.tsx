type NewComponentType = {
    topCars: TopCars[]
    // topCars: Array<TopCars>
}

type TopCars = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <table>

            {props.topCars.map((el, index) => {
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{el.manufacturer}</th>
                        <th>{el.model}</th>
                    </tr>
                )
            })}

        </table>


        // <ul>
        //     {props.topCars.map((el, index) => {
        //         return (
        //             <li key={index}><span>manufacturer: {el.manufacturer}</span> <span>model: {el.model}</span></li>
        //         )
        //     })
        //     }
        // </ul>
    )
}