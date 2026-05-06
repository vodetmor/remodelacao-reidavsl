/**
 * Form Quiz — Rei da VSL
 * Máquina de estados para o formulário multi-step de qualificação de leads.
 */

class FormQuiz {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 6;
    this.formData = {};

    // DOM refs
    this.form = document.getElementById('quizForm');
    this.progressBar = document.getElementById('progressBar');
    this.stepIndicator = document.getElementById('stepIndicator');
    this.successScreen = document.getElementById('quizSuccess');

    this.init();
  }

  init() {
    this.setupCardSelections();
    this.setupTextInputs();
    this.setupNavigation();
    this.setupSubmit();
    this.setupKeyboard();
    this.updateProgress();
  }

  /* ─── Card Selections (Steps 1, 3, 4) ─── */
  setupCardSelections() {
    const optionGroups = ['optionsStep1', 'optionsStep3', 'optionsStep4'];
    const hiddenFields = ['tipoServico', 'orcamento', 'experienciaVsl'];
    const infoBoxes = {
      optionsStep1: { trigger: 'Não sei a diferença', boxId: 'infoVslVsCriativo' },
      optionsStep3: { trigger: 'Ainda não', boxId: 'infoOrcamento' },
    };

    optionGroups.forEach((groupId, index) => {
      const group = document.getElementById(groupId);
      if (!group) return;

      const cards = group.querySelectorAll('.card-select');
      const hiddenInput = document.getElementById(hiddenFields[index]);
      const stepNum = parseInt(group.closest('.quiz__step').dataset.step);
      const nextBtn = document.getElementById(`nextBtn${stepNum}`);

      cards.forEach(card => {
        const selectCard = () => {
          // Deselect all in group
          cards.forEach(c => {
            c.classList.remove('selected');
            c.setAttribute('aria-pressed', 'false');
          });

          // Select this one
          card.classList.add('selected');
          card.setAttribute('aria-pressed', 'true');
          hiddenInput.value = card.dataset.value;

          // Enable next button
          if (nextBtn) nextBtn.disabled = false;

          // Show info box if applicable
          const infoConfig = infoBoxes[groupId];
          if (infoConfig) {
            const infoBox = document.getElementById(infoConfig.boxId);
            if (card.dataset.value === infoConfig.trigger) {
              infoBox.classList.add('visible');
            } else {
              infoBox.classList.remove('visible');
            }
          }
        };

        card.addEventListener('click', selectCard);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectCard();
          }
        });
      });
    });
  }

  /* ─── Text Inputs (Steps 2, 5) ─── */
  setupTextInputs() {
    const inputConfigs = [
      { inputId: 'produtoServico', btnId: 'nextBtn2' },
      { inputId: 'comoConheceu', btnId: 'nextBtn5' },
    ];

    inputConfigs.forEach(({ inputId, btnId }) => {
      const input = document.getElementById(inputId);
      const btn = document.getElementById(btnId);
      if (!input || !btn) return;

      input.addEventListener('input', () => {
        btn.disabled = input.value.trim().length < 2;
      });

      // Enter to advance
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !btn.disabled) {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  /* ─── Navigation ─── */
  setupNavigation() {
    // Next buttons
    for (let i = 1; i <= this.totalSteps - 1; i++) {
      const nextBtn = document.getElementById(`nextBtn${i}`);
      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.goToStep(i + 1));
      }
    }

    // Back buttons
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => this.goToStep(this.currentStep - 1));
    });
  }

  /* ─── Step Transition ─── */
  goToStep(targetStep) {
    if (targetStep < 1 || targetStep > this.totalSteps) return;

    const currentEl = document.querySelector(`.quiz__step[data-step="${this.currentStep}"]`);
    const targetEl = document.querySelector(`.quiz__step[data-step="${targetStep}"]`);

    if (!currentEl || !targetEl) return;

    // Save current step data
    this.saveStepData(this.currentStep);

    // Animate out
    currentEl.classList.add('quiz__step--exit');

    setTimeout(() => {
      currentEl.classList.remove('active', 'quiz__step--exit');
      targetEl.classList.add('active');

      this.currentStep = targetStep;
      this.updateProgress();

      // Focus first interactive element in new step
      const firstInput = targetEl.querySelector('input:not([type="hidden"]), .card-select');
      if (firstInput) firstInput.focus();
    }, 250);
  }

  /* ─── Progress ─── */
  updateProgress() {
    const percentage = (this.currentStep / this.totalSteps) * 100;
    this.progressBar.style.width = `${percentage}%`;
    this.stepIndicator.textContent = `Passo ${this.currentStep} de ${this.totalSteps}`;
  }

  /* ─── Save Step Data ─── */
  saveStepData(step) {
    const stepEl = document.querySelector(`.quiz__step[data-step="${step}"]`);
    if (!stepEl) return;

    const inputs = stepEl.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (input.name && input.value) {
        this.formData[input.name] = input.value;
      }
    });
  }

  /* ─── Submit ─── */
  setupSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate step 6 fields
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const whatsapp = document.getElementById('whatsapp');

      if (!nome.value.trim() || !email.value.trim() || !whatsapp.value.trim()) {
        // Simple shake animation on empty fields
        [nome, email, whatsapp].forEach(field => {
          if (!field.value.trim()) {
            field.style.borderColor = 'var(--color-error)';
            field.animate([
              { transform: 'translateX(-4px)' },
              { transform: 'translateX(4px)' },
              { transform: 'translateX(-4px)' },
              { transform: 'translateX(0)' },
            ], { duration: 300 });
            setTimeout(() => {
              field.style.borderColor = '';
            }, 2000);
          }
        });
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        email.style.borderColor = 'var(--color-error)';
        return;
      }

      // Save all data
      this.saveStepData(this.currentStep);
      this.formData.nome = nome.value.trim();
      this.formData.email = email.value.trim();
      this.formData.whatsapp = whatsapp.value.trim();
      this.formData.data_envio = new Date().toISOString();

      // Log data (will be replaced by Sheets integration later)
      console.log('📋 Dados do formulário:', this.formData);

      // Show success
      this.showSuccess();
    });
  }

  /* ─── Success Screen ─── */
  showSuccess() {
    // Hide form steps
    document.querySelectorAll('.quiz__step').forEach(step => {
      step.classList.remove('active');
    });

    // Hide progress
    document.querySelector('.quiz__header').style.opacity = '0';
    document.querySelector('.quiz__header').style.transition = 'opacity 0.3s ease';

    // Show success
    this.successScreen.classList.add('active');
  }

  /* ─── Keyboard Navigation ─── */
  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Escape to go back
      if (e.key === 'Escape' && this.currentStep > 1) {
        this.goToStep(this.currentStep - 1);
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new FormQuiz();
});
