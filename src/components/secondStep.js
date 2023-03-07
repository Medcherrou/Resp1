import React from 'react'
import { Button } from '@mui/material';
export default function SecondStep() {
    return (
        <div>
            <Button variant="contained" color="secondary" type="submit" className="btn-1">
            Precedent
            </Button>
            <Button variant="contained" color="primary" type="submit" className="btn-1">
            Suivant
            </Button>
        </div>
    )
}
