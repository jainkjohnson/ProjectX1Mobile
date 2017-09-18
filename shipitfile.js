module.exports = function (shipit) {
  const args = process.argv;
  const dilshadSystem = 'dilshad@dilshad';
  const webappProjectName = 'ProjectX1Mobile';
  const webappProjectUrl = 'git@github.com:jainkjohnson/ProjectX1Mobile.git';
  const webappProjectDestinationDir = '/home/dilshad/Project/temp/jain';

  require('shipit-deploy')(shipit);

  shipit.initConfig({
    ProjectX1Mobile: {
      servers: dilshadSystem,
      workspace: '/tmp/' + webappProjectName,
      repositoryUrl: webappProjectUrl,
      deployTo: webappProjectDestinationDir,
      branch: 'develop',
    },
  });

  // this task copies script to inside of current folder
  shipit.blTask('copy_script', function () {
    return shipit.remote('cp /home/dilshad/Project/temp/jain/ProjectX1Mobile/restart.sh /home/dilshad/Project/temp/jain/ProjectX1Mobile/current');
  });

  // this task runs the script
  shipit.blTask('run_script', function () {
    return shipit.remote('/bin/bash /home/dilshad/Project/temp/jain/ProjectX1Mobile/restart.sh');
  });

  shipit.on('deployed', function () {
    shipit.start('copy_script', 'run_script');
  });

  shipit.on('rollbacked', function () {
    shipit.start('copy_script', 'run_script');
  });
};
