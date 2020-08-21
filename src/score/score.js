export default {
    name: "scoreIndex",
    data() {
      return {
        
        //项目组别
        options: [
          {
            value: "请选择",
            label: "请选择",
          },
          {
            value: "OA系统组",
            label: "OA系统组",
          },
          {
            value: "规划建设组",
            label: "规划建设组",
          },
          {
            value: "人力系统组",
            label: "人力系统组",
          },
          {
            value: "技术研发组",
            label: "技术研发组",
          },
          {
            value: "内部支撑组",
            label: "内部支撑组",
          },
          {
            value: "平台支撑组",
            label: "平台支撑组",
          },
        ],
        groupName:'',
        //系统名和负责人输入框
        restaurants: [],
        person: [],
        state: "",
        timeout: null,
        stateperson: "",
        timeoutperson: null,
        xq_tijiaoren: [],
        state_xq_tijiaoren: "",
        yl_tijiaoren: [],
        state_yl_tijiaoren: "",
        bg_tijiaoren: [],
        state_bg_tijiaoren: "",
        cc_r: [],
        state_cc_r: "",
        a_csr: [],
        state_a_csr: "",
        b_csr: [],
        state_b_csr: "",
        c_csr: [],
        state_c_csr: "",
        //提测时间
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        ticeshijian: "",
        //版本类型
        type: "常规版本",
        //是否计划内
        plan: "是",
        //版本规模
        input: 0,
        //标签页
        activeName: 'first',
        xq_change: 0,
        activeName: "first",
        xq_tijiao: "是",
        xq_yanchi: "是",
        xq_geshi: "word",
        xq_time: "",
        xq_laiyuan: "是",
        xq_error: "",
        yl_tijiao: "是",
        yl_yanchi: "是",
        yl_geshi: "word",
        yl_time: "",
        yl_bt: 0,
        yl_qz: 0,
        yl_zxr: 0,
        yl_yq: 0,
        yl_bz: 0,
        yl_jg: 0,
        yl_error: "",
        bg_tijiao: "是",
        bg_yanchi: "是",
        bg_geshi: "word",
        bg_time: "",
        bg_error: "",
        bg_qx: 0,
        bg_hj: 0,
        bg_jl: 0,
        bg_fw: 0,
        bg_qk: 0,
        bg_error: "",
        cc_begin: "",
        cc_end: "",
        ccyls: "",
        btgs: "",
        cctgl: "",
        ylzs: "",
        tgs: "",
        ccbl: "",
        zss: "",
        a_begin: "",
        a_end: "",
        a_jieguo: "通过",
        a_tgs: "",
        a_btgs: "",
        a_ylzxgs: "",
        a_zss: "",
        a_tgl: "",
        a_qxs: "",
        b_begin: "",
        b_end: "",
        b_jieguo: "通过",
        b_tgs: "",
        b_btgs: "",
        b_ylzxgs: "",
        b_zss: "",
        b_tgl: "",
        b_qxs: "",
        c_begin: "",
        c_end: "",
        c_jieguo: "通过",
        c_tgs: "",
        c_btgs: "",
        c_ylzxgs: "",
        c_zss: "",
        c_tgl: "",
        c_qxs: "",
      };
    },
  
    methods: {
      
      loadAllsys() {
        return [
        { value: "MOA" }, 
        { value: "OA" }, 
        { value: "云OA" }
        ];
      },
      loadAllperson() {
        return [{ value: "刘玥浩" }, { value: "刘艳松" }, { value: "吴妮婷" },{ value: "蒙菲" },
        { value: "陈雨萌" },
        { value: "陈国栋" },
        { value: "张淼" },
        { value: "马越龙" },
        { value: "王烜" },
        { value: "匡燕" },
        { value: "李凤仪" },
        { value: "张帅" },
        { value: "徐丽娟" },
        { value: "何亚飞" },
        { value: "石岳" },
        { value: "李扬" },
        { value: "李现京" },
        { value: "魏晓丽" },
        { value: "战强" },
        { value: "康楠" },
        { value: "董晨阳" },
        { value: "李晓汇" },
        { value: "殷洵" }
        ];
      },
      loadAlltest_person() {
        return [{ 
          value: "王文" }, 
        { value: "覃优" }, 
        { value: "崔雪梅" },
        { value: "林舒楠" },
        { value: "蒋罗锦" },
        { value: "刘蕾" },
        { value: "卞英松" },
        { value: "郭玉凤" },
        { value: "唐海清" },
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString
          ? restaurants.filter(this.createStateFilter(queryString))
          : restaurants;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (
            state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
          );
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      querySearchPerson(queryString, cb) {
        var person = this.person;
        var results = queryString
          ? person.filter(this.createStateFilter(queryString))
          : person;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (stateperson) => {
          return (
            stateperson.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      handleSelectperson(item) {
        console.log(item);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      querySearchxqtjr(queryString, cb) {
        var xq_tijiaoren = this.xq_tijiaoren;
        var results = queryString
          ? xq_tijiaoren.filter(this.createStateFilter(queryString))
          : xq_tijiaoren;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_xq_tijiaoren) => {
          return (
            state_xq_tijiaoren.value
              .toLowerCase()
              .indexOf(queryString.toLowerCase()) === 0
          );
        };
      },
      handleSelectxqtjr(item) {
        console.log(item);
      },
      querySearchyltjr(queryString, cb) {
        var yl_tijiaoren = this.yl_tijiaoren;
        var results = queryString
          ? yl_tijiaoren.filter(this.createStateFilter(queryString))
          : yl_tijiaoren;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_yl_tijiaoren) => {
          return (
            state_yl_tijiaoren.value
              .toLowerCase()
              .indexOf(queryString.toLowerCase()) === 0
          );
        };
      },
      handleSelectyltjr(item) {
        console.log(item);
      },
      querySearchbgtjr(queryString, cb) {
        var bg_tijiaoren = this.bg_tijiaoren;
        var results = queryString
          ? bg_tijiaoren.filter(this.createStateFilter(queryString))
          : bg_tijiaoren;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_bg_tijiaoren) => {
          return (
            state_bg_tijiaoren.value
              .toLowerCase()
              .indexOf(queryString.toLowerCase()) === 0
          );
        };
      },
      handleSelectbgtjr(item) {
        console.log(item);
      },
      querySearchccr(queryString, cb) {
        var cc_r = this.cc_r;
        var results = queryString
          ? cc_r.filter(this.createStateFilter(queryString))
          : cc_r;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_cc_r) => {
          return (
            state_cc_r.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      handleSelectccr(item) {
        console.log(item);
      },
      querySearcha_csr(queryString, cb) {
        var a_csr = this.a_csr;
        var results = queryString
          ? a_csr.filter(this.createStateFilter(queryString))
          : a_csr;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_a_csr) => {
          return (
            state_a_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      handleSelecta_csr(item) {
        console.log(item);
      },
      querySearchb_csr(queryString, cb) {
        var b_csr = this.b_csr;
        var results = queryString
          ? b_csr.filter(this.createStateFilter(queryString))
          : b_csr;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_b_csr) => {
          return (
            state_b_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      handleSelectb_csr(item) {
        console.log(item);
      },
      querySearchc_csr(queryString, cb) {
        var c_csr = this.c_csr;
        var results = queryString
          ? c_csr.filter(this.createStateFilter(queryString))
          : c_csr;
  
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state_c_csr) => {
          return (
            state_c_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      handleSelectc_csr(item) {
        console.log(item);
      },
    },
  
    mounted() {
      this.restaurants = this.loadAllsys();
      this.person = this.loadAllperson();
      this.xq_tijiaoren = this.loadAllperson();
      this.yl_tijiaoren = this.loadAllperson();
      this.bg_tijiaoren = this.loadAllperson();
      this.cc_r = this.loadAlltest_person();
      this.a_csr = this.loadAlltest_person();
      this.b_csr = this.loadAlltest_person();
      this.c_csr = this.loadAlltest_person();
    },
  };