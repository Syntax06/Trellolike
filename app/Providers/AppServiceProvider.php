<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Blade;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }


    public function boot()
    {
        setlocale(LC_TIME, config('app.locale'));

        Blade::directive('route',function ($expression){
        return "<?php echo route($expression);?>";
        });

        Blade::directive('debug',function ($expression){
            return "<?php echo dd($expression);?>";
        });

        Blade::directive('asset',function ($expression){
            return "<?php echo asset($expression);?>";
        });


        // Roles @admin <viewBlade> @endadmin
        Blade::if('admin', function () {
            return auth()->user()->role === 'admin';
        });

            // url
        Blade::if('request', function ($url) {
            return request()->is($url);
        });
    }
}
