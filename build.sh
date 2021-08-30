# Make sure that the hebrew quizzes repo exists
if [ ! -d "../hebrew_quizzes_test" ] 
then
    echo "Directory '../hebrew_quizzes_test' does not exist."
    echo "Checkout the repo from https://github.com/LukeMurphey/hebrew_quizzes_test" 
    exit 9999 # Stop the code
fi

# Build the production version of the site
cd hebrew_quiz
yarn build
cd ..

# Copy the files up to the test directory
cp -r hebrew_quiz/build/* ../hebrew_quizzes_test
