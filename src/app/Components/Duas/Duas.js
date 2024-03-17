import Image from "next/image";
import logo from "../../../../public/duacard.svg";
import bookmark from "../../../../public/bookmark.svg";
import copy from "../../../../public/copy.svg";
import memory from "../../../../public/plan.svg";
import share from "../../../../public/share.svg";
import report from "../../../../public/report.svg";
const Duas = async ({ dua, idx }) => {
  const {
    dua_name_en,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    audio,
  } = dua || {};
  return (
    <section className="mt-4 bg-white rounded-lg px-7 py-4">
      <div className="flex items-center gap-3">
        <Image height={40} width={40} src={logo} alt="svg" />
        <p className="text-green-600 font-semibold text-[18px]">
          {idx + 1} .{dua_name_en}
        </p>
      </div>
      <div className="mt-4 space-y-6">
        <p>{top_en}</p>
        <p className="text-end text-4xl leading-loose">{dua_arabic}</p>
        {transliteration_en && (
          <p className="italic">
            <span className="font-bold">Transliteration : </span>{" "}
            {transliteration_en}
          </p>
        )}
        {translation_en && (
          <p>
            <span className="font-bold">Translation : </span>
            {translation_en}
          </p>
        )}
        {refference_en && (
          <p>
            <span className="text-green-600 font-bold">
              Reference : <br />{" "}
            </span>
            {refference_en}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between mt-7">
        <div>
          {audio && (
            <div>
              <audio className="text-green-600" controls src={audio}></audio>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 flex-nowrap">
          <Image height={20} width={25} src={copy} alt="svg" />
          <Image height={20} width={25} src={bookmark} alt="svg" />
          <Image height={20} width={25} src={memory} alt="svg" />
          <Image height={20} width={25} src={share} alt="svg" />
          <Image height={20} width={25} src={report} alt="svg" />
        </div>
      </div>
    </section>
  );
};

export default Duas;
