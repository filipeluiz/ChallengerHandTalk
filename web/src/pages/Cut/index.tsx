import React, { ChangeEvent, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import Layout from '../../components/Layout'
import Movie from '../../components/Movie'
import Timeline from '../../components/Timeline'
import { useStyles } from './styles'
import PublishIcon from '@material-ui/icons/Publish';
import { fbFirestore, fbStorage } from '../../services/firebase' 

interface ICutProps {
  path?: string
}

const Cut: React.FC<ICutProps> = () => {
  const classes = useStyles()
  const [urlVideo, setUrlVideo] = useState("")

  const onChange = (event: ChangeEvent) => {
    let target = event.target as HTMLInputElement
    const file:File = (target.files as FileList)[0]
    const firestore = fbFirestore
    const storageRef = fbStorage.ref()

    firestore.collection("videos").add({
      createdAt: new Date(),
      numberOfParts: 0
    })
    .then((result) => {
      const fileRef = storageRef.child('videos/' + result.id)
      const upload = fileRef.put(file)
      
      upload.then(() => {
        console.log("Uploaded a file")
        setUrlVideo(result.id)
      })

      upload.on('state_changed', (snapshot) => {
        console.log("Carregando:  " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + "%")
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
 
  return (
    <Layout textPage={"Cortar Video"}>
      <Grid item md={10} className={classes.gridCut}>
        <label htmlFor="contained-button-file">
          <input 
            id="contained-button-file"
            className={classes.down}
            type="file"
            onChange={onChange}
          />          
          <Button variant="contained" color="primary" component="span">
            Realize o upload do vídeo<PublishIcon className={classes.iconPublish}></PublishIcon>
          </Button>
        </label> 
        <Movie videoSrc={urlVideo} className={classes.movie}></Movie>
        <div className={classes.rootDiv}>
          <Paper elevation={3} className={classes.paper}>
            <Timeline text='Timeline' />
          </Paper>
        </div>
      </Grid>        
    </Layout>
  )
}

export default Cut
