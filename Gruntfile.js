module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: '**/*.scss',
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
                "outlet/css/styles.css" : "outlet/scss/styles.scss",
                "craghoppers/css/styles.css" : "craghoppers/scss/styles.scss",
                "craghoppers/css/styles-us.css" : "craghoppers/scss/styles-us.scss",
                "hawkshead/css/styles.css" : "hawkshead/scss/styles.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
