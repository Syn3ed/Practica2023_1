import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./user.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/role.guard";
import {AddRoleDto} from "./dto/add-role.dto";

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}
  @ApiOperation({summary:'Создание пользователя'})
  @ApiResponse({status:200, type:User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
  @ApiOperation({summary:'Получение всех пользователей'})
  @ApiResponse({status:200, type:[User]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary:'Выдача ролей'})
  @ApiResponse({status:200})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('role')
  getRole(@Body() dto: AddRoleDto){
    return this.userService.addRole(dto)
  }
}

