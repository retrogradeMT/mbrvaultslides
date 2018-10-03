<template>
  <div id="app">
    <ul id="menu">
            <li><img src="img/MBRVault_Logo.png" style="height:70px; padding-left:20px"></li>
    </ul>
    <ul id="benefits">
            <li style="padding:15px; font-size:30px; color: #3c4451; font-weight: bold;">Less Work. More Growth</li>
    </ul>
        <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
            <h3>Skip the data entry</h3>
            <img src="./assets/reports.png" style="max-height:40%">
        </div>
        <div class="section">
            <h3>Maintenance Free Online Directory</h3>
            <img src="./assets/directory.png" style="max-height:50%">
        </div>
        <div class="section">
            <h3>Sync with Outlook</h3>
            <img src="./assets/outlook.png" style="max-height:50%">
        </div>
        <div class="section">
            <h3>Send Text Messages With Ease</h3>
            <img src="./assets/text.png" style="max-height:50%">
        </div>
        <div class="section">
            <h3>Email Tracking</h3>
            <img src="./assets/email_tracking.png" style="max-height:50%">
        </div>
        <div class="section">
            <h3>Improve Retention</h3>
            <img src="./assets/retention.png" style="max-height:50%">
        </div>
        <div class="section">
            <h3>Event Management</h3>
            <img src="./assets/events.png" style="max-height:50%">
        </div>
    </full-page>




  </div>
</template>
<script>

  export default {

    data() {
      return {
        options: {
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
          sectionsColor: ['#41b883', '#3c4350', '#0798ec','#41b883', '#3c4350', '#41b883', '#3c4350'],
          autoScroll: true,
          verticalCentered: true,
          continuousVertical: true,
        },

      }
    },
    mounted(){
      this.flip()
      },
    methods: {
      flip(){
      var self = this;
        setInterval(function(){
                self.$refs.fullpage.api.moveSectionDown()
            }, 8000);
        },

    }
  }
</script>


<style>
@charset "ISO-8859-1";
/* Reset CSS
 * --------------------------------------- */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
}
table {
    border-spacing: 0;
}
fieldset,
img {
    border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
    font-weight: normal;
    font-style: normal;
}
strong {
    font-weight: bold;
}
ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
caption,
th {
    text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    font-size: 100%;
    margin: 0;
    padding: 0;
}
q:before,
q:after {
    content: "";
}
abbr,
acronym {
    border: 0;
}
* {
    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box; /* <=28 */
    box-sizing: border-box;
}

/* Custom
 * --------------------------------------- */
body {
    font-family: arial, helvetica;
}
.section {
    position: relative;
    text-align: center;
    padding-top: 40px;
}
#section-1 h2 {
    color: #fff;
    font-size: 10em;
    font-weight: 900;
}
#section-1 h1 {
    font-size: 2em;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin: 1.5em auto 1em auto;
    color: #35495e;
    padding-right: 30px;
    padding-left: 30px;
}
#section-1 li {
    display: inline-block;
    margin: 1.25em 0.3em;
}
.section-1-button {
    padding: 0.93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}
h3 {
    font-size: 5em;
    text-align: center;
    color: #fff;
    font-weight: bold;
}
#logo {
    position: fixed;
    top: 20px;
    left: 20px;
    color: #fff;
    font-weight: bold;
    z-index: 99;
    font-size: 1.9em;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}

/* Menu
 * --------------------------------------- */
#menu-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 159px;
    height: 2px;
    background: #fff;
    align-items: right;
}

#menu {
    position: fixed;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
    background: #3c4350;
    width: 100%;
    text-align: center;
}
#menu li {
    display: inline-block;
    margin: 10px 0px;
    position: relative;
}
#menu a {
    color: #fff;
    padding: 0 1.1em 1.1em 1.1em;
}
#menu li.active a:after {
    content: "";
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
}
#benefits {
    position: fixed;
    top: 90px;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
    background: #fafafa;
    width: 100%;
    text-align: center;
}

/* Actions buttons
 * --------------------------------------- */
.actions {
    position: fixed;
    bottom: 2%;
    margin: 0 auto;
    z-index: 99;
    left: 0;
    right: 0;
    text-align: center;
}
.actions li {
    display: inline-block;
    margin: 0.3em 0.3em;
}
.actions-button {
    padding: 0.73em 1.47em;
    background: rgba(53, 73, 94, 0.47);
    border-radius: 5px;
    display: block;
    color: #fff;
    cursor: pointer;
}

/* Twitter
 * --------------------------------------- */
.twitter-share i {
    vertical-align: middle;
    position: relative;
    top: 2px;
    display: inline-block;
    width: 38px;
    height: 14px;
    color: white;
    top: -4px;
    left: -2px;
    fill: #fff;
}
.twitter-share svg {
    height: 40px;
    margin-top: -10px;
}
.view-github {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    padding: 0.93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}
</style>
