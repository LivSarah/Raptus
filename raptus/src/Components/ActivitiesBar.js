import React from 'react'
import './Styles/ActivitiesBar.scss'
import {Button} from 'react-bootstrap';

function ActivitiesBar() {
  return (
    <div className="ActivitiesBar">
        <span>Cosplay, Panel<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stands &amp; Mer</span>
        <h4>Vi er tilbake 10.-12.sep 2021 med 25års jubileum!</h4>
        <p>I 2021 feirer Raptus sitt 25 års jubileum, og for at dette skal bli spektakulært trenger vi både 
        intervjuere til å sitte på scenen med våre gjester, frivillige til å hjelpe til under festivalen, og 
        stands som kan tilby våre besøkende mye spennende ting. Lokasjon, flere gjester,
        søknadsskjema og mer informasjon kommer i 2021.
        </p>
        <Button type="button" className="btn btn-outline-danger">Søknadsskjema kommer</Button>
    </div>
  )
}

export default ActivitiesBar