import { DirectoryService } from './../../../home/routes/directory/directory.services'
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
// import { RolesAccessService } from '../../services/roles-access.service'
@Component({
  selector: 'ws-app-roles-access',
  templateUrl: './roles-access.component.html',
  styleUrls: ['./roles-access.component.scss'],
})
export class RolesAccessComponent implements OnInit, AfterViewInit, OnDestroy {
  tabledata: any = []
  data: any = []
  deparmentId!: string
  deparmentName!: string

  constructor(private directoryService: DirectoryService, private activatedRoute: ActivatedRoute, private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.deparmentId = params['roleId']
      this.deparmentName = params['depatName']
    })
  }

  ngOnInit() {
    this.tabledata = {
      columns: [
        { displayName: 'Role', key: 'role' },
        { displayName: 'Number of users', key: 'count' },
      ],
      needCheckBox: false,
      needHash: false,
      sortColumn: '',
      sortState: 'asc',
    }
    this.fetchRoles()
  }

  ngAfterViewInit() {
    // this.elementPosition = this.menuElement.nativeElement.parentElement.offsetTop
  }

  /* Click event to navigate to a particular role */
  onRoleClick(clickedData: any) {
    console.log(clickedData)
    this.router.navigate([`/app/roles/39/users`])
  }

  /* API call to get all roles*/
  fetchRoles() {

    const rolesAndAccessData: any[] = []
    this.directoryService.getAllDepartments().subscribe(res => {
      res.forEach((dept: { id: number, rolesInfo: any }) => {
        if (dept.id === parseInt(this.deparmentId, 10)) {
          dept.rolesInfo.forEach((role: { roleName: string, noOfUsers: string }) => {
            rolesAndAccessData.push({
              role: role.roleName,
              count: role.noOfUsers,
            })

          })
        }
      })
      this.data = rolesAndAccessData
    })
  }

  ngOnDestroy() {
  }
}
