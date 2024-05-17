package com.jlj.myapp.enums;

public enum ResponseCode {
    //%s, %d, and %.representing a string, an integer, and a floating-point number respectively
    SUCCESS(200, "Success"),
    BAD_REQUEST(400, "Bad Request"),
    UNAUTHORIZED(401, "Unauthorized"),
    FORBIDDEN(403, "Forbidden"),
    NOT_FOUND(404, "Not Found"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),

    //Series 1XXX for doctor
    DOCTOR_NOT_FOUND_WITH_ID(1000, "Doctor not found with id %s"),
    USER_ALREADY_EXIST(2000, "User with id %s already exist");


    private final int code;
    private final String defaultMessage;

    ResponseCode(int code, String defaultMessage) {
        this.code = code;
        this.defaultMessage = defaultMessage;
    }

    public int getCode() {
        return code;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }

    public String getMessage(Object... args) {
        return args != null ? String.format(defaultMessage, args) : defaultMessage;
    }
}
