'use strict';
var yeoman  = require('yeoman-generator');
var chalk   = require('chalk');
var yosay   = require('yosay');
var _       = require("underscore");
var mkdirp  = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the wonderful ' + chalk.yellow('Miojo') + ' generator!'
    ));

    var prompts = [
      {
        name: 'app_name',
        message: 'What the name of your app?',
        default: 'app'
      },
      {
        name: 'app_description',
        message: 'Type the description of your app.',
        default: 'An awesome app!'
      },
      {
        name: 'app_site',
        message: 'Your app have a site?',
        default: 'example.com'
      },
      {
        name: 'author_name',
        message: 'What\'s your name?',
        default: 'Gandalf'
      },
      {
        name: 'author_email',
        message: 'What\'s your email?',
        default: 'gandalf@middleearth.nz'
      },
      {
        name: 'package_name',
        message: 'Set the app package name.',
        default: 'com.example.app'
      },
    ];

    this.prompt(prompts, function (props) {
      this.app_name        = props.app_name;
      this.app_description = props.app_description;
      this.app_site        = props.app_site;
      this.author_name     = props.author_name;
      this.author_email    = props.author_email;
      this.package_name    = props.package_name;
      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      this.template('_package.json', 'package.json');
      this.template('editorconfig', '.editorconfig');
      this.template('jshintrc', '.jshintrc');
      this.template('_bower.json', 'bower.json');
      this.template('gulpfile.js', 'gulpfile.js');
      this.template('_config.xml', 'config.xml');
      this.template('.bowerrc', '.bowerrc');
      this.template('_ionic.project', '.ionic.project');
      this.template('.gitignore', '.gitignore');
    },

    app: function () {

      mkdirp('source');
      mkdirp('source/assets');
      mkdirp('source/assets/fonts');
      mkdirp('source/assets/images');
      mkdirp('source/assets/styles');

      this.fs.copy(
        this.templatePath('./source'),
        this.destinationPath('./source')
      );

      this.fs.copy(
        this.templatePath('./gulp_tasks'),
        this.destinationPath('./gulp_tasks')
      );

      this.template('_index.jade', './source/index.jade');

    },

  },

  install: function () {
    // this.installDependencies();
  }
});
