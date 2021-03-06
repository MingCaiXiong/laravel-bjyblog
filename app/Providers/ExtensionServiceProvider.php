<?php

declare(strict_types=1);

namespace App\Providers;

use App\Extensions\Illuminate\Database\Migrations\Migrator;
use App\Extensions\Illuminate\Foundation\Console\TestMakeCommand;
use Illuminate\Support\ServiceProvider;

class ExtensionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->extend('command.test.make', function ($command, $app) {
            return new TestMakeCommand($app['files']);
        });

        $this->app->extend('migrator', function ($service, $app) {
            return new Migrator(
                $app->make('migration.repository'),
                $app->make('db'),
                $app->make('files'),
                $app->make('events')
            );
        });
    }
}
