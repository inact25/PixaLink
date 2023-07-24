import "../phone/index.scss"
import {Avatar, Button, Card, Typography} from "@mui/material";

const Index = ({data}) => {
    console.log(data)
    return (
        <div className="iphone-x">
            <i/>
            <b/>
            <s>
                <div style={{maxWidth: "80%", margin: "auto", overflowY: 'scroll', maxHeight: 600, overflow: "hidden"}}>
                    <div>
                        <Avatar
                            sx={{width: 125, height: 125, marginBottom: 2, margin: "auto"}} alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1689613736751-f8512ee1e3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"/>
                    </div>
                    <div style={{paddingTop: 18}}>
                        <Typography variant="h6" gutterBottom>asd</Typography>
                    </div>
                    {data?.map((item, index) =>
                        <div key={index}>
                            {item.linkType === "link" ?
                                <Button onClick={() => window.open(item.url)}
                                        style={{
                                            width: "100%",
                                            padding: "1rem",
                                            borderRadius: "10rem",
                                            background: item.color
                                        }}
                                        variant="contained">
                                    {item.title}
                                </Button>
                                :
                                <Card sx={{marginTop:".5rem", borderRadius:"1rem"}}>
                                    <iframe width="100%"
                                            src={`https://www.youtube.com/embed/${item.url?.split("=")[1]}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                    <div style={{
                                        fontSize: 14,
                                        marginTop: "-1rem",
                                        marginBottom: ".5rem",
                                        fontWeight: 500
                                    }}>{item.title}</div>
                                </Card>
                            }
                        </div>
                    )}
                </div>
            </s>
        </div>
    );
};

export default Index;
