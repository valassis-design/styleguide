Getting started:

*Please use VS Code to develop this project.* There are tools included in this repo that will help you to build the project with minimal configuration. Using anything else is _*unsupported*_.

This project makes heavy use of Gulp as a build tool, with preprocessing tools for CSS (SCSS) and HTML (Nunjucks) to ease heavy lifting.

Running for the first time:

Ensure all prerequisites are installed on your development machine:
* VS Code
* (Docker or Docker Desktop)[https://docs.docker.com/install/]
* Docker VS Extension - Press `CMD+P` and type `ext install extension docker`
* Remote - Containers extension for VS Code from Microsoft - Press `CMD+P` and type `ext install extension remote-containers`
* Nunjucks - Press `CMD+P` and type `ext install extension nunjucks`
* (Suggested) Nunjucks VSCode Extension Pack - Press `CMD+P` and type `ext install extension vscode-nunjucks`

Clone this repository and open the resulting folder in VS Code, and you should be prompted to reopen the folder in a container. Click the button to do so. If the prompt does not appear, click the Remote-Containers extension button in the bottom left corner of your VS Code window and select `Remote-Containers: Reopen Folder in Container`

If this is your first time developing this project, the container will be built for you. This may take a few minutes, so it's a good time to go get coffee.

Once the container has been built, VS Code will reload, connected to the container and almost ready to develop.

Now, open a VS Code terminal window by hitting `Control+~` - this should connect to the running container, where you'll see a command line prompt that looks similar to ```root@0fe9f50fe6e3:/workspaces/valassis.design#```

At this prompt, type `yarn run dev`, and Gulp should start a local server inside the container. You can now visit http://localhost:3000 to see the project running.

Now you're ready to develop.

Please note that HTML files should not be edited directly in this project. Nunjucks templates are used to make the code more modular and easier to maintain. These templates can be found in the `pages` and `templates` folders within the project. These templates are automatically compiled into the final HTML as part of the development and build processes.

When you've gotten to a good stopping point, and you want to deploy, you'll need to quit the dev server by pressing `Control+C` in the Terminal window. Once stopped, you'll want to run `yarn run build`, which will fully compile all SCSS and Nunjucks files, as well as minifying any images you may have included.

Closing the VS Code window will terminate the connection to the container and suspend it.
