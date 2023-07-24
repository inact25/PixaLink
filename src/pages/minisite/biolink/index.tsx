import {Avatar, Button, Card, Grid} from "@mui/material";
import {useState} from "react";
import Phone from "./partial/phone";
import Linkset from "../../../component/biolink/linkset";
import Layout from "../../../layout";

const Index = () => {
    const [linkList, setLinkList] = useState([])

    const handleAddLink = () => {
        const tempLink = [...linkList]
        const tempData = {
            title: "Masukkan Judul ",
            url: "",
            color: "#1976d2",
            linkType: "link"
        }
        setLinkList([...tempLink, tempData])
    }

    const handleChangeLink = (index, e) => {
        const tempLink = [...linkList]
        tempLink[index] = {
            title: e.title,
            url: e.url,
            color: e.color,
            linkType: e.linkType
        }
        setLinkList(tempLink)
    }

    const handleDeleteLink = (index) => {
        const tempLink = [...linkList]
        tempLink.splice(index, 1);
        setLinkList(tempLink)
    }

    return (
        <Layout>
            <div>
                <Grid container style={{justifyContent: "space-around"}}>
                    <Grid item xs={6}>
                        <Card sx={{
                            padding: "2rem",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            borderRadius: "1rem"
                        }}>
                            <Grid container>
                                <Grid item>
                                    <Avatar sx={{width: 125, height: 125, marginBottom: 2}} alt="Remy Sharp"
                                            src="https://images.unsplash.com/photo-1689613736751-f8512ee1e3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"/>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>

                        </Card>
                        <div style={{marginTop: 18, marginBottom: 18, textAlign: "end"}}>
                            <Button size="large" sx={{borderRadius: "10rem"}} variant="contained"
                                    onClick={() => handleAddLink()}>Tambah Link</Button>
                        </div>
                        <Card sx={{
                            padding: "2rem",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            borderRadius: "1rem"
                        }}>
                            {linkList.length ? linkList.map((item, idx) =>
                                <div style={{marginBottom: 16}} key={idx}>
                                    <Linkset onSaveLinkSet={(e) => handleChangeLink(idx, e)}
                                             onDeleteLinkSet={() => handleDeleteLink(idx)}/>
                                </div>
                            ) : <span>Tambahkan Satu atau lebih link</span>}
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Phone data={linkList}/>
                    </Grid>

                </Grid>
            </div>
        </Layout>
    );
};

export default Index;
