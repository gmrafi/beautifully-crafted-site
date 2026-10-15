<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Shared publishing navigation and footer wrap Outlet in the root route; named editorial pages have individual leaf routes so URLs and metadata remain distinct.
- Keep static publishing content presentation-only and use direct email/phone links for inquiries; no simulated form submissions.
- Define editorial visual roles in global semantic CSS tokens; use the existing Button for interactive controls.
