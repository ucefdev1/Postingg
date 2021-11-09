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
        $sortField = request('sort_field','created_at');
        if(!in_array($sortField,['title','post_text','created_at'])){
            $sortField = 'created_at';
        }
        $sortDirection = request('sort_direction','desc');
        if(!in_array($sortDirection,['asc','desc'])){
            $sortDirection = 'desc';
        }
        $posts = Post::when(request('category_id','') != '', function($query){
            $query->where('category_id',request('category_id'));
        })->orderBy($sortField,$sortDirection)->paginate(3);
        return PostResource::collection($posts);
    } 
}
