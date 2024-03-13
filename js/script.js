function startCountdown(callback) {
    setTimeout(function () {
      document.getElementById('countdown').innerText = '10';
      setTimeout(function () {
        document.getElementById('countdown').innerText = '9';
        setTimeout(function () {
          document.getElementById('countdown').innerText = '8';
          setTimeout(function () {
            document.getElementById('countdown').innerText = '7';
            setTimeout(function () {
              document.getElementById('countdown').innerText = '6';
              setTimeout(function () {
                document.getElementById('countdown').innerText = '5';
                setTimeout(function () {
                  document.getElementById('countdown').innerText = '4';
                  setTimeout(function () {
                    document.getElementById('countdown').innerText = '3';
                    setTimeout(function () {
                      document.getElementById('countdown').innerText = '2';
                      setTimeout(function () {
                        document.getElementById('countdown').innerText = '1';
                        setTimeout(function () {
                          document.getElementById('countdown').innerText = 'Happy Independence Day..!!';
                          if (callback && typeof callback === 'function') {
                            callback();
                          }
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  startCountdown();