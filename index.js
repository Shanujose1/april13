let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  arr.map(PrintDeveloperbyMap)
  function PrintDeveloperbyMap(value) {
    //Write your code here , just console.log
        if(value.profession=="developer"){
        console.log(value.name) 
    }
  }
  

  arr.forEach(PrintDeveloperbyForEach)
  function PrintDeveloperbyForEach(value) {
    //Write your code here , just console.log
        if(value.profession=="developer"){
        console.log(value.name) 
    }

  }


  let obj={
    id:4, name:"susan",age:"20",profession :"intern"
}
  function addData(arr) {
    //Write your code here, just console.log
    arr.push(obj)
    console.log(arr)
  }
  addData(arr)


  arr.filter(removeAdmin)
  function removeAdmin(value) {
    //Write your code here, just console.log
        if(value.profession!="admin"){
        console.log(value)   
    }
  }


  let arr1 =[
    {id:5, name:"abc",age:"17",profession :"intern"},
    {id:6, name:"bbc",age:"23",profession :"developer"},
    {id:7, name:"cid",age:"21",profession :"admin"},
]
  function concatenateArray() {
    //Write your code here, just console.log
    let res=[...arr,...arr1];
    console.log(res)
    
  }
  concatenateArray(arr)