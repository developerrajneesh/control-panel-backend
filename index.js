const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db.config/db.config')()

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api/v1/admin/",require('./routes/admin.route'))
app.use("/api/v1/admin/",require('./routes/blog.route'))
app.use("/api/v1/admin/",require('./routes/contact.route'))
app.use("/api/v1/admin/",require('./routes/project.route'))
app.use("/api/v1/admin/",require('./routes/link.route'))
app.use("/api/v1/admin/",require('./routes/skill.route'))
app.use("/api/v1/admin/",require('./routes/resume.route'))


 

const port = 5000
app.listen(port, () => {
    console.log('Server running on', port);
}
)
