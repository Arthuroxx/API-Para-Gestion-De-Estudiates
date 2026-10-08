import { Module } from '@nestjs/common';
import { StudentsController } from './students/students.controller';
import { CoursesController } from './courses/courses.controller';
import { GradesController } from './grades/grades.controller';

@Module({
  imports: [],
  controllers: [StudentsController, CoursesController, GradesController],
  providers: [],
})
export class AppModule {}
