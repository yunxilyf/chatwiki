import { usePermissionStore } from '@/stores/modules/permission'
import { useUserStore } from '@/stores/modules/user'

/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkPermi(value) {
  const permissionStore = usePermissionStore()
  const { permissionMap } = permissionStore

  if (value && value instanceof Array && value.length > 0) {
    const permissionDatas = value
    const all_permission = '*:*:*'
    const hasPermission = permissionDatas.some((permissionKey) => {
      return permissionKey == all_permission || permissionMap[permissionKey.replace(/\//g, '_')]
    })

    if (!hasPermission) {
      return false
    }

    return true
  } else {
    console.error(`need roles! Like checkPermi="['system:user:add','system:user:edit']"`)
    return false
  }
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value
    const super_admin = 'admin'

    const hasRole = roles.some((role) => {
      return super_admin === role || permissionRoles.includes(role)
    })

    if (!hasRole) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like checkRole="['admin','editor']"`)
    return false
  }
}

export function checkRouterPermisission(value) {
  const { user_roles, role_permission } = usePermissionStore()
  if (user_roles == '1') {
    return true
  }
  if (value.includes('/robot/')) {
    // 机器人管理页面
    return role_permission.includes('RobotManage')
  }
  if (value.includes('/library/')) {
    // 知识库管理
    return role_permission.includes('LibraryManage')
  }
  if (value.includes('/user/clientDownload')) {
    // 客户端管理
    return role_permission.includes('ClientSideManage')
  }
  if (value.includes('/user/') && value != '/user/account') {
    // 知识库管理
    return role_permission.includes('SystemManage')
  }

  return true
}
