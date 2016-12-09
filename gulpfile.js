const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir.config.publicPath = 'publishable/assets';
elixir.config.appPath = 'src';

elixir((mix) => {
    mix.sass('voyager.scss')
       .webpack('voyager.js');
    mix.copy('resources/assets/sass/voyager-original-login.css', 'publishable/assets/css/voyager-original-login.css');
    mix.copy('publishable/assets/css', '../../../public/vendor/tcg/voyager/assets/css');
    mix.copy('publishable/assets/js', '../../../public/vendor/tcg/voyager/assets/js');
});
