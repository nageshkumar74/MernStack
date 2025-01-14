const Statastics =({stats})=>{

 return(
 <div className="grid grid-cols-3 gap-4">

        <div className="bg-blue-200 p-4 rounded">
            <h2>Total Sale</h2>
            <p>{stats.totalSaleAmount}</p>
        </div>
        <div className="bg-blue-200 p-4 rounded">
            <h2>Sold Amount</h2>
            <p>{stats.soldItemsCount}</p>
        </div>
        <div className="bg-blue-200 p-4 rounded">
            <h2>Unsold Amount</h2>
            <p>{stats.notSoldItemsCount}</p>
        </div>
    </div>
 )
}

export default Statastics;