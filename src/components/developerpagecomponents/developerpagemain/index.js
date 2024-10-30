import React, { useState } from "react";
import "./developerpagemain.scss";
import Devrighticon from "../../../assets/svg/devrighticon";

export default function Developerpagemain() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setActiveButton(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="developer-page-main-layout">
      <div className="developer-page-main-left-eye">
        <div className="developer-page-main-left-eye-buttons-content">
          <div
            className={`dev-pagination-button ${
              activeButton === "overview" ? "active" : ""
            }`}
          >
            <button type="button" onClick={() => handleButtonClick("overview")}>
              Overview
            </button>
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "quickstart" ? "active" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => handleButtonClick("quickstart")}
            >
              Quickstart
            </button>
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "api" ? "api-drp-active" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => {
                handleButtonClick("api");
                toggleDropdown("api");
              }}
            >
              API Reference <Devrighticon />
            </button>
            {activeDropdown === "api" && (
              <div
                className={`api-ref-dropdown-main ${
                  activeDropdown === "api" ? "open" : ""
                }`}
              >
                <div className="api-ref-dropdown-button">createWallet</div>
                <div className="api-ref-dropdown-button">
                  {"<WalletProvider>"}
                </div>
                <div className="api-ref-dropdown-button">
                  {"<WalletWidget>"}
                </div>
              </div>
            )}
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "recipes" ? "recipe-drp-active" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => {
                handleButtonClick("recipes");
                toggleDropdown("recipes");
              }}
            >
              Recipes <Devrighticon />
            </button>
            {activeDropdown === "recipes" && (
              <div
                className={`recipes-dropdown-main ${
                  activeDropdown === "recipes" ? "open" : ""
                }`}
              >
                <div className="recipes-dropdown-button">Wagmi</div>
                <div className="recipes-dropdown-button">RainbowKit</div>
                <div className="recipes-dropdown-button">
                  Solana Wallet Adapter
                </div>
                <div className="recipes-dropdown-button">Sats Connect</div>
                <div className="recipes-dropdown-button">Web3-Onboard</div>
                <div className="recipes-dropdown-button">Viem</div>
                <div className="recipes-dropdown-button">MIPD</div>
                <div className="recipes-dropdown-button">
                  Detecting Other Wallets
                </div>
              </div>
            )}
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "faq" ? "active" : ""
            }`}
          >
            <button type="button" onClick={() => handleButtonClick("faq")}>
              FAQ
            </button>
          </div>
        </div>
      </div>
      <div className="developer-page-main-centered-content">
        <div className="developer-page-main-centered-content-alignment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, recusandae facere et laborum, officiis illo perferendis vero corrupti veniam fugit adipisci, error cum deserunt ipsam amet numquam aliquid mollitia quasi!
            Commodi vero tenetur nam vitae, a, libero non quis soluta ea ad harum excepturi iusto nisi praesentium minima voluptate similique veniam debitis blanditiis consequuntur vel sit placeat eaque. Deleniti, quam!
            Dolore ullam iusto atque fugit nulla assumenda itaque doloremque natus sapiente cupiditate. Cumque mollitia quae rerum maxime doloremque assumenda nobis incidunt fuga provident vitae! Dolor repellendus ad adipisci illum optio?
            Consequatur similique illum qui cum tenetur. Ab, impedit minima soluta exercitationem suscipit optio possimus? Enim minus asperiores beatae natus. Praesentium ex porro incidunt, illum cupiditate aperiam quisquam iusto! Quod, libero.
            Eos tempore eum veniam rem modi eveniet consequuntur, consequatur vitae quasi ab, necessitatibus voluptas non repudiandae, architecto perspiciatis officiis optio ea temporibus dignissimos odio similique. Vitae perferendis ipsum vel repellat.
            Numquam architecto sed inventore voluptates corrupti. Beatae ad molestias debitis modi necessitatibus officia similique libero temporibus doloremque facere repudiandae vel deleniti nesciunt voluptate unde nam a itaque, eum consectetur voluptatem!
            Pariatur cumque earum autem possimus voluptates non eum assumenda deserunt et, nulla ullam incidunt voluptate dignissimos nihil, est debitis fugiat beatae sint corrupti! Maiores quisquam ab animi. Assumenda, reiciendis labore.
            Harum tempore laborum odio quasi velit adipisci voluptatum sequi ullam facilis, facere, necessitatibus laudantium maiores fugiat vitae, quaerat repudiandae nulla quod. Accusantium quidem, enim officia harum incidunt quis hic inventore.
            Debitis aspernatur nam optio culpa eligendi ratione, nulla quia facere, officiis veniam quasi error aliquid quaerat natus ipsam iure illum, quas deserunt? Sit odio possimus ea est id rerum perspiciatis.
            Rem quidem ducimus tenetur. Voluptatum tenetur quasi accusamus impedit quae ratione ab, ullam, fuga commodi laborum nostrum quaerat sint labore expedita quis cumque, deleniti consectetur tempora? Inventore consectetur dicta molestiae!
            Illo, dolorum excepturi totam asperiores eligendi ut. Corrupti, saepe dolore dolores cum facere, cumque tenetur fugit distinctio ipsa labore possimus ipsam necessitatibus sunt repellendus harum quia commodi excepturi sequi aliquid.
            Praesentium voluptas exercitationem dolores temporibus cum dolorem aperiam! Reprehenderit omnis adipisci quo, similique numquam delectus quidem totam? Minus numquam deserunt qui excepturi accusamus quidem! Perferendis facere fugit id. Nisi, modi?
            Quibusdam tempora expedita distinctio quisquam. Ullam error impedit modi totam, magnam repudiandae adipisci temporibus iste perferendis rem quos reprehenderit eaque odio soluta a placeat. Quae fuga at ut porro ipsam!
            Quo enim quaerat neque aliquid odit nam doloremque incidunt, illo sapiente inventore, possimus consequatur quis numquam velit sint quam doloribus laudantium laborum harum quia obcaecati? Est molestias repellendus sint quidem?
            Unde a aliquid velit sed error, illum fugit! A, in nihil consectetur possimus, nemo nobis dicta minima odit vitae corrupti hic dolorum qui non fuga mollitia magnam illo deleniti ullam!
            Vitae alias sapiente tempora recusandae at asperiores magni accusamus. Ratione non facilis aliquid ab eveniet deserunt vel iure autem pariatur, ea voluptas ad. Recusandae modi delectus repellendus facilis, numquam sunt?
            Cupiditate, sit! Neque ea, nisi officia magni velit aliquid sed vitae suscipit tenetur fugiat obcaecati, nesciunt, eaque maxime quia maiores nam et ratione reprehenderit atque ad asperiores earum veritatis. Sunt?
            Voluptas nesciunt deserunt quas atque eum inventore, perferendis eaque blanditiis ducimus, impedit magni recusandae ut excepturi explicabo itaque animi magnam aliquam eos temporibus optio. Quas vitae mollitia labore repellendus accusamus.
            Culpa autem doloribus officiis quae totam quas ad, vero magni voluptatem fugiat sit illum animi voluptate necessitatibus repudiandae voluptas iusto ipsa alias porro. Quo corrupti placeat saepe. Iste, hic quia.
            Nisi nesciunt placeat sint qui fuga tempore illo praesentium nam, fugiat voluptatem nobis quae eius laborum commodi assumenda eveniet provident distinctio maiores ratione itaque? Itaque perferendis ipsa dolorum facilis odio.
            Debitis consequatur, amet quis libero nihil harum voluptatem dicta a illo quaerat tempore maiores aliquid eius iusto. Qui quas rem, quibusdam nulla laboriosam iste tenetur aut porro blanditiis laudantium ullam!
            Dignissimos consequatur, aliquam, atque reiciendis nesciunt fuga molestiae earum debitis amet iusto dicta sit quis pariatur quaerat omnis ex odit ad, accusamus aut. Debitis dolor aperiam suscipit quam, exercitationem veniam!
            Odit rem illum ut aperiam et voluptatibus itaque vel animi quos reiciendis quas dignissimos ipsam, ex quasi iste saepe est quod cum totam? Blanditiis deserunt animi ipsum laborum, pariatur cum?
            Ea quo voluptatem quae culpa labore, minus accusantium libero in eos voluptatibus recusandae. Necessitatibus commodi amet, optio, molestias perspiciatis praesentium quam, magnam veniam soluta quos voluptatum sit aperiam aliquid eum!
            Dolores consequatur officiis doloremque, pariatur tempore autem ullam! Natus minima nisi error aliquid illum optio dolore necessitatibus voluptatem iste, ex totam est sapiente eos! Dignissimos voluptas ipsam ex laudantium et.
            Debitis assumenda ab quasi possimus ea tempora ipsum porro et harum! Aliquid sunt laborum minima excepturi magnam harum explicabo fuga sapiente nam quae, non, quasi illo ea saepe dolor tempora.
            Tempore sunt distinctio minima ad esse impedit beatae ipsum adipisci id voluptates vero qui nostrum in, commodi ratione voluptatem molestiae reiciendis cum, enim nobis. Fugiat iusto autem aut necessitatibus odit?
            Quibusdam maiores aut eaque eveniet error et porro, laudantium veniam dolorem sunt, possimus quasi natus cupiditate sequi illo libero fugit! Nihil distinctio at sed vero tempore eveniet numquam dolorem tempora.
            Repudiandae debitis maiores sit, laudantium expedita omnis necessitatibus sequi tempore repellendus pariatur itaque in dignissimos saepe ipsa magni eaque dolor quos cupiditate consequuntur? Eum, quo! Ad corrupti doloribus ut architecto?
            Maiores mollitia quibusdam cumque accusamus atque repellendus amet minima odit nesciunt, id nulla! Consequatur facere illo numquam illum odio labore, esse dolores iure qui harum vero suscipit assumenda delectus doloremque.
            Aliquid voluptatem tenetur, rerum quos asperiores facere omnis? Nesciunt quam ut eum minima deserunt harum dolore aperiam rem, adipisci eos ab molestias repellendus optio unde minus doloribus deleniti. Nemo, optio?
            Nulla perspiciatis repudiandae consequatur quis inventore repellat vitae. Animi dolores explicabo, facere quaerat rerum ipsa repellat sapiente exercitationem hic atque porro dicta accusantium sequi? Alias sit deserunt animi architecto reprehenderit!
            Unde provident impedit corrupti quis obcaecati ad maiores repellat aliquam, dicta voluptatibus odit molestiae, officia earum numquam voluptates nemo! Numquam quod id aperiam voluptatem quo minima soluta accusamus ducimus cumque.
            Amet magni hic vitae dolorem error itaque? Vitae, tempore ut consequuntur aut necessitatibus quis adipisci. Id laudantium obcaecati nobis quo consequuntur deserunt explicabo similique necessitatibus, qui eveniet natus eum numquam.
            Ad dolorum odio adipisci recusandae nam minima vitae, odit velit explicabo voluptatem perferendis deserunt reprehenderit expedita sint. Consequatur, neque suscipit! Harum nesciunt ipsa dicta animi et unde illum, reprehenderit eos?
            Consequuntur quod, iure ea alias vel molestiae tempore iusto quo explicabo rem. Maiores nesciunt expedita quae, labore enim suscipit esse distinctio aperiam totam, voluptatibus nam iste atque molestiae corrupti doloribus.
            Nisi blanditiis error repudiandae similique assumenda vel possimus illum facere incidunt, enim nesciunt sapiente ipsum labore ullam dignissimos accusamus itaque, inventore magnam? Animi tempora et, deserunt natus maiores dignissimos eius!
            Eum et magnam voluptas quas quo sed neque voluptatibus eligendi maiores? Possimus nobis eaque aspernatur porro quasi est commodi sapiente illum, deserunt sequi unde eum accusantium voluptas animi illo accusamus.
            Iure impedit quidem cumque est velit optio, quam molestiae, quibusdam culpa doloribus neque, esse tenetur vero doloremque asperiores. Animi eligendi architecto ut totam consequatur nulla maxime commodi pariatur hic quasi!
            Doloribus maxime, tempora omnis saepe consectetur molestiae nam possimus dolores quos ipsa ad fugiat. Esse voluptates aliquam quae non dignissimos sed, vero dolore provident nisi porro sit doloribus repudiandae perspiciatis.
            Laboriosam facere quae corporis excepturi veritatis ea repellat esse ipsum eius labore qui in assumenda natus optio, eum explicabo cum quasi, recusandae nobis? Recusandae, deleniti. Impedit dolorem est excepturi sit!
            Iste unde, dolore ipsum provident voluptatibus nulla illo doloribus minus tempora deleniti dolorum nesciunt, aliquid minima itaque a. Doloribus, animi! Corporis quas provident, non iste est ad consectetur quos quibusdam.
            Beatae alias nulla hic nobis magni exercitationem facilis architecto, quod aliquam distinctio sed veritatis delectus incidunt quis velit natus dolores laborum maxime in, necessitatibus quidem. Eos minus consequatur itaque quod.
            Nulla vel nihil, fuga voluptas minus sapiente ea placeat eius quia cum numquam blanditiis dolorem enim cumque quo minima optio! Autem aliquam, perferendis ratione dicta officia a ad debitis dignissimos.
            Optio rerum, cupiditate aut illum voluptatibus vitae magni repellat voluptatem amet eos ad quo aperiam cumque exercitationem error commodi culpa dolorem distinctio nulla? Consequuntur debitis eos, suscipit inventore quod voluptatem?
            Natus consectetur libero magnam eum et cum enim, totam accusamus quos est molestias id vitae veritatis dignissimos. Odit reiciendis maiores qui vitae architecto facilis magni. Quo cupiditate accusamus sequi illum?
            Nam officia voluptatum vero, sequi dolorum animi, sunt magni consectetur amet facilis explicabo tenetur. Sit, ut exercitationem! Omnis, soluta a voluptatum esse sint ipsam in dolorem porro, qui inventore placeat.
            Ducimus ipsam modi eligendi molestiae! Minima nulla, distinctio incidunt voluptas enim dignissimos placeat totam dolorum consequatur eum rerum! Rerum fugiat harum suscipit, laborum sed sequi. Provident, tenetur quos? Illo, impedit.
            Veniam eaque pariatur atque explicabo labore nulla cum nemo ad reprehenderit, incidunt fugit minus sed suscipit perferendis quo ut architecto tempore est libero sunt blanditiis molestiae! Delectus itaque veniam sed?
            Sed iusto et voluptate quisquam tenetur similique distinctio fugit quod, ipsum repellat officiis rerum, harum ducimus velit perspiciatis accusamus ratione doloremque corrupti! Repellendus sunt cupiditate quibusdam inventore, odio eum in.
            Omnis possimus ab odit adipisci cumque corrupti voluptatibus aliquam quos excepturi libero soluta autem provident cupiditate consequuntur dignissimos delectus, facere accusantium labore ipsum sapiente ratione non! Consectetur perspiciatis mollitia commodi?
            Ad, eum. Atque veritatis quis facere itaque obcaecati illo consectetur eligendi sint praesentium vero delectus iure totam soluta saepe odio beatae ipsum aut, distinctio, fuga veniam non cumque nostrum dolorem?
            Eligendi, voluptatum, harum doloremque a hic quas obcaecati dolores voluptate dolorem distinctio sequi natus culpa iusto repellendus omnis. Ab omnis ipsum repellendus fugiat minus autem iusto delectus vitae minima nemo!
            Excepturi debitis quaerat enim quisquam quod ab, soluta obcaecati amet asperiores quibusdam ut neque ad quasi, quae dicta autem tempore. Quibusdam, saepe eius. Pariatur quo, nesciunt expedita ex reiciendis doloribus.
            Natus facere temporibus eius hic consectetur. Doloremque delectus nulla harum dolores, nihil saepe repellendus omnis provident esse, quidem accusantium? Ratione, velit esse fuga hic ipsam id temporibus quod placeat magnam?
            Necessitatibus distinctio doloribus praesentium tenetur animi placeat iure atque facilis fuga tempore officiis nam, tempora dicta ducimus architecto velit corrupti consectetur accusamus. Incidunt vel obcaecati provident dolorum veritatis rerum perspiciatis.
            Quisquam hic quo fugiat quam cum id, dolorum adipisci officiis obcaecati reprehenderit nulla illum praesentium aut, mollitia, repudiandae maxime aperiam eos eligendi animi esse ipsum? Facilis ullam velit doloribus ad.
            Amet dignissimos quia, laudantium blanditiis quas reprehenderit ea illum sit distinctio sint dolorem, non, totam quis qui quam asperiores fugiat porro nulla! In nam quae quibusdam nihil velit eius praesentium!
            Dolore mollitia quas ea voluptatibus amet ipsam, veniam quia corporis accusantium totam aliquid expedita ratione, minima explicabo velit dolorem. In nemo aperiam, exercitationem optio minima eaque repellat doloribus molestias deleniti!
            Debitis dolorem numquam, ducimus rem qui minima fugit doloremque accusantium saepe aut consequatur incidunt excepturi et facilis tempore est cum illum totam quas fugiat blanditiis? Aut voluptate eius itaque assumenda!
            Odio ducimus fugiat delectus incidunt maiores possimus animi suscipit! Nostrum sapiente voluptate nisi, facilis, vel quae eum repellat eligendi, obcaecati at minima? Vel tempora facere deleniti assumenda voluptas quaerat. Sunt.
            Quisquam excepturi consequatur sapiente ipsum facere, impedit incidunt veniam consectetur porro ratione quos temporibus deleniti accusantium odit, quibusdam dolor ullam facilis, nostrum corrupti. Totam consequatur fugit at necessitatibus laboriosam sed.
            Velit reiciendis ab sequi rem, dignissimos cumque nihil eveniet nam a iusto asperiores nulla soluta quam debitis amet non possimus inventore! Architecto, at. Aut ab labore officiis, eaque dolorem minus.
            Atque libero excepturi consequatur mollitia velit facilis magni cumque quaerat. Ratione reiciendis enim repellat eveniet! Sed praesentium voluptates cum blanditiis fugiat suscipit, molestias rerum amet maiores optio temporibus, at harum.
            Delectus quas quam aut ut eaque inventore animi ullam quae natus ducimus mollitia temporibus pariatur vitae, explicabo provident corporis aperiam reiciendis distinctio consectetur ad unde voluptates. Dolorem labore itaque fuga?
            Earum quam doloremque, saepe temporibus iusto tenetur officiis repudiandae labore ipsam optio laudantium non nostrum! Dolorum atque similique adipisci quod. Recusandae ullam corrupti magnam quibusdam autem impedit ducimus repudiandae quia.
            Laudantium iure, in dolores distinctio animi velit explicabo, inventore repellendus alias libero dignissimos beatae blanditiis quaerat ex iste aspernatur tenetur sint delectus veritatis, excepturi possimus ipsa optio quasi. Dicta, tempora?
            At sed quos accusantium tempore deleniti, atque dignissimos cum voluptate debitis similique molestias sint enim mollitia corrupti nobis veritatis quidem nostrum. Id ut ipsum animi dignissimos aliquam voluptatibus, itaque libero.
            Velit neque sapiente sint illum asperiores deserunt. Illo voluptates veniam laborum non natus aperiam odio necessitatibus blanditiis harum distinctio molestiae accusantium autem, beatae quibusdam voluptas molestias, error voluptatem sequi commodi.
            Amet quo at eos illum, neque iusto aut et natus rerum qui, accusamus soluta praesentium minus libero laboriosam placeat dolores ipsam quam vitae aperiam vero mollitia. Beatae temporibus veniam quae!
            Autem quaerat doloremque tempora minus? Ut omnis tenetur enim sit exercitationem amet perferendis dolore eum voluptatibus doloremque, voluptas obcaecati sunt molestias excepturi similique doloribus et deserunt quia. Minus, similique aperiam.
            Ipsum ea quibusdam facere similique consequatur! Cupiditate doloribus at dolores porro vero blanditiis, velit facere! Natus laboriosam, cum quos soluta distinctio sapiente reiciendis hic dolorum velit, laudantium adipisci debitis fuga!
            Consectetur nesciunt ratione incidunt? Porro, sint. Nihil perferendis enim fuga exercitationem quos aliquid reiciendis nobis suscipit placeat sit voluptas nesciunt, repellendus eaque soluta aut sint itaque! Dolorum veritatis reiciendis vitae!
            Earum cupiditate quae sunt sit. Suscipit porro optio, ipsam cumque repudiandae atque molestias necessitatibus saepe quasi nam dolorem expedita recusandae ratione esse totam asperiores soluta assumenda magnam ipsa possimus nostrum!
            Excepturi, maiores harum! Possimus numquam impedit labore eaque earum modi facere perferendis reprehenderit sit laborum cum in accusantium culpa quisquam ipsam neque sapiente quasi quas pariatur consectetur, quidem iusto beatae!
            Similique quia repellat cum, minima perspiciatis molestias illum id neque voluptates dicta repellendus modi fuga aut velit atque magni nemo dignissimos sed vero, illo doloribus placeat. Quas voluptate veritatis consequuntur.
            Eveniet magnam voluptates eligendi placeat iusto saepe error necessitatibus enim repudiandae reprehenderit, aliquam suscipit dolorum consequatur atque eos nemo commodi. Id, blanditiis dolores. Suscipit voluptas doloremque accusamus vero molestiae dolorem?
            Perspiciatis in iste beatae rem fuga enim fugit soluta quas, odio sed vero deleniti reprehenderit eaque at odit cupiditate omnis dolore necessitatibus culpa similique consequatur veritatis! Delectus eius ea necessitatibus.
            Aliquam tempore quidem voluptates quibusdam eos, minima minus est suscipit! Ipsa aut impedit dolorum, maxime maiores odit sequi, ea repellendus eligendi aliquam, consequuntur exercitationem incidunt quo dignissimos totam magnam earum.
            Ratione voluptas nesciunt nemo culpa perspiciatis voluptate est, ad harum maxime. Molestiae eum, totam iure temporibus repudiandae minus corrupti modi recusandae voluptas? Perspiciatis consequatur, non consectetur blanditiis sequi quisquam voluptatem.
            Repellendus nemo facere, fugit non deserunt quidem eaque ex officiis repudiandae tempore reprehenderit reiciendis debitis quia fuga eveniet accusantium corporis cumque culpa voluptatem alias repellat! Odio atque aliquid culpa saepe?
            Debitis, ad praesentium exercitationem adipisci nihil suscipit! Molestiae distinctio doloribus velit et reiciendis, laborum repellat, quaerat deserunt tempora similique fugiat autem sequi voluptates nobis non, suscipit labore numquam aliquid corporis?
            Consequatur ab maiores ratione magnam ut reiciendis expedita excepturi quaerat assumenda corrupti maxime cupiditate odit officia, rem explicabo iure numquam ipsam tempore itaque doloribus. Quis vero placeat voluptates ad quod.
            Maxime esse voluptatum temporibus repudiandae, at numquam recusandae velit nam harum. Rerum impedit esse aspernatur illo facere eaque itaque sapiente dolor, consequuntur, adipisci doloremque ab, dolore assumenda? Nostrum, perspiciatis obcaecati?
            Sunt quam est et porro rem quibusdam quod praesentium, animi itaque. Sint cumque possimus eveniet dignissimos laudantium odio illum, illo vel corrupti excepturi magni, qui magnam esse quibusdam exercitationem assumenda!
            Maiores sequi magnam tenetur consectetur aspernatur eveniet cum porro doloremque et quidem modi, corrupti officia amet odit doloribus impedit ad nostrum a minima neque, tempora nisi sunt corporis. Culpa, architecto.
            Iusto voluptas veritatis vero odio dignissimos hic aliquam minima porro, adipisci ratione culpa quae commodi laboriosam nostrum veniam. Tempora debitis quidem explicabo similique quod consequatur commodi adipisci. Qui, animi obcaecati!
            Atque nisi, doloribus pariatur dicta maiores tempore reprehenderit nihil, facilis beatae error porro magni architecto in non iste, harum aliquid sequi! Nihil ea tempora quaerat molestias qui ut, fugiat provident!
            Rerum ducimus quibusdam officiis voluptates repellendus cum, pariatur tempora blanditiis dolorum voluptas eos commodi temporibus dignissimos cumque laboriosam corporis incidunt autem ipsum. Repellendus, voluptatem debitis? Repellendus quidem quod id dicta!
            Asperiores, cupiditate eum amet beatae quae provident accusamus blanditiis incidunt nobis ut quam inventore ea soluta harum in sequi! Eos aliquid nemo, eligendi possimus quisquam illum excepturi voluptate eius maiores!
            Quidem, omnis aperiam. Voluptas minus, laboriosam ratione provident, culpa maiores fuga iure fugiat eaque dolorum non repudiandae voluptatum exercitationem? Molestiae incidunt, blanditiis dignissimos non dolores eum consequatur repudiandae totam iusto.
            Ducimus eius saepe dolore ipsam odit ex numquam quis, voluptas voluptates nobis magni consequatur, omnis in ut. Ipsa veniam qui nihil fugit expedita magni quibusdam consequuntur ducimus exercitationem eligendi? Dolorum.
            Ipsum dolorem nam ea earum dicta magnam voluptas, eaque nulla sunt nihil pariatur, quia ducimus distinctio deserunt hic assumenda quasi sit reiciendis dolor molestiae. Eum et nemo sapiente nulla explicabo!
            Eum sed minima placeat, commodi accusantium explicabo a obcaecati officia illo perferendis illum inventore? Minus cupiditate illum quo sint modi expedita quibusdam, quisquam debitis eum velit, aspernatur doloremque in facere.
            Voluptatum atque qui officia totam sit placeat aliquid ullam labore dolor eos quidem adipisci assumenda doloremque esse eum repudiandae omnis molestias, quisquam ipsum, pariatur voluptate ipsam aspernatur! Rerum, mollitia autem?
            Inventore alias voluptates autem consectetur praesentium repudiandae fugiat maiores, quam fugit voluptatibus nesciunt dolores sed est assumenda officia quasi! Ullam consequuntur maxime temporibus, cupiditate fugiat quis magnam aut doloremque hic!
            Nam eos, dicta blanditiis voluptatem laborum dolor, adipisci corporis deleniti suscipit sint, possimus delectus minima voluptate. Rerum doloribus deserunt accusantium voluptate, ut distinctio molestias vero debitis? Possimus sapiente dolor aliquam.
            Deleniti praesentium ipsa repellat quia voluptatibus ratione unde repudiandae laborum aperiam natus exercitationem et itaque asperiores ullam aut, minus autem neque recusandae quae culpa ab est laboriosam hic? Eveniet, qui.
            Aliquid voluptatum aut iure perferendis minima obcaecati nisi, eaque accusantium officia quidem quaerat itaque molestias cum magni maiores pariatur quo fugiat. Officia eligendi ad rem mollitia temporibus deleniti voluptatem illo?
            Rem nostrum tempore at odit natus eius, eveniet aspernatur repudiandae ad ipsam quas sunt adipisci, esse vel quam optio repellat impedit. Animi nisi laborum quas voluptate velit eaque labore cupiditate.
        </div>
      </div>
      <div className="developer-page-main-right-eye">
        <div className="dev-page-right-flx">
          <p>On This Page</p>
        </div>
      </div>
    </div>
  );
}
