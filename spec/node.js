var jstest = require("jstest").Test

require("./vault_spec")

require("./cli/generator_spec")
require("./cli/config_spec")
require("./cli/completion_spec")
require("./cli/sources_spec")

jstest.autorun()
