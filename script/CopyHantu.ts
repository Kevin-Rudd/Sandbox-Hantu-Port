// Piepieonline's Hantu Freelancer deployment script v1

import fs from "fs"
import path from "path"

export const analysis = (context, api) => Promise.resolve();
export const beforeDeploy = (context, api) => Promise.resolve();

export const afterDeploy: ModScript["afterDeploy"] = async function (context, api) {
  const modID = context.deployInstruction.id;

  api.logger.info('Copying Hantu Port to shared chunk for Freelancer access');
  
  fs.copyFileSync(context.config.runtimePath + '/chunk13.rpkg', context.config.runtimePath + '/chunk9patch200.rpkg');
  fs.copyFileSync(context.config.runtimePath + '/chunk13patch1.rpkg', context.config.runtimePath + '/chunk9patch201.rpkg');
  fs.copyFileSync(context.config.runtimePath + '/chunk13patch2.rpkg', context.config.runtimePath + '/chunk9patch202.rpkg');
  if(fs.existsSync(`${context.config.runtimePath}/chunk13patch3.rpkg`)) fs.copyFileSync(context.config.runtimePath + '/chunk13patch3.rpkg', context.config.runtimePath + '/chunk9patch203.rpkg');
  
  return Promise.resolve();
};

export const cachingPolicy: ModScript["cachingPolicy"] = {
  affected: []
}