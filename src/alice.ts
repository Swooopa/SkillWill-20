// ფაილი: store/entitiesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entity } from './types'; // შეამოწმეთ ფაილის დარექტორია და იმპორტები

interface EntityState<T extends Entity> {
  entities: Record<string, T>;
}

const initialState: EntityState<any> = {
  entities: {},
};

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    entityAdded: (state, action: PayloadAction<Entity>) => {
      const entity = action.payload;
      state.entities[entity.id] = entity;
    },
    entityUpdated: (state, action: PayloadAction<Entity>) => {
      const entity = action.payload;
      state.entities[entity.id] = entity;
    },
    entityRemoved: (state, action: PayloadAction<string>) => {
      delete state.entities[action.payload];
    },
  },
});

export const { entityAdded, entityUpdated, entityRemoved } = entitiesSlice.actions;
export default entitiesSlice.reducer;
