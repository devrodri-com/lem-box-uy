// src/app/privacidad/page.tsx
import type { Metadata } from "next";
import { regionalAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Privacidad | LEM-BOX",
  description:
    "Conocé cómo LEM-BOX protege y utiliza tus datos personales. Transparencia y seguridad en la gestión de tu información.",
  robots: { index: true },
  alternates: regionalAlternates("/privacidad"),
};

export default function PrivacidadPage() {
  return (
    <main className="bg-[#02120f] text-[#e6f6f1]" aria-labelledby="privacidad-title">
      <section className="relative scroll-mt-24 border-b border-white/5 pt-24 md:pt-28">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" id="privacidad-title">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-emerald-100/80 max-w-3xl">
            En LEM-BOX valoramos y protegemos tu privacidad. Esta política explica cómo recopilamos, utilizamos y resguardamos tu información personal.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-emerald-100/85">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Información que recolectamos</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Nombre completo, documento de identidad y datos de contacto.</li>
                <li>Información de registro de cuenta (usuario y credenciales de acceso en forma segura).</li>
                <li>Datos de cargas recibidas en nuestros depósitos.</li>
                <li>Datos asociados a operaciones aduaneras (facturas comerciales, valores declarados, información de pago y documentación requerida por autoridades).</li>
                <li>Actividad de navegación en nuestro sitio (páginas visitadas, búsquedas, IP, navegador).</li>
                <li>Correspondencia enviada por email, WhatsApp u otros canales.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. Uso de la información</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Procesar y entregar cargas de forma segura y eficiente.</li>
                <li>Gestionar casilleros, consolidaciones y almacenaje.</li>
                <li>Enviar notificaciones sobre estado de envíos, facturación o soporte.</li>
                <li>Comunicar promociones y novedades (opcional).</li>
                <li>Cumplir con obligaciones legales y regulatorias.</li>
                <li>Preparar declaraciones aduaneras y compartir la información requerida con autoridades competentes para el despacho de envíos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Confidencialidad y protección</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Los datos de los usuarios se tratan de forma confidencial y con medidas de seguridad técnicas y administrativas.
                No vendemos ni alquilamos información personal. Solo compartimos datos cuando es necesario para operar nuestros
                servicios, cumplir con normativas legales, realizar gestiones ante autoridades (incluida la Dirección Nacional de Aduanas y otros organismos como MSP o URSEC cuando corresponda) o resolver disputas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Compartir datos con terceros y autoridades</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Podemos compartir cierta información personal con proveedores de servicios (por ejemplo, sistemas de gestión, operadores logísticos, pasarelas de pago) y con autoridades públicas cuando sea necesario para:
              </p>
              <ul className="list-disc list-inside marker:text-emerald-300/70 mt-2 space-y-1">
                <li>Realizar despachos aduaneros y cumplir con la normativa de importación.</li>
                <li>Responder a requerimientos de la Dirección Nacional de Aduanas u otros organismos de control.</li>
                <li>Prevenir fraude, abusos o actividades ilícitas relacionadas con nuestros servicios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Almacenamiento y plazos</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Los paquetes se almacenan gratuitamente por 60 días desde su recepción en Miami. Vencido ese plazo, podrán considerarse
                abandonados. Los datos de los usuarios se conservan mientras exista relación comercial o sea requerido por ley.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Derechos del usuario</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                El usuario puede acceder, actualizar o rectificar sus datos, solicitar la baja de su cuenta o pedir la exclusión de listas
                de comunicaciones comerciales. Para ejercer estos derechos puede escribir a{" "}
                <a href="mailto:info@lem-box.com" className="underline hover:text-white">
                  info@lem-box.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Seguridad</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Aplicamos estándares de la industria para proteger la información personal. LEM-BOX no almacena contraseñas en texto plano; utilizamos hashing seguro y controles de acceso y cifrado TLS en tránsito. Sin embargo, ningún sistema es infalible y no podemos garantizar seguridad absoluta frente a accesos no autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">8. Menores de edad</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Nuestros servicios están destinados a personas con capacidad legal para contratar. Los menores solo podrán registrarse con
                consentimiento de sus padres o tutores.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">9. Modificaciones</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                LEM-BOX podrá actualizar esta política y publicará los cambios en este sitio con la fecha de última modificación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">10. Contacto</h2>
              <div className="mt-2 h-px w-10 bg-white/10"></div>
              <p>
                Para dudas o reclamos relacionados con privacidad de datos, escribinos a{" "}
                <a href="mailto:info@lem-box.com" className="underline hover:text-white">
                  info@lem-box.com
                </a>.
              </p>
            </section>
            <p className="text-xs text-emerald-100/60 mt-8">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}