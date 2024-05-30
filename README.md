# File uploader 
is a nodejs application that allow devices to upload files to a server.

### Instruction
#### 1. Download project
Run this command (do not the $ symbol. The $ symbol indecates that it is a command in the terminal):

    $ git clone https://github.com/vincebanzon/fileuploader

#### 2. Run the project
No need to install npm dependencies. They are already included.
Run this command:

    $ node index.js

#### 3. Open the website
Open your browser (Firefox, Chrome, Safari) then visit [http://localhost:3000](http://localhost:3000)

#### 4. Upload a file
Click on the "Browse" button.
Then select a file to upload.
You can also upload multiple files.
After selecting a file, selected file will show beside the "Browse button"
Finally, click the "Submit" button.
This will prompt you "File uploaded".
That's it! Congratulations!

#### 5. View the files
Open File Explorer and go to *this* project directory.

Open "uploads" folder.
You can then see the files you uploaded.

### Configuration
#### 1. Configure IP
You must change the IP address to allow other devices within the same network to upload files to your computer.
To do this:
1. Edit index.js filee
2. Replace line at the bottom:

    const host = 'localhost';

3. Change 'localhost' to your IP address something like 192.168.0.100


If you don't know your local IP address:
1. Open a Terminal or Command Prompt.
2. Then type in this command (do not the $ symbol. The $ symbol indecates that it is a command in the terminal):

    $ ipconfig

3. Hit enter.
4. Look for the value of **IPv4 Address**, not the Subnet Mask and not the Default Gateway.



### Debugging
Disable VPN.