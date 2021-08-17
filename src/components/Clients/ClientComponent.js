import React from 'react';

export default function ClientComponent(props) {
  return (
    <div className="">
            <div className="">
                <div className="custom-control form-control-lg custom-checkbox">
                    <input type="checkbox" className="custom-control-input mx-2 my-2" id="customCheck1" />
                    <label class="custom-control-label" for="customCheck1">{props.title}<div className="toright AddCandidate">
                        Add to Job
                    </div></label>

                </div>

                <div>
                    <div className="row mx-4 my-3">
                        <div className="col-2 ">Contact Person <div>mixed</div></div>
                        <div className="col-2">Location<div>Gray</div></div>
                        <div className="col-2">Phone<div>000</div></div>
                        <div className="col-2">Email<div>Female</div></div>
                        <div className="col-1">Title<div>Medium</div></div>
                        <div className="col-1">Status<div>Medium</div></div>
                        <div className="col-2">Best Time to reach<div>Medium</div></div>
                    </div>
                </div>
            </div>
        </div>
  )
}
