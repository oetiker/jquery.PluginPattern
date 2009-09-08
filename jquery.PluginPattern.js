/* ********************************************************************************
Title: jQuery Plugin Pattern
Copyright: Tobi Oetiker <tobi@oetiker.ch>, OETIKER+PARTNER AG

$Id: jquery.AddIncSearch.js 217 2009-08-25 07:52:19Z oetiker $

Inspired by Mike Alsup article and the subsequent discussion on
http://www.learningjquery.com/2007/10/a-plugin-development-pattern
This template tries to incorporate many of the points made there
and adds a number of ideas of my own.

See the comments in the code.

License: Public Domain

* **********************************************************************************/
(function($) {
    // setup a namespace for us
    var nsp = 'pluginPattern';

    // Public Variables and Methods
    $[nsp] = {
        // let the user override the default
        // $.pluginPattern.defaultOptions.optA = false
        defaultOptions: {
           optA : true
        },
        // $.pluginPattern.publicVariable
        publicVariable: false,
        // $.pluginPattern.utilityMethod(...)
        utilityMethod: function() {
            // Do Something Publicly
            alert('called pullic Utility Method');
        }
    };

    // Private Variables and Functions
    var _ = {
        // _.varA
        varA:   'varA',
        // _.funcA
        funcA:  function () {
            alart('called private functionA');
        },
        // _.init
        init : function(){
            alert('initialized');
        },
    };

    // $(x).pluginPatternActionA(....)
    $.fn[nsp+'ActionA'] = function(argA,argB,opts) {
        var localOpts = $.extend( 
            {}, // start with an empty map
            $[nsp].defaultOptions, // add defaults
            opts // add options
        );
        function actionA(){
            var meta_opts = opts;
            // lets you override the options
            // inside the dom objects class property
            // requires the jQuery metadata plugin
            // <div class="hello {color: 'red'}">ddd</div>
            if ($.meta){
                meta_opts = $.extend({}, options, $this.data());
            }
            // $this to access the jQuery object
            var $this = $(this);
            // per dom node context data
            if (! this[nsp]){
                this[nsp] = {};
            }
            this[nsp].contextVariable = 'bla';
            // do some work      
            alert('called Action A on:' + $this.text())
        };
        // run the action for each matching node
        return this.each(actionA);
    };

    //Initialization Code when DOM is ready
    $(document).ready(_.init);

})(jQuery);
