import React from 'react'


function Image({ data }) {
    return (
        <div className="image shadow rounded">
            <div className="image__wrapper">
                <img src={data.url} alt="" />
                <small className="ml-2 text-dark text-muted">@{data.username}</small>
                <small className="text-muted mr-2 mt-1 float-right">
                    {data.country && <span>{data.country}, </span>}
                    {data.city && <span>{data.city}</span>}
                </small>
            </div>
        </div>
    )
}

export default Image
