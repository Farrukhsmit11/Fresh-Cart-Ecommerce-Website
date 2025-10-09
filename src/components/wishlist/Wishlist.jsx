
import { Breadcrumb, Button, Popconfirm, Space, Table } from 'antd';
import "./Wishlist.css"
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import toast from 'react-hot-toast';
import Wishlistdata from "./Wishlist.json"
const Wishlist = () => {

    const [selectionType, setSelectionType] = useState("checkbox");
    const [data, setData] = useState(Wishlistdata);

    const handleDelete = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
        toast.success('Product deleted successfully!');
    };


    const columns = [
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Amount',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => `(status)`

        },
        {
            title: 'Action',
            key: 'action',
            render: (_text, record) => (
                <Space size="middle">
                    <Button className='delete-button'>Add to cart</Button>
                </Space>
            ),
        },


        {
            title: 'Remove',
            key: 'action',
            render: (_, record) => (
                <Popconfirm
                    title="Delete the item"
                    description="Are you sure to delete this product?"
                    okText="Yes"
                    onConfirm={() => handleDelete(record.key)}
                    cancelText="No"
                >
                    <Space size="middle">
                        <MdDelete className='delete-icon' />
                    </Space>
                </Popconfirm>
            ),
        },
    ];


    // Row selection function For checkbox. 
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };


    return (
        <>
            <div className="container">
                <div className="table-content">

                    <Breadcrumb
                        className='links'
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: <a href="">Shop</a>,
                            },
                            {
                                title: <a href="">Shop Wishlist</a>,
                            },

                        ]}
                    />

                    <h1 className='wishlist-heading'>My Wishlist</h1>
                    <p>There are 4 products in this wishlist.</p>
                </div>

                <Table
                    columns={columns}
                    dataSource={data}
                    className='shop-wishlist-table' bordered
                    rowSelection={{ type: selectionType, ...rowSelection }}
                    pagination={false}
                />
            </div>
        </>
    )
}

export default Wishlist