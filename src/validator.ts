export default function ValidateModel(
  modelDef: any,
  chamberInfo: ChamberInfo
): KeyValuePair[] {
  const errors: KeyValuePair[] = [];
  if (modelDef?.model?.subsystems[0]?.primary?.cpus?.topology) {
    const coresPerCluster =
      modelDef?.model.subsystems[0].primary.cpus.topology.cpus_per_cluster;
    const numClusters =
      modelDef.model.subsystems[0].primary.cpus.topology.number_of_clusters;
    const totalCores = coresPerCluster * numClusters;
    if (totalCores > chamberInfo.server_max_cpus) {
      errors.push([
        "cpus_per_cluster",
        `Total cores (${totalCores}) cannot exceed ${chamberInfo.server_max_cpus}.`,
      ]);
    }
  }
  return errors;
}

type ChamberInfo = {
  chamber_num_servers: number;
  server_max_cpus: number;
  model_max_cpus: number;
  server_reserved_cpus: number;
  chamber_start_ip: string;
  chamber_start_port: number;
  model_max_net_ports: number;
  model_max_device_ports: number;
  max_model_instances: number;
};

type KeyValuePair = [string, string];
