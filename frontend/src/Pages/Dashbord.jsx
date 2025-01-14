import React, { useEffect, useState } from 'react'; 

import { BarChart,Dropdown,PieChart,SearchField,Statastics,TransactionTable } from '../Components';

import { fetchCombined } from '../api/api';

const Dashboard = () => {
    const [month, setMonth] = useState('March');
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCombined({ month, search })
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching combined data:', error));
    }, [month, search]);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <div className="flex justify-between mb-4">
                <Dropdown selected={month} onChange={setMonth} />
                <SearchField searchQuery={search} onChange={setSearch}></SearchField>
            </div>

            <Statastics stats={data.statistics} />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <BarChart data={data.barChart} />
                <PieChart data={data.pieChart} />
            </div>

            <div className="mt-6">
                <TransactionTable transactions={data.transactions.transactions} />
            </div>
        </div>
    );
};



export default Dashboard;
