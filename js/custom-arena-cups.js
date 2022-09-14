sc.Arena.inject({
    init(){
        this.parent()
        this.registerCup('Lukas-cup',".\/assets\/data\/arena\/");
        this.registerCup('Schneiders-cup',".\/assets\/data\/arena\/");
        this.registerCup('Triblader-cup',".\/assets\/data\/arena\/");
    }
});