<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;



class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('users')->insert([
            [
                'name' => 'Fernando Maradei',
                'email' => 'fmaradei@gmail.com',
                'password' => Hash::make('123')
            ],
            [
                'name' => 'Daniel Kogut',  
                'email' => 'danieltugok@gmail.com',
                'password' => Hash::make('123')
            ]
        ]);

    }
}
