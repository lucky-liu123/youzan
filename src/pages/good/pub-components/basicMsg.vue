<template>
	<div class="basicMsg">
		<p class="basicMsg_title">基本信息</p>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm basic_msg">
			<el-form-item label="商品名" prop="name" size="small">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="分享描述" size="small">
				<el-input v-model="ruleForm.region"></el-input>
				<p class="tirps">微信分享给好友时会显示，建议36个字以内</p>
			</el-form-item>
			<el-form-item label="商品卖点" size="small">
				<el-input v-model="ruleForm.salegood">

				</el-input>
				<p class="tirps">在商品详情页标题下面展示卖点信息，建议60字以内查看示例</p>
			</el-form-item>
			
			<el-form-item label="商品图片" prop="img">
			<el-upload class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/" 
			:show-file-list="false"
			:on-success="handleSuccess" 
			:before-upload="beforeUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<p class="tirps">建议尺寸：800*800像素，你可以拖拽图片调整顺序，最多上传15张</p>
			</el-form-item>
			
			<el-form-item label="商品视频">
			<el-upload class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/" 
			:show-file-list="false"
			:on-success="handleSuccess" 
			:before-upload="beforeUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<p class="tirps">目前仅支持在手机端播放，建议时长9-30秒，建议视频宽高比16:9</p>
			</el-form-item>
			
			<el-form-item label="商品分组">
			<el-select v-model="value1" placeholder="选择商品分组">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>	
			</el-form-item>
			
			<el-form-item label="商品类目">
			<el-select v-model="value2" placeholder="选择所属商品类目">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<p class="tirps">商品类目及类目细项，<a href="#">点此查看</a></p>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1:'',
				value2:'',
				imageUrl: '',
				ruleForm: {
					name: '',
					region: '',
					salegood: '',
					delivery: false,
					img:'',
				},
				options:[
					{
						label:'实体商品',
						value:'1'
					},
					{
						label:'虚拟商品',
						value:'2'
					},
				],
				
				rules: {
					name: [{
						required: true,
						message: '请输入商品名称',
						trigger: 'blur'
					}, ],
					img:[{
						required: true,
						message: '请上传图片',
						trigger: 'blur'
					}],
					
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			handleSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.basicMsg {
		width: 560px;
	}
	.basicMsg_title{
		margin: 20px auto;
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #444 ;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border: 1px solid #ddd;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
