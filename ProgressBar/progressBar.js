class ProgressBar {
    constructor(totalSteps) {
        this.totalSteps = totalSteps;
        this.currentStep = 0;
    }

    getCurrentStep() {
        return this.currentStep;
    }

    getTotalSteps() {
        return this.totalSteps;
    }

    increment() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
        }
    }

    decrement() {
        if (this.currentStep > 0) {
            this.currentStep--;
        }
    }

    isCompleted() {
        return this.currentStep === this.totalSteps;
    }
}

module.exports = ProgressBar;
