
import axios from "axios";

import Card from "./Card";

const Body = () => {
    const fetchData = async() => {

        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        console.log("responce",data);
        return data;
    }
    
    // console.log(fetchData);

    return (
        <Card name={fetchData}/>
    );
}

export default Body