//https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one
const {log} = console;
const moment = require('moment');

const user_name     = '';
const refresh_token = '';
const access_token  = '';
const client_id     = '';
const client_secret = '';
const bcc_to = '';
const cc_to = '';
const email_subject = '';

const attach_file_name = `.png`;

const time_in = '';
const time_out = '';

const name = '';
const job_position = '';
const company_info = ``;
const company_link = ``;


const email_to = '';
const leave_planned = ``;

const teamMates = [''];
const help = [
``
];

const outputArrayGenFn = (i = 0, max = 3, listArray, outputArray = [], cache = {}) => {

  const randomIndexGenFn = (randomNoCache) => {
    const randomNo = Math.floor(Math.random() * listArray.length);
    if (randomNoCache[randomNo] !== null && randomNoCache[randomNo] !== undefined) {
      return randomIndexGenFn(randomNoCache);
    } else {
      return randomNo;
    }
  };

  const randomInt = randomIndexGenFn(cache);
  const newCache = Object.assign(cache, {[randomInt]: randomInt});
  const newOutputArray = (outputArray.length) ? [...outputArray, randomInt] : [randomInt];
  const nextI = i + 1;

  if (nextI < max) {
    return outputArrayGenFn(nextI, max, listArray, newOutputArray, newCache);
  } else {
    return newOutputArray;
  }
};

const helpsIndexArray = outputArrayGenFn(0, 3, help, [], {});
const helpersIndexArray = outputArrayGenFn(0, 3, teamMates, [], {});

const helps = ((teamArray, helpArray, helpersIndexArray, helpIndexArray) => {
  return helpersIndexArray.map((helper, i) => {
    return `${teamArray[helper]} ${helpArray[helpIndexArray[i]]}`;
  });
})(teamMates, help, helpersIndexArray, helpsIndexArray);

log(JSON.stringify(helpsIndexArray));
log(JSON.stringify(helpersIndexArray));
log(JSON.stringify(helps));

const work = [``];
const randomWork = work[Math.floor(Math.random() * work.length)];

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        clientId: client_id,
        clientSecret: client_secret
    }
});

transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});
  // setup e-mail data with unicode symbols
let mailOptions = {
    from    : user_name, // sender address
    to      : email_to, // list of receivers
    bcc			: bcc_to,
    subject : email_subject, // Subject line
    attachments: [{
        filename: attach_file_name,
        path: `assets/${attach_file_name}`,
        cid: 'unique@kreata.ee'
    }], //same cid value as in the html img src
    html    : `Hi,
              <br><br>
              <b>Date:</b> ${moment().format('DD/MM/YY')}<br>
              <b>Time In:</b> ${time_in}<br>
              <b>Time Out:</b> ${time_out}<br>

              <br>
              <p>*If late in/out: - </p>

              <b>Task Assigned: </b>
              <ol>
              <li>${randomWork}</li>
              <li></li>
              <li></li>
              <li></li>
              </ol>
              <br>
              <b>Task Completed: </b>
              <ol>
              <li>${randomWork}</li>
              <li></li>
              <li></li>
              <li></li>
              </ol>
              <br>
              <p>{Bit Bucket / Design Drive updated}</p>
              <br>
              <b>Any issues faced: -</b>
              <br><br>

              <b>Leave Planned / Approved: </b> ${leave_planned}
              <br><br>

              <b>Gratitude:</b> {Attach any pic}
              <br>
              <ol>
                <li>${helps[0]}</li>
                <li>${helps[1]}</li>
                <li>${helps[2]}</li>
              </ol>
              <p>--</p>
              <p>
              ${name} <br>
              <b style="font-size: 10px">${job_position} <br></b>
              </p>
              
              <style type="text/css" media="screen">
                a:link { color: rgb(43,171,226) !important; text-decoration: none; }
                a:visited { color: rgb(43,171,226) !important; text-decoration: none; }
                a:hover { color: rgb(43,171,226) !important text-decoration: none; }
                a:active { color: rgb(43,171,226) !important; text-decoration: none; }
              </style>


              <img src="cid:unique@kreata.ee" width="70" height="70" style="float:left; margin-right: 15px; display: inline-block" />

              <span style="font-size: 12px; display: inline-block; line-height: 15px; color:rgb(86,86,86)">
                ${company_info}
                <br>
                <b><span style="color: rgb(43,171,226)">SINGAPORE</span> INDONESIA MALAYSIA THAILAND VIETNAM</b><br>
                <br>
                <b style="color: rgb(43,171,226)"><a style="color: rgb(43,171,226)"><span style="color: rgb(43,171,226)">${company_link}</span></a></b>
              </span>



              `, 
// plaintext body
       //html    : '<b>Hello world ?</b>', // html body

    auth : {
        user         : user_name,
        refreshToken : refresh_token,
        accessToken  : access_token
        //expires      : 1494388182480
    }
};