import { ExpandMore } from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { PersonPin } from "@mui/icons-material";
import update from "immutability-helper";

import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControl,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Tab,
    Tabs,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

import { Ballot } from "@mui/icons-material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useParams } from "react-router-dom";
// import './addForm.css';

const AddCourse = () => {
    const url = app_config.api_url;

    const answerTypes = ["smalltext", "longtext", "checkbox", "radio", "file"];

    const { formid } = useParams();
    // console.log(formid);

    const [tempForm, setTempForm] = useState({});

    const [value, setValue] = useState(0);
    const [formData, setFormData] = useState({
        sections: [
            {
                name: "Untitled Section",
                description: "",
                lectures: [
                    {
                        name: "",
                        description: "",
                        completed: false,
                        duration: 0
                    },
                ],
            },
        ],
    });

    const [dataReady, setDataReady] = useState(false);

    const [imgPath, setImgPath] = useState("");
    const [avatar, setAvatar] = useState("");
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("trainer"))
    );

    const courseForm = {
        title: "",
        description: "",
        category: "web dev",
        prerequisites: [],
        thumbnail: "",
        target: "",
        data: {},
        pricing: 0,
        trainer: currentUser._id,
        created: new Date(),
        duration: 0,
    };

    const onFormSubmit = (formdata) => {
        console.log("click on button to submit form");
        setTempForm(formdata);
        console.log(formdata);
    };

    const createCourse = () => {
        let formdata = tempForm;
        formdata["data"] = formData;
        formdata["thumbnail"] = avatar;
        console.log(formdata);
        fetch(url + "/course/add", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    icon: "success",
                    title: "Sucess",
                    text: "Course Added Successfully",
                });
            });
    };

    const addNewSection = () => {
        const newSection = {
            name: "Untitled Section",
            description: "Section Description",
            lectures: [
                {
                    name: "",
                    description: "",
                    completed: false,
                    duration: 0
                },
            ],
        };

        const newData = update(formData, {
            sections: {
                $push: [newSection],
            },
        });

        setFormData(newData);
    };

    const addNewLecture = (sect_index) => {
        const newLecture = {
            name: "",
            description: "",
            completed: false,
            duration: 0
        };

        const sections = {};
        sections[sect_index] = { lectures: { $push: [newLecture] } };

        const newData = update(formData, {
            sections: sections,
        });

        setFormData(newData);
    };

    const handleRename = (prop, val, sect_i, lect_i) => {
        const sections_tmp = {};
        const lectures_tmp = {};
        if (prop == "lect_name") {
            lectures_tmp[lect_i] = { name: { $set: val } };
            sections_tmp[sect_i] = { lectures: lectures_tmp };
        } else if (prop == "lect_desc") {
            lectures_tmp[lect_i] = { description: { $set: val } };
            sections_tmp[sect_i] = { lectures: lectures_tmp };
        } else if (prop == "sect_name") {
            sections_tmp[sect_i] = { name: { $set: val } };
        } else if (prop == "sect_desc") {
            sections_tmp[sect_i] = { description: { $set: val } };
        }

        const newData = update(formData, {
            sections: sections_tmp,
        });

        setFormData(newData);
    };

    const handleFileUpload = (prop, file, sect_i, ques_i) => {
        const formData = new FormData();
        formData.append("myfile", file);
        console.log(file);
        // fetch(url + "/util/uploadfile", {
        //   method: "POST",
        //   body: formData,
        // }).then((res) => console.log(res.status));

        console.log(prop);

        const sections = {};
        const questions = {};

        questions[ques_i] = { content: { $set: file.name } };
        sections[sect_i] = { questions: questions };

        const newData = update(formData, {
            sections: sections,
        });

        setFormData(newData);
    };

    const uploadThumbnail = (event) => {
        const data = new FormData();
        data.append("myfile", event.target.files[0]);
        setAvatar(event.target.files[0].name);

        // fetch(url + "/util/uploadfile", { method: "POST", body: data }).then(
        //   (res) => console.log(res)
        // );

        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            // erroMsg = 'Only images are supported.';
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setImgPath(reader.result);
        };
    };

    // const showThumb = () => {
    //   if (imgPath) {
    //     return <img src={imgPath} className="img-fluid" />;
    //   }
    // };

    React.useEffect(() => {
        console.log(formData);
        setDataReady(true);
        console.log(dataReady);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderCourse = () => {
        return (
            <div className="">
                {formData.sections.map((section, sect_i) => (
                    <div className="card">
                        <div className="form-section" key={sect_i}>
                            <h3>
                                Section {`${sect_i + 1}: `}
                                <InputBase
                                    className="section-input"
                                    value={section.name}
                                    onChange={(e) =>
                                        handleRename("sect_name", e.target.value, sect_i, 0)
                                    }
                                ></InputBase>
                            </h3>
                            <InputBase
                                value={section.description}
                                onChange={(e) =>
                                    handleRename("sect_desc", e.target.value, sect_i, 0)
                                }
                            ></InputBase>
                            {section.lectures.map((lecture, lect_i) => (
                                <Accordion key={lect_i}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <h4>
                                            Lecture {`${lect_i + 1}: `}
                                            <InputBase
                                                value={lecture.name}
                                                onChange={(e) =>
                                                    handleRename(
                                                        "lect_name",
                                                        e.target.value,
                                                        sect_i,
                                                        lect_i
                                                    )
                                                }
                                            ></InputBase>
                                        </h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <label>Upload Files</label>
                                        <input className="form-control" type="file" />
                                    </AccordionDetails>

                                </Accordion>
                            ))}
                            {/* <Button onClick={(e) => addNewQuestion(sect_i)}>
              Add New question
            </Button> */}
                            <Button onClick={(e) => addNewLecture(sect_i)} variant="outlined">
                                ADD NEW QUESTION
                            </Button>
                        </div></div>
                ))}
                {/* <button onClick={addNewSection}>Add New Section</button> */}
                <Button onClick={addNewSection} variant="contained">
                    Add New Section
                </Button>

                {/* <Button className="w-100 mt-5" onClick={createCourse}>
          Create Course
        </Button> */}
            </div>
        );
    };

    // 2. Create a function for form submission
    const userSubmit = (formdata) => {
        console.log(formdata);
        return;
        fetch("http://localhost:5000/form/add", {
            method: "POST",
            body: JSON.stringify(formdata), //convert javascript to json
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status === 200) {
                console.log("data saved");
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Form Created Successfully!!👍",
                });
            }
        });
    };

    return (
        <div className="col-md-8 mx-auto pt-4 w-100">
            {/* <div className="container"> */}
            <Paper square>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<Assignment />} label="Create Your Forms" />
                    <Tab icon={<PersonPin />} label="Setting" />
                    <Tab icon={<PersonPin />} label="Responses" />
                </Tabs>
            </Paper>

            <TabPanel value={value} index={0}>
                <div className="basic-details">
                    <Formik
                        initialValues={courseForm}
                        onSubmit={userSubmit}
                    // validationSchema={formSchema}
                    >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-3">
                                    <TextField
                                        label="Title"
                                        variant="standard"
                                        // className="w-50 mb-4"
                                        id="standard-basic"
                                        onChange={handleChange}
                                        value={values.title}
                                    // className="form-control form-control-lg"
                                    // helperText={touched.username ? errors.username : ''}
                                    // error={Boolean(errors.username && touched.username)}
                                    /></div>
                                <div className="p-3">

                                    <TextField
                                        label="Description"
                                        variant="standard"
                                        // className="w-50 mb-4"
                                        id="standard-basic"
                                        onChange={handleChange}
                                        value={values.description}
                                    // className="form-control form-control-lg"
                                    // helperText={touched.email ? errors.email : ''}
                                    // error={Boolean(errors.email && touched.email)}
                                    /></div>
                                {/* <button type="submit" className="btn btn-warning btn-lg ms-2">
                    Submit
                  </button> */}
                            </form>
                        )}
                    </Formik>
                </div>


                <div className="form-customizer">{renderCourse()}</div>

            </TabPanel>

            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            {/* </div> */}
            <button onClick={e => console.log(formData)}>check</button>
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="p-0  "
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Paper square className="p-5">
                    {children}
                </Paper>
            )}
            
        </div>
    );
}

export default AddCourse;
