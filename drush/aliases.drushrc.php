<?php

//ADD REMOTE ALIASES

$aliases['<SITENAME>.local'] = array(
  'uri' => '<SITENAME>.local',
  'root' => '/var/www/drupalvm/web',
  'remote-host' => '<SITENAME>.local',
  'remote-user' => 'vagrant',
  'ssh-options' => '-o "SendEnv PHP_IDE_CONFIG PHP_OPTIONS XDEBUG_CONFIG" -o PasswordAuthentication=no -i "' . (getenv('VAGRANT_HOME') ?: drush_server_home() . '/.vagrant.d') . '/insecure_private_key"',
  'path-aliases' => array(
    '%drush-script' => '/var/www/drupalvm/vendor/drush/drush/drush',
  ),
);

$aliases['adamsearchapi.dev'] = array(
  'uri' => 'dev-adamsearchapi.pantheonsite.io',
  'db-url' => 'mysql://pantheon:a1fe23b318414506bcd7411a620f0a4b@dbserver.dev.8c73083c-60de-4e9b-9494-424688b643bd.drush.in:20113/pantheon',
  'db-allows-remote' => TRUE,
  'remote-host' => 'appserver.dev.8c73083c-60de-4e9b-9494-424688b643bd.drush.in',
  'remote-user' => 'dev.8c73083c-60de-4e9b-9494-424688b643bd',
  'ssh-options' => '-p 2222 -o "AddressFamily inet"',
  'path-aliases' => array(
    '%files' => 'code/sites/default/files',
    '%drush-script' => 'drush',
  ),
);


$aliases['ec8-upstream.local'] = array(
  'uri' => 'ec8-upstream.local',
  'root' => '/var/www/drupalvm/web',
  'remote-host' => 'ec8-upstream.local',
  'remote-user' => 'vagrant',
  'ssh-options' => '-o "SendEnv PHP_IDE_CONFIG PHP_OPTIONS XDEBUG_CONFIG" -o PasswordAuthentication=no -i "' . (getenv('VAGRANT_HOME') ?: drush_server_home() . '/.vagrant.d') . '/insecure_private_key"',
  'path-aliases' => array(
    '%drush-script' => '/var/www/drupalvm/vendor/drush/drush/drush',
  ),
);

