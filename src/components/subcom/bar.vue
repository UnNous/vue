<template>
<div class="hello">
	<Menu mode="horizontal" class="RowClass" theme="light" active-name="1"  @on-select="back">
		<Row style="" type="flex" justify="end">
			<Col :md="{span: 2,push: 0 }" :xs="{span: 1,push: 0 }">
				111
			</Col>
			
			<Col :md="{span: 8,offset:8,pull: 0 }" :xs="{span: 23,push: 0 }">
			    <MenuItem name="/test">
					<Icon type="ios-people"></Icon>
					用户管理
			    </MenuItem>
			    <MenuItem :name="-1">
			    	<Icon type="ios-undo-outline"></Icon>
					返回
			    </MenuItem>
			</Col>
		</Row>
	    
	</Menu>
</div>

</template>

<script>
// 引入文件位置
// import xx from ''
export default {
	name: 'hello',
	data() {
		return {
			
		}
	},
	methods: {
		back(param){
			if(param == -1){
				this.$router.go(param)
			}else{
				this.$router.push({path:param})
			}
			console.log(param)
			
		}
	}
	
}
</script>

<style scoped>
.hello{

}
.RowClass{
	width:100%;
}
</style>