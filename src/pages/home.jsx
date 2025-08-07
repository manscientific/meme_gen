import React ,{useEffect , useState} from 'react';
import MemeCard from "../components/cards";
import { getAllMemes } from '../api/memes';




const Homepage = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{getAllMemes().then((memes) => setData(memes.data.memes))},[])
    return (
        <div className='row'>
            {data.map(el => (
                <MemeCard key={el.id} image={el.url} title={el.name} />
            ))}
        </div>
    )
}
export default Homepage;