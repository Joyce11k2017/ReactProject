import React from 'react';
import './GitUserDetails.css';
import {GridComponent, Inject, Page, Sort, Filter, Group, PageSettingsModel, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-grids';
import {data} from './dataSource'; 

class GitUserDetails extends React.Component {
    pageSettings: PageSettingsModel = { pageSize: 6 }
    userName = "";
    data: object[]= data.slice(0,7);

constructor(props){ 
    super(props); 
        this.userName = this.props.location.search.replace("?", "");
        this.state = { 
        item: [],
        isloaded: false,
        };
    }
   
    componentDidMount(){        
        //let userName = args.data.login;//get the JSON object of the column corresponding to the field name
        fetch(`https://api.github.com/users/${this.userName}`)
        .then(res => res.json())
        .then(json => {                  
            this.setState({
                isloaded: true,
                items: json
              })     
        });      
  }

  render(){
    var {isLoaded, items} = this.state;
   
    if(isLoaded)
    {
        return <div>Loading</div>;
    }
    else
    {
      return    <GridComponent dataSource={[items]} rowSelected= {this.rowSelected}>
        <ColumnsDirective>
            <ColumnDirective field='login' width='100' textAlign="Right"/>
            <ColumnDirective field='id' width='100'/>
            <ColumnDirective field='node_id' width='100' textAlign="Right"/>
            <ColumnDirective field='avatar_url' width='100'/>
            <ColumnDirective field='gravatar_id' width='100' textAlign="Right"/>
            <ColumnDirective field='url' width='100'/>
            <ColumnDirective field='html_url' width='100' textAlign="Right"/>
            <ColumnDirective field='followers_url' width='100'/>
            <ColumnDirective field='following_url' width='100' textAlign="Right"/>
            <ColumnDirective field='gists_url' width='100'/>
            <ColumnDirective field='name' width='100' textAlign="Right"/>
            <ColumnDirective field='company' width='100'/>
            <ColumnDirective field='blog' width='100' textAlign="Right"/>
            <ColumnDirective field='location' width='100'/>
            <ColumnDirective field='email' width='100' textAlign="Right"/>
            <ColumnDirective field='created_at' width='100'/>
        </ColumnsDirective>       
    </GridComponent>
    }
  }
 }

 export default GitUserDetails;