const fetch = require('node-fetch');

//GET
function get(url) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=test_WwKSeKApAEd5ZHkDMlaH_caa8iBALKt1'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

function getError(url) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=bad_token'
    }
  })//.then(function f(res) { if (res.statusCode === 200 ) res.json(); else throw new Error('didnt work') })
  .then(res => console.log(res.status))
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

//POST
function createApplicant() {
  const url = 'https://api.onfido.com/v2/applicants';
  const data = {
    first_name: "New",
    last_name: "Applicant",
    dob: "1990-01-01",
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=test_WwKSeKApAEd5ZHkDMlaH_caa8iBALKt1'
    }
  }).then(function f(res) { if (res.status === 201 ) return res.json(); else throw new Error('didnt work') })
  .then(function g(response) { console.log('Success:', response); return response.id } )
  .then(id => createCheck(id))
  .catch(error => console.error('Error:', error));
  //
  //.then(createCheck(applicant_id))
}


function createCheck(applicant_id) {
  //const url = 'https://api.onfido.com/v2/applicants/67a0e650-117e-45b7-9fcf-d651d606f316/checks';
  const url = `https://api.onfido.com/v2/applicants/${applicant_id}/checks`;
  //const reports
  const data = {
    type: 'express',
    reports: [{
      name: 'watchlist',
      variant: 'full'
    }],
    //report_type_groups: '6077'
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=test_WwKSeKApAEd5ZHkDMlaH_caa8iBALKt1'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));

}

//get('https://api.onfido.com/v2/applicants/')
//getError('https://api.onfido.com/v2/applicants/')
createApplicant()
//createCheck()

