import React from "react"

const Footer = () => {

  const style = {
    margin: '50px auto 0px',
    textAlign: 'center',
    clear: 'both'
  }

  return(
    <div style={style}>
      <a href="https://github.com/valmassoi/bookwerm" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> github repo</a> by <a style={{marginTop:'10px'}} href="https://twitter.com/valmassoi" target="_blank">@valmassoi</a>
    </div>
  )
}

export default Footer
