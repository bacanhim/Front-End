new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) +1,min);
            var damage1 = Math.max(Math.floor(Math.random() * max) +1,min);
            this.monsterHealth -= damage;
            this.playerHealth -= damage1;
            this.turns.unshift({
                isPlayer: true,
                text: 'player hits Monster for ' + damage
            });
            this.turns.unshift({
                isMonster: true,
                text: 'Monster hits player for ' + damage1
            });
            if(this.monsterHealth <=0){
                alert('ai querida pq fazes isto?');
                this.gameIsRunning = false;
                window.location.reload();
                return;
            }
            if(this.playerHealth <=0){
                alert('ES FRACOOOOO');
                this.gameIsRunning = false;
                window.location.reload();
                return;
            }
        },
        specialAttack: function () {
            var max = 50;
            var min = 30;
            var damage = Math.max(Math.floor(Math.random() * max) +1,min);
            var damage1 = Math.max(Math.floor(Math.random() * max) +1,min);
            this.monsterHealth -= damage;
            this.playerHealth -= damage1;
            this.turns.unshift({
                isPlayer: true,
                text: 'player slayed Monster for ' + damage
            });
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster slayed player for ' + damage1
            });
            if(this.monsterHealth <=0){
                alert('ai querida pq fazes isto?');
                this.gameIsRunning = false;
                window.location.reload();
                return;
            }
            if(this.playerHealth <=0){
                alert('ES FRACOOOOO');
                this.gameIsRunning = false;
                window.location.reload();
                return;
            }

        },
        heal: function () {
            var max = 10;
            var min = 3;
            var damage1 = Math.max(Math.floor(Math.random() * max) +1,min);
            if (this.playerHealth <101){
               this.playerHealth -= damage1; 
               this.turns.unshift({
                isMonster: true,
                text: 'NO HEAL ALLOWED BITCH! GOT PUNISHED.' 
            })
            if(this.playerHealth <=0){
                alert('ES BURRO');
                this.gameIsRunning = false;
                window.location.reload();
                return;
            }
            }       
        },
        giveUp: function () {

        }
    }
});