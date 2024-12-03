import {  Table, Drawer, TableColumnType, Button, Avatar, Typography } from "antd"
import { useEffect, useState } from "react"
import { userApi } from "../api/users"
import { ResponseData } from "../request/request"


const columns = ({setVisable}:{setVisable:(isVisable:boolean)=>void}):TableColumnType[] => [
  {title: 'id', dataIndex: "id"},
  {title: 'name', dataIndex: "name"},
  {title:"avatar", render: (_, record)=>{
    return <Avatar src={record.avatar} size={32} />
  }},{
    title:"操作",
    render: (_, record)=>{
      return <Typography.Link onClick={()=> setVisable(true)}>详情</Typography.Link>
    }
  }]

const UserTable = () => {
  const [users, setUsers] = useState<{id:string, name: string}[]>([])


  async function getUsers(){
    const users:ResponseData = await userApi()
    setUsers(users.data)
  }

  useEffect( ()=>{
    getUsers()
  }, [])



  const [visable, setVisable] = useState<boolean>(false)



  return(
    <>
      <Table rowKey="id" dataSource={users} columns={columns({setVisable})} />
      <Drawer open={visable} onClose={()=> setVisable(false)}>
        dd
      </Drawer>
    </>
  )
}


export default UserTable

