import bannerImg from '../../statics/banner.jpg'

export default (state, { }) => {
  return (
    <div class="ui-homepage">
      <section className="banner">
        <img src={bannerImg} />
      </section>
    </div>
  )
}