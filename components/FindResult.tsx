import { useState } from "react";

interface Semester {
  credit: string;
  sgpa: string;
}

interface Result {
  cgpa: number | null;
  percentage: number | null;
}

const CGPACalculator: React.FC = () => {
  // Predefined credit points for semesters 1 to 8
  const predefinedCredits = [20, 20, 22, 21, 22, 21, 18, 18];

  const [semesters, setSemesters] = useState<Semester[]>(
    predefinedCredits.map((credit) => ({ credit: credit.toString(), sgpa: "" }))
  );
  const [result, setResult] = useState<Result>({
    cgpa: null,
    percentage: null,
  });

  const handleChange = (
    index: number,
    field: keyof Semester,
    value: string
  ) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    semesters.forEach(({ credit, sgpa }) => {
      const creditNum = parseFloat(credit);
      const sgpaNum = parseFloat(sgpa);

      // Ensure SGPA is provided and valid for calculation
      if (!isNaN(creditNum) && !isNaN(sgpaNum) && sgpa !== "") {
        totalCredits += creditNum;
        totalGradePoints += creditNum * sgpaNum;
      }
    });

    const cgpa = totalCredits
      ? parseFloat((totalGradePoints / totalCredits).toFixed(2))
      : 0;
    const percentage = parseFloat((cgpa * 10).toFixed(2));

    setResult({ cgpa, percentage });
  };

  const addSemester = () => {
    // Limit adding more semesters beyond the predefined list
    if (semesters.length < predefinedCredits.length) {
      setSemesters([...semesters, { credit: "", sgpa: "" }]);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <h1 className="text-3xl font-bold mb-6">CGPA Calculator</h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl space-y-6 text-gray-800">
        {semesters.map((semester, index) => (
          <div key={index} className="flex space-x-4">
            <input
              type="number"
              placeholder={`Credits (Sem ${index + 1})`}
              value={predefinedCredits[index]} // Predefined credit value
              disabled // Disable editing for credits
              className="w-1/2 p-3 border rounded-lg shadow-sm bg-gray-200 text-gray-500"
            />
            <input
              type="number"
              placeholder={`SGPA (Sem ${index + 1})`}
              value={semester.sgpa}
              onChange={(e) => handleChange(index, "sgpa", e.target.value)}
              className="w-1/2 p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        <button
          onClick={addSemester}
          className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition"
        >
          Add Semester
        </button>
      </div>

      <button
        onClick={calculateCGPA}
        className="mt-6 py-3 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
      >
        Calculate CGPA
      </button>

      {result.cgpa !== null && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-bold mb-4">Results:</h2>
          <p className="text-lg font-medium">
            <span className="text-blue-500 font-bold">CGPA:</span> {result.cgpa}
          </p>
          <p className="text-lg font-medium">
            <span className="text-green-500 font-bold">Percentage:</span>{" "}
            {result.percentage}%
          </p>
        </div>
      )}
    </div>
  );
};

export default CGPACalculator;
