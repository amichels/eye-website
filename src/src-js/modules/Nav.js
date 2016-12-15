export default class {
  constructor(firstNav, secondNav, thirdNav, eye, firstNavEyeClass, secondNavEyeClass, thirdNavEyeClass) {

    this.options = {
      elements: {
        firstNav: $(firstNav),
        secondNav: $(secondNav),
        thirdNav: $(thirdNav),
        eye: $(eye)
      },
      classes: {
        firstNavEyeClass: firstNavEyeClass,
        secondNavEyeClass: secondNavEyeClass,
        thirdNavEyeClass: thirdNavEyeClass
      }
    }

    this.init();
  }
  
  init() {
    
    this.navHover(this.options.elements.firstNav, this.options.classes.firstNavEyeClass);
    this.navHover(this.options.elements.secondNav, this.options.classes.secondNavEyeClass);
    this.navHover(this.options.elements.thirdNav, this.options.classes.thirdNavEyeClass);

  }

  navHover(el, className) {
    el.hover(
      function() {
        this.options.elements.eye.addClass(className);
      }.bind(this), function() {
        this.options.elements.eye.removeClass(className);
      }.bind(this)
    );
  }

}