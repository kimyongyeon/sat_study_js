class Member {
    
    constructor() {
        this.name = "";
        this.age = 0;
        this.addr = "";
    }

    viewToModel() {
        this.name = $("#txt_name").val();
        this.age = $("#txt_age").val();
        this.addr = $("#txt_addr").val();
    }

    draw(tbody) {
        
        $tbl_member_list = $("#tbl_member_list tbody ");

        if ($tbl_member_list.length != 0) {
            $tbl_member_list.empty();    
        }
        $tbl_member_list.append(tbody); 
    }

    add () {
        this.viewToModel();
        var tbody = `
            <tr><td>${this.name}</td></tr>
            <tr><td>${this.age}</td></tr>
            <tr><td>${this.addr}</td></tr>
        `;
        this.draw(tbody);
    }

    save () {

    }


}