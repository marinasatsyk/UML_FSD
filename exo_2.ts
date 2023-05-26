//2.3, 2.4, 2.5

enum Motif {
    CLIENTABSENT = "Client absent",
    VEHICULEINACCESSIBLE = "Véhicule inaccessible",
    VEHICULEABSCENT = "Véhicule absent",
    ADRESSERRONE = "Adresse erronée"
  }
  
  class SocieteFinancement {
    private code: number;
    private nom: string;
    private lesExpertises: Experise[];
  
    constructor(code: number, nom: string) {
      this.code = code;
      this.nom = nom;
      this.lesExpertises = [];
    }
  
    public AjouterExpertisePool(expertise: Experise) {
      this.lesExpertises.push(expertise);
    }
  
    public AjouterExpertiseClient(expertise: Experise) {
      this.lesExpertises.push(expertise);
    }
  

    public LesExpertisesIndispos() : Experise [] {
        const expertisesIndispos: Experise[] = [];

        
        for (const expertise of this.lesExpertises) {
          const indisponibilites = expertise.GetIndisponibilite();
    
          if (indisponibilites.length > 0) {
            expertisesIndispos.push(expertise);
          }
        }
    
        return expertisesIndispos;
      }
    
  
    public NbIndisponibilites(unMotif?: Motif): number {
        let count = 0;

        for (const expertise of this.lesExpertises) {
          const indisponibilites = expertise.GetIndisponibilite();
    
          for (const indisponibilite of indisponibilites) {
            if (indisponibilite.GetMotif() === unMotif) {
              count++;
            }
          }
        }
    
        return count;  
      }
  }
  
  abstract class Experise {
    private codeDossier: number;
    private dateHeureRDV: Date;
    private lieuRDV: string;
    private adresse: string;
    private immatriculation: string;
    private marque: string;
  
    constructor(
      codeDossier: number,
      dateHeureRDV: Date,
      lieuRDV: string,
      adresse: string,
      immatriculation: string,
      marque: string
    ) {
      this.codeDossier = codeDossier;
      this.dateHeureRDV = dateHeureRDV;
      this.lieuRDV = lieuRDV;
      this.adresse = adresse;
      this.immatriculation = immatriculation;
      this.marque = marque;
    }
  
    public CreerIndisponibilite() {
    }
  
    public EtatExpertise() {
    }
  
    public GetIndisponibilite() : any    {
    }
  }
  
  class Indisponibilite {
    private clientResponsable: string;
    private unMotif: Motif;
  
    constructor(clientResponsable: string, unMotif: Motif) {
      this.clientResponsable = clientResponsable;
      this.unMotif = unMotif;
    }
  
    public ClientEstResponsable() {
    }
  
    public GetMotif() {
      return this.unMotif;
    }
  
    public addMotif(motif: Motif) {
    }
  }
  
  class Pool_Garage extends Experise {
    constructor(
      codeDossier: number,
      dateHeureRDV: Date,
      lieuRDV: string,
      adresse: string,
      immatriculation: string,
      marque: string
    ) {
      super(codeDossier, dateHeureRDV, lieuRDV, adresse, immatriculation, marque);
    }
  }
  
  class RDV_Client extends Experise {
    private nomContact: string;
    private telephone: string;
    private mail: string;
  
    constructor(
      codeDossier: number,
      dateHeureRDV: Date,
      lieuRDV: string,
      adresse: string,
      immatriculation: string,
      marque: string,
      nomContact: string,
      telephone: string,
      mail: string
    ) {
      super(codeDossier, dateHeureRDV, lieuRDV, adresse, immatriculation, marque);
      this.nomContact = nomContact;
      this.telephone = telephone;
      this.mail = mail;
    }
  }
  
  // Exemple d'utilisation
  const societeFinancement = new SocieteFinancement(123, "Ma Société de Financement");
  
  const poolGarage = new Pool_Garage(456, new Date(), "Garage ABC", "123 rue des Garages", "ABC123", "Renault");
  
  const rdvClient = new RDV_Client(
    789,
    new Date(),
    "Domicile du client",
    "456 rue du Client",
    "XYZ789",
    "Peugeot",
    "John Doe",
    "0123456789",
    "john.doe@example.com"
  );
  
  poolGarage.CreerIndisponibilite();
  rdvClient.EtatExpertise();