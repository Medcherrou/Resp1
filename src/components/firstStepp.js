import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import { MuiTelInput } from "mui-tel-input";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

// import './firstStep.css' ;


const validationSchema = yup.object({
    domaine: yup
    .string('Saisir le domaine')
    .required('Domaine est requis'),
    situation_géographique: yup
    .string('Saisir la situation géographique')
    .required('Situation géographique est requis'),
    propriètaire: yup
    .string('Saisir le propriètaire')
    .required('Propriètaire est requis'),
    locataire: yup
    .string('Saisir le locataire')
    .required('Locataire est requis'),
    superficie_totel: yup
    .string('Saisir la superficie totel')
    .required('La superficie totel est requis'),
    superficie_à_équiper: yup
    .string('Saisir la superficie à équiper')
    .required('la superficie à équiper est requis'),
    commercial: yup
    .string('Saisir le commercial')
    .required('Le commercial est requis'),
    n_dossier: yup
    .string('Saisir le N° dossier')
    .required('Le N° dossier est requis'),
    n_télèphone: yup
    .string('Saisir le N° télèphone')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Le numéro de téléphone n\'est pas valide')
    .required('Le numéro de téléphone est requis'),
});

    

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      domaine: '',
      situation_géographique: '',
      propriètaire: '',
      locataire: '',
      superficie_totel: '',
      superficie_à_équiper: '',
      commercial: '',
      n_dossier: '',
      n_télèphone: '',
      etude: '',
      installation_principele: '',
      installation_porte_rampe: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [phone, setPhone] = useState('')

    const handleChange = (newPhone) => {
      setPhone(newPhone)
    }


  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form-container">
        <TextField
          id="domaine"
          name="domaine"
          label="Domaine"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.domaine}
          onChange={formik.handleChange}
          error={formik.touched.domaine && Boolean(formik.errors.domaine)}
          helperText={formik.touched.domaine && formik.errors.domaine}
        />
        <TextField
          id="situation_géographique"
          name="situation_géographique"
          label="Situation géographique"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.situation_géographique}
          onChange={formik.handleChange}
          error={formik.touched.situation_géographique && Boolean(formik.errors.situation_géographique)}
          helperText={formik.touched.situation_géographique && formik.errors.situation_géographique}
        />
        <TextField
          id="propriètaire"
          name="propriètaire"
          label="Propriètaire"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.propriètaire}
          onChange={formik.handleChange}
          error={formik.touched.propriètaire && Boolean(formik.errors.propriètaire)}
          helperText={formik.touched.propriètaire && formik.errors.propriètaire}
        />
        <TextField
          id="locataire"
          name="locataire"
          label="Locataire"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.locataire}
          onChange={formik.handleChange}
          error={formik.touched.locataire && Boolean(formik.errors.locataire)}
          helperText={formik.touched.locataire && formik.errors.locataire}
        />
        <TextField
          id="superficie_totel"
          name="superficie_totel"
          label="Superficie totel"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.superficie_totel}
          onChange={formik.handleChange}
          error={formik.touched.superficie_totel && Boolean(formik.errors.superficie_totel)}
          helperText={formik.touched.superficie_totel && formik.errors.superficie_totel}
        />
        <TextField
          id="superficie_à_équiper"
          name="superficie_à_équiper"
          label="Superficie à équiper"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.superficie_à_équiper}
          onChange={formik.handleChange}
          error={formik.touched.superficie_à_équiper && Boolean(formik.errors.superficie_à_équiper)}
          helperText={formik.touched.superficie_à_équiper && formik.errors.superficie_à_équiper}
        />
        <TextField
          id="commercial"
          name="commercial"
          label="Commercial"
          className='Input field'
          margin='normal' variant='outlined'
          value={formik.values.commercial}
          onChange={formik.handleChange}
          error={formik.touched.commercial && Boolean(formik.errors.commercial)}
          helperText={formik.touched.commercial && formik.errors.commercial}
        />
        <TextField
          id="n_dossier"
          name="n_dossier"
          label="N° dossier"
          className='input-field'
          margin='normal' variant='outlined'
          value={formik.values.n_dossier}
          onChange={formik.handleChange}
          error={formik.touched.n_dossier && Boolean(formik.errors.n_dossier)}
          helperText={formik.touched.n_dossier && formik.errors.n_dossier}
        />
        {/* <TextField
          id="n_télèphone"
          name="n_télèphone"
          label="N° télèphone"
          className='input-field'
          margin='normal' variant='outlined'
          // type={Phone}
          value={formik.values.n_télèphone}
          onChange={formik.handleChange}
          error={formik.touched.n_télèphone && Boolean(formik.errors.n_télèphone)}
          helperText={formik.touched.n_télèphone && formik.errors.n_télèphone}
        /> */}
        <MuiTelInput defaultCountry={"MA"} name="" value={phone} onChange={handleChange} />
          <FormControl component="fieldset" className='etude-choix'>
              <FormLabel component="legend">Choix de l'étude</FormLabel>
              <RadioGroup aria-label="etude" name="etude" value={formik.values.etude} onChange={formik.handleChange}>
                  <FormControlLabel value="brumisation" control={<Radio />} label="Brumisation" />
                  <FormControlLabel value="irrigation" control={<Radio />} label="Irrigation" />
                  <FormControlLabel value="traitement" control={<Radio />} label="Traitement" />
              </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className='etude-installation'>
              <FormLabel component="legend">Choix Installation </FormLabel>
              <RadioGroup aria-label="installation_principele" name="installation_principele" row
                          value={formik.values.installation_principele} onChange={formik.handleChange}>
                  <label className='section_name'>Principale</label>
                  <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                  <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
              </RadioGroup>
              <RadioGroup aria-label="installation_porte_rampe" name="installation_porte_rampe" row
                          value={formik.values.installation_porte_rampe} onChange={formik.handleChange}>
                  <label className='section_name'>Porte rampe</label>
                  <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                  <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
              </RadioGroup>
          </FormControl>

          <Button color="primary" variant="contained" type="submit" className='btn-next'>
              Suivant
          </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;