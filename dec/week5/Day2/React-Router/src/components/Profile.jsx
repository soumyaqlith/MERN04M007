import React from 'react'
import { useParams, useSearchParams } from 'react-router'

function Profile() {

  // let { id } = useParams()
  let [searchParam] = useSearchParams()

  let search = searchParam.get("search");
  let cata = searchParam.get("cata");

  console.log(search)
  console.log(cata)
  return (
    <div>Profile

      <br />
      {/* Id {id} */}
    </div>
  )
}

export default Profile