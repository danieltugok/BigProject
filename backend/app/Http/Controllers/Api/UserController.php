<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->json($users);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User;
        $user->name = "Fernando Maradei";
        $user->email = "fmaradei@gmail.com";
        $user->password = Hash::make('123');
        $user->save();

        $user = new User;
        $user->name = "Daniel Kogut";
        $user->email = "danieltugok@gmail.com";
        $user->password = Hash::make('123');
        $user->save();
        return response()->json(['status' => 'usuários criados com sucesso']);

    }

    /**
     * Display the specified resource.
     *
     * @param  User  $users
     * @return \Illuminate\Http\Response
     */
    public function show(User $users)
    {
        //$user2 = User::where('id', $users->id)->first();
        return response()->json($users);
    }

    /**
     * Display the specified resource.
     *
     * @param  User  $users
     * @return \Illuminate\Http\Response
     */
    public function companies(User $users){
        $companies = $users->companies()->get();

        if(count($companies) > 0){
            return response()->json($companies);
        }else{
            return response()->json(['msg' => 'nenhuma empresa cadastrada']);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $users
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $users)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User  $users
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $users)
    {
        //
    }
}
