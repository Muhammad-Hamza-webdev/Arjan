function initTabs(container) {
  const tablist = container.querySelector("[role='tablist']");
  const tabs = Array.from(tablist.querySelectorAll("[role='tab']"));

  function activateTab(tab) {
    const tabpanelID = tab.getAttribute("aria-controls");
    const tabpanel = document.getElementById(tabpanelID);

    tab.setAttribute("aria-selected", "true");
    tab.removeAttribute("tabindex");
    tabpanel.setAttribute("tabindex", "0");

    document
      .querySelectorAll('[role="tab"], [role="tabpanel"]')
      .forEach((el) => {
        if (el !== tab && el !== tabpanel) {
          if (el.matches('[role="tab"]')) {
            el.setAttribute("aria-selected", "false");
            el.setAttribute("tabindex", "-1");
          } else {
            el.removeAttribute("tabindex");
          }
        }
      });
  }

  function handleClick(e) {
    const { target } = e;
    if (target.matches('[role="tab"]')) {
      activateTab(target);
    }
  }

  tablist.addEventListener("click", handleClick);
}

const tabContainers = document.querySelectorAll(".tabs");
tabContainers.forEach(initTabs);
