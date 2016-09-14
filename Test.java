public class Test {

	public static void main(String[] args) {
		int testCount = 20;


		for (int i = 1; i <= testCount; i++) {
			int countFromDB =i;
			int boxes = countFromDB/3;
			int widthEachBox = 2;
			int totalWidth = 12;
			int total = (countFromDB + boxes) * widthEachBox;
			int multFactor = total % (totalWidth);
			int missingCount = 0;

			if (multFactor == 0) {
				multFactor = total/totalWidth;
			}

			else {
				multFactor = total/totalWidth + 1;
				missingCount = ((totalWidth * multFactor) - total)/widthEachBox;
			}
			boxes = missingCount + boxes;
			System.out.println("*********************");
			System.out.println("count from db: " + countFromDB + ", total of " + multFactor + " rows, and " + boxes + " colored boxes.");
			//System.out.println(multFactor + " rows");
			//System.out.println(missingCount);
			//System.out.println(boxes + " colored boxes");
			//System.out.println(boxes + countFromDB + " total boxes");
		}







	}

}
