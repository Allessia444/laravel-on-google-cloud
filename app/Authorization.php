<?php

namespace App;
use Cviebrock\EloquentSluggable\Sluggable;
use Sluggable;

use Illuminate\Database\Eloquent\Model;

class Authorization extends Model
{
	public function sluggable()
	{
		return [
			'slug' => [
				'source' => 'name'
			]
		];
	}
}
