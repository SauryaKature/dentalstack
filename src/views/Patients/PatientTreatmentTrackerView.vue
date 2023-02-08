<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="createNewTreatment">New
                    Treatment</a>
            </li>
            <li class="nav-item">


            </li>
        </ul>
    </div>
    <div class="newTreatment" id="newTreatment">
        <div class="row">
            <div class="treatmentplan">
                <div>
                    <label for="">Number of Aligners</label><br>
                    <input type="number" placeholder="Number of Aligner" @change="createAlignerRow($event)"
                        v-model="nAligner">
                </div>
                <div>
                    <label for="">Number of Days</label><br>
                    <input type="number" placeholder="Number of Days" @change="dayAligner($event)" v-model="days">
                </div>
                <div>
                    <label for="">Type of Aliner's</label><br>
                    <button class="btn" @click="setAll($event)" value="Both">Both</button>
                    <button class="btn" @click="setAll($event)" value="Upper">Upper</button>
                    <button class="btn" @click="setAll($event)" value="Lower">Lower</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Aligner</th>
                            <th>Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Aligner Days</th>
                            <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tracker, index) in tracker" :key="index">
                            <td>{{ "Aligner " +(index + 1) }}</td>
                            <td>
                                <span style="display: none;">{{ type = tracker.alignerType }}</span>
                                <select name="" id="" class="dropdown" v-model="type">
                                    <option value="Upper">Upper</option>
                                    <option value="Both">Both</option>
                                    <option value="Lower">Lower</option>
                                </select>
                            </td>
                            <td>
                                <span style="display: none;">{{ start = convert(tracker.startDate) }}</span>
                                <input type="date" id="startdate" v-model="start" @change="startDateChange($event, index)">
                            </td>
                            <td>
                                <span style="display: none;"> {{ end = convert(tracker.endDate) }}</span>
                                <input type="date" id="enddate" v-model="end" @change="endDateChange($event, index)">
                            </td>
                            <td>
                                <span style="display: none;"> {{ day = differenceDays(tracker.startDate, tracker.endDate) }}</span>
                                <input type="number" name="" id="" v-model="day">                               
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <button class="btn btn-success pull-right" id="button" onclick="createNewTreatment()">Save</button>
    </div>
</template>

<script>
const miles = []
import axios from 'axios'
export default {

    data() {
        return {
            tracker: [

            ],

        }
    },
    methods: {
        createNewTreatment() {
            let div = document.createElement('div');
            div.innerText = document.getElementById('newTreatment').innerText;
            document.body.appendChild(div);
        },
        createAlignerRow(e) {
            localStorage.setItem('aligner',e.target.value)
        },
        dayAligner(e) {
            localStorage.setItem('day', e.target.value)
        },
        setAll(e) {
            let day = parseInt(localStorage.getItem('day'));
            console.log(day);
            let aligner = parseInt(localStorage.getItem('aligner'));
            let type = e.target.value;
            localStorage.setItem('type', type)
            let start = new Date()
            console.log(start);
            let end = new Date()
            end.setDate(start.getDate() + day);
            let endFirst = new Date();
            endFirst.setDate(start.getDate() + day);
            console.log(endFirst);
            miles[0] = {
                startDate: new Date(),
                endDate: endFirst,
                alignerType: type,
                alignerDay: day
            }
            for (let i = 1; i < aligner; i++) {
                miles[i] = {
                    startDate: new Date(start.setDate(start.getDate() + day + 1)),
                    endDate: new Date(end.setDate(end.getDate() + (day + 1))),
                    alignerType: type,
                    alignerDay: day
                }
            }
            // eslint-disable-next-line
            this.tracker = miles;
            console.log(this.tracker);

        },
        convert(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        },
        startDateChange(e, j){
            let day = parseInt(localStorage.getItem('day'));
            let aligner = parseInt(localStorage.getItem('aligner'));
            let type = localStorage.getItem('type')
            let date = e.target.value;
           
            let startforEnd = new Date(date)
            let started = new Date(date)
            let end = new Date(date)
            end.setDate(end.getDate() + day);
            let endFirst = new Date(date);
            endFirst = endFirst.setDate(endFirst.getDate() + day);
            this.tracker[j] = {
                startDate: started,
                endDate: endFirst,
                alignerType: type,
                alignerDay: day
            }
            for (var i = j+1 ; i < aligner; i++) {
                this.tracker[i] = {
                    startDate: new Date(startforEnd.setDate(end.getDate() + 1)),
                    endDate: new Date(end.setDate(startforEnd.getDate()+day)),
                    alignerType: type,
                    alignerDay: day
                }
            }
        },
        endDateChange(e , j){
            let day = parseInt(localStorage.getItem('day'));
            let aligner = parseInt(localStorage.getItem('aligner'));
            let type = localStorage.getItem('type')
            let date = e.target.value;
            let end = new Date(date)
            let endFirst = new Date(date)
            let start = new Date(date)
            this.tracker[j] = {
                startDate : this.tracker[j].startDate,
                endDate: endFirst,
                alignerType: type,
                alignerDay: day
            }
            for (var i = j+1 ; i < aligner; i++) {
                this.tracker[i] = {
                    startDate: new Date(start.setDate(end.getDate()  + 1)),
                    endDate: new Date(end.setDate(start.getDate() + day )),
                    alignerType: type,
                    alignerDay: day
                }
            }
        },
        differenceDays(start, end){
            var diff = new Date(end.getTime() - start.getTime());
            return diff.getUTCDate() - 1
        },
        async upload() {
            let result = await axios.post("http://localhost:8080/saveTreatementTracker", {
                aligners: this.aligners,
                daysForAligner: this.daysForAligner,
                milestones: this.milestones,
                alingerTypes: this.alingerTypes,
                startDate: this.startDate,
                endDate: this.endDate,
            });

            console.warn(result);
            if (result.status == 201) {
                alert("sign_up succesfully");
                localStorage.setItem("user_info", JSON.stringify(result.data));
            }
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
.treatmentplan {
    margin: 40px;
    display: flex;
    justify-content: space-evenly;
    color: #fff;
}

.btn {
    width: 180px;
    height: 40px;
    background-color: rgb(39, 26, 51);
    color: white;
    border-color: rgb(55, 35, 73);
    border-radius: 5px;
}

input {
    background: transparent;
    color: #fff;
    border: 1px solid rgb(68, 64, 95);
    width: 300px;
    border-radius: 10px;
    height: 40px;
    text-align: center;
}

input :focus {
    background: transparent;
}

label {
    text-align: left;
}

#button {
    position: relative;
    left: 80%;
}

.btn:hover {
    box-shadow: 1px 1px 8px #777777;
}

.table {
    color: #fff
}

.table thead {
    background: #11101d;
}

.dropdown {
    background: transparent;
    border: 1px solid #666464;
    color: #fff;
}
</style>