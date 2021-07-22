<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        $routePrefix = trim($request->route()->getPrefix(), '/');

        return $request->user()->hasVerifiedEmail()
            ? redirect()->intended(route($routePrefix . '.dashboard'))
            : Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
    }
}
