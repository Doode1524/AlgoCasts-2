// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValidParentheses(s) {
    const queue = []
    
    for (i=0; i < s.length; i++) {
      let cur = s[i]
      
      switch(cur) {
        case "(": queue.push(")")
          break;
        case "[": queue.push("]")
          break;
        case "{": queue.push("}")
          break;
        default:
          checkEle = queue.pop()
          if (cur !== checkEle) return false
      }
    }
    return queue.length === 0
  }
  
  let s1 = "()"
  // Output: true
  
  let s2 = "()[]{}"
  // Output: true
                                                                          
  let s3 = "(]"
  // Output: false
  
  let s4 = "([)]"
  // Output: false
  
  let s5 = "{[]}"
  // Output: true
  
  console.log(isValidParentheses(s1))