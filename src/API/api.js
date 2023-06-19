import axios from "axios";
import Config from "../Config/Config.js";
// const axios = require("axios")

// let baseUrl =  "http://localhost:7777/api/v1/"

const api =  axios.create({
  baseURL : Config.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getHero = async () =>{
  let response =  await api.get("/Hero")
  return response.data
}
export const getSpecifications = async () =>{
  let response =  await api.get("/Specification")
  return response.data
}
export const getSkills = async () =>{
  let response =  await api.get("/Skills")
  return response.data
}
export const getProjects = async () =>{
  let response =  await api.get("/Project")
  return response.data
}
export const getAbout = async () =>{
  let response =  await api.get("/About")
  return response.data[0]
}



