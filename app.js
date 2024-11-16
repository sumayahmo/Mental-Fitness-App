function submitSurvey() {
    // جمع الإجابات من المستخدم
    const stress = document.querySelector('input[name="stress"]:checked');
    const balance = document.querySelector('input[name="balance"]:checked');

    // إذا تم الإجابة على الأسئلة
    if (stress && balance) {
        const stressValue = parseInt(stress.value);
        const balanceValue = parseInt(balance.value);

        // تقييم بسيط بناءً على الإجابات
        let resultMessage = "";
        
        if (stressValue > 3 && balanceValue < 3) {
            resultMessage = "يبدو أنك تشعر بالتوتر وغير متوازن. من الأفضل أن تخصص وقتًا للاسترخاء ومحاولة إيجاد توازن أكبر في حياتك.";
        } else if (stressValue <= 3 && balanceValue >= 3) {
            resultMessage = "أنت تدير التوتر والتوازن بشكل جيد. استمر في العمل الجيد!";
        } else {
            resultMessage = "قد تحتاج إلى تقنيات لتقليل التوتر وإيجاد المزيد من التوازن في حياتك.";
        }

        document.getElementById('result').innerText = resultMessage;
    } else {
        alert("يرجى الإجابة على جميع الأسئلة قبل الإرسال.");
    }
}
