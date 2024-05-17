package com.jlj.myapp.exception;

import com.jlj.myapp.enums.ResponseCode;
import lombok.Data;

@Data
public class UsernameAlreadyExistsException extends RuntimeException {
    private int errorCode;

    private String message;

    public UsernameAlreadyExistsException(ResponseCode responseCode, Object... args) {
        this.errorCode = responseCode.getCode();
        this.message = formatMessage(responseCode, args);
    }



    private static String formatMessage(ResponseCode responseCode, Object... args) {
        String defaultMessage = responseCode.getDefaultMessage();
        return args != null ? String.format(defaultMessage, args) : defaultMessage;
    }
}