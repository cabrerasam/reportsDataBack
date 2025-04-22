import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Crear la carpeta si no existe
const reportsDir = path.resolve('uploads/reports')
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true })
}

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, reportsDir) // Carpeta donde se guardarán los documentos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`
    cb(null, uniqueSuffix) // Nombre único para evitar colisiones
  }
})

// Filtro para asegurar que el archivo sea un PDF o DOCX
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only PDF and DOCX files are allowed'), false)
  }
  cb(null, true)
}

// Exportar el middleware configurado
export const uploadReports = multer({ storage, fileFilter })
