package com.ujdevcart.shopping.cart.ErrorHandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class GlobalHandlerException {
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<String> handleException(CustomException ex){
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}
