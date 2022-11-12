import {Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

exports.readAll = async (req:Request, res:Response) => {
  try {
    const events = await prisma.event.findMany();
    return res.json({
        success: true,
        data: events
    });
    } catch (error) {
    return res.json({
        success: false,
        message: error
    });
    }
}

exports.readByDate = async (req:Request, res:Response) => {
    try {
        console.log(req.params)
        const eventsByDate = await prisma.event.findMany({
          where:{
            sport: req.params['sport'],
            date: req.params['date'],
          }
        });
        return res.json({
            success: true,
            data: eventsByDate
        });
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
}

exports.createMany =  async (req:Request, res:Response) => {
    try {
        const newEvent = await prisma.event.createMany({
            data: req.body
        });

        console.log('newEvent in createMany controller', newEvent);
        return res.json({
            success: true,
            data: newEvent
        });
    } catch (error) {
        console.log('Error in createMany controller : ', error)
        return res.json({
            success: false,
            message: error
        });
    }
  }