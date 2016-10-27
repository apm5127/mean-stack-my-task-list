import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Task } from '../classes/task';

@Injectable()
export class TaskService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	
	constructor(private http: Http) {
		console.log(`Task Service Initialized...`);
	}
	getTasks(): Observable<any> {
		return this.http.get(`api/tasks`)
			.map(res => res.json());
	}
	addTask(newTask: Task): Observable<Task> {
		return this.http
			.post(`api/task`, JSON.stringify(newTask), {headers: this.headers})
			.map(res => res.json())

	}
	deleteTask(id): Observable<void> {
		return this.http
			.delete(`api/task/${id}`)
			.map(res => res.json());
	}
	updateStatus(task) {
		return this.http
			.put(`/api/task/${task._id}`, JSON.stringify(task), {headers: this.headers})
			.map(res => res.json());
	}
}