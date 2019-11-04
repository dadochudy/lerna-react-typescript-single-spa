import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  border: 1px solid red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.button(_templateObject());

var Test = function Test() {
  return React.createElement(Button, null, "Test");
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  background: red;\n  color: white;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject$1());

var Button$1 = function Button() {
  return React.createElement(StyledButton, null, "styled Butttttttton");
};

export { Button$1 as Button, Test };
