export declare enum PdfError {
    INVALID_PARAMS = "invalid_params",
    INVALID_RESPONSE = "invalid_response",
    DOWNLOAD_ERROR = "download_error"
}
/**
 * Download declaration pdf
 * @param login
 * @param password
 * @param successHandler
 * @param errorHandler
 */
export declare const downloadPdf: (login: string, password: string, successHandler: () => void, errorHandler: (err: PdfError) => void) => Promise<void>;
