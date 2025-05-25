import React, { useState, ReactElement } from 'react';
import { Vote, Share2 } from 'lucide-react';

// 데이터 및 유틸리티 임포트
import { policyAreas } from '@/data/policyAreas';
import { candidates, keyPolicies } from '@/data/candidates';
import { questions } from '@/data/questions';
import { calculateMatch } from '@/utils/matching';
import { Answer } from '@/types';

const PoliticalMBTI = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [priorities, setPriorities] = useState<{ [key: string]: number }>({});
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // 우선순위 설정
  const handlePriorityChange = (areaId: string, value: number) => {
    setPriorities(prev => ({ ...prev, [areaId]: value }));
  };

  // 질문 답변
  const handleAnswer = (questionId: number, optionValue: number, policyKey: string, area: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value: optionValue, policy_key: policyKey, area }
    }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep(3); // 결과 화면으로
    }
  };

  // 매칭 결과 계산
  const matchResults = currentStep === 3 ? calculateMatch(candidates, answers, priorities) : [];

  // 단계별 렌더링
  const renderStep = (): ReactElement | null => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6 px-4">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-3xl">
              <Vote className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">정치 MBTI</h1>
              <p className="text-lg opacity-90">2025 대선, 나와 맞는 후보 찾기</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-left">
              <h2 className="text-xl font-bold mb-4 text-gray-800">🗳️ 실제 후보 공약 기반</h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">✓</div>
                  <span>이재명 · 김문수 · 이준석 후보</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                  <span>중앙선관위 제출 실제 공약 반영</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                  <span>6개 분야 12개 핵심 질문</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200">
              <p className="text-orange-800 text-sm font-medium">
                ⚡ 빠른 테스트: 3분이면 충분!<br/>
                💡 객관적 분석: 공약 기반 매칭<br/>
                🎯 정확한 결과: 정책 성향별 일치도 확인
              </p>
            </div>

            <button
              onClick={() => setCurrentStep(1)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              테스트 시작하기 🚀
            </button>
            
            <p className="text-xs text-gray-500">
              * 이 테스트는 정책 비교 목적이며, 실제 투표는 다양한 요소를 고려하여 결정하시기 바랍니다.
            </p>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6 px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">우선순위 설정</h2>
              <p className="text-gray-600">나에게 중요한 정책 분야는? (1~5점)</p>
            </div>

            <div className="space-y-4">
              {policyAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div key={area.id} className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mr-3`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">{area.name}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          onClick={() => handlePriorityChange(area.id, score)}
                          className={`flex-1 py-2 rounded-xl font-medium transition-all ${
                            priorities[area.id] === score
                              ? 'bg-blue-500 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              disabled={Object.keys(priorities).length < 6}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음 단계 →
            </button>
          </div>
        );

      case 2:
        const question = questions[currentQuestion];
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        
        return (
          <div className="space-y-6 px-4">
            {/* 진행률 */}
            <div className="text-center">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>질문 {currentQuestion + 1}/{questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 질문 카드 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${policyAreas.find(a => a.id === question.area)?.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  {(() => {
                    const IconComponent = policyAreas.find(a => a.id === question.area)?.icon;
                    return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{question.question}</h3>
              </div>

              <div className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(question.id, option.value, question.policy_key, question.area)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-xl transition-all border-2 border-transparent hover:border-blue-200"
                  >
                    <span className="font-medium text-gray-800">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 이전 버튼 */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-2xl font-medium"
              >
                ← 이전 질문
              </button>
            )}
          </div>
        );

      case 3:        
        return (
          <div className="space-y-6 px-4">
            <div className="text-center bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-2xl">
              <h2 className="text-2xl font-bold mb-2">🎉 결과 발표!</h2>
              <p className="opacity-90">당신과 가장 잘 맞는 후보는...</p>
            </div>

            {matchResults.map((candidate, index) => (
              <div key={candidate.id} className={`bg-white rounded-2xl p-5 shadow-lg ${index === 0 ? 'ring-2 ring-yellow-400' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {index === 0 && <span className="text-2xl">🏆</span>}
                    <div>
                      <h3 className={`text-lg font-bold ${candidate.color}`}>{candidate.name}</h3>
                      <p className="text-sm text-gray-500">{candidate.party}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${candidate.color}`}>{candidate.matchPercentage}%</div>
                    <div className="text-sm text-gray-500">일치도</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${index === 0 ? 'from-yellow-400 to-yellow-600' : 'from-gray-400 to-gray-500'}`}
                    style={{ width: `${candidate.matchPercentage}%` }}
                  />
                </div>
                
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 공약</h4>
                  <div className="flex flex-wrap gap-2">
                    {keyPolicies[candidate.id].map((policy, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {policy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 rounded-2xl p-5">
              <h4 className="font-bold text-blue-800 mb-2">💡 이 결과는 어떻게 나왔나요?</h4>
              <p className="text-blue-700 text-sm">
                2025년 실제 대선 후보들의 중앙선관위 제출 공약을 바탕으로 
                당신의 정책 선호도와 매칭했습니다. 실제 투표 시에는 다양한 요소를 
                종합적으로 고려해주세요.
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setPriorities({});
                  setCurrentQuestion(0);
                }}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-2xl font-medium"
              >
                다시 하기
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-medium flex items-center justify-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>공유하기</span>
              </button>
            </div>
          </div>
        );

      default:
        return <div>단계를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-md mx-auto py-6">
        {renderStep()}
      </div>
    </div>
  );
};

export default PoliticalMBTI;