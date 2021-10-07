const perspectiveID = 'objects'

export const objectPropertiesInstancePage =
`   {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id mmm-schema:data_provider_url ?source__id .
      BIND (?source__id AS ?source__prefLabel)
      BIND (?source__id AS ?source__dataProviderUrl)
    }
`

export const objectPropertiesFacetResults =
 `  {
       ?id skos:prefLabel ?prefLabel__id .
       BIND (?prefLabel__id as ?prefLabel__prefLabel)
       BIND(CONCAT("/collections/page/", ENCODE_FOR_URI(REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"))) AS ?prefLabel__dataProviderUrl)
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
