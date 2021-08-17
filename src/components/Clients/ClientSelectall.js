import React from 'react'

export default function ClientSelectall() {
    return (
        <div>
            <div className="custom-control form-control-lg custom-checkbox">
                <input type="checkbox" className="custom-control-inpu mx-2 my-2t" id="customCheck1" />
                <label className="custom-control-label selectall" for="customCheck1">
                    Select All <span className="toright email">Email</span>
                </label>
            </div>
        </div>
    )
}
