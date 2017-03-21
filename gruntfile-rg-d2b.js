module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: ['dare2b/**/*.scss', 'regatta/**/*.scss', 'outlet/**/*.scss'],
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "regatta/css/styles.css" : "regatta/scss/styles.scss",
                "dare2b/css/styles.css" : "dare2b/scss/styles.scss",
                "outlet/css/styles.css" : "outlet/scss/styles.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
