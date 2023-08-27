import {signal} from "@preact/signals-react";
import {valueOf} from "@/utils/signal";

const isGlobalLoading = signal(false)

export default valueOf({ isGlobalLoading })