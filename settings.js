//Ubah Image/Thumbnail di folder maslent/pplent/maslent.jpg (Cari fotomu Ubah namnya ganti jadi maslent.jpg trus di gantu make pp mu yang baru


//[ ATUR LIMIT DI BAWAH SNDRI OK ]


// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'e98c45547469', // ubah makai apikeymu ambil di websitenya zhawazein
}

global.apizah = 'e98c45547469' // ubah pakai apikeynya zhazawein ok 

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.autoTyping = false // matikan kalau ga mau mengetik botnya cara matiinya ubah dari true jadi false
//edit aja sesuka hati
global.welcome = `
WELCOME TO THE GROUP 🌸
`
global.left = ` 
GOODBYE 🤧
`
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
global.sapi = 'RAKA RECODE'
//===============================\\
global.wms = '62895395007536' //wm help Pake nomor yng mau pp nya di jadiin Wm
autoread = true //jangan di ubah
global.footer = 'RAKA'//ganti
global.pulsa = "0895395007536"//ganti
global.gopay = "0895395007536"//ganti
global.dana = "0895395007536"//ganti
global.paypal = "---" // biarin aja kalau gaada
global.shopay = "---" // biarin aja kalau gaada
global.saweria = "---" // biarin aja kalau gaada
global.sociabus = "---" // biarin aja kalau gaada
global.bni = "---" // biarin aja kalau gaada
global.bri = "---" // biarin aja kalau gaada
global.bankjatim = "---" // biarin aja kalau gaada
global.jago = "---" // biarin aja kalau gaada
global.neobank = "---" // biarin aja kalau gaada
global.packname = 'RAKA WA MD'//nama wm
global.footer = 'RAKA ©'//ganti
global.ovo = "0895395007536"//ganti
global.ownerlen = "RAKA RECODE"//Ubah
global.owner = ['62895395007536'] //ubh nomor owner hp
global.ownername = "RAKA RECODE" //ubah
global.ytname = "YT: RakaMods"//ubah
global.socialm = "IG: RakaModder"//ubah
global.location = "Indonesia, Bali, Gianyar"//ubah
global.ownernomer = "62895395007536"//ubah nomorhp owner
global.premium = ['62895395007536']//ubah nomor hp premium
global.nomorcs = '62895395007536'//nomormu
global.botname = 'RAKA MD' //ubah
global.linkz = "-"//ubah
global.websitex = "https://youtube.com/@RakaaMods"//ubah
global.botscript = '-'
global.themeemoji = "🌸"//ubah
global.packname = "Sticker By"//ubah
global.author = "RAKA 087734050887"//ubah
global.buyprem = `
LIST HARGA PREMIUM
• --- 2K (PERMANEN)
HARGA SCRIPT
• --- 10K (ENC)
~~~~~~~~~~~~~~~~
PAYMENT
DANA : 087702827269
GOPE : 0895395007536
OVO : 0895395007536

By RakaSTORE
` // <~~ jan di apus ( ` )



global.submenu = `
💬 Sub Menu:
❏ menuai
❏ menuwallpaper
❏ menucerpen
❏ menumaker
❏ menurandomimg
❏ menufun
❏ menuinfo
❏ menuislam
❏ menushort
❏ menuprimbon
❏ menutts
❏ menuowner
❏ menugrub
❏ menudownload
❏ menuother
❏ menutiktok
❏ menuemoji
❏ menuart
❏ menumeme
❏ menutebak
❏ menurandomimgs
❏ menustore
❏ menugoogle
❏ menuprosesingimg
❏ menustalk
❏ menuencode
❏ menuentertainers
❏ menulogo
❏ webmenu
❏ menufilter

`//jan du haous petik nya
global.submenuai =`
{•------» *AI MENU* «------•}
openai < query >
simi < query >
dalle < query >
dalle2 < Query >
voiceopenai < query >
voicesimi < query >
chichi < query >
dokter < query >
dukun < query >
{•------» *AI MENU* «------•}
`// jan di hapus petiknya

global.submenuwallpaper =`
{•------» *WALLPAPER* «------•}
antikaryawankerja
aesthetic
anime
bike
blackpink
boneka
car
chinese
coffee
cosplay
couplepicture
doggo
gamer
hacking
hijab
indo
japanese
kayes
korean
kpop
lizard
malay
meow
notnot
ppcouple2
profilepicture
pubg
randomboy
randomgirl
rose
ryujin
teknologi
thai
ulzzangboy
ulzzanggirl
wallml
wallpapercyber
wallpaperanimex
wallpaperislami
wallpapermeme
wallpapergamer
wallphone
woof
{•------» *END* «------•}
`

global.submenucerpen =`
{•------» *CERPEN* «------•}
ceritahoror
cerpen-sejarah
cerpen-sedih
cerpen-sastra
cerpen-romantis
cerpen-rohani
cerpen-rindu
cerpen-remaja
cerpen-ramadhan
cerpen-petualangan
cerpen-persahabatan
cerpen-perpisahan
cerpen-perjuangan
cerpen-penyesalan
cerpen-pengorbanan
cerpen-pengalaman
cerpen-pendidikan
cerpen-penantian
cerpen-patahhati
cerpen-olahraga
cerpen-nasionalisme
cerpen-nasihat
cerpen-motifasi
cerpen-misteri
cerpen-mengharukan
cerpen-malaysia
cerpen-liburan
cerpen-kristen
cerpen-korea
cerpen-kisahnyata
cerpen-keluarga
cerpen-kehidupan
cerpen-jepang
cerpen-inspirstif
cerpen-gokil
cerpen-galau
cerpen-cintasejati
cerpen-cintasegitiga
cerpen-cintasedih
cerpen-cintaromantis
cerpen-cintapertama
cerpen-cintaislami
cerpen-cinta
cerpen-budaya
cerpen-bahasajawa
cerpen-bahasasunda
cerpen-bahasainggris
cerpen-bahasadaerah
cerpen-anak
{•------» *END* «------•}
`

global.submenumaker =`
{•------» *MAKER* «------•}
attp < text >
attp2 < text >
darahmaker < text >
3dmaker < text >
tembokmaker < text >
kertasterbakar < text >
ultahmaker < text >
cardidulfitri < text >
kueultahmaker < text >
amongusmaker < text >
dotamaker < text >
fpsmaker < text >
mlmaker < text >
mlmaker2 < text >
hengkermaker < text >
neonlovemaker < text >
ledmaker < text >
firaunmaker < text >
3draimbowmaker < text >
summermaker < text >
summer2maker < text >
thunder2maker < text >
lightglowmaker < text >
batmanmaker < text >
bussinesmaker < text >
ohnomaker < text >
tololsert < text >
bucinsert < text >
jadianime < text >
nulis < text >
candy < text >
blackpinkneon < text >
deepsea < text >
scifi < text >
fiction < text >
berry < text >
papercut <text>
transformer <text>
neondevil <text>
3davengers <text>
3dstone <text>
3dstone2 <text>
summertime <text>
thunder <text>
window <text>
graffiti <text>
graffitibike <text>
pornhub <text>
glitch <text>
blackpinkart <text>
glitch2 <text>
glitch3 <text>
3dspace <text>
lion <text>
3dneon <text>
greenneon <text>
bokeh <text>
holographic <text>
bear <text>
wolf <text>
joker <text>
dropwater <text>
dropwater2 <text>
thewall <text>
neonlight <text>
natural <text>
carbon <text>
pencil <text>
blackpink2 <text>
neon <text>
neonlight2 <text>
toxic <text>
strawberry <text>
discovery <text>
1917 <text>
lion2 <text>
papercut < text >
transformer < text >
neondevil < text >
3davengers < text >
3dstone < text >
3dstone2 < text >
summertime < text >
thunder < text >
graffiti < text >
graffitibike < text >
pornhub < text >
glitch < text >
blackpinkart < text >
glitch2 < text >
glitch3 < text >
3dspace < text >
lion < text >
3dneon < text >
greenneon < text >
bokeh < text >
holographic < text >
bear < text >
wolf < text >
joker < text >
dropwater < text >
dropwater2 < text >
thewall < text >
neonlight < text >
natural < text >
carbon < text >
pencil < text >
blackpink2 < text >
neon < text >
neonlight2 < text >
toxic < text >
strawberry < text >
discovery < text >
1917 < text >
sci_fi < text >
ancient < text >
fabric < text >
hoorror < text >
whitebear < text >
juice < text >
batman2 < text >
multicolor < text >
wonderful < text >
sketch < text >
marvel < text >
foggy < text >
writing < text >
halloweenfire < text >
halloween < text >
watercolor < text >
classic < text >
{•------» *END* «------•}
`
global.submenurandomimg =`
{•------» *RANDOM IMG* «------•}
animawall [query]
animawall2 [query]
animbite
animblush
animbonk
animbully
animcringe
animcry
animcuddle
animdance
animeawoo
animecuddle
animecry
animeglomp
animehandhold
animehappy
animehighfive
animekiss
animelick
animemegumin
animeneko
animenom
animepat
animepoke
animeslap
animesmile
animesmug
animeslap
animesmug
animewave
animewlp
animewink
animeyeet
avatar
awoo
bully
couplepp
cringe
cry
dance
feed
foxgirl
gecg
gura
handhold
happy
highfive
hug
husbu
kiss
lick
loli-waifu
neko
neko2
nom
pat
randomanime
randomart
randomawloli
randombite
randombts
randombully
shinobu
shota
slap
smile
smug
tickle
waifu
waifu2
wave
{•------» *END* «------•}
`
global.submenufun =`
{•------» *FUN* «------•}
artinama
cekmati
suitwithbot
puisi
namarandom
quotesimage
quotesanimebijak
truth
dare
tictactoe
delttt
tebak [lagu]
math [mode]
suitpvp [tag]
akinator
tebaklagu
say [text]
define [text]
how [text]
when [text]
where [text]
is [text]
what [text]
can [text]
rate [text]
coolcheck [tag]
stupidcheck [tag]
waifucheck [tag]
evilcheck [tag]
dogcheck [tag]
hotcheck [tag]
smartcheck [tag]
uncleancheck [tag]
greatcheck [tag]
beautifulcheck [tag]
awesomecheck [tag]
prettycheck [tag]
lesbiancheck [tag]
gaycheck [tag]
cutecheck [tag]
uglycheck [tag]
hornycheck [tag]
charactercheck [tag]
cerhantu
lovelycheck [tag]
couple
soulmate
hot
sexy
kind
idiot
handsome
beautiful
cute
pretty
lesbian
noob
bastard
foolish
nerd
asshole
gay
smart
stubble
dog
horny
cunt
wibu
noobra
nibba
nibbi
comrade
mumu
rascal
scumbag
nuts
fagot
scoundrel
ditch
dope
gucci
lit
dumbass
crackhead
mf
motherfucker
sucker
fuckboy
playboy
fuckgirl
playgirl
quotes
{•------» *END* «------•}
`
global.submenuinfo =`
{•------» *INFORMASI* «------•}
jalantikus
infogempa
weather
myapikey
cekapikey
infokota
hexcode
cekresi
{•------» *END* «------•}
`

global.menuislam =`
{•------» *ISLAMIC* «------•}
alquran
alquranaudio
kisahnabi
jadwalsholat
asmaulhusna
{•------» *END* «------•}
`
global.submenushort =`
{•------» *SHORT* «------•}
shortlink1
shortlink2
shortlink3
shortlink4
ouolink    
{•------» *END* «------•}
`
global.submenuprimbon =`
{•------» *PRIMBON* «------•}
nomorhoki
artimimpi
ramalanjodoh
ramalanjodohbali
ramalancinta
ramalannasib
suamiistri
kecocokannama
kecocokanpasangan
artinama2
jadianpernikahan
sifatusaha
pekerjaan
rejeki
penyakit
tarot
fengshui 
haribaik
harikeren
harisial
harinaga
arahrejeki
peruntungan
wetonjawa
sifat
keberuntungan
memancing
masasubur
zodiak
shio
{•------» *END* «------•}
`
global.submenutts =`
{•------» *TEXT TO SPECH* «------•}
ttsinglish
ttsind
ttsjpn    
{•------» *END* «------•}
`
global.submenuowner =`
{•------» *OWNER MENU* «------•}
setpppanjang
self
addvn
delvn
listvn
public
join [link]
leavegc
setbio
addprem
delprem
bctext [Rawan Banned]
bcimage [Rawan Banned]
bcvideo [RawanBanned]
setbotpp [image]
setthumb [reply img]
setexif
welcome on/off
hijack
block [tag/number]
unblock [tag/number]
{•------» *END* «------•}
`
global.submenugrub =`
{•------» *GROUP MENU* «------•}
grouplink
grupsetting
ephemeral [option]
setgcpp [image]
setname [text]
setdesc [text]
group 
resetgrouplink
editinfo [option]
menfess [number]
add [user]
kick [reply/tag]
hidetag [text]
tagall [text]
antilinkgc [on/off]
antilinktg [on/off]
antilinktt [on/off]
antilinkytch [on/off]
antilinkytvid [on/off]
antilinkig [on/off]
antilinkfb [on/off]
antilinktwit [on/off]
antilinkremove [on/off]
antilinkdeletekick [on/off]
antivirus [on/off]
antitoxic [on/off]
antiwame [on/off]
nsfw [on/off]
promote [reply/tag]
demote [reply/tag]
react [reply emoji]
vote
devote
upvote
checkvote
delvote
{•------» *END* «------•}
`
global.submenudownload =`
{•------» *DOWNLOAD* «------•}
fotocp (New)
tiktok [url]
tiktokaudio [url]
instagram [url]
spotify [url]
mediafire [url]
ytmp3 [url|quality]
ytmp4 [url|quality]
play [query]
gitclone [repo link]
song [query]
yts [query]
lyrics [query]
gimage [query]
google [query]
anime [query]
pinterest [query]
image [query]
wallpaper [query]
searchno [number]
horoscope [query]
imdb [movie name]
weather [loc name]
genshin [char name]
wikimedia [query]
ytsearch [query]
ringtone [query]
tourl[reply image/video]
toqr [reply text]
toimage [reply stick]
sticker [reply img|gif]
take [reply img|gif|stik]
smeme [reply img]
emoji [emoji]
tovideo [reply img]
togif [reply stick]
tovn [reply aud]
tomp3 [reply vn]
toaudio [reply vid]
ebinary [reply txt]
dbinary [reply txt]
tinyurl [link]
styletext [text]
volume [reply aud]
bass [reply aud]
blown [reply aud]
deep [reply aud]
earrape [reply aud]
fast [reply aud]
fat [reply aud]
nightcore [reply aud]
reverse [reply aud]
robot [reply aud]
slow [reply aud]
smooth [reply aud]
squirrel [reply aud]
{•------» *END* «------•}
`
global.submenuother =`
{•------» *OTHER* «------•}
afk
id
toqr [link]
repeat
readmore [text]
toviewonce
fliptext [text]]
chatinfo
alive
ping
owner
menu
delete
quoted
listpc
listgc
donate
chord
ssweb
myip
request
report [bug]
removebg [reply img]

{•------» *END* «------•}
`
global.submenutiktok =`
{•------» *TIKTOK* «------•}
tiktokgirl	
tiktoknukhty
tiktokpanrika
tiktokkayes
tiktoknotnot
tiktokghea
tiktoksantuy
tiktokbocil
{•------» *END* «------•}
`
global.submenuemoji =`
{•------» *EMOJI* «------•}
instagramemoji
facebookemoji
iphoneemoji
samsungemoji
joyemoji
skypeemoji
twitteremoji
whatsappemoji
microsoftemoji
googleemoji
pediaemoji
microsoftemoji
{•------» *END* «------•}
`
global.submenuart =`
{•------» *ART* «------•}
art
ktpmaker
pornhub
glitch
avanger
space
ninjalogo
wolflogo
stel3d
wallgravity 
{•------» *END* «------•}
`
global.submenumeme =`
{•------» *MEME* «------•}
darkjoke
memeindo
randommeme
{•------» *END* «------•}
`
global.submenutebak =`
{•------» *TEBAK FUN* «------•}
tebak caklontong
tebak lagu
tebak gambar
tebak kata
tebakanime
tebakanime
tebakkabupaten
tebakkimia
tebakkalimat
tebakbendera
tebaklirik
{•------» *END* «------•}
`
global.submenurandomimgs =`
{•------» *RANDOM IMGS* «------•}
bts
exo
elf
loli
neko
waifu
shota
husbu
sagiri
shinobi
husbu
shinobu
mehumin
wallanime                
{•------» *END* «------•}
`
global.submenustore =`
{•------» *STORES* «------•}
liststore
deletemessage 
updatelist
addlist
cekstatus
setstatus
bayar
{•------» *END* «------•}
`
global.submenugoogle =`
{•------» *GOOGLE* «------•}
google < Query >
gimage < Query >
googleimage < Query >
googleimage2 < Query >
{•------» *END* «------•}
`
global.submenuprosesingimg =`
{•----» *PROSESING IMAGE* «----•}
upscaler <reply image>
jadianime <reply image>
jadianime2 <reply image>
jadianime2 <reply image>
jadianime4 <reply image>
upscale <reply Image>
upscale2 < reply img >
remini <reply>
remini2 <reply>
arcane < img/reply>
art < img/reply>
comics < img/reply>

{•------» *END* «------•}
`
global.submenustalk =`
{•------» *STALKING* «------•}
stalknickaov
stalknickchess
stalkbigo
stalkcocofun
stalkig
stalkgithub
stalktwitter
stalktiktok
{•------» *END* «------•}
`
global.submenuencode =`
{•------» *ENDCODE* «------•}
binary < Query >
encodebinary < Query>
ebinary < Query >
dbinary < Query >
codemorse < Query ><
{•------» *END* «------•}
`

global.submenuentertainers =`
{•------» *ENTERTAINERS* «------•}
taugaksih
faktaunik
motivasi
katabijak
{•------» END «------•}
`
global.submenulogo =`
{•------» *LOGO MENU* «------•}
kanekilogo
nekologo
guralogo
lolilogo
nekosad1
{•------» *END* «------•}
`
global.subwebmenu =`
{•------» *WEB MENU* «------•}
webultah
webdeface
websad
websad1
{•------» *WEB MENU* «------•}
`
global.submenufilter =`
{•------» *FILTER MENU* «------•}
pkifilter < reply img >
circlefilter < reply img >
brightfilter < replyimg >
blurfilter < replyimg >
{•------» * MENU* «------•}
`

//jangan hapus petik `

global.wm = "RAKA WHATSAAP MD"//ubah Jadi nama wm
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done?!', 
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    premime: 'Fitur Khusus Premium Jika Ingin Mendaftar Chat Owner',
    owner: 'Fitur ini hanya dapat digunakan oleh owner', 
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur yang Digunakan Hanya Untuk Obrolan Pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'Dalam proses...',
    linkm: 'Di mana tautannya?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.limitawal = { //limit ges
    premium: "UNLIMITED",
    free: 25// atur limitinya sesuka hati
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
