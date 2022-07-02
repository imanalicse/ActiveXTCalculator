<?php

namespace App\Services;

class CalculatorService
{

    public function calculate($post_data) {
        $response = [
            "status" => true,
            "result" => 0,
            "message" => ''
        ];
        $result = 0;
        try {
            $first_input = $post_data['inputOne'];
            $second_input = $post_data['inputTwo'];
            switch ($post_data['operator']) {
                case "+";
                    $result = $first_input + $second_input;
                    break;
                case "-";
                    $result = $first_input - $second_input;
                    break;
                case "*";
                    $result = $first_input * $second_input;
                    break;
                case "/";
                    $result = $first_input / $second_input;
                    break;
            }
            $response["result"] = $result;
        }
        catch (Exception $exception) {
            $response["status"] = false;
            $response["message"] = $exception->getMessage();
        }

        if ($response["status"] && preg_match("/\./", $response["result"])) {
            $response["result"] = number_format($response["result"], 4);
        }

        return $response;
    }
}