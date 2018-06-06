ace.define(
  'ace/theme/TomorrowDark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-TomorrowDark';
    exports.cssText = "\n\t.ace-TomorrowDark .ace_gutter {\n\t\tbackground-color: #1d1f20;\n\t\tcolor: #ffffff33;\n\t}\n\t.ace-TomorrowDark .ace_gutter-layer {\n\t\tbackground: repeat left top;\n\t}\n\t.ace-TomorrowDark .ace_gutter-active-line {\n\t\tbackground-color: #ffffff0d;\n\t}\n\t.ace-TomorrowDark .ace_fold-widget {\n\t\ttext-align: center;\n\t}\n\t.ace-TomorrowDark .ace_fold-widget:hover {\n\t\tcolor: #ffffff5a;\n\t}\n\t.ace-TomorrowDark .ace_fold-widget.ace_start,\n\t.ace-TomorrowDark .ace_fold-widget.ace_end,\n\t.ace-TomorrowDark .ace_fold-widget.ace_closed{\n\t\tbackground: none;\n\t\tborder: none;\n\t\tbox-shadow: none;\n\t}\n\t.ace-TomorrowDark .ace_fold-widget.ace_start:after {\n\t\tcontent: '▾'\n\t}\n\t.ace-TomorrowDark .ace_fold-widget.ace_end:after {\n\t\tcontent: '▴'\n\t}\n\t.ace-TomorrowDark .ace_fold-widget.ace_closed:after {\n\t\tcontent: '‣'\n\t}\n\t.ace-TomorrowDark .ace_print-margin {\n\t\tborder-left: 1px dotted #ffffff1a;\n\t\tright: 0;\n\t\tbackground: transparent;\n\t}\n\t.ace-TomorrowDark {\n\t\tcolor: #c5c9c6;\n\t\tbackground-color: #1d1f20;\n\t\tline-height: 25px !important;\n\t}\n\t.ace-TomorrowDark .ace_cursor {\n\t\tborder-left: 1px solid #de935e;\n\t}\n\t.ace-TomorrowDark .ace_overwrite-cursors .ace_cursor {\n\t\tborder: 1px solid undefined;\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-TomorrowDark.normal-mode .ace_cursor-layer {\n\t\tz-index: 0;\n\t}\n\t.ace-TomorrowDark .ace_marker-layer .ace_selection {\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-TomorrowDark .ace_marker-layer .ace_selected-word {\n\t\tborder-radius: 4px;\n\t\tborder: 8px solid #ffffff16;\n\t}\n\t.ace-TomorrowDark .ace_marker-layer .ace_bracket {\n\t\tmargin: -1px 0 0 -1px;\n\t\tborder: 1px solid #ffffff16;\n\t}\n\t.ace-TomorrowDark .ace_marker-layer .ace_active-line {\n\t\tbackground: #ffffff0d;\n\t}\n\t.ace-TomorrowDark .ace_paren {\n\t\tcolor: #c5c9c6;\n\t}\n\t.ace-TomorrowDark .ace_keyword{color:#b295bb;font-style:italic;}.ace-TomorrowDark .ace_keyword.ace_operator{color:#e9b36d;font-style:normal;}.ace-TomorrowDark .ace_keyword.ace_other.ace_unit{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_constant{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_constant.ace_language{color:#cc6666;font-style:italic;}.ace-TomorrowDark .ace_constant.ace_library{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_constant.ace_numeric{color:#de935e;font-style:normal;}.ace-TomorrowDark .ace_constant.ace_character{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_constant.ace_character.ace_escape{color:#f0c775;font-style:italic;}.ace-TomorrowDark .ace_constant.ace_character.ace_entity{color:#f0c775;font-style:normal;}.ace-TomorrowDark .ace_constant.ace_other{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_support{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_function{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_function.ace_dom{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_firebug{color:#de935e;font-style:normal;}.ace-TomorrowDark .ace_support.ace_function.ace_constant{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_constant{color:#de935e;font-style:normal;}.ace-TomorrowDark .ace_support.ace_constant.ace_property-value{color:#de935e;font-style:normal;}.ace-TomorrowDark .ace_support.ace_class{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_type{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_support.ace_other{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_function{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_function.ace_buildin{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_storage{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_storage.ace_type{color:#b295bb;font-style:italic;}.ace-TomorrowDark .ace_invalid{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_invalid.ace_illegal{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_invalid.ace_deprecated{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_string{color:#b4bc67;font-style:normal;}.ace-TomorrowDark .ace_string.ace_regexp{color:#b4bc67;font-style:normal;}.ace-TomorrowDark .ace_string.ace_blockquote{color:#bcbdbc;font-style:italic;}.ace-TomorrowDark .ace_string.ace_emphasis{color:#e9b36d;font-style:italic;}.ace-TomorrowDark .ace_string.ace_strong{color:#e9b36d;font-weight:bold;}.ace-TomorrowDark .ace_comment{color:#959795;font-style:normal;}.ace-TomorrowDark .ace_comment.ace_doc{color:#959795;font-style:italic;}.ace-TomorrowDark .ace_comment.ace_doc.ace_tag{color:#b295bb;font-style:normal;}.ace-TomorrowDark .ace_variable{color:#c5c9c6;font-style:normal;}.ace-TomorrowDark .ace_variable.ace_language{color:#cc6666;font-style:italic;}.ace-TomorrowDark .ace_variable.ace_parameter{color:#c5c9c6;font-style:normal;}.ace-TomorrowDark .ace_meta{color:#c5c9c6;font-style:normal;}.ace-TomorrowDark .ace_xml-pe{color:#c5c9c6;font-style:normal;}.ace-TomorrowDark .ace_meta.ace_tag{color:#c5c9c6;font-style:italic;}.ace-TomorrowDark .ace_meta.ace_selector{color:#c5c9c6;font-style:normal;}.ace-TomorrowDark .ace_entity.ace_other.ace_attribute-name{color:#de935e;font-style:italic;}.ace-TomorrowDark .ace_entity.ace_name.ace_function{color:#82a3bf;font-style:normal;}.ace-TomorrowDark .ace_entity.ace_name{color:#f0c775;font-style:normal;}.ace-TomorrowDark .ace_entity.ace_name.ace_tag{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_tag-name.ace_xml{color:#cc6666;}.ace-TomorrowDark .ace_markup.ace_heading{color:#cc6666;font-style:normal;}.ace-TomorrowDark .ace_markup.ace_underline{color:#82a3bf;text-decoration:underline;}\n\t.ace-TomorrowDark.css .ace_support.ace_type {\n\t\tcolor: #c5c9c6;\n\t}\n\t.ace-TomorrowDark.css .ace_variable {\n\t\tcolor: #e9b36d;\n\t}\n\t.ace-TomorrowDark.css .ace_keyword {\n\t\tcolor: #82a3bf;\n\t}\n\t.ace-TomorrowDark.css .ace_variable + .ace_string,\n\t.ace-TomorrowDark.css .ace_keyword + .ace_string {\n\t\tcolor: #d6d7d6;\n\t\tfont-style: italic;\n\t}\n\t.ace-TomorrowDark .ace_indent-guide {\n\t\tcolor: #ffffff1a;\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\t.ace-TomorrowDark .ace_indent-guide::before {\n\t\tcontent: '→';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t}\n\t";
    var dom = acequire('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);