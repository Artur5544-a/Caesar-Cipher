import './App.css';
import { Grid, Paper } from '@material-ui/core'
import { CypherText } from './components/CypherText/CypherText'
import { PlainText } from './components/PlainText/PlainText'
import { textToCypher, cypherToText } from './components/caesarsCipher/caesarsCipher'
import { Shift } from './components/Shift/Shift';
import { useState } from 'react';
function App() {
  const [cypherText, setCypherText] = useState('')
  const [plainText, setPlainText] = useState('')
  const [shift, setShift] = useState(0)
  const onChangeCypherText = cypherText => {
    setCypherText(cypherText)
    setPlainText(cypherToText(cypherText, shift))
  }
  const onChangePlainText = plainText => {
    setPlainText(plainText)
    setCypherText(textToCypher(plainText, shift))
  }
  const onChangeShift = shift => {
    setShift(shift)
    setCypherText(textToCypher(plainText, shift))
  }
  return (
    <div className="App">
      <Grid container justify="center" spacing={40}>
        <Grid item xs={12}>
          <h1>Caesar's Cipher</h1>
          <Shift onChange={onChangeShift} />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Grid container justify="center" spacing={40}>
              <Grid item>
                <h2>Plain Text</h2>
                <PlainText value={plainText} onChange={onChangePlainText} shift={shift} />
              </Grid>
              <Grid item>
                <h2>Cypher Text</h2>
                <CypherText value={cypherText} onChange={onChangeCypherText} shift={shift} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default App;

