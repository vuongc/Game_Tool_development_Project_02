# Game_tool_development_project_02

## Description

* Implement a game server that can support client from different version when updating it.

## How it works ?

* Basic usage:
  * The client send an answer to the server
  * The server check if the answer is correct
  * The server send back an answer to the client
  * The client see if he was right or wrong

* Parallele functionality
  * An editor can add new features to the server
  * The server get the new features and add it to the game
  * The old client still can play with the new server
  * After playing the old client will take the update into account and play with the new server
  * The new client only play with the new version of the server

## Install

* npm install

## Usage

* Before launching any client do not forget to launch the server
* After the server has been launch, launch a client to play
* To add feature to the game just launch the editor
