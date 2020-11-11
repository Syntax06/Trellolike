<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    public function index()
    {
        return $this->viewprofile($this->foundprofile());
    }

    public function update(Request $request)
    {
        // Validate and store the blog post...
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'firstname' => 'string',
            'birthday' => 'date_format:d/m/Y',
            'address' => 'string',
            'city' => 'string',
            'postalcd' => 'digits:5',
            'phone' => 'digits:10',
        ]);

        $valider = "Votre modification est prise en compte";
        session()->put("valider", $valider);


        $prof = $this->foundprofile();
        $prof =  $this->updateprofile($prof, $request);

        $prof->save();
        return back();
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    public function viewprofile($prof)
    {
        $valider = session()->get("valider");
        session()->forget("valider");
        return view(
            'profile',
            ['profil' => $prof, 'valider' =>  $valider]
        );
    }


    public function foundprofile()
    {
        return Auth::user();
    }

    public function updateprofile($prof, Request $request)
    {
        $prof->name = $request->name;
        $prof->email = $request->email;
        $prof->firstname = $request->firstname;
        $prof->birthday = $request->birthday;
        $prof->address = $request->address;
        $prof->city = $request->city;
        $prof->postalcd = $request->postalcd;
        $prof->phone = $request->phone;
        return $prof;
    }
}
