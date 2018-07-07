angular.module('PongGameApp.controllers', []).

  /* World Champions controller */
  controller('pongGameController', function($scope, socket) {
    /**
     * Local variable dictating which side this player is on
     * @type {null}
     */
    $scope.side = null;

    /**
     * Local variable of the game. Updated from server.
     * @type {null}
     */
    $scope.game = null;

    /**
     * Determines whether we are waiting for the other side.
     * @type {boolean}
     */
    $scope.waitingForOtherSide = false;


    /**
     * Check that the game has recieved a model
     * @type {boolean}
     */
    $scope.init = false;


    /**
     * Whether to show the board.
     * @type {boolean}
     */
    $scope.showGame = false;


    /**
     * Who has won?
    */
    $scope.winnerName = "";



    socket.emit('ping','');





    /**
     * Resets te current game.
     */
    $scope.reset = function(){
        socket.emit('reset');
    };



    /**
     * Request to join the current game on a given side.
     * @param side String left or right.
     */
    $scope.joinGame = function(side) {

        //Say hello to server.
        socket.emit('add-client',side);

        //Save which side we are locally.
        $scope.side = side;

        //Check if we are waiting
        $scope.checkForPlayers();

        $scope.$apply();
    };


    $scope.getPlayerCount = function(){
        var count =0;

        if($scope.game != null){
            if($scope.game.players.left != null)
            {   
                count++;
            }
            if($scope.game.players.right != null)
            {
                count++;
            }
        }
        return count;
    };

    /**
     * Checks the waiting status of players.
     */
    $scope.checkForPlayers = function(){
        $scope.waitingForOtherSide = $scope.getPlayerCount() < 2;
    };



    $scope.start = function(){
        //Tell the server we are starting
        socket.emit('start','');
    };

    $scope.setGUIBatBounds = function(val){
        return Math.max(0, val -50);
    };

    $scope.setGUIBallBounds = function(val){
        return Math.max(0, val -20);
    };

    /**
     * NOTIFICATIONS HERE
     * When a new message arrives, deal with it.
     */
    socket.on('notification', function(data) {
        $scope.game = data.state;
        $scope.init = true;

        if($scope.side != null){
            if($scope.game.players.left != null && $scope.game.players.right != null ){
                $scope.showGame = true;
            }else {
                $scope.showGame = false;
            }
        }else{
            $scope.showGame = false;
        }

        /**
         * Based on the outcome, generate the name to show
         */
        if($scope.outcome === 0 ) {
            $scope.winnerName = '';
        }
        if($scope.outcome === -1 )
        { 
            $scope.winnerName = 'LEFT';
        }
        if($scope.outcome === 1 ) {
            $scope.winnerName = 'RIGHT';
        }

        $scope.$apply();


    });

    socket.on('reset', function() {
        $scope.game.players = {};
        $scope.waitingForOtherSide = false;
        $scope.showGame = false;
        $scope.init = false;
        $scope.side = null;

        socket.emit('ping','');

    });


    socket.on('pong', function(data) {
        $scope.game = data.state;
        $scope.init = true;
        $scope.$apply();

    });


    socket.on('notificationGameStatus', function(data) {
        console.log("* Game Status notification: " + data);
    });

  });