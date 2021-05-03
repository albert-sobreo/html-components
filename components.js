// CLASSES FOR CUSTOM ELEMENTS
class ProfileCard extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /*javascript*/`
        <div class="profile-card b-radius-15 box-shadow-medium p-2 border" id="profileCard" style="display: none;">
            <div class="flex flex-column profile-card-container py-2 px-4 b-radius-5 justify-content-center align-items-center border">
                <div class="mb-2">
                    <img class="profile-border b-radius-circle" src="person.png" alt="" height="40" width="40">
                </div>
                <div class="profile-my-name mt-1">
                    <span>Juan Dela Cruz</span>
                </div>
                <div class="profile-my-position">
                    <span>Branch Manager</span>
                </div>
            </div>
            <div class="mt-2 flex flex-column profile-card-container py-2 px-4 b-radius justify-content-center align-items-center border">
                Logout
            </div>
        </div>`;
    }
}

class AppCard extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /*javascript*/`
        <div class="app-card b-radius-15 box-shadow-medium p-3 border" id="appCard" style="display: none;">
            <div class="flex flex-column app-card-links align-items-center justify-content-center mb-2 py-3 px-4 b-radius-10">
                <img src="Dashboard.svg" alt="">
            </div>
            <div class="flex flex-column app-card-links align-items-center justify-content-center my-3 py-3 px-4 b-radius-10">
                <img src="imps.svg" alt="">
            </div>
            <div class="flex flex-column app-card-links align-items-center justify-content-center my-3 py-3 px-4 b-radius-10">
                <img src="GAS.svg" alt="">
            </div>
            <div class="flex flex-column app-card-links align-items-center justify-content-center mt-3 py-3 px-4 b-radius-10">
                <img src="EMS.svg" alt="">
            </div>
        </div>`;
    }
}

class NavbarGAS extends HTMLElement{
    render(){
        this.active = this.getAttribute('active');

        this.innerHTML = /*javascript*/`
        <div class="c-nav d-flex mb-3 font-bold" id="main-nav">
            <!-- Logo Container -->
            <div class="c-nav-item justify-content-start">
                <img src="gas.svg" class="logo">
            </div>
        
            <!-- Tabs Container -->
            <div class="gas-nav justify-content-center font-semibold navbar">
                <a href="#" class="mx-3">Journal</a>
                <div class="btn-group mx-3">
                    <a id="nav-sales" href="#" class="" data-toggle="dropdown">Sales</a>
                    <div class="dropdown-menu b-radius-5 py-0">
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Quotations</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Reservations</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Sales Order</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Sales Contract</a> 
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Exports</a> 
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">DR/LS</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Invoice</a> 
                    </div>
                </div>
                <div class="btn-group mx-3">
                    <a href="#" class="" data-toggle="dropdown">Purchase</a>
                    <div class="dropdown-menu b-radius-5 py-0">
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Purchase Request</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Purchase Order</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Receiving Report</a>
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Inward Inventory</a> 
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Completion Report</a> 
                        <a href="#" class="dropdown-item d-item-gas font-size-12 font-semibold">Vouchers</a>
                    </div>
                </div>
                <a href="#" class="mx-3">Reports</a>
                <a href="#" class="mx-3">Customers</a>
                <a href="#" class="mx-3">Vendors</a>
                <a href="#" class="mx-3">Bank Reconciliation</a>
                <a href="#" class="mx-3">Chart of Accounts</a>
                <a href="#" class="mx-3">PPE</a>
                <a href="#" class="mx-3">Approvals</a>
            </div>
        
            <!-- Nav Controls -->
            <div class="c-nav-item justify-content-end align-items-center">
                <div class="icon-selector mx-3" onclick="toggleAppCard()">
                    <img src="iconselector.svg" alt="" height="20" id="appToggler">
                </div>
                <div class="notification mx-3">
                    <img src="bell-solid 1.svg" alt="" height="20" class="notification-bell" id="notificationToggler">
                </div>
                <div class="profile mx-3" onclick="toggleProfile()">
                    <img src="person.png" alt="" height="20" class="profile-border b-radius-circle" id="profileToggler">
                </div>
            </div>
        
            <!-- Profile Card - Custom Element -->
            <profile-card></profile-card>
        
            <!-- App Card - Custom Element-->
            <app-card></app-card>
        </div>
        `;

        this.querySelector('#' + this.active).classList.add('active-gas')
    }
    connectedCallback(){
        if (!this.rendered){
            this.render();
            this.rendered = true;
        }
    }
}

class NavHyperlinks extends HTMLElement{
    classAppend(){
        this.classes = this.getAttribute('append-class')
        try{
            this.classes = this.classes.split(' ')
            this.classes.forEach((item)=>this.classList.add(item))
        }
        catch(e){
            return
        }
    }

    connectedCallback(){
        this.className = 'd-flex font-w-600 mb-2 justify-content-center font-semibold nav-hyperlinks-gas'
        if(!this.classAppended){
            this.classAppend()
            this.classAppended = true
        }
    }
}

// ELEMENT REGISTRATIONS
customElements.define('profile-card', ProfileCard)
customElements.define('app-card', AppCard)
customElements.define('navbar-gas', NavbarGAS)
customElements.define('nav-hyperlinks', NavHyperlinks)