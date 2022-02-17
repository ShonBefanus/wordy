import React,{useState, useEffect} from 'react';
const Checkbox = ({isActive, onChange, activeTitle, inactiveTitle}) => {
    const [checked,setChecked] = useState(isActive);
    useEffect(()=>{
        onChange(checked);
    },[checked, onChange]);
    const title = () => checked ? activeTitle : inactiveTitle;
    return (
        <div className="ui right floated compact segment mode">
            <label className="ui label">{title()}</label>
            <div className="ui   fitted toggle checkbox">
                <input type="checkbox" onChange={(e)=>setChecked(!checked)} checked={checked?'checked':''}  />
                <label/>
            </div>
        </div>
    )
};
export default Checkbox;
