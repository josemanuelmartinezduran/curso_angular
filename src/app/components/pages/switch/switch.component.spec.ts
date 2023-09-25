import { SwitchComponent } from "./switch.component";

describe('Componente Switch', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new SwitchComponent();
    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);
    comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);
    comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new SwitchComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });
});
