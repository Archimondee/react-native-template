import AsyncStorage from "@react-native-async-storage/async-storage";

export class LocalStorageService {
  public static get<T = any>(key: string): Promise<T> {
    return AsyncStorage.getItem(key)
      .then((retrievedItem: any) => JSON.parse(retrievedItem))
      .catch(error => window.console.log(error));
  }

  public static getString(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  public static async set(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value)).then(() => value);
  }

  public static async setString(key: string, value: any) {
    return AsyncStorage.setItem(key, value).then(() => value);
  }

  public static async remove(key: string) {
    return AsyncStorage.removeItem(key).then(() => true);
  }
}
