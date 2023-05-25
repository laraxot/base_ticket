<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        return parent::render($request, $exception);
    }


     protected function context()
    {
        try {
            return array_filter([
                'url' => request()->fullUrl(),
                'previous' => url()->previous(),
                'input' => request()->except(['password', 'password_confirmation']),
                //'input' => Request::except(['password', 'password_confirmation']),
                'userId' => Auth::id(),
                //'email' => Auth::user() ? Auth::user()->email : null,
            ]);
        } catch (Throwable $e) {
            return [];
        }
    }
    

}
