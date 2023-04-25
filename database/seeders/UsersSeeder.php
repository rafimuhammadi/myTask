<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;
class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name'              => 'System Admin',
            'email'             => 'admin@gmail.com',
            'password'          => bcrypt('123456'),
        ]);
    }
}