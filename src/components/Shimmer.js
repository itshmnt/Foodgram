const Shimmer = () => {
  return (
    <div className="restaurant-list">
        {Array(12)
          .fill("")
          .map((e) => (
            <div class="shimmerCard">
                <div class="shimmerBG media"></div>
                <div class="p-32">
                <div class="shimmerBG title-line"></div>
                <div class="shimmerBG title-line end"></div>

                <div class="shimmerBG content-line m-t-24"></div>
                <div class="shimmerBG content-line"></div>
                <div class="shimmerBG content-line"></div>
                <div class="shimmerBG content-line end"></div>
                </div>
            </div>
          ))}
    </div>
  )
}

export default Shimmer;