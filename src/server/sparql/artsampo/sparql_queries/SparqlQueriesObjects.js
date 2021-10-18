const perspectiveID = 'objects'

export const objectPropertiesInstancePage =
  ` {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
      BIND(CONCAT("/objects/page/", ENCODE_FOR_URI(REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"))) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id :artist ?artist__id .
      ?artist__id skos:prefLabel ?artist__prefLabel .
      #?source__id mmm-schema:data_provider_url ?source__dataProviderUrl .
    }
    UNION
    {
      ?id :dimensionUnit ?dimensionUnit .
    }
    UNION
    {
      ?id :keyword ?keyword .
    }
    UNION
    {
      ?id :material ?material .
    }
    UNION
    {
      ?id :classification ?classification .
    }
    UNION
    {
      ?id :responsibleOrganisation ?responsibleOrganisation .
    }
    UNION
    {
      ?id :inventoryNumber ?inventoryNumber .
    }
    UNION
    {
      ?id :objectId ?fngId__id .
      BIND (CONCAT('https://www.kansallisgalleria.fi/en/object/', STR(?fngId__id)) AS ?fngId__prefLabel)
      BIND (CONCAT('https://www.kansallisgalleria.fi/en/object/', STR(?fngId__id)) AS ?fngId__dataProviderUrl)
    }
    UNION
    {
      ?id :width ?width .
    }
    UNION
    {
      ?id :length ?length .
    }
    UNION
    {
      ?id :yearFrom ?yearFrom .
    }
`

export const objectPropertiesFacetResults =
 `  {
       ?id skos:prefLabel ?prefLabel__id .
       BIND (?prefLabel__id as ?prefLabel__prefLabel)
       BIND(CONCAT("/objects/page/", ENCODE_FOR_URI(REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"))) AS ?prefLabel__dataProviderUrl)
       BIND(?id as ?uri__id)
       BIND(?id as ?uri__dataProviderUrl)
       BIND(?id as ?uri__prefLabel)
     }
     UNION
     {
       ?id :artist ?artist__id .
       ?artist__id skos:prefLabel ?artist__prefLabel .
       #?source__id mmm-schema:data_provider_url ?source__dataProviderUrl .
     }
     UNION
     {
       ?id :dimensionUnit ?dimensionUnit .
     }
     UNION
     {
       ?id :keyword ?keyword .
     }
     UNION
     {
       ?id :material ?material .
     }
     UNION
     {
       ?id :classification ?classification .
     }
     UNION
     {
       ?id :responsibleOrganisation ?responsibleOrganisation .
     }
     UNION
     {
       ?id :objectId ?fngId__id .
       BIND (CONCAT('https://www.kansallisgalleria.fi/en/object/', STR(?fngId__id)) AS ?fngId__prefLabel)
       BIND (CONCAT('https://www.kansallisgalleria.fi/en/object/', STR(?fngId__id)) AS ?fngId__dataProviderUrl)
     }
     UNION
     {
       ?id :inventoryNumber ?inventoryNumber .
     }
     UNION
     {
       ?id :width ?width .
     }
     UNION
     {
       ?id :length ?length .
     }
     UNION
     {
       ?id :yearFrom ?yearFrom .
     }
     #UNION
     #{
      # ?id ^crm:P46i_forms_part_of ?manuscript__id .
       #?manuscript__id skos:prefLabel ?manuscript__prefLabel .
      # BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?manuscript__id), "^.*\\\\/(.+)", "$1")) AS ?manuscript__dataProviderUrl)
     #}
`

export const knowledgeGraphMetadataQuery = `
  SELECT *
  WHERE {
    ?id a sd:Dataset ;
        dct:title ?title ;
        dct:publisher ?publisher ;
        dct:rightsHolder ?rightsHolder ;
        dct:modified ?modified ;
        dct:source ?databaseDump__id .
    ?databaseDump__id skos:prefLabel ?databaseDump__prefLabel ;
                      mmm-schema:data_provider_url ?databaseDump__dataProviderUrl ;
                      dct:modified ?databaseDump__modified .
  }
`

export const objectsByMaterialQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?object) as ?instanceCount)
  WHERE {
    <FILTER>
    ?object a :Object .
    ?object :material ?category .
    BIND (CONCAT(?category, ' ') AS ?prefLabel )
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const objectsByArtistQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?object) as ?instanceCount)
  WHERE {
    <FILTER>
    ?object a :Object .
    ?object :artist ?category .
    ?category skos:prefLabel ?prefLabel .
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
