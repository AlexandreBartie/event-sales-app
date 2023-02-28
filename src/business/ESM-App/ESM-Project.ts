import { mmoSettings } from "./ESM-Settings"
import { mmoServices } from "./ESM-Services"

export class mmoApp {

    readonly settings: mmoSettings

    readonly services: mmoServices

    constructor() {

        this.settings = new mmoSettings(this)

        this.services = new mmoServices(this)
    }

}

// export class mmoProject {
//     readonly app: mmoApp

//     readonly sites: mmoSites

//     readonly addins: mmoAddins

//     readonly factory: mmoFactory

//     private _site!: mmoSite

//     private _tree!: mmoTreeView

//     get site(): mmoSite {
//         return this._site
//     }

//     get tree(): mmoTreeView {
//         return this._tree
//     }

//     get hasSite(): boolean {
//         return this._site !== undefined
//     }

//     constructor(app: mmoApp) {
//         this.app = app

//         this.sites = new mmoSites(this)

//         this.addins = new mmoAddins(this)

//         this.factory = new mmoFactory(this)
//     }

//     async open(key: string): Promise<boolean> {
//         if (!this.hasSite) await this.sites.get()

//         if (await this.set(key)) return true

//         console.log(`[ERR] Fails to open project using ${key} as site key.`)

//         return false
//     }

//     private async set(key: string) {
//         const site = this.sites.findx(key)

//         if (site !== undefined) await this.newTree(site)

//         return this.hasSite
//     }

//     private async newTree(site: mmoSite) {
//         this._site = site

//         this._tree = new mmoTreeView(this.site)

//         await this._tree.get()
//     }
// }

// export class mmoFactory {
//     private project: mmoProject

//     constructor(project: mmoProject) {
//         this.project = project
//     }

//     newItem(type: emmoTypeEntity, site: mmoSite, data: any): any {
//         switch (type) {
//             case emmoTypeEntity.Site:
//                 return new mmoSite(this.project).set(data)

//             case emmoTypeEntity.Cursor:
//                 return new mmoCursor(this.project).set(data)
//         }

//         if (site == undefined)
//             console.log(
//                 "[ERR] Don't possible to create a newItem: " + type.toString()
//             )

//         switch (type) {
//             case emmoTypeEntity.Pit:
//                 return new mmoPit(site).set(data)

//             case emmoTypeEntity.Phase:
//                 return new mmoPhase(site).set(data)

//             case emmoTypeEntity.Bench:
//                 return new mmoBench(site).set(data)

//             case emmoTypeEntity.Blast:
//                 return new mmoBlast(site).set(data)

//             case emmoTypeEntity.Grid:
//                 return new mmoGrid(site).set(data)

//             case emmoTypeEntity.Geometry:
//                 return new mmoGeometry(site).set(data)

//             case emmoTypeEntity.Hole:
//                 return new mmoDesignHole(site).set(data)
//         }
//     }

//     newList(type: emmoTypeEntity, site: mmoSite): any {
//         switch (type) {
//             case emmoTypeEntity.Site:
//                 return new mmoSites(this.project)

//             case emmoTypeEntity.Cursor:
//                 return new mmoCursors(this.project)
//         }

//         if (site == undefined)
//             console.log(
//                 "[ERR] Don't possible to create a newList: " + type.toString()
//             )

//         switch (type) {
//             case emmoTypeEntity.Pit:
//                 return new mmoPits(site)

//             case emmoTypeEntity.Phase:
//                 return new mmoPhases(site)

//             case emmoTypeEntity.Bench:
//                 return new mmoBenchs(site)

//             case emmoTypeEntity.Blast:
//                 return new mmoBlasts(site)

//             case emmoTypeEntity.Grid:
//                 return new mmoGrid(site)

//             case emmoTypeEntity.Geometry:
//                 return new mmoGeometries(site)

//             case emmoTypeEntity.Hole:
//                 return new mmoDesignHoles(site)
//         }
//     }

//     public getEntity(type: emmoTypeEntity): string {
//         switch (type) {
//             case emmoTypeEntity.Tree:
//                 return "Tree"

//             case emmoTypeEntity.Site:
//                 return "Site"

//             case emmoTypeEntity.Pit:
//                 return "Pit"

//             case emmoTypeEntity.Phase:
//                 return "Phase"

//             case emmoTypeEntity.Bench:
//                 return "Bench"

//             case emmoTypeEntity.Blast:
//                 return "Blast"

//             case emmoTypeEntity.Grid:
//                 return "Grid"

//             case emmoTypeEntity.Geometry:
//                 return "Geometry"

//             case emmoTypeEntity.Hole:
//                 return "Hole"

//             case emmoTypeEntity.Cursor:
//                 return "Cursor"
//         }
//     }
// }

// export class mmoAddins {
//     readonly cursors: mmoCursors

//     constructor(project: mmoProject) {
//         this.cursors = new mmoCursors(project)
//     }
// }
