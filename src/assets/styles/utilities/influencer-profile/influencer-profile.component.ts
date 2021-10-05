import { Component, OnInit } from '@angular/core';
import { echartOptions } from '@filed-com/filed-lib/lib/graphs-eCharts/models/echart-options.interface';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProgressBarGraph } from '@filed-com/filed-lib/lib/graphs-eCharts/models/progressbar-chart.interface';
import { Posts } from '../../../reporting/models/posts.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-influencer-profile',
	templateUrl: './influencer-profile.component.html',
	styleUrls: ['./influencer-profile.component.scss']
})
export class InfluencerProfileComponent implements OnInit {
	public graphWidthLarge: number = 1800;
	public graphWidthMedium: number = 750;
	public graphWidthSmall: number = 500;
	public graphHeight: number = 300;

	public isAllPlatformsFilterSelected: boolean = true;
	public isInstragramFilterSelected: boolean = false;
	public isYoutubeFilterSelected: boolean = false;
	public isTikTokFilterSelected: boolean = false;

	public lineChart: echartOptions = {
		title: {
			text: 'Impression vs Time',
			left: 'center'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			type: 'category',
			data: ['10', '20', '30', '40', '50']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: ['10', '20', '30', '40', '50'],
				type: 'line',
				smooth: true,
				lineStyle: {
					color: '#4B5FFA',
					width: 4
					// type: 'dashed'
				}
			}
		],
		color: ['#4B5FFA', '#09D8DE', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
		platforms: [
			{
				name: 'Instagram',
				id: 'instagram',
				icon: 'assets/images/social-media-logo/instagram.svg'
			},

			{
				name: 'YouTube',
				id: 'youtube',
				icon: 'assets/images/social-media-logo/youtube.svg'
			},
			{
				name: 'TikTok',
				id: 'tiktok',
				icon: 'assets/images/social-media-logo/tiktok.svg'
			}
		]
	};

	public horizontalBarChart: echartOptions = {
		title: {
			text: 'Percentage vs Country',
			left: 'center'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01]
		},
		yAxis: {
			type: 'category',
			data: ['India', 'UK', 'US', 'Germany', 'Other']
		},
		series: [
			{
				name: '2021',
				type: 'bar',
				data: ['10', '20', '30', '40', '50']
			}
		],
		color: ['#2585FE', '#09D8DE', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
		platforms: [
			{
				name: 'Instagram',
				id: 'instagram',
				icon: 'assets/images/social-media-logo/instagram.svg'
			},

			{
				name: 'YouTube',
				id: 'youtube',
				icon: 'assets/images/social-media-logo/youtube.svg'
			},
			{
				name: 'TikTok',
				id: 'tiktok',
				icon: 'assets/images/social-media-logo/tiktok.svg'
			}
		]
	};

	public pieChart: echartOptions = {
		title: {
			text: 'Percentage vs Gender',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: 'Percentage vs Gender',
				type: 'pie',
				radius: '50%',
				data: [
					{ value: 60, name: 'Male' },
					{ value: 30, name: 'Female' },
					{ value: 2.9200000000000004, name: 'Unknown' }
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		],
		color: ['#2585FE', '#09D8DE', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
		platforms: [
			{
				name: 'Instagram',
				id: 'instagram',
				icon: 'assets/images/social-media-logo/instagram.svg'
			},

			{
				name: 'YouTube',
				id: 'youtube',
				icon: 'assets/images/social-media-logo/youtube.svg'
			},
			{
				name: 'TikTok',
				id: 'tiktok',
				icon: 'assets/images/social-media-logo/tiktok.svg'
			}
		]
	};

	public progressbarChart: ProgressBarGraph = {
		graphDetails: [
			{
				name: 'usa',
				width: 40,
				backgroundColor: '#2585FE'
			},
			{
				name: 'usa',
				width: 50,
				backgroundColor: '#09D8DE'
			},
			{
				name: 'usa',
				width: 60,
				backgroundColor: '#DC3445'
			},
			{
				name: 'usa',
				width: 70,
				backgroundColor: '#FFC12F'
			},
			{
				name: 'usa',
				width: 80,
				backgroundColor: '#0064E2'
			}
		],
		platforms: [
			{
				name: 'Instagram',
				id: 'instagram',
				icon: 'assets/images/social-media-logo/instagram.svg'
			},

			{
				name: 'YouTube',
				id: 'youtube',
				icon: 'assets/images/social-media-logo/youtube.svg'
			},
			{
				name: 'TikTok',
				id: 'tiktok',
				icon: 'assets/images/social-media-logo/tiktok.svg'
			}
		]
	};

	public isSpinnerLoading: boolean = true;
	public posts: Posts[] = [
		{
			media_url: 'https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320',
			likes: 5000,
			comments: 1000
		},
		{
			media_url:
				'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
			likes: 230000,
			comments: 10000000
		},
		{
			media_url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg',
			likes: 10000,
			comments: 10000
		},

		{
			media_url:
				'https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/blue-morpho-350x150-matthiasfr-pixabay-crop.jpg?itok=Y8DXROpH',
			likes: 5000,
			comments: 1000
		},

		{
			media_url: 'https://assets.weforum.org/community/image/7TIt0OZ7hNUP1TNJrHHQOCriP9rSR4d9toQR7EB2gU8.jpg',
			likes: 5345500,
			comments: 10990
		},

		{
			media_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvjD2CimTjRuPMRx1PbMLEBB3wWSBrAnzuw&usqp=CAU',
			likes: 5243530,
			comments: 100088
		}
	];

	public xxlBreakpoint = false;
	public xlBreakpoint = false;
	public lgBreakpoint = false;

	public unsubscriber$ = new Subject();

	constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.getBrowserBreakpoints();
	}

	public toogleAllPlatformsFilter(): void {
		this.isAllPlatformsFilterSelected = !this.isAllPlatformsFilterSelected;
	}

	public toogleInstagramFilter(): void {
		this.isInstragramFilterSelected = !this.isInstragramFilterSelected;
		this.isAllPlatformsFilterSelected = false;
	}

	public toogleYoutubeFilter(): void {
		this.isYoutubeFilterSelected = !this.isYoutubeFilterSelected;
		this.isAllPlatformsFilterSelected = false;
	}

	public toogleTiktokFilter(): void {
		this.isTikTokFilterSelected = !this.isTikTokFilterSelected;
		this.isAllPlatformsFilterSelected = false;
	}

	public getFilteredPosts(): void {}

	public resetFilters(): void {
		this.isAllPlatformsFilterSelected = true;
		this.isInstragramFilterSelected = false;
		this.isYoutubeFilterSelected = false;
		this.isTikTokFilterSelected = false;
	}

	public getBrowserBreakpoints(): void {
		this.breakpointObserver
			.observe(['(min-width: 71.875rem)'])
			.pipe(takeUntil(this.unsubscriber$))
			.subscribe((state: BreakpointState) => {
				if (state.matches) {
					this.lgBreakpoint = true;
					this.graphWidthSmall = 450;
				} else {
					this.lgBreakpoint = false;
				}
			});

		this.breakpointObserver
			.observe(['(min-width: 85.375rem)'])
			.pipe(takeUntil(this.unsubscriber$))
			.subscribe((state: BreakpointState) => {
				if (state.matches) {
					this.xlBreakpoint = true;
					this.graphWidthSmall = 530;
				} else {
					this.xlBreakpoint = false;
				}
			});

		this.breakpointObserver
			.observe(['(min-width:  120rem)'])
			.pipe(takeUntil(this.unsubscriber$))
			.subscribe((state: BreakpointState) => {
				if (state.matches) {
					this.xxlBreakpoint = true;
					this.graphWidthSmall = 450;
				} else {
					this.xxlBreakpoint = false;
				}
			});
	}

	public navigateToDiscovery(): void {
		this.router.navigate(['/influencer/discovery']);
	}
}
