import React, { useState } from "react";
import Card from "../Card";

const Formulario = () => {
          const [nombre, setNombre] = useState("")
          const [jugador, setJugador] = useState("")
          const [seMuestraAlerta, setSeMuestraAlerta] = useState(false)
          const [mensajeDeAlerta, setMensajeDeAlerta] = useState("")
          const [seMuestraCard, setSeMuestraCard] = useState(false)

          const handleChangeName = (event) => {
                    setNombre(event.target.value)
          }

          const handleChangePlayer = (event) => {
                    setJugador(event.target.value)
          }


          const handleSubmitJugador = (event) => {
                    event.preventDefault()
                    if (nombre.length <= 3 || nombre[0] === "") {
                              setSeMuestraAlerta(true)
                              setMensajeDeAlerta(" Ingrese un nombre con más de 3 caractéres")

                    }
                    if (jugador.length <= 6) {
                              setSeMuestraAlerta(true)
                              setMensajeDeAlerta("Ingrese una jugador con almenos 6 caractéres")
                    }
                    setSeMuestraCard(true)
          }
          const deletAlert = () => {
                    setSeMuestraAlerta(false)
                    setMensajeDeAlerta("")
          }
          return (
                    <form onSubmit={handleSubmitJugador}>

                              <input type="text" onChange={handleChangeName} value={nombre} />
                              <input type="text" onChange={handleChangePlayer} value={jugador} />
                              <input type="submit" value="Enviar" />
                              <dialog open={seMuestraAlerta} onClose={deletAlert}>
                                        {mensajeDeAlerta}
                              </dialog>
                              {seMuestraCard && <Card name={nombre} player={jugador} />}
                    </form>
          )

}

export default Formulario







