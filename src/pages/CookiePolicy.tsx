import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Torna alla home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Ultimo aggiornamento: 10 marzo 2026 — Redatta ai sensi dell'art. 122 del D.Lgs. 196/2003, delle Linee Guida del Garante Privacy del 10 giugno 2021 e del Regolamento UE 2016/679 (GDPR)
        </p>

        <div className="space-y-8 text-foreground/90 text-sm leading-relaxed">
          {/* SEZIONE 1 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">1. Titolare del Trattamento dei Dati</h2>
            <p>
              Il Titolare del trattamento dei dati personali è:<br /><br />
              <strong>Eugenio Carlo Fontana</strong><br />
              Sede: Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia<br />
              Partita IVA: 07097370485<br />
              Codice Fiscale: FNTGCR88B12A564Z<br />
              Email di contatto: <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>
            </p>
            <p className="mt-2">
              (di seguito denominato anche "Titolare")
            </p>
          </section>

          {/* SEZIONE 2 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">2. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo dispositivo (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Grazie ai cookie, il sito ricorda le azioni e le preferenze dell'utente (come la lingua, le dimensioni dei caratteri e altre impostazioni di visualizzazione) in modo che non debbano essere nuovamente indicate quando l'utente torna a visitare il sito o naviga da una pagina all'altra.
            </p>
            <p className="mt-3">
              I cookie vengono utilizzati per eseguire autenticazioni informatiche, monitorare sessioni, memorizzare informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server e per altre finalità descritte di seguito.
            </p>
            <p className="mt-3">
              Oltre ai cookie, il presente sito potrebbe fare uso di altre tecnologie di tracciamento similari, quali web beacon, pixel tag, clear GIF, fingerprinting e local storage. Tutti i riferimenti ai "cookie" contenuti nella presente policy si intendono estesi anche a tali tecnologie analoghe, ove applicabile.
            </p>
          </section>

          {/* SEZIONE 3 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">3. Categorie di Cookie utilizzati</h2>
            <p className="mb-4">Il presente sito utilizza le seguenti categorie di cookie:</p>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">3.1 Cookie tecnici strettamente necessari</h3>
                <p>
                  Sono i cookie indispensabili per il corretto funzionamento del sito web. Senza questi cookie, il sito o alcune sue parti potrebbero non funzionare correttamente. Includono:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Cookie di sessione:</strong> consentono di identificare l'utente durante una singola sessione di navigazione e si cancellano automaticamente alla chiusura del browser.</li>
                  <li><strong>Cookie di funzionalità:</strong> permettono al sito di ricordare le scelte effettuate dall'utente (come la lingua o la regione di provenienza) e fornire funzionalità personalizzate.</li>
                  <li><strong>Cookie di sicurezza:</strong> supportano le funzionalità di sicurezza del sito e contribuiscono a rilevare attività fraudolente.</li>
                  <li><strong>Cookie di preferenza del consenso:</strong> memorizzano le scelte dell'utente in relazione all'accettazione o al rifiuto dei cookie non necessari (es. <code className="bg-muted px-1 rounded">cookie-consent</code>).</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  <strong>Base giuridica:</strong> questi cookie non richiedono il consenso dell'utente ai sensi dell'art. 122, comma 1, del Codice Privacy, in quanto strettamente necessari all'erogazione del servizio esplicitamente richiesto.
                </p>
                <p className="mt-1 text-muted-foreground">
                  <strong>Durata:</strong> sessione o fino a 12 mesi.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">3.2 Cookie analitici (di misurazione)</h3>
                <p>
                  Sono cookie utilizzati per raccogliere e analizzare informazioni statistiche sugli accessi e sulle visite al sito web. Questi cookie ci consentono di comprendere come gli utenti interagiscono con il sito, quali pagine vengono visitate più frequentemente, e di identificare eventuali problemi tecnici o di navigazione.
                </p>
                <p className="mt-2">
                  I dati raccolti tramite cookie analitici possono includere:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Numero di visitatori unici e pagine visualizzate</li>
                  <li>Durata delle sessioni e frequenza di rimbalzo</li>
                  <li>Fonte di traffico (motore di ricerca, link diretto, social media)</li>
                  <li>Tipologia di dispositivo, browser e sistema operativo utilizzati</li>
                  <li>Localizzazione geografica approssimativa (a livello di città)</li>
                </ul>
                <p className="mt-3">
                  I cookie analitici possono essere equiparati ai cookie tecnici solo quando utilizzati direttamente dal gestore del sito per raccogliere informazioni in forma aggregata e anonima, secondo quanto previsto dal Provvedimento del Garante Privacy n. 229/2014.
                </p>
                <p className="mt-2 text-muted-foreground">
                  <strong>Base giuridica:</strong> consenso dell'utente (art. 6.1.a GDPR), salvo configurazione con anonimizzazione dell'IP.
                </p>
                <p className="mt-1 text-muted-foreground">
                  <strong>Durata:</strong> fino a 26 mesi.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">3.3 Cookie di profilazione e marketing</h3>
                <p>
                  Questi cookie vengono utilizzati per tracciare la navigazione dell'utente in rete e creare profili sui suoi gusti, abitudini, scelte di consumo, allo scopo di inviare messaggi pubblicitari mirati e in linea con le preferenze manifestate dall'utente nell'ambito della navigazione in rete.
                </p>
                <p className="mt-2">
                  Tramite questi cookie è possibile:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Mostrare annunci personalizzati basati sugli interessi dell'utente</li>
                  <li>Misurare l'efficacia delle campagne pubblicitarie</li>
                  <li>Limitare il numero di volte in cui un annuncio viene visualizzato</li>
                  <li>Effettuare retargeting su piattaforme esterne</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  <strong>Base giuridica:</strong> consenso esplicito dell'utente (art. 6.1.a GDPR e art. 122 Codice Privacy).
                </p>
                <p className="mt-1 text-muted-foreground">
                  <strong>Durata:</strong> variabile in base al servizio terzo, generalmente fino a 24 mesi.
                </p>
              </div>
            </div>
          </section>

          {/* SEZIONE 4 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">4. Cookie di terze parti</h2>
            <p>
              Il presente sito potrebbe utilizzare servizi forniti da terze parti che, autonomamente, installano propri cookie sul dispositivo dell'utente. Il Titolare non ha il controllo diretto su tali cookie. L'utente può consultare le informative privacy e le policy cookie dei singoli fornitori terzi di seguito elencati:
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold border-b border-border">Servizio</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Fornitore</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Finalità</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Google LLC</td>
                    <td className="p-3">Statistica / Analisi</td>
                    <td className="p-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Google Fonts</td>
                    <td className="p-3">Google LLC</td>
                    <td className="p-3">Tipografia web</td>
                    <td className="p-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">YouTube</td>
                    <td className="p-3">Google LLC</td>
                    <td className="p-3">Embed video</td>
                    <td className="p-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a></td>
                  </tr>
                  <tr>
                    <td className="p-3">Meta Pixel</td>
                    <td className="p-3">Meta Platforms Inc.</td>
                    <td className="p-3">Marketing / Retargeting</td>
                    <td className="p-3"><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              Alcuni dei servizi sopra elencati potrebbero comportare il trasferimento di dati verso Paesi extra-UE (ad es. Stati Uniti). In tali casi, il trasferimento avviene sulla base di decisioni di adeguatezza della Commissione Europea, clausole contrattuali standard (SCC) o altre garanzie appropriate ai sensi degli artt. 46-49 del GDPR.
            </p>
          </section>

          {/* SEZIONE 5 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">5. Gestione delle preferenze Cookie</h2>
            
            <h3 className="font-medium mt-4 mb-2">5.1 Tramite il banner del sito</h3>
            <p>
              Al primo accesso al sito, l'utente viene informato della presenza di cookie tramite un apposito banner. L'utente può:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Accettare tutti i cookie</strong> cliccando su "Accetta tutti"</li>
              <li><strong>Accettare solo i cookie necessari</strong> cliccando su "Solo necessari"</li>
            </ul>
            <p className="mt-2">
              Il consenso può essere revocato in qualsiasi momento cancellando i cookie dal browser o contattando il Titolare.
            </p>

            <h3 className="font-medium mt-4 mb-2">5.2 Tramite le impostazioni del browser</h3>
            <p>
              L'utente può gestire le preferenze relative ai cookie anche direttamente all'interno del proprio browser. Si segnala che la disattivazione totale o parziale dei cookie tecnici potrebbe compromettere l'utilizzo delle funzionalità del sito. Di seguito i link alle guide dei principali browser:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/help/17442" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opera</a></li>
              <li><a href="https://brave.com/privacy/browser/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Brave</a></li>
            </ul>

            <h3 className="font-medium mt-4 mb-2">5.3 Tramite strumenti di opt-out specifici</h3>
            <p>Per i cookie di terze parti, è possibile effettuare l'opt-out tramite:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (EDAA)</a> — portale europeo per la gestione della pubblicità comportamentale</li>
              <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative (NAI)</a></li>
            </ul>
          </section>

          {/* SEZIONE 6 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">6. Periodo di conservazione dei Cookie</h2>
            <p>I cookie installati sul dispositivo dell'utente hanno durate differenti:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Cookie di sessione:</strong> vengono eliminati automaticamente alla chiusura del browser.</li>
              <li><strong>Cookie persistenti:</strong> rimangono memorizzati sul dispositivo dell'utente fino alla loro scadenza o fino a quando l'utente non li elimina manualmente. La durata massima è indicata nella sezione 3 per ciascuna tipologia.</li>
            </ul>
          </section>

          {/* SEZIONE 7 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">7. Diritti dell'utente</h2>
            <p>Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Diritto di accesso (art. 15):</strong> ottenere conferma dell'esistenza di un trattamento e accedere ai propri dati personali</li>
              <li><strong>Diritto di rettifica (art. 16):</strong> ottenere la rettifica di dati inesatti o l'integrazione di dati incompleti</li>
              <li><strong>Diritto alla cancellazione (art. 17):</strong> ottenere la cancellazione dei propri dati ("diritto all'oblio")</li>
              <li><strong>Diritto di limitazione (art. 18):</strong> ottenere la limitazione del trattamento</li>
              <li><strong>Diritto alla portabilità (art. 20):</strong> ricevere i dati in formato strutturato e di uso comune</li>
              <li><strong>Diritto di opposizione (art. 21):</strong> opporsi al trattamento in qualsiasi momento</li>
              <li><strong>Diritto di revoca del consenso (art. 7):</strong> revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca</li>
              <li><strong>Diritto di reclamo (art. 77):</strong> proporre reclamo all'Autorità Garante per la protezione dei dati personali — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a></li>
            </ul>
            <p className="mt-3">
              Per esercitare i propri diritti, l'utente può inviare una richiesta scritta al Titolare all'indirizzo email{" "}
              <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>, indicando il proprio nome, cognome e la specifica richiesta. Il Titolare risponderà entro 30 giorni dal ricevimento della richiesta.
            </p>
          </section>

          {/* SEZIONE 8 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">8. Riferimenti normativi</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio (GDPR)</li>
              <li>Decreto Legislativo 30 giugno 2003, n. 196 (Codice in materia di protezione dei dati personali), come modificato dal D.Lgs. 10 agosto 2018, n. 101</li>
              <li>Provvedimento del Garante Privacy n. 229 dell'8 maggio 2014 — "Individuazione delle modalità semplificate per l'informativa e l'acquisizione del consenso per l'uso dei cookie"</li>
              <li>Linee Guida del Garante Privacy del 10 giugno 2021 — "Cookie e altri strumenti di tracciamento" (pubblicate in G.U. n. 163 del 9 luglio 2021)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy), come modificata dalla Direttiva 2009/136/CE</li>
            </ul>
          </section>

          {/* SEZIONE 9 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">9. Aggiornamenti della presente Policy</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente Cookie Policy in qualsiasi momento. Le eventuali modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia all'utente di consultare periodicamente la presente pagina per prendere visione di eventuali aggiornamenti.
            </p>
            <p className="mt-2">
              In caso di modifiche sostanziali, il Titolare potrà richiedere un nuovo consenso all'utente tramite la ripresentazione del banner cookie.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
