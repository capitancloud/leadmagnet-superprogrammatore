import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Torna alla home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Informativa sulla Privacy</h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018 — Ultimo aggiornamento: 10 marzo 2026
        </p>

        <div className="space-y-8 text-foreground/90 text-sm leading-relaxed">
          {/* SEZIONE 1 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">1. Titolare del Trattamento dei Dati</h2>
            <p>
              Ai sensi dell'art. 4, par. 7, del Regolamento UE 2016/679, il Titolare del trattamento dei dati personali è:<br /><br />
              <strong>Eugenio Carlo Fontana</strong><br />
              Sede: Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia<br />
              Partita IVA: 07097370485<br />
              Codice Fiscale: FNTGCR88B12A564Z<br />
              Email di contatto: <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>
            </p>
            <p className="mt-2">
              (di seguito denominato anche "Titolare" o "Noi")
            </p>
          </section>

          {/* SEZIONE 2 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">2. Categorie di dati personali trattati</h2>
            <p>Il Titolare potrà trattare le seguenti categorie di dati personali:</p>

            <h3 className="font-medium mt-4 mb-2">2.1 Dati di navigazione</h3>
            <p>
              I sistemi informatici e le procedure software preposte al funzionamento del presente sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni e associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria rientrano:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Indirizzi IP o nomi a dominio dei dispositivi utilizzati dagli utenti</li>
              <li>Indirizzi in notazione URI/URL (Uniform Resource Identifier/Locator) delle risorse richieste</li>
              <li>Orario della richiesta, metodo utilizzato e dimensione del file ottenuto in risposta</li>
              <li>Codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.)</li>
              <li>Tipo di browser, sistema operativo, risoluzione dello schermo</li>
              <li>Parametri relativi al sistema operativo e all'ambiente informatico dell'utente</li>
            </ul>

            <h3 className="font-medium mt-4 mb-2">2.2 Dati forniti volontariamente dall'utente</h3>
            <p>
              L'invio facoltativo, esplicito e volontario di dati tramite i form presenti sul sito (form di contatto, iscrizione alla newsletter, richiesta di accesso a contenuti gratuiti) comporta la successiva acquisizione dei dati inseriti dall'utente, tra cui:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono (se fornito)</li>
              <li>Qualsiasi altra informazione volontariamente comunicata dall'utente tramite i form o via email</li>
            </ul>

            <h3 className="font-medium mt-4 mb-2">2.3 Dati raccolti tramite cookie e tecnologie similari</h3>
            <p>
              Il sito utilizza cookie e tecnologie di tracciamento analoghe. Per informazioni dettagliate su tipologie, finalità e modalità di gestione dei cookie, si prega di consultare la nostra{" "}
              <Link to="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>.
            </p>
          </section>

          {/* SEZIONE 3 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">3. Finalità e base giuridica del trattamento</h2>
            <p>I dati personali dell'utente sono trattati per le seguenti finalità:</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold border-b border-border">Finalità</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Base giuridica</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Riferimento GDPR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Navigazione e fruizione delle funzionalità del sito web</td>
                    <td className="p-3">Legittimo interesse del Titolare</td>
                    <td className="p-3">Art. 6.1.f</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Risposta a richieste di contatto e assistenza</td>
                    <td className="p-3">Esecuzione di misure precontrattuali su richiesta dell'interessato</td>
                    <td className="p-3">Art. 6.1.b</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Iscrizione alla newsletter e invio di comunicazioni informative</td>
                    <td className="p-3">Consenso dell'interessato</td>
                    <td className="p-3">Art. 6.1.a</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Invio di comunicazioni promozionali e di marketing diretto</td>
                    <td className="p-3">Consenso dell'interessato</td>
                    <td className="p-3">Art. 6.1.a</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Erogazione di servizi digitali (corsi, materiali, contenuti)</td>
                    <td className="p-3">Esecuzione del contratto</td>
                    <td className="p-3">Art. 6.1.b</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Profilazione e personalizzazione dei contenuti</td>
                    <td className="p-3">Consenso esplicito dell'interessato</td>
                    <td className="p-3">Art. 6.1.a</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Analisi statistiche e miglioramento del servizio</td>
                    <td className="p-3">Legittimo interesse del Titolare</td>
                    <td className="p-3">Art. 6.1.f</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Adempimento di obblighi legali, contabili e fiscali</td>
                    <td className="p-3">Obbligo legale</td>
                    <td className="p-3">Art. 6.1.c</td>
                  </tr>
                  <tr>
                    <td className="p-3">Accertamento, esercizio o difesa di un diritto in sede giudiziaria</td>
                    <td className="p-3">Legittimo interesse del Titolare</td>
                    <td className="p-3">Art. 6.1.f</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SEZIONE 4 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">4. Natura del conferimento dei dati e conseguenze del rifiuto</h2>
            <p>
              Il conferimento dei dati personali è facoltativo. Tuttavia, il mancato conferimento dei dati contrassegnati come obbligatori nei form del sito renderà impossibile per il Titolare evadere la richiesta dell'utente o erogare il servizio richiesto.
            </p>
            <p className="mt-2">
              Il conferimento dei dati per le finalità di marketing e profilazione è sempre facoltativo. Il rifiuto del consenso per tali finalità non pregiudica in alcun modo la fruizione dei servizi del sito.
            </p>
          </section>

          {/* SEZIONE 5 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">5. Modalità di trattamento</h2>
            <p>
              I dati personali sono trattati con strumenti automatizzati e non automatizzati, con logiche strettamente correlate alle finalità sopra indicate e comunque in modo da garantire la sicurezza, l'integrità e la riservatezza dei dati stessi, nel rispetto delle misure organizzative, fisiche e logiche previste dalle disposizioni vigenti.
            </p>
            <p className="mt-2">
              Il Titolare adotta misure di sicurezza adeguate per prevenire l'accesso non autorizzato, la divulgazione, la modifica o la distruzione non autorizzata dei dati, tra cui:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Crittografia dei dati in transito (protocollo HTTPS/TLS)</li>
              <li>Controllo degli accessi con autenticazione</li>
              <li>Backup periodici dei dati</li>
              <li>Aggiornamento regolare dei sistemi e delle procedure di sicurezza</li>
            </ul>
          </section>

          {/* SEZIONE 6 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">6. Periodo di conservazione dei dati</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, nel rispetto del principio di minimizzazione di cui all'art. 5.1.e del GDPR. In particolare:
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold border-b border-border">Tipologia di dati</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Periodo di conservazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati di navigazione (log)</td>
                    <td className="p-3">90 giorni dalla raccolta</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati di contatto (richieste via form)</td>
                    <td className="p-3">12 mesi dalla conclusione della richiesta</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati per iscrizione newsletter</td>
                    <td className="p-3">Fino alla revoca del consenso da parte dell'utente</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati per finalità di marketing diretto</td>
                    <td className="p-3">24 mesi dall'ultimo contatto o fino a revoca del consenso</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati per profilazione</td>
                    <td className="p-3">12 mesi dall'ultima interazione o fino a revoca del consenso</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Dati contrattuali (acquisti, servizi)</td>
                    <td className="p-3">10 anni dalla cessazione del rapporto (obblighi fiscali ex art. 2220 c.c.)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Dati per contenziosi</td>
                    <td className="p-3">Per tutta la durata del contenzioso, fino all'esaurimento dei termini di prescrizione</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              Trascorsi i periodi di conservazione sopra indicati, i dati saranno cancellati o resi anonimi in modo irreversibile.
            </p>
          </section>

          {/* SEZIONE 7 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">7. Comunicazione e diffusione dei dati</h2>
            <p>
              I dati personali dell'utente potranno essere comunicati, esclusivamente per le finalità sopra indicate, alle seguenti categorie di soggetti:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Fornitori di servizi tecnici e informatici:</strong> hosting provider, piattaforme di email marketing, servizi di analytics, CDN</li>
              <li><strong>Consulenti e professionisti:</strong> commercialisti, avvocati, consulenti del lavoro, nell'ambito dei rispettivi incarichi</li>
              <li><strong>Piattaforme di pagamento:</strong> in caso di transazioni economiche, i dati necessari saranno trasmessi al payment processor</li>
              <li><strong>Autorità pubbliche:</strong> ove richiesto dalla legge o da provvedimenti delle autorità competenti</li>
              <li><strong>Soggetti autorizzati:</strong> persone fisiche autorizzate al trattamento sotto l'autorità diretta del Titolare (es. collaboratori)</li>
            </ul>
            <p className="mt-3">
              I dati personali non saranno in alcun caso oggetto di diffusione indiscriminata a soggetti indeterminati. Il Titolare mantiene un elenco aggiornato dei responsabili del trattamento ex art. 28 GDPR, disponibile su richiesta.
            </p>
          </section>

          {/* SEZIONE 8 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">8. Trasferimento dati verso Paesi terzi</h2>
            <p>
              Alcuni dei servizi di terze parti utilizzati dal Titolare potrebbero comportare il trasferimento dei dati personali dell'utente verso Paesi situati al di fuori dell'Unione Europea o dello Spazio Economico Europeo (SEE), in particolare verso gli Stati Uniti d'America.
            </p>
            <p className="mt-2">In tali casi, il trasferimento avverrà esclusivamente:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Verso Paesi che garantiscono un livello di protezione adeguato secondo decisioni della Commissione Europea (art. 45 GDPR), incluso il EU-US Data Privacy Framework</li>
              <li>Sulla base di clausole contrattuali standard (Standard Contractual Clauses - SCC) approvate dalla Commissione Europea (art. 46.2.c GDPR)</li>
              <li>Con il consenso esplicito dell'interessato (art. 49.1.a GDPR), previo avviso circa i possibili rischi</li>
            </ul>
            <p className="mt-2">
              L'utente può ottenere copia delle garanzie adottate o informazioni sul luogo di conservazione dei dati contattando il Titolare ai recapiti sopra indicati.
            </p>
          </section>

          {/* SEZIONE 9 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">9. Processi decisionali automatizzati</h2>
            <p>
              Il Titolare non adotta processi decisionali interamente automatizzati, inclusa la profilazione, che producano effetti giuridici sull'interessato o che incidano in modo analogo significativamente sulla sua persona, ai sensi dell'art. 22 del GDPR.
            </p>
            <p className="mt-2">
              Qualora in futuro venissero introdotti tali processi, l'utente ne sarà preventivamente informato e potrà esercitare i diritti previsti dall'art. 22 del GDPR, tra cui il diritto di ottenere l'intervento umano, di esprimere la propria opinione e di contestare la decisione.
            </p>
          </section>

          {/* SEZIONE 10 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">10. Diritti dell'interessato</h2>
            <p>
              Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR) e degli artt. 2-ter e seguenti del D.Lgs. 196/2003, l'utente ha il diritto di:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Diritto di accesso (art. 15 GDPR):</strong> ottenere dal Titolare la conferma che sia o meno in corso un trattamento di dati personali che lo riguardano e, in tal caso, ottenere l'accesso ai dati e alle informazioni relative al trattamento.</li>
              <li><strong>Diritto di rettifica (art. 16 GDPR):</strong> ottenere senza ingiustificato ritardo la rettifica dei dati personali inesatti che lo riguardano, nonché l'integrazione dei dati personali incompleti.</li>
              <li><strong>Diritto alla cancellazione / diritto all'oblio (art. 17 GDPR):</strong> ottenere senza ingiustificato ritardo la cancellazione dei dati personali che lo riguardano, quando sussistano le condizioni previste dalla normativa.</li>
              <li><strong>Diritto di limitazione del trattamento (art. 18 GDPR):</strong> ottenere dal Titolare la limitazione del trattamento quando ricorra una delle ipotesi previste dall'art. 18 del GDPR.</li>
              <li><strong>Diritto alla portabilità dei dati (art. 20 GDPR):</strong> ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che lo riguardano, e ha il diritto di trasmettere tali dati a un altro titolare del trattamento.</li>
              <li><strong>Diritto di opposizione (art. 21 GDPR):</strong> opporsi in qualsiasi momento, per motivi connessi alla propria situazione particolare, al trattamento dei dati personali che lo riguardano basato sull'interesse legittimo. In caso di trattamento per finalità di marketing diretto, l'utente può opporsi in qualsiasi momento senza necessità di motivazione.</li>
              <li><strong>Diritto di revoca del consenso (art. 7.3 GDPR):</strong> revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
              <li><strong>Diritto di reclamo (art. 77 GDPR):</strong> proporre reclamo all'Autorità di controllo competente. In Italia: Garante per la protezione dei dati personali — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a> — Piazza Venezia, 11 – 00187 Roma — Email: <a href="mailto:protocollo@gpdp.it" className="text-primary hover:underline">protocollo@gpdp.it</a> — PEC: <a href="mailto:protocollo@pec.gpdp.it" className="text-primary hover:underline">protocollo@pec.gpdp.it</a></li>
            </ul>
            <p className="mt-4">
              Per esercitare i propri diritti, l'utente può inviare una richiesta scritta al Titolare del trattamento:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Via email: <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a></li>
              <li>Via posta: Eugenio Carlo Fontana — Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI)</li>
            </ul>
            <p className="mt-2">
              Il Titolare si impegna a rispondere alle richieste dell'interessato senza ingiustificato ritardo e, in ogni caso, entro un mese dal ricevimento della richiesta. Tale termine può essere prorogato di ulteriori due mesi, se necessario, tenuto conto della complessità e del numero delle richieste (art. 12.3 GDPR).
            </p>
          </section>

          {/* SEZIONE 11 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">11. Dati dei minori</h2>
            <p>
              Il presente sito e i servizi offerti non sono destinati a minori di 16 anni. Il Titolare non raccoglie consapevolmente dati personali di minori di 16 anni. Qualora il Titolare venisse a conoscenza di aver inavvertitamente raccolto dati personali di un minore senza il consenso del genitore o del tutore legale, provvederà tempestivamente alla cancellazione di tali dati.
            </p>
          </section>

          {/* SEZIONE 12 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">12. Modifiche alla presente Informativa</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente informativa sulla privacy in qualsiasi momento, dandone comunicazione agli utenti attraverso la pubblicazione sulla presente pagina e, ove possibile, attraverso i canali di contatto disponibili. Si prega pertanto di consultare periodicamente questa pagina, prendendo come riferimento la data di ultimo aggiornamento indicata in alto.
            </p>
            <p className="mt-2">
              Qualora le modifiche riguardino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'utente, se necessario.
            </p>
          </section>

          {/* SEZIONE 13 */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-foreground">13. Riferimenti normativi</h2>
            <p>La presente informativa è redatta in conformità a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio del 27 aprile 2016 (GDPR)</li>
              <li>Decreto Legislativo 30 giugno 2003, n. 196 — Codice in materia di protezione dei dati personali</li>
              <li>Decreto Legislativo 10 agosto 2018, n. 101 — Disposizioni di adeguamento del Codice Privacy al GDPR</li>
              <li>Provvedimenti e Linee Guida del Garante per la protezione dei dati personali</li>
              <li>Decisione di esecuzione (UE) 2023/1795 della Commissione del 10 luglio 2023 (EU-US Data Privacy Framework)</li>
            </ul>
          </section>

          {/* CONTATTI FINALI */}
          <section className="bg-card border border-border rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3 text-foreground">Contatti del Titolare</h2>
            <p>
              Per qualsiasi informazione relativa alla presente informativa o per esercitare i diritti sopra descritti, l'utente può contattare il Titolare del trattamento ai seguenti recapiti:
            </p>
            <p className="mt-3">
              <strong>Eugenio Carlo Fontana</strong><br />
              Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia<br />
              P.IVA 07097370485 — C.F. FNTGCR88B12A564Z<br />
              Email: <a href="mailto:superprogrammatore@gmail.com" className="text-primary hover:underline">superprogrammatore@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
