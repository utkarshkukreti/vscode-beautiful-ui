ace.define(
  'ace/theme/OneDark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-OneDark';
    exports.cssText = "\n\t.ace-OneDark .ace_gutter {\n\t\tbackground-color: #262a31;\n\t\tcolor: #ffffff33;\n\t}\n\t.ace-OneDark .ace_gutter-layer {\n\t\tbackground: repeat left top;\n\t}\n\t.ace-OneDark .ace_gutter-active-line {\n\t\tbackground-color: #ffffff0d;\n\t}\n\t.ace-OneDark .ace_fold-widget {\n\t\ttext-align: center;\n\t}\n\t.ace-OneDark .ace_fold-widget:hover {\n\t\tcolor: #ffffff5a;\n\t}\n\t.ace-OneDark .ace_fold-widget.ace_start,\n\t.ace-OneDark .ace_fold-widget.ace_end,\n\t.ace-OneDark .ace_fold-widget.ace_closed{\n\t\tbackground: none;\n\t\tborder: none;\n\t\tbox-shadow: none;\n\t}\n\t.ace-OneDark .ace_fold-widget.ace_start:after {\n\t\tcontent: '▾'\n\t}\n\t.ace-OneDark .ace_fold-widget.ace_end:after {\n\t\tcontent: '▴'\n\t}\n\t.ace-OneDark .ace_fold-widget.ace_closed:after {\n\t\tcontent: '‣'\n\t}\n\t.ace-OneDark .ace_print-margin {\n\t\tborder-left: 1px dotted #ffffff1a;\n\t\tright: 0;\n\t\tbackground: transparent;\n\t}\n\t.ace-OneDark {\n\t\tcolor: #abb2bf;\n\t\tbackground-color: #262a31;\n\t\tline-height: 25px !important;\n\t}\n\t.ace-OneDark .ace_cursor {\n\t\tborder-left: 1px solid #61afef;\n\t}\n\t.ace-OneDark .ace_overwrite-cursors .ace_cursor {\n\t\tborder: 1px solid undefined;\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-OneDark.normal-mode .ace_cursor-layer {\n\t\tz-index: 0;\n\t}\n\t.ace-OneDark .ace_marker-layer .ace_selection {\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-OneDark .ace_marker-layer .ace_selected-word {\n\t\tborder-radius: 4px;\n\t\tborder: 8px solid #ffffff16;\n\t}\n\t.ace-OneDark .ace_marker-layer .ace_bracket {\n\t\tmargin: -1px 0 0 -1px;\n\t\tborder: 1px solid #ffffff16;\n\t}\n\t.ace-OneDark .ace_marker-layer .ace_active-line {\n\t\tbackground: #ffffff0d;\n\t}\n\t.ace-OneDark .ace_paren {\n\t\tcolor: #abb2bf;\n\t}\n\t.ace-OneDark .ace_keyword{color:#c678dd;font-style:italic;}.ace-OneDark .ace_keyword.ace_operator{color:#dcb16f;font-style:normal;}.ace-OneDark .ace_keyword.ace_other.ace_unit{color:#c678dd;font-style:normal;}.ace-OneDark .ace_constant{color:#c678dd;font-style:normal;}.ace-OneDark .ace_constant.ace_language{color:#de6872;font-style:italic;}.ace-OneDark .ace_constant.ace_library{color:#c678dd;font-style:normal;}.ace-OneDark .ace_constant.ace_numeric{color:#d19a66;font-style:normal;}.ace-OneDark .ace_constant.ace_character{color:#c678dd;font-style:normal;}.ace-OneDark .ace_constant.ace_character.ace_escape{color:#e4be77;font-style:italic;}.ace-OneDark .ace_constant.ace_character.ace_entity{color:#e4be77;font-style:normal;}.ace-OneDark .ace_constant.ace_other{color:#c678dd;font-style:normal;}.ace-OneDark .ace_support{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_function{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_function.ace_dom{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_firebug{color:#d19a66;font-style:normal;}.ace-OneDark .ace_support.ace_function.ace_constant{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_constant{color:#d19a66;font-style:normal;}.ace-OneDark .ace_support.ace_constant.ace_property-value{color:#d19a66;font-style:normal;}.ace-OneDark .ace_support.ace_class{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_type{color:#61afef;font-style:normal;}.ace-OneDark .ace_support.ace_other{color:#61afef;font-style:normal;}.ace-OneDark .ace_function{color:#61afef;font-style:normal;}.ace-OneDark .ace_function.ace_buildin{color:#61afef;font-style:normal;}.ace-OneDark .ace_storage{color:#de6872;font-style:normal;}.ace-OneDark .ace_storage.ace_type{color:#c678dd;font-style:italic;}.ace-OneDark .ace_invalid{color:#de6872;font-style:normal;}.ace-OneDark .ace_invalid.ace_illegal{color:#de6872;font-style:normal;}.ace-OneDark .ace_invalid.ace_deprecated{color:#de6872;font-style:normal;}.ace-OneDark .ace_string{color:#98c27a;font-style:normal;}.ace-OneDark .ace_string.ace_regexp{color:#98c27a;font-style:normal;}.ace-OneDark .ace_string.ace_blockquote{color:#818998;font-style:italic;}.ace-OneDark .ace_string.ace_emphasis{color:#dcb16f;font-style:italic;}.ace-OneDark .ace_string.ace_strong{color:#dcb16f;font-weight:bold;}.ace-OneDark .ace_comment{color:#5c6370;font-style:normal;}.ace-OneDark .ace_comment.ace_doc{color:#5c6370;font-style:italic;}.ace-OneDark .ace_comment.ace_doc.ace_tag{color:#c678dd;font-style:normal;}.ace-OneDark .ace_variable{color:#abb2bf;font-style:normal;}.ace-OneDark .ace_variable.ace_language{color:#de6872;font-style:italic;}.ace-OneDark .ace_variable.ace_parameter{color:#abb2bf;font-style:normal;}.ace-OneDark .ace_meta{color:#abb2bf;font-style:normal;}.ace-OneDark .ace_xml-pe{color:#abb2bf;font-style:normal;}.ace-OneDark .ace_meta.ace_tag{color:#abb2bf;font-style:italic;}.ace-OneDark .ace_meta.ace_selector{color:#abb2bf;font-style:normal;}.ace-OneDark .ace_entity.ace_other.ace_attribute-name{color:#d19a66;font-style:italic;}.ace-OneDark .ace_entity.ace_name.ace_function{color:#61afef;font-style:normal;}.ace-OneDark .ace_entity.ace_name{color:#e4be77;font-style:normal;}.ace-OneDark .ace_entity.ace_name.ace_tag{color:#de6872;font-style:normal;}.ace-OneDark .ace_tag-name.ace_xml{color:#de6872;}.ace-OneDark .ace_markup.ace_heading{color:#de6872;font-style:normal;}.ace-OneDark .ace_markup.ace_underline{color:#61afef;text-decoration:underline;}\n\t.ace-OneDark.css .ace_support.ace_type {\n\t\tcolor: #abb2bf;\n\t}\n\t.ace-OneDark.css .ace_variable {\n\t\tcolor: #dcb16f;\n\t}\n\t.ace-OneDark.css .ace_keyword {\n\t\tcolor: #61afef;\n\t}\n\t.ace-OneDark.css .ace_variable + .ace_string,\n\t.ace-OneDark.css .ace_keyword + .ace_string {\n\t\tcolor: #9da3af;\n\t\tfont-style: italic;\n\t}\n\t.ace-OneDark .ace_indent-guide {\n\t\tcolor: #ffffff1a;\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\t.ace-OneDark .ace_indent-guide::before {\n\t\tcontent: '→';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t}\n\t";
    var dom = acequire('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
