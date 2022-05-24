const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
//import { removeUserSession, getUser, getEmail} from "utils/Common";

let mainWindow = null;
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    /*const user = getUser();
  const email = getEmail();
    const handleLogout = () => {
      const data = {
        username: user,
        email: email
      }
      removeUserSession();
      axios
      .post("users/signout", data)
      .then(res => {
        console.log("external logout")
      })
      .catch(err => {
        console.log(err);
        if(err.response.status === 401 || err.response.status === 400){
          this.setState({
            error: err.response.data.message
          });
        }else{
          this.setState({
            error: "Something went wrong! Please try again later!"
          });
        }
      });
      
    }
    handleLogout();*/
    app.quit()
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    title: "GREEN AIR",
    icon: `${path.join(__dirname, '../build/sas.ico')}`
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on('page-title-updated', function (e) {
    e.preventDefault()
  });
}