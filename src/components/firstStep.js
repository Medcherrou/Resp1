import React, { useState } from "react";
import "../styledcomponents/firstStep.css";
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";

const FirstStep = ({ onNext }) => {
  const [domaine, setDomaine] = useState("");
  const [situationGeo, setSituationGeo] = useState("");
  const [proprietaire, setProprietaire] = useState("");
  const [locataire, setLocataire] = useState("");
  const [superficieTotale, setSuperficieTotale] = useState("");
  const [superficieEquiper, setSuperficieEquiper] = useState("");
  const [commercial, setCommercial] = useState("");
  const [dossier, setDossier] = useState("");
  const [telephone, setTelephone] = useState("");
  const [etude, setEtude] = useState("");
  const [installationPrincipale, setInstallationPrincipale] = useState("");
  const [porteRampe, setPorteRampe] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({
      selectedDate,
      domaine,
      situationGeo,
      proprietaire,
      locataire,
      superficieTotale,
      superficieEquiper,
      commercial,
      dossier,
      telephone,
      etude,
      installationPrincipale,
      porteRampe
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <form className="form-container" onSubmit={handleSubmit}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Date"
        format="MM\dd\yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        TextFieldComponent={TextField}
      />
      <TextField
        label="Domaine"
        value={domaine}
        onChange={(event) => setDomaine(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Situation Géographique"
        value={situationGeo}
        onChange={(event) => setSituationGeo(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Propriétaire"
        value={proprietaire}
        onChange={(event) => setProprietaire(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Locataire"
        value={locataire}
        onChange={(event) => setLocataire(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Superficie totale (ha)"
        value={superficieTotale}
        onChange={(event) => setSuperficieTotale(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Superficie à équiper (ha)"
        value={superficieEquiper}
        onChange={(event) => setSuperficieEquiper(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="Commercial"
        value={commercial}
        onChange={(event) => setCommercial(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="N° Dossier"
        value={dossier}
        onChange={(event) => setDossier(event.target.value)}
        margin="normal" variant="outlined"
      />
      <TextField
        label="N° Téléphone"
        value={telephone}
        onChange={(event) => setTelephone(event.target.value)}
        margin="normal" variant="outlined"
      />

       <FormControl component="fieldset">
        <FormLabel component="legend">Choix de l'étude</FormLabel>
        <RadioGroup row aria-label="etude" name="etude" value={etude} onChange={(event) => setEtude(event.target.value)}>
        <FormControlLabel value="brumisation" control={<Radio />} label="Brumisation" />
        <FormControlLabel value="irrigation" control={<Radio />} label="Irrigation" />
        <FormControlLabel value="traitement" control={<Radio />} label="Traitement" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend">Choix Installation Principale</FormLabel>
        <RadioGroup row aria-label="installation-principale" name="installationPrincipale" value={installationPrincipale} onChange={(event) => setInstallationPrincipale(event.target.value)}>
        <FormControlLabel value="pvc" control={<Radio />} label="PVC" />
        <FormControlLabel value="pehd" control={<Radio />} label="PEHD" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend">Choix Porte Rampe</FormLabel>
        <RadioGroup row aria-label="porte-rampe" name="porteRampe" value={porteRampe} onChange={(event) => setPorteRampe(event.target.value)}>
        <FormControlLabel value="pvc" control={<Radio />} label="PVC" />
        <FormControlLabel value="pehd" control={<Radio />} label="PEHD" />
        </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" type="submit" className="btn-1">
        Next
        </Button>
        </form>
        </MuiPickersUtilsProvider>
        );
        };
export default FirstStep;
