def display_game(player1, player2):
    print(f"Player 1: {player1[0]} {player1[1]}")
    print(f"Player 2: {player2[0]} {player2[1]}")

def play(player1, player2):
    while True:
        display_game(player1, player2)
        move = input("Enter move (e.g., '1 0' for Player 1 tapping Player 2's left hand): ")
        p, h = map(int, move.split())
        if p == 1:
            player2[h] = (player2[h] + player1[0]) % 5
        else:
            player1[h] = (player1[h] + player2[0]) % 5

        if player1 == [0, 0]:
            print("Player 2 wins!")
            break
        elif player2 == [0, 0]:
            print("Player 1 wins!")
            break

if __name__ == "__main__":
    player1 = [1, 1]
    player2 = [1, 1]
    play(player1, player2)
