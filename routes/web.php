<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/', function () {
    return redirect(route('react.welcome'));
});

Route::prefix('react')->name('react.')->group(function () {
    require __DIR__ . '/auth.php';

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('react.login'),
            'canRegister' => Route::has('react.register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('welcome');

    Route::middleware(['auth'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });
});

Route::prefix('vue')->name('vue.')->group(function () {
    // authentication using Vue components
    require __DIR__ . '/auth.php';

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('vue.login'),
            'canRegister' => Route::has('vue.register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('welcome');

    Route::middleware(['auth'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });
});
