"use strict";

class BaseException extends Error{
	constructor(message = "", fileName, lineNumber) {
    	super(message, fileName, lineNumber);
    	this.name = "BaseException";
    	if (Error.captureStackTrace) {
    		Error.captureStackTrace(this, BaseException);
    	}
  	}
}

class EmptyException extends BaseException {
	constructor(param, fileName, lineNumber) {
    	super("The parameter " + param.toUpperCase() + " can't be empty.", fileName, lineNumber);
    	this.param = param;
    	this.name = "[EmptyException]";
  	}
}

class NullException extends BaseException {
	constructor(param, fileName, lineNumber) {
		super("The parameter " + param.toUpperCase() + " is null.", fileName, lineNumber);
    	this.param = param;
    	this.name = "[NullException]";
  	}
}

class ExistException extends BaseException {
	constructor(param, fileName, lineNumber) {
		super("The object " + param.toUpperCase() + " exist.", fileName, lineNumber);
    	this.param = param;
    	this.name = "[ExistException]";
	}
}

class NoExistException extends BaseException {
	constructor(param, fileName, lineNumber) {
		super("The object " + param.toUpperCase() + " no exist.", fileName, lineNumber);
    	this.param = param;
    	this.name = "[NoExistException]";
	}
}

class ObjectTypeException extends BaseException {
    constructor (param, fileName, lineNumber){
		super("The object " + param.toUpperCase() + " is not valid type.", fileName, lineNumber);
		this.param = param;
		this.name = "[ObjectTypeException]";
	}
}
