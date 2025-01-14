import React from "react";

const TransactionTable=({transactions})=>{
<table
 className="table-auto w-full border-collapse border">
    <thead>
        <tr className="bg-gray-100">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Prize</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Sold</th>
        </tr>
    </thead>
    <tbody>
        {
            transactions.map((txn)=>{
                <tr key={txn._id}>
                    <td className="border px-4 py-2">{txn.title}</td>
                    <td className="border px-4 py-2">{txn.description}</td>
                    <td className="border px-4 py-2">{txn.price}</td>
                    <td className="border px-4 py-2">{txn.category}</td>
                    <td className="border px-4 py-2">{txn.sold ? 'Yes ' :'No'}</td>
                </tr>
            })
        }
    </tbody>

</table>


}

export default TransactionTable;