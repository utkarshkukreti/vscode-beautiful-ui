ace.define(
  'ace/theme/MonokaiOctagon',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-MonokaiOctagon';
    exports.cssText = "\n\t.ace-MonokaiOctagon .ace_gutter {\n\t\tbackground-color: #282a39;\n\t\tcolor: #ffffff33;\n\t}\n\t.ace-MonokaiOctagon .ace_gutter-layer {\n\t\tbackground: repeat left top;\n\t}\n\t.ace-MonokaiOctagon .ace_gutter-active-line {\n\t\tbackground-color: #ffffff0d;\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget {\n\t\ttext-align: center;\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget:hover {\n\t\tcolor: #ffffff5a;\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_start,\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_end,\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_closed{\n\t\tbackground: none;\n\t\tborder: none;\n\t\tbox-shadow: none;\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_start:after {\n\t\tcontent: '▾'\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_end:after {\n\t\tcontent: '▴'\n\t}\n\t.ace-MonokaiOctagon .ace_fold-widget.ace_closed:after {\n\t\tcontent: '‣'\n\t}\n\t.ace-MonokaiOctagon .ace_print-margin {\n\t\tborder-left: 1px dotted #ffffff1a;\n\t\tright: 0;\n\t\tbackground: transparent;\n\t}\n\t.ace-MonokaiOctagon {\n\t\tcolor: #e9f1f0;\n\t\tbackground-color: #282a39;\n\t\tline-height: 25px !important;\n\t}\n\t.ace-MonokaiOctagon .ace_cursor {\n\t\tborder-left: 1px solid #ffd86b;\n\t}\n\t.ace-MonokaiOctagon .ace_overwrite-cursors .ace_cursor {\n\t\tborder: 1px solid undefined;\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-MonokaiOctagon.normal-mode .ace_cursor-layer {\n\t\tz-index: 0;\n\t}\n\t.ace-MonokaiOctagon .ace_marker-layer .ace_selection {\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-MonokaiOctagon .ace_marker-layer .ace_selected-word {\n\t\tborder-radius: 4px;\n\t\tborder: 8px solid #ffffff16;\n\t}\n\t.ace-MonokaiOctagon .ace_marker-layer .ace_bracket {\n\t\tmargin: -1px 0 0 -1px;\n\t\tborder: 1px solid #ffffff16;\n\t}\n\t.ace-MonokaiOctagon .ace_marker-layer .ace_active-line {\n\t\tbackground: #ffffff0d;\n\t}\n\t.ace-MonokaiOctagon .ace_paren {\n\t\tcolor: #e9f1f0;\n\t}\n\t.ace-MonokaiOctagon .ace_keyword{color:#c39cc9;font-style:italic;}.ace-MonokaiOctagon .ace_keyword.ace_operator{color:#ffbf66;font-style:normal;}.ace-MonokaiOctagon .ace_keyword.ace_other.ace_unit{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_constant{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_constant.ace_language{color:#ff667a;font-style:italic;}.ace-MonokaiOctagon .ace_constant.ace_library{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_constant.ace_numeric{color:#ff9a5c;font-style:normal;}.ace-MonokaiOctagon .ace_constant.ace_character{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_constant.ace_character.ace_escape{color:#ffd86b;font-style:italic;}.ace-MonokaiOctagon .ace_constant.ace_character.ace_entity{color:#ffd86b;font-style:normal;}.ace-MonokaiOctagon .ace_constant.ace_other{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_support{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_function{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_function.ace_dom{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_firebug{color:#ff9a5c;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_function.ace_constant{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_constant{color:#ff9a5c;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_constant.ace_property-value{color:#ff9a5c;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_class{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_type{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_support.ace_other{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_function{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_function.ace_buildin{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_storage{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_storage.ace_type{color:#c39cc9;font-style:italic;}.ace-MonokaiOctagon .ace_invalid{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_invalid.ace_illegal{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_invalid.ace_deprecated{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_string{color:#b9d760;font-style:normal;}.ace-MonokaiOctagon .ace_string.ace_regexp{color:#b9d760;font-style:normal;}.ace-MonokaiOctagon .ace_string.ace_blockquote{color:#90949d;font-style:italic;}.ace-MonokaiOctagon .ace_string.ace_emphasis{color:#ffbf66;font-style:italic;}.ace-MonokaiOctagon .ace_string.ace_strong{color:#ffbf66;font-weight:bold;}.ace-MonokaiOctagon .ace_comment{color:#696d77;font-style:normal;}.ace-MonokaiOctagon .ace_comment.ace_doc{color:#696d77;font-style:italic;}.ace-MonokaiOctagon .ace_comment.ace_doc.ace_tag{color:#c39cc9;font-style:normal;}.ace-MonokaiOctagon .ace_variable{color:#e9f1f0;font-style:normal;}.ace-MonokaiOctagon .ace_variable.ace_language{color:#ff667a;font-style:italic;}.ace-MonokaiOctagon .ace_variable.ace_parameter{color:#e9f1f0;font-style:normal;}.ace-MonokaiOctagon .ace_meta{color:#e9f1f0;font-style:normal;}.ace-MonokaiOctagon .ace_xml-pe{color:#e9f1f0;font-style:normal;}.ace-MonokaiOctagon .ace_meta.ace_tag{color:#e9f1f0;font-style:italic;}.ace-MonokaiOctagon .ace_meta.ace_selector{color:#e9f1f0;font-style:normal;}.ace-MonokaiOctagon .ace_entity.ace_other.ace_attribute-name{color:#ff9a5c;font-style:italic;}.ace-MonokaiOctagon .ace_entity.ace_name.ace_function{color:#9dd2bc;font-style:normal;}.ace-MonokaiOctagon .ace_entity.ace_name{color:#ffd86b;font-style:normal;}.ace-MonokaiOctagon .ace_entity.ace_name.ace_tag{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_tag-name.ace_xml{color:#ff667a;}.ace-MonokaiOctagon .ace_markup.ace_heading{color:#ff667a;font-style:normal;}.ace-MonokaiOctagon .ace_markup.ace_underline{color:#9dd2bc;text-decoration:underline;}\n\t.ace-MonokaiOctagon.css .ace_support.ace_type {\n\t\tcolor: #e9f1f0;\n\t}\n\t.ace-MonokaiOctagon.css .ace_variable {\n\t\tcolor: #ffbf66;\n\t}\n\t.ace-MonokaiOctagon.css .ace_keyword {\n\t\tcolor: #9dd2bc;\n\t}\n\t.ace-MonokaiOctagon.css .ace_variable + .ace_string,\n\t.ace-MonokaiOctagon.css .ace_keyword + .ace_string {\n\t\tcolor: #abaeb5;\n\t\tfont-style: italic;\n\t}\n\t.ace-MonokaiOctagon .ace_indent-guide {\n\t\tcolor: #ffffff1a;\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\t.ace-MonokaiOctagon .ace_indent-guide::before {\n\t\tcontent: '→';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t}\n\t";
    var dom = acequire('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
