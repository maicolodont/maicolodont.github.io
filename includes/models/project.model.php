<?php
class Project {
    public function __construct(
        public string $id,
        public string $title,
        public string $description,
        public ?array $operatingSystems,
        public array $technologiesUsed,
        public array $mainFeatures,
        public array $imagesUrls
    ) {}

    static public function getProject(string $id): ?Project {
        require $_SERVER['DOCUMENT_ROOT'] . '/includes/projects/projects.php';
        switch($id) {
            case 'clone-whatsapp':
                return $whatsApp;
            case 'threads':
                return $threads;
            case 'shop-z':
                return $shopZ;
            case 'calculator':
                return $calculator;
            case 'music-player':
                return $musicPlayer;
            case 'tic-tac-toe':
                return $ticTacToe;              
            default:
                return null;    
        }
    }
};