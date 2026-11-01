import type { BlogPostI18n } from '@/content/blog-i18n';
import { buildPost } from '@/content/news/_shared';
import { kataloniaPolonia } from '@/content/news/katalonia-polonia';
import { wynik33Finalu } from '@/content/news/wynik-33-finalu';
import { jakDzialaWosp } from '@/content/news/jak-dziala-wosp';
import { polandrock2025 } from '@/content/news/polandrock-2025';
import { wolontariatBarcelona } from '@/content/news/wolontariat-barcelona';
import { cel34Finalu } from '@/content/news/cel-34-finalu';
import { abcFinalu } from '@/content/news/abc-finalu';
import { sztabyZagraniczne34 } from '@/content/news/sztaby-zagraniczne-34';
import { wynik34Finalu } from '@/content/news/wynik-34-finalu';
import { polandrock2026 } from '@/content/news/polandrock-2026';
import { wolontariusze35 } from '@/content/news/wolontariusze-35';
import { praktykiStudenckie } from '@/content/news/praktyki-studenckie';
import { papiezSagrada } from '@/content/news/papiez-sagrada-familia';
import { tourDeFranceBarcelona } from '@/content/news/tour-de-france-barcelona';
import { kosztyZycia2026 } from '@/content/news/koszty-zycia-2026';
import { sponsorzyRozwoj } from '@/content/news/sponsorzy-rozwoj';
import { deliciasCukiernia } from '@/content/news/delicias-by-bea-cukiernia';

/**
 * Data-driven articles (one file per article in `src/content/news/`).
 * To add an article: create a new file exporting a `NewsSource` and add it to this list.
 * Every article page automatically shows 3 "related" articles (see `src/components/RelatedPosts.tsx`).
 */
export const newsPostsI18n: BlogPostI18n[] = [
    kataloniaPolonia,
    wynik33Finalu,
    jakDzialaWosp,
    polandrock2025,
    wolontariatBarcelona,
    cel34Finalu,
    abcFinalu,
    sztabyZagraniczne34,
    wynik34Finalu,
    polandrock2026,
    wolontariusze35,
    praktykiStudenckie,
    papiezSagrada,
    tourDeFranceBarcelona,
    kosztyZycia2026,
    sponsorzyRozwoj,
    deliciasCukiernia,
].map(buildPost);
