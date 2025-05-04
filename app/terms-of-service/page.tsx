export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-playfair">Terms of Service</h1>

        <div className="glass p-8 rounded-lg space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of my website. By accessing this
              website, we assume you accept these terms and conditions in full. Do not continue to use my website if you
              do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, I own the intellectual property rights for all material on this website. All
              intellectual property rights are reserved. You may view and/or print pages from the website for your own
              personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="mt-4">You must not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Content</h2>
            <p>
              In these terms and conditions, "User Content" means material (including without limitation text, images,
              audio material, video material, and audio-visual material) that you submit to this website, for whatever
              purpose.
            </p>
            <p className="mt-4">
              You grant me a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt,
              publish, translate, and distribute your User Content in any existing or future media. You also grant me
              the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall I be liable for any damages (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or inability to use the materials on my
              website, even if I or an authorized representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              I reserve the right to modify these terms at any time. By using this website, you are agreeing to be bound
              by the current version of these terms and conditions.
            </p>
          </section>

          <div className="text-sm text-muted-foreground mt-8">Last Updated: April 30, 2025</div>
        </div>
      </div>
    </div>
  )
}
