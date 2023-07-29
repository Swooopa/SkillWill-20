interface Entity {
    id: string;
    // სხვა ველები...
  }
  
  interface CrudAPI<T extends Entity> {
    getAll(): Promise<T[]>;
    get(id: string): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
  }
  