import type { Metadata } from "next";
import { localOnlyAlternates, regionalOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Normativa Aduanera | LEM-BOX",
  description:
    "Resumen de la normativa aduanera aplicable a envíos personales desde Miami hacia Uruguay: franquicia personal, límites de valor y peso, mercadería prohibida y artículos restringidos.",
  alternates: localOnlyAlternates("/aduanas"),
  openGraph: regionalOpenGraph("/aduanas"),
};

export default function AduanasPage() {
  return (
    <main className="min-h-screen bg-[#020B07] text-emerald-50">
      <section className="pt-28 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Normativa aduanera para envíos a Uruguay
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-emerald-100/85">
            Esta página resume, de forma orientativa, las principales reglas que
            aplican a los envíos personales desde Miami hacia Uruguay que se
            gestionan a través de LEM-BOX. No reemplaza la normativa oficial ni
            el asesoramiento de la Dirección Nacional de Aduanas (DNA) u otros
            organismos competentes.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-emerald-100/85">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Franquicia personal: límites de valor, peso y frecuencia
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                La normativa de Aduanas Uruguay establece un régimen de franquicia
                personal para envíos postales internacionales. Bajo este régimen,
                cada persona puede recibir hasta{" "}
                <strong>3 envíos anuales</strong> que cumplan estas condiciones:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>
                  <strong>Valor menor a USD 200</strong> por envío, considerando
                  solo el valor de la mercadería (sin incluir flete).
                </li>
                <li>
                  <strong>Peso máximo de 20 kg</strong> brutos por envío.
                </li>
                <li>
                  Mercadería destinada a <strong>uso personal</strong>, sin fines
                  comerciales.
                </li>
              </ul>
              <p className="mt-2">
                El uso de franquicias es individual: Aduanas controla el cupo por
                persona, independientemente del courier utilizado. Es
                responsabilidad del usuario asegurarse de no superar sus 3
                franquicias anuales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Régimen simplificado y régimen general
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                Cuando un envío no cumple con las condiciones de la franquicia
                (por ejemplo, porque es el 4.º envío del año o su valor supera
                los límites), puede quedar sujeto a otros regímenes:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>
                  <strong>Régimen Simplificado:</strong> aplica a envíos de valor
                  hasta USD 200 que exceden las franquicias. Se paga un tributo
                  único del 60% sobre el valor aduana, con un mínimo establecido
                  por normativa.
                </li>
                <li>
                  <strong>Régimen General:</strong> aplica cuando el valor supera
                  USD 200 o en casos que requieran un trámite formal de
                  importación. Puede requerir intervención de despachante de
                  aduana y pago de todos los tributos correspondientes.
                </li>
              </ul>
              <p className="mt-2">
                LEM-BOX puede asesorar sobre las alternativas, pero la decisión
                final y el pago de tributos dependen del usuario y de lo que
                determine Aduanas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Mercadería prohibida
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                Hay productos que no pueden enviarse bajo ningún concepto a
                través de LEM-BOX por estar prohibidos por normativa o por
                razones de seguridad en el transporte. De forma enunciativa, se
                consideran prohibidos:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Armas de fuego, municiones y explosivos.</li>
                <li>
                  Sustancias ilícitas, estupefacientes y drogas controladas.
                </li>
                <li>
                  Productos químicos peligrosos, materiales inflamables o
                  corrosivos y gases comprimidos.
                </li>
                <li>Pornografía en cualquier formato.</li>
                <li>Cigarrillos electrónicos, vaporizadores y sus accesorios.</li>
                <li>Neumáticos, combustibles y derivados del petróleo.</li>
                <li>Dinero en efectivo o valores monetarios.</li>
                <li>
                  Cualquier otro artículo prohibido por la normativa de
                  transporte aéreo o aduanera vigente.
                </li>
              </ul>
              <p className="mt-2">
                Intentar enviar mercadería prohibida puede derivar en su
                decomiso, destrucción y eventuales acciones legales por parte de
                las autoridades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Mercadería gravada por IMESI
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                Determinados productos pagan el Impuesto Específico Interno
                (IMESI) en Uruguay y no pueden ingresar libres de tributos bajo
                el régimen de franquicia. Entre ellos se encuentran, por ejemplo:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Bebidas alcohólicas y bebidas sin alcohol en general.</li>
                <li>
                  Productos de tabaco: cigarrillos, cigarros, tabaco de armar.
                </li>
                <li>
                  Perfumes, cosméticos y artículos de tocador en general.
                </li>
                <li>
                  Lubricantes, aceites, combustibles y derivados del petróleo.
                </li>
                <li>
                  Otros productos gravados por IMESI según normativa vigente.
                </li>
              </ul>
              <p className="mt-2">
                LEM-BOX no transporta productos gravados por IMESI bajo el
                régimen de franquicia. Para estos artículos aplican regímenes
                distintos que deben gestionarse con asesoramiento específico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Artículos restringidos y permisos especiales
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                Algunos productos pueden importarse bajo franquicia, pero
                requieren permisos, certificados o autorizaciones previas de
                otros organismos. Por ejemplo:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>
                  <strong>Medicamentos y ciertos suplementos:</strong> requieren
                  autorización del Ministerio de Salud Pública (MSP).
                </li>
                <li>
                  <strong>Dispositivos con radiofrecuencia:</strong> celulares,
                  routers, equipos inalámbricos y otros dispositivos que emitan
                  radiofrecuencia deben contar con homologación de URSEC.
                </li>
                <li>
                  <strong>Productos de origen animal o vegetal:</strong> pueden
                  requerir certificados sanitarios o fitosanitarios emitidos por
                  los organismos competentes.
                </li>
              </ul>
              <p className="mt-2">
                LEM-BOX puede informar al usuario cuando detecta que un artículo
                requiere permisos especiales, pero la gestión y obtención de los
                mismos es responsabilidad del usuario. Sin dichas autorizaciones,
                Aduanas puede retener o no liberar el envío.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Responsabilidad del usuario y fuentes oficiales
              </h2>
              <div className="mt-2 h-px w-10 bg-emerald-300/20" />
              <p className="mt-2">
                El usuario es responsable de:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Verificar su cupo de franquicias disponible en el año.</li>
                <li>
                  Asegurarse de que sus compras respeten los límites de valor,
                  peso y uso personal.
                </li>
                <li>
                  Confirmar que la mercadería no esté prohibida ni gravada por
                  IMESI.
                </li>
                <li>
                  Gestionar los permisos especiales requeridos por MSP, URSEC u
                  otros organismos cuando corresponda.
                </li>
              </ul>
              <p className="mt-2">
                Para información completa y actualizada, recomendamos consultar
                las fuentes oficiales:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Dirección Nacional de Aduanas (DNA) de Uruguay.</li>
                <li>Portal de trámites del gobierno uruguayo (GUB.UY).</li>
                <li>Correo Uruguayo y su guía para compras en el exterior.</li>
              </ul>
              <p className="mt-2 text-emerald-100/80">
                En caso de discrepancia entre este resumen y la normativa
                oficial, siempre prevalecerá lo dispuesto por las autoridades
                competentes.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}