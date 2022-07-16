<?php

namespace App\Actions;


class Repository
{
   public static function collectRating($metric): int
   {
      $part1 = $metric->num_all ? $metric->num_id / $metric->num_all : 0;
      $part2 = $metric->num_wts ? $metric->num_wtb / $metric->num_wts : 0;
      return ($part1 * 10 + $part2) * 50;
   }
}