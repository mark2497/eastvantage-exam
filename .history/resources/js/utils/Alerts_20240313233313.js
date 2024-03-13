import Swal from "sweetalert2";
const Alerts = {
    displayMessage: (message) => {
        Swal.fire({
            title: 'Info',
            text: message,
            icon: 'info',
            confirmButtonText: 'OK'
          });
    },

    messageWithRedirect: (message, url) => {
        Swal.fire({
            title: 'Info',
            text: message,
            icon: 'info',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = url;
            }
          });
    }
}
export default Alerts
