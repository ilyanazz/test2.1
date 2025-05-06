window.updatePoints = async function (isAdd) {
  if (!currentId) return alert("Scan a QR first.");
  const change = parseInt(document.getElementById("points-change").value);
  if (isNaN(change)) return alert("Enter a valid number.");

  const ref = doc(db, "participants", currentId);
  try {
    const snap = await getDoc(ref);
    if (!snap.exists()) return alert("Participant not found.");

    const current = snap.data().points || 0;
    const updated = isAdd ? current + change : current - change;

    await updateDoc(ref, { points: updated });
    pointsSpan.textContent = updated;
  } catch (err) {
    console.error("Firestore update failed:", err);
    alert("Failed to update Firestore. See console for details.");
  }
};
