console.log('dddddddd');
angular.module('AuthModule', []).factory('Auth',
  function($http, $location, formEncode, currentUser, redirectLogin) {
    //var accessToken = localStorage"";
    var accessToken = '';
    this.accessToken = '';
    var signin = function(data) { ///data.username, data.password
      //console.log('=====data: ', data)
      

      var config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
      }
      var username = data.username;

      //nextUrl = nextUrl || '/users/' + username;

      data = formEncode(data);
      return $http.post('/signin', data, config)
        .then(function(response) {
            console.log('response: ====> ', response);
            if(response.data.success == false) {
              throw new Error();
            }
						currentUser.setUser(username, response.data.token);
            console.log('yay!!', currentUser);
            return username;
        })
        .then(function(username){
          console.log('sometimes this gets here')
        	$location.path('/users/' + username);
        });
    }

    return {
      accessToken: accessToken,
      signin: signin,
      // signout: function() {
      //     this.accessToken = '';
      // },
      // isAuth: function() {
      //     return this.accessToken !== '';
      // }
    }
  });
