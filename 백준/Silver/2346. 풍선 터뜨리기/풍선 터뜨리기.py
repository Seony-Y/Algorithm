import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
balloons = list(map(int, input().split()))

# (풍선 번호, 이동값) 형태로 덱 생성
dq = deque((i + 1, balloons[i]) for i in range(n))

result = []

while dq:
    # 현재 풍선 터뜨리기
    idx, move = dq.popleft()
    result.append(idx)
    
    if not dq:
        break
    
    # 이동
    if move > 0:
        # 오른쪽으로 이동: move-1번 회전 (현재 풍선 제거됨)
        dq.rotate(-(move - 1))
    else:
        # 왼쪽으로 이동: -move번 회전
        dq.rotate(-move)

print(' '.join(map(str, result)))
