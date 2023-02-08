<template>
	<div class="pDetails">
		<div class="profile-details">
			<div class="profile-content">
				<img src="./Images/user.jpeg" alt="profileImg">
			</div>
			<div class="name-job">
				<div class="profile_name">Rishang Jain</div>
				<div class="job">Founder</div>
			</div>
		</div>
		<div class="profileInfo"> 
			<h4>Patient Info</h4>
			<table class="table">
				<thead>
					<th>
						<small> <i class="fa-solid fa-envelope"></i> Email :</small>
					</th>
					<th>
						<small> <i class="fa-solid fa-phone"></i> Phone :</small>
					</th>
					<th>
						<small><i class="fa-solid fa-cake"></i> Date of Birth :</small>
					</th>
					<th>
						<small><i class="fa-solid fa-location"></i> Pincode :</small>
					</th>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table><hr>
			<table class="table">
				<thead>
					<th>
						<small><i class="fa-solid fa-user"></i> External Doctor :</small>
					</th>
					<th>
						<small><i class="fa-solid fa-user"></i> Internal Doctor :</small>
					</th>
					<th>
						<small> <i class="fa-solid fa-user"></i> Affliate Clinic : </small>
					</th>
					<th>
						<small> <i class="fa-solid fa-user"></i> User Status :</small>
					</th>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div><br>
	<div>
		<div class="container">
			<div class="progress">
				<div class="percent"></div>
			</div>
			<div class="steps">
				<div class="step selected" id="0" @click="this.$router.push({ path: `/PatientDetails` })"> <span>&#10003;</span> Patient Details</div>
				<div class="step" id="1" @click="this.$router.push({ path: `/PatientGallery` })"> <span>&#10003;</span>  Patient Gallery</div>
				<div class="step" id="2" @click="this.$router.push({ path: `/PatientScanFiles` })"><span>&#10003;</span> Scan Files</div>
				<div class="step" id="3" @click="this.$router.push({ path: `/PatientCaseDetails` })"><span>&#10003;</span>Case Details</div>
				<div class="step" id="4" @click="this.$router.push({ path: `/PatientTreatmentPlan` })"><span>&#10003;</span>Treatment Plan </div>
				<div class="step" id="5" @click="this.$router.push({ path: `/PatientTreatmentTracker` })"><span>&#10003;</span>  Treatment Tracker</div>
				<div class="step" id="6" @click="this.$router.push({ path: `/PatientAppointment` })"> <span>&#10003;</span> Appointment</div>
				
			</div>
		</div>
	</div>
	<router-view></router-view>
</template>

<style scoped>
.table{
  font-family: arial, sans-serif;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border: none;
}
.table td , .table th{
	border: none;
	border-right: 1px solid #fff;
}
body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}

.pDetails {
	margin-top: 20px;
	height: 250px;
	width: 100%;
	border: 1px solid rgb(187, 187, 187);
	border-radius: 16px;
}
.profile-details{
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 60px 8px 10px;
  transition: all 0.5s ease;
}
.profile-details img {
	height: 52px;
	width: 52px;
	object-fit: cover;
	border-radius: 16px;
	margin: 0 14px 0 12px;
	background: #1d1b31;
	transition: all 0.5s ease;
}
.profile-details .profile-content{
  display: flex;
  align-items: center;
}
.profile-details .profile_name,
.profile-details .job{
  color: rgb(105, 105, 105);
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
}
.profileInfo{
	color: #fff;
}
.container {
	width: 100%;
	transform: translate(-1%, -1%);
}

.steps {
	position: relative;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-bottom: 20px;
}

.step {
	width: 14%;
	height: 40px;
	margin-left: 20px;
	background: #fff;
	padding-top: 11px;
	border: 2px solid #ACACA6;
	border-radius: 5%;
	transition: background 2s;
	border-radius: 35px;
	font-size: 70%;
}

.step.selected {
	border: 2px solid #151324;
	background: #3e3c63;
	color: white;
}
span{display: none;}
.step.completed span{
	display: inline;
	font-size: 22px;
	color: rgb(17, 245, 17);
}
.step.completed {
	border: 2px solid #141322;
	background: #272541;
	color: white;
	padding-top: 0px;

}

.progress {
    position: absolute;
    left: 40px;
    top: 20px;
    width: 93%;
    height: 10%;
    z-index: -1;
}

.percent {
	position: absolute;
	width: 0;
	height: 100%;
	border-bottom: 10px solid #141322;
	z-index: 1;
	transition: width 0.5s;
}
 router-view{
	margin: 10px;
}
</style>

<script>

export default {
	mounted(){
		
		this.$router.push({ path: `/PatientDetails` })
		let els = document.getElementsByClassName('step');
		let steps = [];
		Array.prototype.forEach.call(els, (e) => {
			steps.push(e);
			e.addEventListener('click', (x) => {
				progress(x.target.id);
			});
		});

		function progress(stepNum) {
			let p = stepNum * 15;
			document.getElementsByClassName('percent')[0].style.width = `${p}%`;
			steps.forEach((e) => {
				if (e.id === stepNum) {
					e.classList.add('selected');
					e.classList.remove('completed');
				}
				if (e.id < stepNum) {
					e.classList.add('completed');
				}
				if (e.id > stepNum) {
					e.classList.remove('selected', 'completed');
				}
			});
		}
			
	}
}
		

</script>

