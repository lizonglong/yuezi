命名规范

    ##### index

    ##### about  关于仕馨

        about_list  关于下拉



    ##### service  专业服务体系

        service_tend   新生儿健康护理

	##### Branch 分店介绍

		yunShan 云山店

	##### professionalSystem 专业服务体系

		careSystem 新生儿健康护理

		HealthCare 中医保健调理

		rehabilitationSystem 产后妈妈康复体系

		nutritionSystem 母婴专业营养体系

		plasticBeauty 产后妈妈塑性美丽

		intelligenceDevelopment 新生儿早期智力开发

		defenseSystem 立体式院感防御体系

		securitySystem 全天候无缝安保体系

	#### package 套餐服务

	#### problem 常见问题分类文章页

	#### comment 妈妈见证

	#### article 文章页

	#### news 月子资讯

	#### newsclassify 月子资讯分类文章页

	#### back  头部返回


####模块

  首页下拉    module_downList




  先用模块开发  >>  套到vue.js里面





<!-- 上传注意事项 -->
使用手机Samusng Galaxy Note3 360*640
使用rem



如何共享上一次的项目文件↓
1，打开东哥的项目 网址：https://github.com/youzhidong/git_home


2，Clone with HTTPS （绿色按钮）克隆项目HTTPS地址


3，新建一个文件夹！！！
	注意！！！
	注意！！！
	注意！！！
	不要在自己原来的文件夹下使用git克隆，会报错提示相同项目名称！！
	并且不要在项目里面新建文件夹，必需是在项目的外面新建文件夹！！


4，在新建的文件夹下右键，打开git gui here，使用以下命令克隆项目
	git clone https://github.com/youzhidong/git_home.git(项目网址)
	注意！！！
	注意！！！
	注意！！！
	是东哥的项目，不是自己的项目地址！！！！！！不要复制错误


5，下载成功后复制黏贴！不要剪切！！！到自己原来的项目目录下，替代之前的项目文件


6，最重要的一步！！！！！！！！！！！！！！！！！！！！！！！！！！
	下载完成后打开项目
	打开.git隐藏文件夹
	打开config文件
	用sublime打开！！！！！！不要用txt打开！！！！防止出现乱码情况
	config文件如下
	[core]
		repositoryformatversion = 0
		filemode = false
		bare = false
		logallrefupdates = true
		symlinks = false
		ignorecase = true
		hideDotFiles = dotGitOnly
	[remote "origin"]
		url = https://github.com/lgw277216/noTwoGroup.git
		（！！！！！！！！！！！！！！！！！！！！！！！！！！！）
		（最主要修改的是URL的网址，刚下载的是东哥的网址，这是修改过后的，自己的项目网址，网址在自己的github的项目库里clone自己的项目网址）
		fetch = +refs/heads/*:refs/remotes/origin/*
	[branch "master"]
		remote = origin
		merge = refs/heads/master
	[gui]
		wmstate = normal
		geometry = 835x475+125+125 185 214

7，完成自己的项目，修改


8，使用git命令上传自己已经修改的项目，流程如下



	git init //初始化一个本地仓库

	git add README.md  
	//添加readme文件（修改后才需要上传，否则不需要）

	git add ./     (//添加所有文件到本地仓库)

	git status //查看本地仓储的变更状态(如果出出红色  代表文件冲突)

	添加git忽略清单 哪些文件不用被管理(新建.gitignore文件)

	git pull origin master //把文本拉到本地
	（最重要的是这行代码，必须把文件拉到本地才可以！！！！！！！）

	git commit -m "first commit" //添加注释（把本地“全部”文件的变化提交到本地仓库存档）

	git push -u origin master//上传到github

9,到自己的github查看项目是否成功提交，最后点击new pull request给东哥，等待审核