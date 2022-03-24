---
path: "/FileSystem"
cover: "./logo3.png"
date: "2022-01-30"
title: "File System"
tags: []
published: true
---


#FileSystem
<hr>

<br>

## Introduction

The file system is based on a FAT (File Allocation Table) and supports up to 128 files in a single root directory.

The file system is implemented on top of a virtual disk. This virtual disk is actually a simple binary file that is stored on the “real” file system provided by your computer.

Exactly like real hard drives which are split into sectors, the virtual disk is logically split into blocks. The first software layer involved in the file system implementation is the block API and is provided to you. This block API is used to open or close a virtual disk, and read or write entire blocks from it.

Above the block layer, the FS layer is in charge of the actual file system management. Through the FS layer, you can mount a virtual disk, list the files that are part of the disk, add or delete new files, read from files or write to files, etc.

## Layout

- The Superblock is the very first block of the disk and contains information about the file system (number of blocks, size of the FAT, etc.)

- The File Allocation Table is located on one or more blocks, and keeps track of both the free data blocks and the mapping between files and the data blocks holding their content.

- The Root directory is in the following block and contains an entry for each file of the file system, defining its name, size and the location of the first data block for this file.

- Finally, all the remaining blocks are Data blocks and are used by the content of files.

The size of virtual disk blocks is 4096 bytes.
<br>


<img src="./superblock.png">
<br>

<img src="./FAT.png">
<br>

<img src="./rootDir.png">


## Program

<br>

<img src="./format.png">

The program created would be provided in apps/test_fs.x. This program accepts multiple commands (one per run) and allows you to:

Get some information about a virtual disk: test_fs.x info
<diskname>
List all the files contained in a virtual disk: test_fs.x ls
<diskname>
Etc.
In order to have the list of commands: test_fs.x

The creation of new virtual disks is provided by fs_make.x.


## Note

- This project is built for Linux machines.

- The implementation of the file system is under libfs/fs.c and libfs/fs.h.

- The source code of your library in libfs/.

- The source code of your tester(s) in apps/.

- libfs/Makefile: a Makefile that compiles your source code without any errors or warnings and builds a static library named libfs.a.

<a href="https://github.com/rayngan999/FAT-File-System
"> Github Link </a>

