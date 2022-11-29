import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosDTO } from './todos.dto';
@Controller('todos')
export class TodosController {
    constructor(private TodosService : TodosService){}

    @Get()
    fetchTodos() {
        return this.TodosService.fetchTodos()
    }

    @Post()
    addTodos(@Body() data : TodosDTO){
        return this.TodosService.addTodos(data)
    }

    @Get(':id')
    fetchTodosById(@Param('id') id : string){
        return this.TodosService.fetchTodosById(id) 
    }

    @Delete(':id')
    deleteTodos(@Param('id') id : string){
        return this.TodosService.deleteTodos(id)
    }
}

