import Image from 'next/image';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 text-left">
            <h1 className="text-3xl font-bold">Nathan Baert</h1>
            <p className="text-blue-900 text-lg"><strong>Etudiant en Informatique</strong></p>
          </div>
          <Image 
            src="/profile.jpg" 
            alt="Photo de profil" 
            width={150} 
            height={150} 
            className="rounded-lg self-end" 
          />
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-2xl font-semibold">À propos</h2>
          <p className="text-blue-900 text-md">
            Jeune développeur en première année d'étude supérieure. 
            Je suis passionné de jeux et j'ai une culture ludique étendue.
            Je suis également bilingue anglais après avoir vécu trois ans aux États-Unis.
          </p>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-2xl font-semibold">Compétences</h2>
          <ul className="grid grid-cols-2 gap-4 mt-2 text-blue-900 text-md">
            <li><strong>- Python (Thonny)</strong></li>
            <li><strong>- SQL (MariaDB)</strong></li>
            <li><strong>- C (Jetbrains)</strong></li>
            <li><strong>- Java (Jetbrains)</strong></li>
            <li><strong>- Javascript (VSCode)</strong></li>
            <li><strong>- HTML et CSS (VSCode)</strong></li>
          </ul>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-2xl font-semibold">Formation</h2>
          <ul className="list-disc list-inside text-blue-900 text-md mt-2">
            <li><strong>Bachelor Informatique</strong> - Ecole d'informatique ENIGMA (2024 - aujourd'hui)</li>
            <li><strong>Bac Général Math-NSI mention BIEN</strong> - Lycée de Gondecourt (2021 - 2024)</li>
          </ul>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-2xl font-semibold">Expérience</h2>
          <ul className="list-disc list-inside text-blue-900 text-md mt-2">
            <li><strong>Stage au Siège de Kiabi</strong> : Découverte des métiers derrière la grande enseigne, 
                                                           entraînement à la prise de parole 
                                                           et entraînement au travail en équipe (2 semaines - 2022)</li>
            <li><strong>Stage à la Cité Scientifique de Lille</strong> : Développement en Python
                                                                         et étude sur le séquençage ADN (2 semaines - 2021)</li>
          </ul>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-blue-900 text-md"><strong>Email</strong> : nathan.baert.29.04@gmail.com</p>
          <p className="text-blue-900 text-md"><strong>Téléphone</strong> : 07 66 61 66 19</p>
          <a
            href="https://www.linkedin.com/in/nathan-baert-275010330/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline text-blue-900 text-md">
              <strong>Voir mon LinkedIn</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
