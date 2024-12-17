import java.io.*;

public class TestUnclosedResources {
    public void resourceLeakExample() {
        FileInputStream fis = null;
        try {
            fis = new FileInputStream("test.txt");
            // Resource is not closed properly
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void resourceProperlyClosed() {
        try (FileInputStream fis = new FileInputStream("test.txt")) {
            // Resource will be closed automatically
            System.out.println("Resource handled correctly");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
