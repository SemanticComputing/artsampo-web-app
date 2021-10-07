import { objectsConfig } from './perspective_configs/ObjectsConfig'
import {
  objectPropertiesInstancePage,
  objectPropertiesFacetResuts,
  knowledgeGraphMetadataQuery
} from './sparql_queries/SparqlQueriesObjects'
import { federatedSearchDatasets } from './sparql_queries/SparqlQueriesFederatedSearch'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { sitemapInstancePageQuery } from '../SparqlQueriesGeneral'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapLineChart,
  mapMultipleLineChart,
  linearScale
} from '../Mappers'

export const backendSearchConfig = {
  objects: objectsConfig,
}
