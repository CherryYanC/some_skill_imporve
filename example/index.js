/**
 * @description 字符串参数中的字符无重复且仅包含小写字母
 * @description 返回的排列组合数组不区分顺序
 */
const _permute = (str) => {
    const result = []
    const map = new Map()
    const dfs = (path) => {
        if (path.length === str.length) {
            result.push(path)
            return
        }
        for(let i = 0; i < str.length; i++) {
            // 如果有相同字符，跳过这一轮循环
            if(map.get(str[i])) continue
            // 去重相同的字符
            map.set(str[i], true)
            // 衔接path
            path += str[i]
            dfs(path)

            path = path.substring(0, path.length - 1)
            map.set(str[i], false)
        }
    }

    dfs('')
    return result
}

console.log(_permute('abc'))