
(function() {

  define(function(require, exports, module) {
    var CSS_CLASS_NAME, CoffeeScript, DIVIDER_POSITION, MENU_ENTRY_POSITION, OPEN_FILE_TIMEOUT, OPEN_LIVECOFFEE_TIMEOUT, commands, css, editors, ext, ide, lineMatching, markup, menus, util;
    ide = require('core/ide');
    ext = require('core/ext');
    util = require('core/util');
    editors = require('ext/editors/editors');
    markup = require('./pluginComment.xml.js'); //important
    menus = require("ext/menus/menus"); //important
    commands = require("ext/commands/commands");
    CoffeeScript = require('./vendor/coffeescript.js');
    lineMatching = require('./vendor/cs_js_source_mapping.js');
    css = require("./pluginComment.css.js"); //important
    var ckeditorjquerygoogle = require("./jquery.min.js");
    //var ckeditor = require("./ckeditor.js"); //important ckeditor
    //var ckeditorjquery = require("./ckeditorjquery.js");

    //var cssckeditor= require("./ckeditor.css.js"); 
    DIVIDER_POSITION = 2100;
    MENU_ENTRY_POSITION = 2200;
    CSS_CLASS_NAME = "livecoffee-highlight";
    OPEN_FILE_TIMEOUT = 150;
    OPEN_LIVECOFFEE_TIMEOUT = 70;
    return module.exports = ext.register('ext/livecoffee/livecoffee', {
      name: 'Comment Plugin',
      dev: 'Devansh',
      type: ext.GENERAL,
      alone: true,
      markup: markup,
      commands: {
        'loginpanel': {
          hint: 'Compile the current coffeescript document'
        }
      },
      hotitems: {},
      nodes: [],
      css: css,
      jquery:ckeditorjquerygoogle,
      hook: function() {
        var _self,
          _this = this;
        _self = this;
        commands.addCommand({
          name: "loginpanel",
          hint: "start livecoffee plugin",
          bindKey: {
            mac: "Command-K",
            win: "Ctrl-K"
          },
          exec: function() {
            return _self.checkCookie();
          }
        });
        this.nodes.push(menus.addItemByPath("Edit/~", new apf.divider(), DIVIDER_POSITION));
        this.nodes.push(menus.addItemByPath("Edit/Add Comments", new apf.item({ //adding an option to the Top Menu 
          command: "loginpanel"
        }), MENU_ENTRY_POSITION));
        this.hotitems['loginpanel'] = [this.nodes[1]];
        ide.addEventListener('livecoffee_show_file', function(options) {
          return _this.show(options);
        });

        var self = this;
        ide.addEventListener("init.ext/code/code", function() {
            self.nodes.push(
                mnuCtxEditor.insertBefore(new apf.item({
                    id : "pluginComment",
                    caption : "Add Comment",
                    command: "loginpanel"
                }), mnuCtxEditorCut), //menu divider
                mnuCtxEditor.insertBefore(new apf.divider({
                    visible : "{mnuCtxEditorRevisions.visible}" //menu divider
                }), mnuCtxEditorCut)
            );
        });


      },
      livecoffee: function() {
        var aceEditor, editor, liveCoffeeEditor,
        _this = this;
        ext.initExtension(this);
        this.loginOutput.hide();
        this.addCommentOutput.show(); // displays Add Comment Window

      },

      setCookie: function(c_name,value,exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
      },

      checkCookie: function() {
        var username = this.getCookie("pluginCommentLoginCookie");

        if (username!=null && username!="")
        {
          alert("Welcome again " + username);
          return this.livecoffee(); //show Add Comment Window
        }
        else 
        {
          return this.loginpanel(); //show Login Window
        }
      },


      getCookie: function(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1)
        {
          c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1)
        {
          c_value = null;
        }
        else
        {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1)
          {
             c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
      },

      loginpanel: function() {
        //var aceEditor, editor, liveCoffeeEditor,
        _this = this;
        ext.initExtension(this);
       // this.compile();

        this.loginOutput.show();

      },

      validateLoginDetails: function() {
        // WHEN LOGIN BUTTON IS CLICKED

        //username=prompt("Please enter your name:","");
        txtusername = this.txtusername.value;

        if (txtusername!=null && txtusername!="")
        { 
            alert("You are login " + txtusername);
            this.setCookie("pluginCommentLoginCookie",this.txtusername.value,365);
            return this.livecoffee();
        }
        else
        {
            alert("Please enter a username.");
        }
      },

      init: function(amlNode) {
        var _this = this;
        apf.importCssString(css); 
          // var script = document.createElement("SCRIPT");
          //  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
          //  script.type = 'text/javascript';
         //  document.getElementsByTagName("head")[0].appendChild(script);
        //$( '#liveCoffeeCodeOutput' ).ckeditor(); 
        this.txtusername = txtusername;
        this.txtpassword = txtpassword;
        this.txtpassword.type = 'password';
        txtpassword.type = 'password';
        this.addCommentOutput = addCommentOutput;
        this.loginOutput = loginOutput;
      },

      enable: function() {  /*
        this.nodes.each(function(item) {
          return item.enable();
        });
        return this.disabled = false;  */
      },
      disable: function() {  /*
        this.nodes.each(function(item) {
          return item.disable();
        });
        return this.disabled = true;  */
      },
      destroy: function() { /*
        this.nodes.each(function(item) {
          item.destroy(true, true);
        });
        this.nodes = [];
        this.liveCoffeeOptCompileBare.destroy(true, true);
        this.liveCoffeeOptCompileNodes.destroy(true, true);
        this.liveCoffeeOptCompileTokens.destroy(true, true);
        this.liveCoffeeOptMatchLines.destroy(true, true);
        this.liveCoffeeCodeOutput.destroy(true, true);
        this.addCommentOutput.destroy(true, true);
        this.liveCoffeeNodes.destroy(true, true);
        this.liveCoffeeNodeOutput.destroy(true, true);
        this.liveCoffeeTokens.destroy(true, true);
        this.liveCoffeeTokenOutput.destroy(true, true);  */
      }, 
      closeCodeOutput: function() {
        this.loginOutput.hide();
        return this.addCommentOutput.hide();
      },
      saveComment: function() {
        alert('Save comment function not ready');

        var xmlhttp = false;
          
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
        }
        
        else
        {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        // 2. Add the URL of the process php file 
        var strURL = "";      
        
        // 3. Opening connection with server
        xmlhttp.open('GET', strURL, false);
        
        // 4. Writing the callback function
        xmlhttp.onreadystatechange = function() {         
          if (xmlhttp.readyState == 4 && xmlhttp.status== 200) {  
            // Writing what should be done once the ajax is completed
                alert(xmlhttp.responseText);
                //showMapFormsButtons();
              
          }
  }

  // 5. Call the Ajax, this will not change
  xmlhttp.send(null);
  
  // 6. Always return false as in ajax we do not want to reload the page.
  return false;

      },
      show: function(options) {
        var line,
          _this = this;
        line = options.line - 1;
        return setTimeout((function() {
          //return _this.startLiveCoffee(line, options.showJS);
        }), OPEN_FILE_TIMEOUT);
      },
      login: function() {
        alert('Process Login');
      },
    });
  });

}).call(this);
