# Database
- Create Database DB_NAME
- Create USER DB_USER with password DB_PASS
- Grant all privileges on database DB_NAME to DB_USER

# Use Sequelize CLI to migrate and seed data
- Ref: <a href="https://sequelize.org/docs/v6/other-topics/migrations/" target="_blank">Sequelize CLI</a> 

# How to Start

1. Environment
- Use nodejs version >= 18

2. Init config file
- Copy ".env-sample" to ".env"
- Copy "config/config-sample.json" to "config/config.json"

* Note: when install package use --force "npm install --force"

3. Run source (dev)
- Run command: "npm run start:dev" or "yarn start:dev"

# Convention code
1. Filename
- Use lowercase name to create name, follow this sample:
  + File:
    user.model.ts
    user-point.service.ts
    create-form.dto.ts
 + Folder:
    locations

- Model properties (attributes):
  Ex: id, building, locationName, locationNumber, area, parentsId

# How to response data
- In controller or service function just return follow:
```
  // Return with pagination
  return paginate()

  // Return only data
  return data;

  // Custom message
  return {
    data: object | array,
    message: "Custom message"
  }

  // Return only data
  return {
    message: "Custom message";
  }

  // Return only data
  return "Custom message";
```

# Create new module
- Sample code in 'Sample' module.
- Run terminal command: "nest g res modules/{new-module}"
- After create fields (properties) for Model, create {new-module}.providers.ts, can copy from 'Sample' module.
- To create model in DB, add model to "sequelize.addModels" in "database.providers.ts" file.
- Add constants repository name to "repository.ts" in constants folder.


