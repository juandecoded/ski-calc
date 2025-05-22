# the ski chart is a tuple that contains tuples representing each row in the ski chart
ski_chart_headings = (
    'weight', 'height', 'skier_code', 'twist', 'fwd_lean', '<= 230', '231-250', '251-270', '271-290', '291-310', '311-330', '331-350', '>= 351'
)
ski_chart = (
    (None, None, None, 5, 18, None, None, None, None, None, None, None, None),
    ((22, 29), None, 'A', 8, 29, .75, .75, .75, None, None, None, None, None),
    ((30, 38), None, 'B', 11, 40, 1, .75, .75, .75, None, None, None, None),
    ((39, 47), None, 'C', 14, 52, 1.5, 1.25, 1.25, 1, None, None, None, None),
    ((48, 56), None, 'D', 17, 64, 2, 1.75, 1.5, 1.5, 1.25, None, None, None),
    ((57, 66), None, 'E', 20, 75, 2.5, 2.25, 2, 1.75, 1.5, 1.5, None, None),
    ((67, 78), None, 'F', 23, 87, 3, 2.75, 2.5, 2.25, 2, 1.75, 1.75, None),
    ((79, 91), None, 'G', 27, 102, None, 3.5, 3, 2.75, 2.5, 2.25, 2, None),
    ((92, 107), (0, 58), 'H', 31, 120, None, None, 3.5, 3, 3, 2.75, 2.5, None),
    ((108, 125), (59, 61), 'I', 37, 141, None, None, 4.5, 4, 3.5, 3.5, 3, None),
    ((126, 147), (62, 65), 'J', 43, 165, None, None, 5.5, 5, 4.5, 4, 3.5, 3),
    ((148, 174), (66, 70), 'K', 50, 194, None, None, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0),
    ((175, 209), (71, 76), 'L', 58, 229, None, None, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0),
    ((210, None), (77, None), 'M', 67, 271, None, None, None, 8.5, 8.0, 7.0, 6.5, 6.0),
    (None, None, 'N', 78, 320, None, None, None, 10.0, 9.5, 8.5, 8.0, 7.5),
    (None, None, 'O', 91, 380, None, None, None, 11.5, 11.0, 10.0, 9.5, 9.0),
    (None, None, 'P', 105, 452, None, None, None, None, None, 12.0, 11.0, 10.5),
    (None, None, None, 121, 520, None, None, None, None, None, None, None, None),
    (None, None, None, 137, 588, None, None, None, None, None, None, None, None)
)

#Function to calc din
def calculate_din(weight, height, age, skier_type, sole_length):
    weight_index = None
    height_index = None
    skier_code_index = None
    sole_length_index = None

    try:
        # set skier code initially
        # find row index of weight and height and set respectively

        #weight column is index 0 in 
        for i, row in enumerate(ski_chart):
            #if the row weights range value exists
            if row[0]:
                if weight >= row[0][0]:
                    weight_index = i
            if row[1]:
                if height >= row[1][0]:
                    height_index = i
        
        # set skier code index
        if (weight_index <= height_index ):
            skier_code_index = weight_index
        elif (weight_index > height_index):
            skier_code_index = height_index
        
        # adjust skier code for age
        if (age < 10 or age > 49):
            skier_code_index -= 1

        #adjust skier code for skier type
        if (skier_type == 2):
            skier_code_index += 1
        elif (skier_type == 3):
            skier_code_index += 2
        elif (skier_type == 4):
            skier_code_index += 3
        elif (skier_type == -1):
            skier_code_index -= 1
        
        # get boot sole length
        if (sole_length > 270):
            if (sole_length < 291):
                sole_length_index = 8
            elif ( sole_length < 311):
                sole_length_index = 9
            elif (sole_length < 331):
                sole_length_index = 10
            elif (sole_length < 351):
                sole_length_index = 11
            else:
                sole_length_index = 12
        elif (sole_length <= 270):
            if (sole_length > 250):
                sole_length_index = 7
            elif (sole_length > 230):
                sole_length_index = 6
            else:
                sole_length_index = 5
        
        # finally set the initial din setting
        skier_code = ski_chart[skier_code_index][2]
        din = ski_chart[skier_code_index][sole_length_index]

        return skier_code,  din
    except Exception as error:
        print(f"An error occurred: {error}")
        try:
            return ski_chart[skier_code_index][2], None
        except:
            return "Unknown", None


# test cases
# print(calculate_din(160, 69, 30, 2, 305)) #should print L, 6.5
# print(calculate_din(170, 65, 28, 1, 285)) #should print J, 5
# print(calculate_din(48, 48, 8, 1, 250)) #should print C, 1.25
# print(calculate_din(209, 78, 50, 3, 330)) #should print M, 7.0