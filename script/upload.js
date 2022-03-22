const fs = require('fs')
const glob = require('glob')
const request = require('request')
const pkg = require('../package.json')

const outFilesPath = (pattern) => {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, filename) => {
      if (err) {
        reject(false)
      }
      resolve(filename)
    })
  })
}

const isFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) {
        reject(false)
      }
      if (stat.isFile()) {
        resolve(path)
      } else {
        resolve(false)
      }
    })
  })
}

const upload = (files, prefix, cb) => {
  // 已上传数量
  let currentUploadedCount = 0
  // 因为是批量上传，需要在最后将错误对象回调
  let globalError = null

  // 遍历编译资源文件
  files.forEach(({ path, fixname }) => {
    let formData = {
      key: `${prefix}${fixname}`,
      file: fs.createReadStream(path) // 单个文件形式
    }
    request.post(
      {
        // url: 'http://core-serve:3000/core/oss/build_upload',
        url: 'https://api.bstu.cn/core/oss/build_upload',
        formData
      },
      function (error, response, body) {
        currentUploadedCount++
        if (error) {
          globalError = error
          cb(error)
        } else {
          console.log(JSON.parse(body).data.url, '\x1B[32m上传成功~\x1B[39m')
        }
        if (currentUploadedCount === files.length) {
          globalError
            ? console.log(globalError)
            : console.log('\x1B[32m上传完成！\x1B[39m')
          cb()
        }
      }
    )
  })
}

const main = async () => {
  console.log('\x1B[32m开始上传...\x1B[39m')
  const prefix = `static/blog-client/${pkg.version}/`
  const rep_pattern = '.nuxt/dist/client/'
  const pattern = '.nuxt/dist/client/**/*'
  const paths = await outFilesPath(pattern)
  let checkJob = []
  paths.forEach((path) => {
    checkJob.push(isFile(path))
  })
  const checkRes = await Promise.all(checkJob)
  const fixRes = checkRes
    .filter((v) => v)
    .map((v) => ({
      path: v,
      fixname: v.replace(rep_pattern, '')
    }))
  await new Promise((resolve) => {
    upload(fixRes, prefix, resolve)
  })
}

main()
