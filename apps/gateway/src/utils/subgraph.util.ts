import { subgraphs } from 'src/app.config'

export class RouterSubgraph {
  static get(services: string[]) {
    return services.map((service: keyof typeof subgraphs) => ({
      name: service,
      url: subgraphs[service],
    }))
  }
}
