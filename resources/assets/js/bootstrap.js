
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
require('vue-resource');
require('bootstrap-sass');
require('jquery-ui');
require('datatables.net-bs');
require('select2');
require('dropzone');
require('tinymce');
window.toastr = require('toastr');
require('./components/media');
require('./components/settings');
require('./components/voyager_tinymce');
require('../../lib/js/bootstrap-switch.min.js');
require('../../lib/js/jquery.matchHeight-min.js');
require('../../lib/js/bootstrap-toggle.min.js');
require('../../lib/js/jquery.cookie.js');
// require('../../lib/js/toastr.min.js');
require('../../lib/js/readmore.min.js');



/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Voyager.csrfToken);

    next();
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
