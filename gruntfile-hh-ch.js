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
                "hawkshead/css/styles.css" : "hawkshead/scss/styles.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
