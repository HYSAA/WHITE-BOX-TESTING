const ProgressBar = require('./progressBar');

test('create progress bar', () => {
    const progressBar = new ProgressBar(10);
    expect(progressBar.getCurrentStep()).toBe(0);
    expect(progressBar.getTotalSteps()).toBe(10);
    expect(progressBar.isCompleted()).toBe(false);
});

test('increment progress bar', () => {
    const progressBar = new ProgressBar(10);
    progressBar.increment();
    expect(progressBar.getCurrentStep()).toBe(1);
    progressBar.increment();
    expect(progressBar.getCurrentStep()).toBe(2);
});

test('decrement progress bar', () => {
    const progressBar = new ProgressBar(10);
    progressBar.increment();
    progressBar.increment();
    progressBar.decrement();
    expect(progressBar.getCurrentStep()).toBe(1);
});

test('progress bar completion', () => {
    const progressBar = new ProgressBar(3);
    progressBar.increment();
    progressBar.increment();
    progressBar.increment();
    expect(progressBar.isCompleted()).toBe(true);
});
