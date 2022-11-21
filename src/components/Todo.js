import React,{useState} from 'react'

function Todo() {
  const [activity, setactivity] = useState("");
  const [listData, setlistData] = useState([]);
  const addActivity = ()=>{
      //  setlistData([...listData,activity])
      //  console.log(listData);
      setlistData((listData)=>{
        const updatedList = [...listData,activity];
        console.log(updatedList)
        setactivity('');
        return updatedList;
      })
  }
  const removeActivity = (i)=>{
      const updatedListData = listData.filter((elem,id)=>{
          return i!==id;
      })
      setlistData(updatedListData);
  }
  const removeAll = ()=>{
    setlistData([]);
  }
  return (
    <>
     <div className="container">
       <div className="header">TODO LIST</div>
       <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
       <button onClick={addActivity}>Add</button>
       <p className='List-heading'>Here is your List</p>
       {listData!==[] && listData.map((data, i)=>{
        return(
          <>
          <p className='myclass' key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'><button className='btn1' onClick={()=>removeActivity(i)}>Delete</button></div>   
          </p>
          </>
        )
       })}
       {listData.length>=1 && <button className='btn2' onClick={removeAll}>Remove All</button>}
       
     </div>
    </>
  )
}

export default Todo