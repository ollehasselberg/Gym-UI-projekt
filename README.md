1. -- PROBLEM STATEMENT --

Att boka ett gympass kan innebära en varierad upplevelse, antingen är det för många knapptryck, många ointressanta funktioner som saktar ner processen, eller så saknas det helt enkelt ett smidigt sätt att snabbt få en överblick av sina bokade pass
eller för att boka nya pass. Denna lösning är tänkt att användaren så snabbt som möjligt ska kunna logga in och direkt för en överblick över aktiviteter som är sparade på sidan.

2. -- STAKEHOLDERS --

2a. ANVÄNDARE (medlem)
  se träningspass
  boka ett pass
  få tydlig feedback på bokning

2b. ADMIN

 skapa nya pass
 hantera befintliga pass
 ha överblick över bokningar

2c. GÄST
Vill se information om gymmet
Kan se pass men inte boka (inloggningskrav)

3. -- KRAVLISTA --

3a. Funktionella krav
Användaren ska kunna se en lista med träningspass.
Användaren ska kunna klicka på ett pass för att se detaljer.
Användaren ska kunna boka ett pass via en knapp.
Systemet ska visa visuell feedback när ett pass bokas.
Systemet ska spara bokningsstatus (LocalStorage).
Admin ska kunna skapa ett nytt pass via formulär (UI-prototyp).

3b. Icke-funktionella krav
Användbarhet: Gränssnittet ska vara enkelt och intuitivt.
Prestanda: Sidan ska laddas snabbt och inte innehålla externa beroenden.
Konsekvent: CSS ska vara konsekvent med återanvändbara klasser.

4. -- PRIORITERING (MoSCoW) --

4a. Must Have

Lista för träningspass
Bokningsfunktion
Visuell feedback för bokning
Semantisk HTML-struktur
Responsiv och konsekvent CSS

4b. Should Have

Dark mode-toggle
LocalStorage för att spara tema eller bokningar

4c. Could Have
ive filter på pass
Admin-panel med fler funktioner

4d. Won’t Have

Back-end & databas
Inloggningssystem
Lösning för betalning


5. -- USE CASE: ANVÄNDARE (medlem) --

5a. PRECONDITIONS 

Användaren befinner sig på startsidan där ett träningspass finns tillgängligt i listan.

5b. MAIN FLOW

Användaren navigerar till startsidan.
Systemet visar en lista med träningspass.
Användaren klickar på ett pass.
Detaljsidan visas.
Användaren klickar på “Boka”.
Systemet ändrar knappens status och visar bekräftelse.
Bokningen sparas i LocalStorage.

5c. ALTERNATE FLOW

Om användaren redan bokat passet:
Systemet visar att passet redan är bokat.
Bokningsknappen är inaktiverad eller ändrar text till “Redan bokad”.

5d. POSTCONDITIONS 

Passet är markerat som bokat.
Bokningsstatus är sparad lokalt i webbläsaren.

6. -- CHANGE NOTE --

6a. Jag lade till flera js-interaktioner, till en början hade jag bara "toggle dark mode". Detta gjorde jag för att laborera lite extra med JavaScript då
det är det jag känner mig mest osäker på. En viktig grej jag lärde mig genom detta var hur LocalStorage fungerar. (denna används både för dark theme och counter för bokningar)

6b. Jag gjorde småändringar i style.css då jag inte kände mig helt nöjd med hur det såg ut till en början. Här hämtade jag hjälp och inspiration från ChatGPT.
Jag ville ha en clean landing page där man direkt kan se tydligt vilka pass man har bokat, och vad som finns tillgängligt. Mestadels gjorde jag ändringar för att förbättra 
åtkomsten och minska tiden för att utföra uppgifter till dessa. 




