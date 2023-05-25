<?php

namespace App;

class Application extends \Illuminate\Foundation\Application {
    

    public function publicPath($path = ''):string {
        $tmp=$this->basePath.'/../public_html/'.$path;
        $tmp=str_replace(['/','\\'],[DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR],$tmp);
        $tmp1=realpath($tmp);
        if($tmp1===false){
            return realpath($this->basePath.'/../public_html/').'/'.$path;
        }
        return $tmp1;
    }
}
