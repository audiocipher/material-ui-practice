import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';


import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});


const StyledPaper = styled(Paper)`
  background-color: pink;
`;

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName} >
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <StyledPaper>xs=12</StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </JssProvider>
    );
  }
}

export default App;
