import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const estiloTitulo = {borderColor:colorPrimario}

    const obj = { backgroundColor:colorPrimario }

    return <>{ colaboradores.length > 0 && 
        <section className="equipo" style={obj}>
            <input
                type='color'
                className = 'input-color'
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index)=> <Colaborador 
                    datos={colaborador} 
                    key={colaborador.nombre} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
}</>
}

export default Equipo