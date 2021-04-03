import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

function DisplayArks() {
    const [arks, setArks] = useState([])

    useEffect(() => {
        loadArks()
    }, [])

    function loadArks() {
        API.getArks()
        .then(res => 
            setArks(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteArk(id) {
        API.deleteArk(id)
        .then(res => loadArks())
        .catch(err => console.log(err));
    }

    return (
        <Col size="md-6 sm-12">
            <Jumbotron>
            <h1>Current ARKs Needing Providers</h1>
            </Jumbotron>
            {arks.length ? (
            <List>
                {arks.map(ark => (
                <ListItem key={ark._id}>
                    <Link to={"/arks/" + ark._id}>
                    <strong>
                        {ark.serviceSynopsis} / {ark.userLocation}
                    </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteArk(ark._id)} />
                </ListItem>
                ))}
            </List>
            ) : (
            <h3>No Results to Display</h3>
            )}
        </Col>
    )
}

export default DisplayArks;
