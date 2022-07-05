
export class PDF {
  fileUrl: string;
  file: File;

  constructor(fileUrl?: string) {
    this.fileUrl = fileUrl;
    this.file = null;
  }

  isValid(): boolean {
    return !!(this.file || this.fileUrl);
  }
}
