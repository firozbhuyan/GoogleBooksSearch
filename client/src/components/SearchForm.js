import React from "react";

function SearchForm(props) {
    return (
        <div className="col-sm-10">
            <form className="form-inline" id="bookSearch">
                <input className="form-control col-lg-12" type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required />
                <button className="btn btn-success my-2 my-sm-0" onClick={(e) => props.handleSearchClick(e)} type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;