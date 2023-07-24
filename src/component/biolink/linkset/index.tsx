import {Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {HexColorPicker} from "react-colorful";
import {FaPaintbrush} from "react-icons/fa6";
import {FiTrash2} from "react-icons/fi";
import {MdDataSaverOn} from "react-icons/md";
import {GiCheckMark} from "react-icons/gi";

const Index = ({onSaveLinkSet, onDeleteLinkSet}) => {
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#dc143c')
    const [colorToggle, setColorToggle] = useState(false)
    const [linkType, setLinkType] = useState("link")
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            id="link-title" label="Judul"
                            variant="standard"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="link-url" label="Link"
                            variant="standard"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel id="demo-simple-select-label">Variasi</InputLabel>
                            <Select
                                sx={{width: "100%"}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Variasi"
                                onChange={e => setLinkType(e.target.value)}
                            >
                                <MenuItem value={"link"}>Link</MenuItem>
                                <MenuItem value={"youtube"}>Youtube</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {linkType !== "youtube" &&
                        <Grid item xs={3}>
                            <Button
                                sx={{background: color, color: "white", padding: "1rem", height: "100%"}}
                                aria-label="delete"
                                onClick={() => setColorToggle(!colorToggle)}>
                                <FaPaintbrush/>
                            </Button>
                            {colorToggle &&
                                <HexColorPicker style={{position: "absolute", marginTop: "1rem", zIndex: 9999}}
                                                color={color}
                                                onChange={setColor}/>
                            }
                        </Grid>
                    }
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <IconButton
                            sx={{background: "green", color: "white"}}
                            size="small"
                            onClick={() => onSaveLinkSet({title, url, linkType, color})}
                            variant="contained">
                            <GiCheckMark/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            sx={{background: "crimson", color: "white"}}
                            size="small"
                            onClick={() => onDeleteLinkSet()}
                            variant="contained">
                            <FiTrash2/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Index;
