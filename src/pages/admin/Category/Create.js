import React from 'react'

import Navbar from '../../../components/AdminNavbar/Index'

const Create = () => {
    return (
        <div className="category-create">
            <Navbar back={true} title={'Create Category'} />

            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-12">
                        <form>
                            {/* Name */}
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control rounded-0 shadow-none"
                                    placeholder="Enter name"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Create;