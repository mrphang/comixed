/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2017, The ComiXed Project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { ReaderGuard } from "./reader.guard";
import { MainPageComponent } from "./ui/pages/main-page/main-page.component";
import { AccountPageComponent } from "./ui/pages/account/account-page/account-page.component";
import { LibraryPageComponent } from "./ui/pages/library/library-page/library-page.component";
import { SeriesPageComponent } from "./ui/pages/series-page/series-page.component";
import { SeriesDetailsPageComponent } from "./ui/pages/series-details-page/series-details-page.component";
import { PublishersPageComponent } from "./ui/pages/publishers-page/publishers-page.component";
import { PublisherDetailsPageComponent } from "./ui/pages/publisher-details-page/publisher-details-page.component";
import { CharactersPageComponent } from "./ui/pages/characters/characters-page/characters-page.component";
import { CharacterDetailsPageComponent } from "./ui/pages/characters/character-details-page/character-details-page.component";
import { ComicDetailsComponent } from "./ui/pages/comic/comic-details/comic-details.component";
import { ImportPageComponent } from "./ui/pages/library/import-page/import-page.component";
import { DuplicatesPageComponent } from "./ui/pages/library/duplicates-page/duplicates-page.component";
import { UsersPageComponent } from "./ui/pages/admin/users-page/users-page.component";
import { TeamsPageComponent } from "./ui/pages/teams/teams-page/teams-page.component";
import { TeamDetailsPageComponent } from "./ui/pages/teams/team-details-page/team-details-page.component";
import { LocationsPageComponent } from "./ui/pages/locations/locations-page/locations-page.component";
import { LocationDetailsPageComponent } from "./ui/pages/locations/location-details-page/location-details-page.component";
import { StoryArcsPageComponent } from "./ui/pages/story-arcs/story-arcs-page/story-arcs-page.component";

const routes: Routes = [
  { path: "home", component: MainPageComponent },
  {
    path: "account",
    component: AccountPageComponent,
    canActivate: [ReaderGuard]
  },
  {
    path: "comics",
    component: LibraryPageComponent,
    canActivate: [ReaderGuard]
  },
  {
    path: "comics/:id",
    component: ComicDetailsComponent,
    canActivate: [ReaderGuard]
  },
  {
    path: "publishers",
    component: PublishersPageComponent
  },
  {
    path: "publishers/:name",
    component: PublisherDetailsPageComponent
  },
  {
    path: "series",
    component: SeriesPageComponent,
    canActivate: [ReaderGuard]
  },
  {
    path: "series/:name",
    component: SeriesDetailsPageComponent,
    canActivate: [ReaderGuard]
  },
  {
    path: "characters",
    component: CharactersPageComponent
  },
  {
    path: "characters/:name",
    component: CharacterDetailsPageComponent
  },
  {
    path: "teams",
    component: TeamsPageComponent
  },
  {
    path: "teams/:name",
    component: TeamDetailsPageComponent
  },
  {
    path: "locations",
    component: LocationsPageComponent
  },
  {
    path: "locations/:name",
    component: LocationDetailsPageComponent
  },
  {
    path: "stories",
    component: StoryArcsPageComponent
  },
  {
    path: "import",
    component: ImportPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "pages/duplicates",
    component: DuplicatesPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/users",
    component: UsersPageComponent,
    canActivate: [AdminGuard]
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
