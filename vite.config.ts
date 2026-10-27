import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    console.log("Vite is building in mode:", mode);
    return {
        server: {
            port: 3000,
            host: true
        },
        plugins: [react()],
    };
});