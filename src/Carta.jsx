import './carta.css';
function Carta(props){

    return(
        <div className='doctor' >
            <div className="carta" style={{width: "200"}}>
            <img src={props.imagen1} alt="" />
            <div className='texto'>
                <h3>{props.titulo1}</h3>
                <p>{props.descripcion1}</p>
            </div>
        </div>
        <div className="carta" style={{width: "200"}}>
            <img src={props.imagen2} alt="" />
            <div className='texto'>
                <h3>{props.titulo2}</h3>
                <p>{props.descripcion2}</p>
            </div>
        </div>
        </div>
        

    );

}
export default Carta;