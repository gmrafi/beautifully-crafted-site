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
- Shared publishing navigation and footer wrap Outlet in the root route; home is one scrolling page with hash sections (vision, what-we-do, contact); only Publications is a separate route, by owner choice.
- Keep static publishing content presentation-only and use direct email/phone links for inquiries; no simulated form submissions.
- Define editorial visual roles in global semantic CSS tokens; use the existing Button for interactive controls.
- Keep public editorial standards and distribution descriptions in the scrolling home page; use direct manuscript email inquiries, so confidential production logic never needs to enter the public site.
