<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class CompaniesTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            [
                'name' => 'Subway Ipanema',
                'cnpj' => '123456789',
                'slug' => 'SUBIPA'
            ],
            [
                'name' => 'Subway Tijuca',
                'cnpj' => '1234567890',
                'slug' => 'SUBTIJ'
            ],
            [
                'name' => 'Subway NorteShopping',
                'cnpj' => '12345678900',
                'slug' => 'SUBNOR'
            ]
        ]);

    }
}
