import Inventory from  "./Invontery/Name"
import './App.css';

function App() {
  return (
   <div> 
     <Inventory name="Jackets" stockcounts={19} price={75}/>
     <Inventory name="shirts" stockcounts={15} price={60}/>
     <Inventory name="pants" stockcounts={17} price={50}/>
     <Inventory name="shoes" stockcounts={14} price={70}/>
     <Inventory name="ties" stockcounts={12} price={30}/>
     
    </div>
  );
}

export default App;
