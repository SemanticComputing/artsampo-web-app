import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import fullTextSearch from './sampo/fullTextSearch'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'

import collections from './artsampo/collections'
import collectionsFacets from './artsampo/collectionsFacets'
import collectionsFacetsConstrainSelf from './artsampo/collectionsFacetsConstrainSelf'


const reducer = combineReducers({
  collections,
  collectionsFacets,
  collectionsFacetsConstrainSelf,
  leafletMap,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
