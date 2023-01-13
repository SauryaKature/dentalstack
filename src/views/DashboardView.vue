<template>
    <div class="main">
        <div class="sub1">
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Business</h5>
                    <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img src="./DahsboardImages/Business.gif" alt="" style="width: 45px;"></span>               
                </div><hr>
                <div class="info">
                   <span> <p>Active Business</p></span>
                   <span> <p>In-Active Business</p></span>
                </div><hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Admin</h5>
                    <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img src="./DahsboardImages/Admin.gif" alt="" style="width: 45px;"></span>               
                </div><hr>
                <div class="info">
                   <span> <p>Active Admin</p></span>
                   <span> <p>In-Active Admin</p></span>
                </div><hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Clinics</h5>
                    <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img src="./DahsboardImages/Clinic.gif" alt="" style="width: 45px;"></span>               
                </div><hr>
                <div class="info">
                   <span> <p>Active Clinics</p></span>
                   <span> <p>In-Active Clinics</p></span>
                </div><hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Doctors</h5>
                    <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img src="./DahsboardImages/Doctor.gif" alt="" style="width: 45px;"></span>               
                </div><hr>
                <div class="info">
                   <span> <p>Active Doctors</p></span>
                   <span> <p>In-Active Doctors</p></span>
                </div><hr>
            </div>
        </div><br>
        <div class="sub2">
            
        </div><br>
        <div class="sub3">
            <div>
                <h5>hIII</h5>
            </div>
            <div>
                <h5>hIII</h5>
            </div>
        </div><br>
        <div class="sub3">
            <div>
                <h5>hIII</h5>
            </div>
            <div>
                <h5>hIII</h5>
            </div>
        </div>
    </div>
</template>

<script>


</script>


<style>
.main {
    width: 100%;
    height: 100%;
    background: #211f38;
}

.sub1,
.sub2,
.sub3 {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}

.sub3 div {
    width: 48%;
    height: 250px;
    border: black 1px solid;
}

.sub1 .box,
.sub2 .box {
    width: 23%;
    height: 250px;
    border: black 1px solid;
    padding: 30px;
    box-sizing: border-box;
}

.box {
    background: rgb(183, 224, 240);
    box-sizing: border-box;
    background: #11101d;
    color: rgb(199, 199, 199);
    border-radius: 10px;
}

.box .content {
    display: flex;
    justify-content: space-between;
}


</style>