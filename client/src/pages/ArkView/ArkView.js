import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

function ArkView() {

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
        <div>
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
        <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com</a>
        </div>
    );
}

export default ArkView;