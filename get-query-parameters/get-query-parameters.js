function getParam(){

const str1 = 'http://www.mitrahsoft.com/?technology=coldfusion&people=veryNice';
const parseUrl = new URL(str1)

const Technology = 'technology';
const People = 'people';

const result1 = parseUrl.searchParams.get(Technology);
const result2 = parseUrl.searchParams.get(People);

const result = document.getElementById('resultDiv')
result.innerHTML=`Technology: ${result1} <br>
                  People: ${result2}`
}