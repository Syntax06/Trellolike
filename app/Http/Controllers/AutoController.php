<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AutoController extends Controller
{
    public function auto()
    {
        if (Auth::user()) {
            return redirect(url('/user/dashboard'));
        } else {
            return redirect(url('/login'));
        }
    }

}
