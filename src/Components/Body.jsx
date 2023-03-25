import axios from "axios";
import Card from "./Card";

const Body = () => {
    const fetchData = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    console.log(fetchData);

    return (
        <Card />
    );
}

export default Body