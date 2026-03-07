const container = document.getElementById("cardContainer");

for (let i = 1; i <= 20; i++) {
  const card = document.createElement("div");

  card.className =
    "bg-white shadow rounded-xl py-10 px-6 min-h-[380px] border-t-4 border-green-500";

  card.innerHTML = `
    <div class="flex justify-between">
      <img src="./assets/Open-Status.png" alt="" />
      <h1 class="text-red-500 py-2 px-5 bg-red-100 rounded-full font-bold">HIGH</h1>
    </div>

    <div class="space-y-2 mt-4">
      <h1 class="text-2xl font-bold">
        Fix navigation menu on mobile devices
      </h1>

      <p class="text-gray-400">
        The navigation menu doesn't collapse properly on mobile devices...
      </p>
    </div>

    <div class="flex gap-2 mt-4">
      <p class="btn bg-red-100 rounded-full border border-red-500 text-red-500 font-bold">
        BUG
      </p>

      <p class="bg-yellow-100 rounded-full border border-yellow-500 text-yellow-500 font-bold px-3 py-1">
        help wanted
      </p>
    </div>

    <div class="divider"></div>

    <div class="space-y-2">
      <p>#${i} by john_doe</p>
      <p>1/15/2024</p>
    </div>
  `;

  container.appendChild(card);
}