import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import TripOriginIcon from '@material-ui/icons/TripOrigin'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AddLocationIcon from '@material-ui/icons/AddLocation'
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness'
import StarIcon from '@material-ui/icons/Star'
import RedoIcon from '@material-ui/icons/Redo'
import PieChartIcon from '@material-ui/icons/PieChart'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import LineChartIcon from '@material-ui/icons/ShowChart'

import objectsImage from '../../img/main_page/luxemburg.jpg'

export const perspectiveConfig = [
  {
    id: 'objects',
    frontPageImage: objectsImage,
    defaultActiveFacets: new Set([]),
    defaultTab: 'table',
    defaultInstancePageTab: 'table',
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
    ]
  },
]
