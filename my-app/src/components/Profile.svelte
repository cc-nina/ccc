<script>
    export let profile;
</script>

<div class="flex items-center justify-center">
    <div
      class="w-screen bg-[#311847] relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-200 transform">
      <div class="flex items-center gap-4">
        <img src={profile.pic}
        class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-200 delay-200 transform"
      />
        <div class="w-fit transition-all transform duration-500">
          <h1 class="text-[#F3DCCE] font-bold">
            {profile.name}
          </h1>
          <p class="text-gray-200">{profile.role}</p>
        </div>
      </div>
      <div class="absolute group-hover:bottom-1 delay-200 -bottom-16 transition-all duration-500 bg-[#311847] right-1 rounded-lg">
        <div class="flex justify-evenly items-center gap-2 p-1 text-2xl text-[#F3DCCE]">
            <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>