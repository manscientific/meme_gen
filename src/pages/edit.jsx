import React ,{useState , createRef} from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/txt";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const imgUrl = params.get('imgurl');
  const [count , setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);

  }
  const memeRef = createRef();

  return (
    <div >
      <div ref={memeRef} className="meme mt-5 mb-5" style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        width: 'fit-content',
        margin: 'auto',
      }}>
        <img
          src={imgUrl}
          alt="no image"
          style={{
            width: "20%",
            marginBottom: "1rem"
          }}
        />
        
      </div>
      <div style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        width: 'fit-content',
        margin: 'auto',
      }}>
      {Array(count).fill(0).map((e)=>(<Text/>))}
        <button onClick={addText}>add text</button>
        <button variant = "success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
    </div>
  );
};

export default EditPage;
