import useFetch from "./Hooks/useFetch"
import "./App.css"

function App(){
 const {data,loading,error} = useFetch()
  return (
    <div className="App">
      {loading && "loading"}
      { data?.length>0 && data.map((e)=>{
        return <div key ={e.id}>{e.login}</div>
      })}
    
    </div>
  )
}

export default App
