import People from './People';
import Colors from './Colors';
import SeeAlso from './SeeAlso';
import Worktypes from './Worktypes';
import Images from './Images';


type Print = {
  copyright: string
  contextualtextcount: number
  creditline: string
  accesslevel: number
  dateoflastpageview: string
  classificationid: number
  division: string
  markscount: number
  publicationcount: number
  totaluniquepageviews: number
  contact: string
  colorcount: number
  rank: number
  state: string
  id: number
  verificationleveldescription: string
  period: string
  imagecount: number
  totalpageviews: number
  accessionyear: number
  standardreferencenumber: string
  signed: string
  classification: string
  relatedcount: number
  verificationlevel: number
  primaryimageurl: string
  titlescount: number
  peoplecount: number
  style: string
  lastupdate: string
  commentary: string
  periodid: string
  technique: string
  edition: string
  description: string
  medium: string
  lendingpermissionlevel: number
  title: string
  accessionmethod: string
  provenance: string
  groupcount: number
  dated: string
  department: string
  dateend: number
  url: string
  dateoffirstpageview: string
  century: string
  objectnumber: string
  labeltext: string
  datebegin: number
  culture: string
  exhibitioncount: number
  imagepermissionlevel: number
  mediacount: number
  objectid: number
  techniqueid: number
  dimensions: string  
  seeAlso: [SeeAlso]
  people: [People]
  colors: [Colors]
  worktypes: [Worktypes]
  images: [Images]
}

export default Print