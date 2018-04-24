module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: ['craghoppers/**/*.scss', 'hawkshead/**/*.scss'],
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "craghoppers/css/styles.css" : "craghoppers/scss/styles.scss",
                "craghoppers/css/styles-us.css" : "craghoppers/scss/styles-us.scss",
                "craghoppers/css/styles-de.css" : "craghoppers/scss/styles-de.scss",
                "craghoppers/css/staging-styles.css" : "craghoppers/scss/staging-styles.scss",
                "hawkshead/css/styles.css" : "hawkshead/scss/styles.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
