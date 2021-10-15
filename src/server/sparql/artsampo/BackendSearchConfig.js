import { objectsConfig } from './perspective_configs/ObjectsConfig'
import {
  objectPropertiesInstancePage,
  objectPropertiesFacetResuts,
  knowledgeGraphMetadataQuery,
  objectsByMaterialQuery
} from './sparql_queries/SparqlQueriesObjects'
import { federatedSearchDatasets } from './sparql_queries/SparqlQueriesFederatedSearch'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { sitemapInstancePageQuery } from '../SparqlQueriesGeneral'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapLineChart,
  mapMultipleLineChart,
  linearScale,
  mapPieChart
} from '../Mappers'

export const backendSearchConfig = {
  objects: objectsConfig,
  objectsByMaterial: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByMaterialQuery,
    filterTarget: 'find',
    resultMapper: mapPieChart
  }
}
