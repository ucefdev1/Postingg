<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::when(request('category_id','') != '', function($query){
            $query->where('category_id',request('category_id'));
        })->paginate(3);
        return PostResource::collection($posts);
    } 
}
