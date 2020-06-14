<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class CompaniesUsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('companies_users')->insert([
            [
                'user_id' => 1,
                'company_id' => 1,
            ],
            [
                'user_id' => 2,
                'company_id' => 1,
            ],
            [
                'user_id' => 2,
                'company_id' => 2,
            ],
            [
                'user_id' => 2,
                'company_id' => 3,
            ]
        ]);

    }
}
