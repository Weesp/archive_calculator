Vue.component('block-calc', {
    template: `
        <div>
            <div class="page-calc__block" :id="'item-'+item.id">
                <div class="page-calc__left">
                    <fieldset-calc 
                        :index="index" 
                        :inputs='item.inputs' 
                        :block_id="item.id" 
                        @addrows="addrows($event)"
                        @delrows="delrows($event)"
                    ></fieldset-calc>
                </div>
                <div class="page-calc__right">
                    <span class="page-calc__rightText">Требуемый объем дискового пространства</span>
                    <span class="page-calc__rightBold"><b> {{calculateElements.disk_space}} <span>Тб</span></b></span>
                </div>
            </div>
            
        </div>
    `,
    props: ['block_id','index'],
    data() {
        return{
            item:{
                id: this.block_id, 
                inputs: {
                    deep: {
                        label: "Глубина архива",
                        type: "number",
                        class: "input page-calc__input",
                        sort: 10,
                        unit: "дней",
                        value: "",
                        name: "deep",
                        regular: '\d{0,5000}',
                    },
                    resolution: {
                        label: "Разрешения камер",
                        type: "select",
                        disabled: false,
                        class: "select",
                        sort: 20,
                        unit: "",
                        selected: "Выберите значение",
                        name: "resolution",
                        options: [
                            {
                                value: "Выберите значение",
                                text: "Выберите значение",
                                disabled: true,
                                selected: "selected",
                            },
                            {
                                value: 1,
                                text: "1 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 1.3,
                                text: "1.3 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 2,
                                text: "2 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 3,
                                text: "3 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 4,
                                text: "4 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 5,
                                text: "5 Мп",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 8,
                                text: "8 Мп",
                                disabled: false,
                                selected: "",
                            },
                        ],
                    },
                    quantity: {
                        label: "Количество камер",
                        type: "number",
                        class: "input page-calc__input",
                        sort: 30,
                        unit: "",
                        value: "",
                        name: "quantity",
                    },
                    type_codec: {
                        label: "Тип кодека",
                        type: "select",
                        disabled: false,
                        class: "select",
                        sort: 40,
                        unit: "",
                        selected: "Выберите значение",
                        name: "type_codec",
                        options: [
                            {
                                value: "Выберите значение",
                                text: "Выберите значение",
                                disabled: true,
                                selected: "selected",
                            },
                            {
                                value: "H.264",
                                text: "H.264",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: "H.264+",
                                text: "H.264+",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: "H.265",
                                text: "H.265",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: "H.265+",
                                text: "H.265+",
                                disabled: false,
                                selected: "",
                            },
                        ],
                    },
                    type_record: {
                        label: "Тип записи",
                        type: "select",
                        disabled: false,
                        class: "select",
                        sort: 50,
                        unit: "",
                        selected: "Выберите значение",
                        name: "type_record",
                        options: [
                            {
                                value: "Выберите значение",
                                text: "Выберите значение",
                                disabled: true,
                                selected: "selected",
                            },
                            {
                                value: "Постоянная",
                                text: "Постоянная",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: "По движению",
                                text: "По движению",
                                disabled: false,
                                selected: "",
                            },
                        ]
                    },
                    speed_record: {
                        label: "Скорость записи",
                        type: "number",
                        class: "input page-calc__input",
                        sort: 70,
                        unit: "к/с",
                        value: "",
                        name: "speed_record",
                    },
                    percent_motion: {
                        label: "Процент движения в сутки",
                        type: "select",
                        disabled: 'true',
                        class: "select",
                        sort: 80,
                        unit: "",
                        selected: "Выберите значение",
                        name: "percent_motion",
                        options: [
                            {
                                value: "Выберите значение",
                                text: "Выберите значение",
                                disabled: true,
                                selected: "selected",
                            },
                            {
                                value: 0,
                                text: "0%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 10,
                                text: "10%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 20,
                                text: "20%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 30,
                                text: "30%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 40,
                                text: "40%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 50,
                                text: "50%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 60,
                                text: "60%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 70,
                                text: "70%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 80,
                                text: "80%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 90,
                                text: "90%",
                                disabled: false,
                                selected: "",
                            },
                            {
                                value: 100,
                                text: "100%",
                                disabled: false,
                                selected: "",
                            },
                        ],
                    },
                },
            },
            matrix: {
                1: { 'H.264': 2, 'H.264+': 1.4, 'H.265': 2, 'H.265+': 1.4 },
                1.3: { 'H.264': 2.6, 'H.264+': 1.82, 'H.265': 2.6, 'H.265+': 1.82 },
                2: { 'H.264': 4, 'H.264+': 2.8, 'H.265': 3.2, 'H.265+': 2 },
                3: { 'H.264': 6, 'H.264+': 4.2, 'H.265': 4.8, 'H.265+': 3 },
                4: { 'H.264': 8, 'H.264+': 5.6, 'H.265': 4.8, 'H.265+': 3.2 },
                5: { 'H.264': 13, 'H.264+': 10.5, 'H.265': 8.5, 'H.265+': 5.8 },
                8: { 'H.264': 16, 'H.264+': 11.2, 'H.265': 9.6, 'H.265+': 6.4 },
            },
            default_const: 'Выберите значение',
        }
    },
    watch: {
        item: {
            handler(val){
                if(this.disk_space != 0){
                    this.$emit('objectupgrade', {item:val, index:this.index, calculateElements:this.calculateElements});
                }
                
            },
            deep: true
        },
    },
    methods:{
        addrows(prop){
            this.$emit('addrows', prop);
        },
        delrows(prop){
            this.$emit('delrows', prop);
        }
    },
    computed:{
        calculateElements(){
            let tmp_required_amount_disk = 0;
			let tmp_percent_of_record = 0;
            let tmp_value_matrix = 0;
            let tmp_total_bitrate = 0;
            
            if(this.item.inputs.type_record.selected!=this.default_const){
                if(this.item.inputs.type_record.selected == "Постоянная"){
                    tmp_percent_of_record = 100/100;
                }else if( this.item.inputs.type_record.selected == "По движению" && this.item.inputs.percent_motion.selected!=this.default_const){
					tmp_percent_of_record = this.item.inputs.percent_motion.selected/100;
				}
            }
            if(this.item.inputs.resolution.selected!=this.default_const && this.item.inputs.type_codec.selected!=this.default_const){
                tmp_value_matrix = this.matrix[this.item.inputs.resolution.selected][this.item.inputs.type_codec.selected];
            }
            if( tmp_value_matrix 
                && parseFloat(this.item.inputs.deep.value)
                && parseFloat(this.item.inputs.quantity.value)
                && parseFloat(tmp_percent_of_record)
                && parseFloat(this.item.inputs.speed_record.value)
            ){
                // определяем Требуемый объем дискового пространства
                tmp_required_amount_disk = parseFloat(this.item.inputs.deep.value)
                                        * parseFloat(this.item.inputs.quantity.value)
                                        * parseFloat(tmp_percent_of_record)
                                        * parseFloat(tmp_value_matrix/8/1024/1024)
                                        * parseFloat(this.item.inputs.speed_record.value/25*60*60*24);
                
                tmp_total_bitrate = parseFloat(this.item.inputs.quantity.value)
                                        * parseFloat(tmp_value_matrix)
                                        * parseFloat(this.item.inputs.speed_record.value/25);
            }
            return {disk_space:tmp_required_amount_disk.toFixed(2),bitrate:tmp_total_bitrate.toFixed(2)};
        }
    }
});
Vue.component('fieldset-calc', {
    template: `
        <div>
            <fieldset class="page-calc__item" v-for="(input, input_key) in inputs">
                <label class="page-calc__label"><b class="darkBlue">{{input.label}}</b>{{input.unit ? ', '+input.unit : ''}}</label>
                <input 
                    v-if="input.type == 'text' || input.type == 'number'" 
                    v-model="input.value" 
                    :class="input.class" 
                    :type="input.type" 
                    :name="input.name+'['+input_key+']'"
                >
                <div v-else-if="input.type == 'select'" class="selectInner page-calc__selectInner">
                    <select v-model="input.selected" :disabled="input.disabled" :class="input.class" :name="block_id+'_field_'+input_key">
                        <option 
                            v-for="(option, option_key) in input.options" 
                            :value="option.value" 
                            :disabled="option.disabled" 
                            :selected="option.selected" 
                        >{{option.text}}</option>
                    </select>
                    <i class="triangle selectTriangle"></i>
                </div>
            </fieldset>
            <fieldset class="page-calc__item mb0">
                <span class="page-calc__remove" @click="delRow(index)"><i class="page-calc__circle">-</i> Удалить группу</span>
                <span class="page-calc__add" @click="addRow"><i class="page-calc__circle">+</i> Добавить группу</span>
            </fieldset>
        </div>
    `,
    props: ['inputs', 'block_id', 'index'],
    watch: {
        inputs: {
            handler(val){
                if(val.type_record.selected == "По движению"){
                    val.percent_motion.disabled = false;
                }else{
                    val.percent_motion.disabled = true;
                }
            },
            deep: true
        },
    },
    methods: {
        addRow() {
            this.$emit('addrows', {index:this.index,id:this.block_id});
        },
        delRow(indexRow) {
            this.$emit('delrows', indexRow);
        },
    },
});

var rvi_calcArch = new Vue({
    el: "#calcArch_vzone",
    data: {
        items: [{
            block_id: 1,
            disk_space: 0,
            bitrate: 0,
            item: {},
        }],
        range: 0,
    },
    methods: {
        itemsUp(input){
            //console.log(input.disk_space);
            this.items[input.index].block_id = input.item.id;
            this.items[input.index].disk_space = input.calculateElements.disk_space;
            this.items[input.index].bitrate = input.calculateElements.bitrate;
            this.items[input.index].item = input.item;
        },
        addrows(params){
            this.items.push({
                block_id: params.id+1, 
                disk_space: 0,
                bitrate: 0,
                item: {},
            });
        },
        delrows(index) {
            if(this.items.length > 1){
                if (confirm("Вы действительно хотите удалить группу расчета?")){
                    this.items.splice(index, 1);
                }
            }else{
                console.log("error: Удаление невозможно - достигнуто минимальное количество элементов.");
            }
        },
        allReset() {
            this.items = [{
                block_id: 1,
                disk_space: 0,
                bitrate:0,
                item: {},
            }];
            return false;
        }
    },
    computed: {
        summSpaceDisk(){
            let summSpace = 0;
            for(var key in this.items){
                if(this.items[key].disk_space!=0){
                    summSpace += +this.items[key].disk_space;
                }
            }
            return summSpace.toFixed(2);
        },
        summBitrate(){
            let summBit = 0;
            for(var key in this.items){
                if(this.items[key].bitrate!=0){
                    summBit += +this.items[key].bitrate;
                }
            }
            console.log(summBit);
            return (summBit*(this.range/100+1)).toFixed(2);
        },
        styleRange(){
            return this.range+'%';
        },
    },
    watch: {
        
    }
});