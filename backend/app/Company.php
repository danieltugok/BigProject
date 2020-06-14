<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Company extends Model
{
    //protected $table = 'companies';
    protected $fillable = [
        'id', 'name', 'cnpj'
    ];
    public $incrementing = false;
    //protected $casts = ['id' => 'string'];

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] =  strtoupper(substr($value, 0, 3)) . str_pad(rand(1, 9999), 4, 0, STR_PAD_LEFT);
        
    }
}
