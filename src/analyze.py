import sys
import json
from transformers import pipeline
from textblob import TextBlob
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# Load pre-trained sentiment-analysis pipeline
sentiment_analyzer = pipeline('sentiment-analysis')

# Function to perform sentiment analysis
def analyze_sentiment(responses):
    sentiments = []
    for response in responses:
        sentiment = sentiment_analyzer(response)
        sentiments.append({
            'response': response,
            'sentiment': sentiment[0]['label'],
            'confidence': sentiment[0]['score']
        })
    return sentiments

# Function to extract topics using LDA
def extract_topics(responses, n_topics=2):
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf = vectorizer.fit_transform(responses)
    
    lda = LatentDirichletAllocation(n_components=n_topics, random_state=42)
    lda.fit(tfidf)
    
    feature_names = vectorizer.get_feature_names_out()
    topics = []
    for topic_idx, topic in enumerate(lda.components_):
        top_words_idx = topic.argsort()[:-11:-1]
        topic_words = [feature_names[i] for i in top_words_idx]
        topics.append({
            'topic': f"Topic {topic_idx+1}",
            'words': topic_words
        })
    return topics

# Read input from Node.js
if __name__ == "__main__":
    input_data = json.loads(sys.stdin.read())
    sentiment_results = analyze_sentiment(input_data)
    topics = extract_topics(input_data, n_topics=2)
    
    # Output results as JSON
    output = {
        'sentiment_results': sentiment_results,
        'topics': topics
    }
    print(json.dumps(output))
