import React from "react";
import Layout from "../../components/Layout";
import { Grid } from '@material-ui/core'
import Tables from '../../components/Tables'
import { useStyles } from './styles'

const createData = (id: string, sendData: string, quanty: number) => { 
  return { id, sendData, quanty }
}

const rows: {id: string, sendData: string, quanty: number}[] = [
  // Esse dado é só um exemplo, o que faltou é providenciar o servidor API do firebase.
  // createData('zxcde456asdf', '19/08/2021 as 12:15', 3) 
]

interface IVisualizationProps {
  path?: string
}

const Visualization: React.FC<IVisualizationProps> = () => {
  const classes = useStyles()

  return (
    <Layout textPage={"Lista de Vídeos Cortados"}>
      <Grid item md={10}>
        <Tables className={classes.table} data={rows}></Tables>
      </Grid>
    </Layout>
  )
}

export default Visualization
