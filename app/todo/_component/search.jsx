"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  // searchParams.set('a',500)
  // searchParams.delete('b')
  // console.log(searchParams.toString())

  const handleChangeInput = useDebouncedCallback((e) => {
    console.log(e.target.value);
    const searchParams = new URLSearchParams(params);
    if (e.target.value) {
      searchParams.set("title", e.target.value);
    } else {
      searchParams.delete("title");
    }
    router.replace(`${pathname}?${e.target.value}`);
  }, 1000);

  // console.log(params.get("title"));
  return (
    <>
      <input onChange={handleChangeInput} type="text" placeholder="search todo here..." className="border border-gray-400 px-4 py-2 rounded-lg" defaultValue={params.get("title")} />
      <input type="text" onChange={(e) => console.log(e.target.value)} />
    </>
  );
}
