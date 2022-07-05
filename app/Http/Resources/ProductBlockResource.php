<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductBlockResource extends JsonResource
{
    public static $wrap = 'data';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
         $buttons = "";
        $this->button1 ? $buttons .= $this->button1 . ',' : "";
        $this->button2 ? $buttons .= $this->button2 . ',' : "";
        $this->button3 ? $buttons .= $this->button3 . ',' : "";
        $this->button4 ? $buttons .= $this->button4 . ',' : "";
        $this->button5 ? $buttons .= $this->button5 . ',' : "";
        if (substr($buttons, -1) == ',') {
         $buttons = substr($buttons, 0, -1);
        }

        return [  
           'id' => $this->id,
           'name' => $this->name,
           'stage' => $this->stage,
           'description' => $this->description,
           'date' => $this->date,
           'button1' => $this->button1,
           'button2' => $this->button2,
           'button3' => $this->button3,
           'button4' => $this->button4,
           'button5' => $this->button5,
           'buttons' => $buttons,
        ];
    }
}
