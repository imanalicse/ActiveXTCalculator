<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\CalculatorService;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    use CommonTrait;

    public function calculate(Request $request)
    {
        $post_data = $request->all();
        $calculator_service = new CalculatorService();
        $response = $calculator_service->calculate($post_data);
        return response($response);
    }
}