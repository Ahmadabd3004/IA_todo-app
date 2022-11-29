import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private todosRepository: Repository<Todos>,
  ) {}

  async fetchTodos() {
    return await this.todosRepository.find();
  }

  async fetchTodosById(id){
    let todos = await this.todosRepository.findOneBy({id})
    if (todos) {
      return todos;
    }
    return `Todos Not Found`
  }

  async addTodos(data) {
    const newTodos = await this.todosRepository.save(data);
    return newTodos;
  }
  async deleteTodos(id) {
    let todos = await this.todosRepository.findOneBy({id})
    if (todos) {
      await this.todosRepository.delete({ id });
      return `Todo with id ${id} has been deleted`
    }
    return `Todos Not Found`
    
    
  }
}
