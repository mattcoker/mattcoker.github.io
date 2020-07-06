import { graphql } from "gatsby"
import { string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  type: string,
  period: string,
  position: string,
  url: string,
}

export const query = graphql`
  fragment CustomWorkHistoryFragment on WorkHistoryYaml {
    company
    type
    period
    position
    url
  }
`
