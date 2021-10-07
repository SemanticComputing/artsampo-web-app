import { objectsConfig } from './perspective_configs/ObjectsConfig'
import {
  productionPlacesQuery,
  lastKnownLocationsQuery,
  migrationsQuery,
  migrationsDialogQuery,
  manuscriptPropertiesInstancePage,
  expressionProperties,
  collectionProperties,
  productionsByDecadeQuery,
  eventsByDecadeQuery,
  manuscriptInstancePageNetworkLinksQuery,
  manuscriptFacetResultsNetworkLinksQuery,
  manuscriptNetworkNodesQuery,
  knowledgeGraphMetadataQuery
} from './sparql_queries/SparqlQueriesPerspective1'
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
