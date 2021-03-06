<?php

declare(strict_types=1);

namespace App\Http\Controllers\Home;

use App\Http\Requests\Comment\Store;
use App\Models\Comment;
use App\Models\SocialiteUser;
use Illuminate\Http\Request;
use Str;

class CommentController extends Controller
{
    public function index(Request $request)
    {
        $article_id = $request->route('article');

        $comments = Comment::where('article_id', $article_id)
            ->whereNull('parent_id')
            ->with('socialiteUser')
            ->get();

        $assign = [
            'comments' => $comments,
            'head'     => [
                'title'       => 'Comment',
                'keywords'    => '',
                'description' => '',
            ],
        ];

        return view('home.comment.index', $assign);
    }

    public function show(Request $request, $id)
    {
        $comments = Comment::where('id', $id)
            ->orWhere('parent_id', $id)
            ->with('socialiteUser')
            ->when(Str::isTrue(config('bjyblog.comment_audit')), function ($query) {
                return $query->where('is_audited', 1);
            })
            ->get()
            ->toFlatTree();

        $assign = [
            'comments' => $comments,
            'head'     => [
                'title'       => 'Comment',
                'keywords'    => '',
                'description' => '',
            ],
        ];

        return view('home.comment.show', $assign);
    }

    public function store(Store $request)
    {
        /** @var \App\Models\SocialiteUser $socialiteUser */
        $socialiteUser = auth()->guard('socialite')->user();
        $email         = $request->input('email', '');

        if (filter_var($email, FILTER_VALIDATE_EMAIL) !== false) {
            SocialiteUser::where('id', $socialiteUser->id)->update([
                'email' => $email,
            ]);
        }

        $parent_id  = (int) $request->input('parent_id');
        $newComment = $request->only('article_id', 'content', 'parent_id') + [
            'socialite_user_id' => $socialiteUser->id,
            'is_audited'        => Str::isTrue(config('bjyblog.comment_audit')) ? 0 : 1,
        ];

        if ($parent_id === 0) {
            $comment = Comment::create($newComment);
        } else {
            $comment = Comment::find($parent_id)->children()->create($newComment);
        }

        return response()->json(['id' => $comment->id]);
    }
}
