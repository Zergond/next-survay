import { AppStates } from '../types/store';

export function loadState<K extends keyof AppStates>(key: K): AppStates[K] | undefined {
  try {
    const serializedState = sessionStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.warn(`Could not load state for key "${key}" from sessionStorage:`, error);
    return undefined;
  }
}

export function saveState<K extends keyof AppStates>(key: K, state: AppStates[K]) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    console.warn(`Could not save state for key "${key}" to sessionStorage:`, error);
  }
}
