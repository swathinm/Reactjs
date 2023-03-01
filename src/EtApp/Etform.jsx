
import React , {useState} from 'react'

const Etform = ({track,settrack}) => {
    const[Totalamnt , setTotalamnt]=useState(0);
    const[InputValue, setInputValue]=useState(0);
    const total=parseInt(Totalamnt);
    const value=parseInt(InputValue);
    const date=new Date().toLocaleDateString();
const updateHandler = (e) => {
        setInputValue(e.target.value)
    }

const AddHandler=()=>{
    setTotalamnt(total+value);
    setInputValue('');
    settrack([...track,
    {
        tDate: date,
        tTotal: total,
        tAddedAmount: value,
        tRemovedAmount: '-',
        tBalanceAmount: total + value
    }
    ]);
}

const RemoveHandler=()=>{
    setTotalamnt(total - value);
    setInputValue('');
    settrack([...track,
    {
        tDate: date,
        tTotal: total,
        tAddedAmount: '-',
        tRemovedAmount: value,
        tBalanceAmount: total - value
    }
    ]);
}
return <div className='container my-4'>
        <div className='row'>
            <div className='col col-md-6 m-md-auto'>
                <div className='gutter-gap'>
                    <h1 className='text-center border p-2'>Expense Tracker - Basic</h1>
                    <form className='border p-2 mt-5'>
                        <h3 className='text-center'>Balance: {Totalamnt}</h3>
                        <div className='mb-3'>
                            <input type='number' placeholder='Enter Amount' className='form-control rounded-0 w-50 m-auto'
                                value={InputValue}
                                onChange={updateHandler} />
                        </div>
                        <div className='mb-3 text-center'>
                            <button type='button' className='btn bg-light border rounded-0 me-2'
                                onClick={AddHandler}>ADD</button>
                            <button type='button' className='btn bg-light border rounded-0'
                                onClick={RemoveHandler}>REMOVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}
export default Etform;