const multer = require("multer");
const router = require("express").Router();

const avtaarStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./static/uploads/avtaarStorage");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const lectureStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./static/uploads/lectureStorage");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const avtaar = multer({ storage: avtaarStorage });
const lecture = multer({ storage: lectureStorage });

router.post("/uploadavtaar", avtaar.single("avtaar"), (req, res) => {
    res.status(200).json({ status: "success" });
});
router.post("/uploadlecture", lecture.single("lecture"), (req, res) => {
    res.status(200).json({ status: "success" });
});

module.exports = router;
