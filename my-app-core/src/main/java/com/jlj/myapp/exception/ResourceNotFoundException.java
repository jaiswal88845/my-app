package com.jlj.myapp.exception;

import com.jlj.myapp.enums.ResponseCode;
import lombok.Data;

@Data
public class ResourceNotFoundException extends RuntimeException {

    private int errorCode;

    private String message;

    public ResourceNotFoundException(ResponseCode responseCode, Object... args) {
        //super(formatMessage(responseCode, args));
        this.errorCode = responseCode.getCode();
        this.message = formatMessage(responseCode, args);
    }



    private static String formatMessage(ResponseCode responseCode, Object... args) {
        String defaultMessage = responseCode.getDefaultMessage();
        return args != null ? String.format(defaultMessage, args) : defaultMessage;
    }

}