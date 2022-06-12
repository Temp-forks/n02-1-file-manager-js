# Assignment: File Manager

## List of operations and examples

List of operations and their syntax:
- Navigation & working directory (nwd)
    - Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
    ```bash
    up
    ```
    - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd folder-name
    ```
    - List all files and folder in current directory and print it to console
    ```bash
    ls
    ```
- Basic operations with files
    - Read file and print it's content in console:
    ```bash
    cat file.txt
    ```
    - Create empty file in current working directory:
    ```bash
    add file.txt
    ```
    - Rename file:
    ```bash
    rn file.txt newfile.txt
    ```
    - Copy file:
    ```bash
    cp file.txt folder-name
    ```
    - Move file (same as copy but initial file is deleted):
    ```bash
    mv file.txt folder-name
    ```
    - Delete file:
    ```bash
    rm file.txt
    ```
- Operating system info (prints following information in console)
    - Get EOL (default system End-Of-Line)
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
    ```bash
    os --cpus
    ```
    - Get home directory:
    ```bash
    os --homedir
    ```
    - Get current *system user name* (Do not confuse with the username that is set when the application starts)
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled
    ```bash
    os --architecture
    ```
- Hash calculation
    - Calculate hash for file and print it into console
    ```bash
    hash file.txt
    ```
- Compress and decompress operations
    - Compress file (using Brotli algorithm)
    ```bash
    compress file.txt file.br

    compress file.txt folder-name/file.br
    ```
    - Decompress file (using Brotli algorithm)
    ```bash
    decompress file.br file.txt
    decompress file.br folder-name/file.txt
    ```
    
