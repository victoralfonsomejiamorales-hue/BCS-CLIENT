import cryptoJs from "crypto-js";

class CryptoService {
  async encryptData(data: unknown) {
    try {
      const SECRET_KEY =
        process.env.NEXT_PUBLIC_SECRET_KEY || "default-secret-key";

      if (!SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined in environment variables");
      }

      const stringifiedData = JSON.stringify(data);
      const cipherText = cryptoJs.AES.encrypt(
        stringifiedData,
        SECRET_KEY,
      ).toString();
      return cipherText;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      throw new Error(`Encryption failed: ${errorMessage}`);
    }
  }
}

export const cryptoService = new CryptoService();
