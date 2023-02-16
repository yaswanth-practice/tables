import React, { useState ,useMemo,useEffect} from 'react';
// import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
// import {ICellRendererParams} from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ContextMenuActions from './ContextMenuAction.js'

const App = () => {
 const actionRenderer=()=>{
  return <div>Actions</div>
 }
 actionRenderer.displayName='Actions'
   const [columnDefs] = useState([
       { field: 'make' ,filter:true,headerName:'Apple'},
       { field: 'model' ,filter:true},
       { field: 'price' },
       {
        field: "id",
        headerName: "actions",
        cellRendererFramework: (props) => <ContextMenuActions {...props} />
      }
       
   ]) 

   const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
   // DefaultColDef sets props common to all Columns
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const defaultColDef = useMemo( ()=> ({
       sortable: true,
       filter:true
     }));

      // Example load data from sever
 useEffect(() => {
  fetch('https://www.ag-grid.com/example-assets/row-data.json')
  .then(result => result.json())
  .then(rowData => setRowData(rowData))
}, []);
   return (
       <div className="ag-theme-alpine" style={{height: '90vh', width: 600 ,margin:'auto'}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
               defaultColDef={defaultColDef} 
               width='auto'
           </AgGridReact>
       </div>
   );
};
export default App;