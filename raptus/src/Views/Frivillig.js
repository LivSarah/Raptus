import React from "react";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { useForm } from "react-hook-form";
import './Frivillig.scss';

function Frivillig() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <main className="Frivillig">
      <PageHeader preTitle="Bli" title="FRIVILLIG" />

      <section className="content-wrapper">
        <span className="application-text">
          Alt arbeid rundt Raptus-festivalen baserer seg på frivillig arbeid.

          Søk om å bli frivillig i dag!
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input name="name" ref={register({ required: true })} />

          <div className="input-error-wrapper">
            <input name="birthdate" ref={register({ required: true })} />

            {errors.birthdate && <span>This field is required</span>}
          </div>

          <input type="submit" />
        </form>
      </section>
    </main>
  );
}

export default Frivillig;