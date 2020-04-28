import React from 'react';
import './GitUsers.css';
import history from './../history';
import {GridComponent, Inject, Page, Sort, Filter, Group, PageSettingsModel, ColumnsDirective, ColumnDirective, rowsAdded} from '@syncfusion/ej2-react-grids';
//import UserDetails from './UserDetails';
 class GitUsers extends React.Component {
  pageSettings: PageSettingsModel = { pageSize: 6 }
  userlist = {};
  //UserDetails1 = new UserDetails();

  constructor(props){ 
    super(props); 
     this.state = { 
      item: [],
      isloaded: false,
     };

    //this.getAllUsers();     
  }

  componentDidMount(){
    fetch(`https://api.github.com/users?since=135`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isloaded: true,
        items: json
      })
    });
  }

  rowSelected(args: RowSelectEventArgs) {

    history.push({pathname:'/GitUserDetails', search:"?"+ args.data.login});
    
}


  render(){
    this.rowSelected = this.rowSelected.bind(this);
    var {isLoaded, items} = this.state;
    if(isLoaded){
      return <div>Loading</div>;
    }
    else{
      return <GridComponent dataSource={items} rowSelected= {this.rowSelected} allowPaging={true} pageSettings={this.pageSettings}>
      <ColumnsDirective>
          <ColumnDirective field='login' width='100' textAlign="Right"/>
          <ColumnDirective field='avatar_url' width='100' textAlign="Right"/>
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
  </GridComponent>
    }
  }
}

export default GitUsers;
