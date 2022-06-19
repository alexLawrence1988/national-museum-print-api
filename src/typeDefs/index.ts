import { gql } from "apollo-server-lambda";

export default gql`
  type Colors {
    color: String
    css3: String
    hue: String
    percent: Float
    spectrum: String
  }

  type Images {
    alttext: String
    baseimageurl: String
    copyright: String
    date: String
    description: String
    displayorder: String
    format: String
    height: Float
    idsid: Float
    iiifbaseuri: String
    imageid: Float
    publiccaption: String
    renditionnumber: String
    technique: String
    width: Float
  }

  type People {
    alphasort: String
    birthplace: String
    culture: String
    deathplace: String
    displaydate: String
    displayname: String
    displayorder: Float
    gender: String
    name: String
    personid: Float
    prefix: String
    role: String
  }

  type Print {
    accessionmethod: String
    accessionyear: Float
    accesslevel: Float
    century: String
    classification: String
    classificationid: Float
    colorcount: Float
    colors: [Colors!]
    commentary: String
    contact: String
    contextualtextcount: Float
    copyright: String
    creditline: String
    culture: String
    datebegin: Float
    dated: String
    dateend: Float
    dateoffirstpageview: String
    dateoflastpageview: String
    department: String
    description: String
    dimensions: String
    division: String
    edition: String
    exhibitioncount: Float
    groupcount: Float
    id: Float
    imagecount: Float
    imagepermissionlevel: Float
    images: [Images!]
    labeltext: String
    lastupdate: String
    lendingpermissionlevel: Float
    markscount: Float
    mediacount: Float
    medium: String
    objectid: Float
    objectnumber: String
    people: [People!]
    peoplecount: Float
    period: String
    periodid: String
    primaryimageurl: String
    provenance: String
    publicationcount: Float
    rank: Float
    relatedcount: Float
    seeAlso: [SeeAlso!]
    signed: String
    standardreferencenumber: String
    state: String
    style: String
    technique: String
    techniqueid: Float
    title: String
    titlescount: Float
    totalpageviews: Float
    totaluniquepageviews: Float
    url: String
    verificationlevel: Float
    verificationleveldescription: String
    worktypes: [Worktypes!]
  }

  enum SortOrder {
    asc
    desc
  }

  type PrintInfo {
    totalrecordsperquery: Float
    totalrecords: Float
    pages: Float
    page: Float
    next: String
    prev: String
  }

  type PrintQueryReturn {
    info: PrintInfo,
    records: [Print],
}

  type Query {
    listByPage(classification: String!,
               page: Float!,                
               pageSize: Float!, 
               sort: String!, 
               sortOrder: SortOrder!, 
               hasImage: Float!): PrintQueryReturn
  }

  type SeeAlso {
    format: String
    id: String
    profile: String
    type: String
  }

  type Worktypes {
    worktype: String
    worktypeid: String
  }
`;
