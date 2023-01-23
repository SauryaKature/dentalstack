<template>
  <html lang="en" dir="ltr">

  <head>
    <meta charset="UTF-8">
    <title> </title>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body>
    <div class="sidebar close">
      <div class="logo-details">
        <!-- <i class='bx bxl-c-plus-plus'></i> -->
        <span class="logo_name"><img src="../assets/logo.png"
            style="height: 50px; filter: invert(); position: relative; top: 20px; left: 30px;" alt=""></span>
      </div>
      <ul class="nav-links">
        <li>
          <button>
            <img src="../assets/Icons/home.png" alt="" class="icons">
            <router-link to="Dashboard" class="link_name">Dashboard</router-link>
          </button>
          <ul class="sub-menu blank">
            <li><button class="link_name"><router-link class="sidelist" to="Dashboard">Dashboard</router-link> </button>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <img src="../assets/Icons/mass-production.png" alt="" class="icons">
            <router-link to="Production" class="link_name">Production</router-link>
          </button>
          <ul class="sub-menu blank">
            <li><button class="link_name"><router-link class="sidelist" to="Production">Production</router-link>
              </button></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <button >
              <img src="../assets/Icons/Admin.gif" alt="" class="icon">
              <b class="link_name">Admin</b>
            </button>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><button class="link_name"><router-link class="sidelist" to="#">Admin</router-link></button></li>
            <li><button><router-link to="AdminRegister" class="dropdown-containt">Admin Registration</router-link></button></li>
            <li><button><router-link to="AdminList" class="dropdown-containt">Admin List</router-link></button></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <button >
              <img src="../assets/Icons/Business.gif" alt="" class="icon">
              <b class="link_name">Business</b>
            </button>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><button class="link_name"><router-link class="sidelist" to="#">Business</router-link></button></li>
            <li><button><router-link to="AdminRegister" class="dropdown-containt">Business Registration</router-link></button></li>
            <li><button><router-link to="AdminList" class="dropdown-containt">Business List</router-link></button></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <button>
              <img src="../assets/Icons/DoctorIcon.gif" alt="" class="icon">
              <span class="link_name">Doctors</span>
            </button>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><button class="link_name"><router-link class="sidelist" to="#">Doctors</router-link></button></li>
            <li><button><router-link to="DoctorRegister" class="dropdown-containt">Doctors
                  Registration</router-link></button></li>
            <li><button><router-link to="DoctorList" class="dropdown-containt">Doctors List</router-link></button></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <button>
              <img src="../assets/Icons/ClinicIcon.gif" alt="" class="icon">
              <span class="link_name">Clinics</span>
            </button>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><button class="link_name"><router-link class="sidelist" to="#">Clinics</router-link></button></li>
            <li><button><router-link to="ClinicRegister" class="dropdown-containt">Clinic
                  Registration</router-link></button></li>
            <li><button><router-link to="ClinicList" class="dropdown-containt">Clinics List</router-link></button></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <button>
              <img src="../assets/Icons/patient.png" alt="" class="icons">
              <span class="link_name">Patients</span>
            </button>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><button class="link_name"><router-link class="sidelist" to="#">Patients</router-link></button></li>
            <li><button><router-link to="PatientRegister" class="dropdown-containt">Patient
                  Registration</router-link></button></li>
            <li><button><router-link to="PatientList" class="dropdown-containt">Patients List</router-link></button>
            </li>
          </ul>
        </li>

        <li>
          <div class="profile-details">
            <div class="profile-content">
              <img src="../assets/user.jpeg" alt="profileImg">
            </div>
            <div class="name-job">
              <div class="profile_name">Rishang Jain</div>
              <div class="job">Founder</div>
            </div>
            <i class='bx bx-log-out'></i>
          </div>
        </li>
      </ul>
    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu' @click="open()" style="color: white;"></i>
        <img src="../assets/logo.png" style="height: 50px; filter: invert();" alt="">
      </div>
      <hr style="color: white;">
      <article>
        <router-view></router-view>
      </article>
    </section>
  </body>

  </html>
</template>

<script>
export default {
  mounted(){
        if (this.$router === `/`) {
          this.$router.push({path:`/Dashboard`})
        }
        let arrow = document.querySelectorAll(".arrow");
      for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
          let arrowParent = e.target.parentElement.parentElement;
          arrowParent.classList.toggle("showMenu");
          console.log("is this present at this movement")
        });
      }
    },
  methods: {
    open() {
      document.querySelector(".sidebar").classList.toggle("close");
    },
  
  }
}




</script>

<style>
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body, article {
 width: 100%;
 height: 100%;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
  z-index: 100;
  transition: all 0.5s ease;
}

.sidebar.close {
  width: 78px;
}

.image.hi {
  height: 100px;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}

.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}

.sidebar .nav-links li:hover {
  background: #1d1b31;
}

.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.close .nav-links li .iocn-link {
  display: block;

}

.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}

.sidebar.close .nav-links i.arrow {
  display: none;
}

.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

button {
  background-color: transparent;
  color: #fff;
  border: none;
  display: flex;
}

.icon {
  width: 32px;
  filter: invert();
  margin: 10px 20px 6px 20px;
}

.icons {
  width: 25px;
  margin: 15px 20px 7px 20px;
}

.link_name {
  position: relative;
  top: 13px;
}

.sidelist {
  position: relative;
  bottom: 13px;
  color: #fff;
}

.sidebar .nav-links li .sub-menu button:hover #sidelist {
  position: relative;
  bottom: 13px;
  color: #fff;
}

.dropdown-containt {
  color: #fff;
}

.sidebar .nav-links li button .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;

}

.sidebar.close .nav-links li button .link_name {
  opacity: 0;
  pointer-events: none;
  
}

.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 60px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu button {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu button:hover {
  opacity: 1;
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  background-color: #11101d;
  transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 12px 0;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details {
  background: none;
}

.sidebar.close .profile-details {
  width: 78px;
}

.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}

.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details img {
  padding: 10px;
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}

.sidebar .profile-details .job {
  font-size: 12px;
}

.home-section {
  position: relative;
  background: #211f38;;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
  padding: 12px;
}

.sidebar.close~.home-section {
  left: 78px;
  width: calc(100% - 78px);
}

.home-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
}

.home-section .home-content .bx-menu {
  cursor: pointer;
  margin-right: 10px;
}

.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}

@media screen and (max-width: 400px) {
  .sidebar {
    width: 240px;
  }

  .sidebar.close {
    width: 78px;
  }

  .sidebar .profile-details {
    width: 240px;
  }

  .sidebar.close .profile-details {
    background: none;
  }

  .sidebar.close .profile-details {
    width: 78px;
  }

  .home-section {
    left: 240px;
    width: calc(100% - 240px);
 
  }

  .sidebar.close~.home-section {
    left: 78px;
    width: calc(100% - 78px);

  }
}
</style>
