/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2018, The ComiXed Project
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
 * along with this program. If not, see <http://www.gnu.org/licenses>
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-comic-scraping',
  templateUrl: './multiple-comic-scraping.component.html',
  styleUrls: ['./multiple-comic-scraping.component.scss']
})
export class MultipleComicScrapingComponent implements OnInit {
  @Input() multi_scraping: any;

  constructor() {}

  ngOnInit() {}

  comic_scraped(): void {}
}
