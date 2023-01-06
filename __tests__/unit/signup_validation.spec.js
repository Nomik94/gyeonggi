const { isEmail, isPhoneNumber, isPassword } = require("./signup_validation");

test('이메일 형식', () => {
    // test code
    expect(isEmail("nodenbc4@sparta.com")).toEqual(true);
    expect(isEmail("nodenbc4@sparta78.com")).toEqual(false);
    expect(isEmail("nodenbc4@spartacom")).toEqual(false);
    expect(isEmail("nbc4@sparta@com")).toEqual(false);
});

test('번호 형식', () => {
    expect(isPhoneNumber("010-4444-1545")).toEqual(true);
    expect(isPhoneNumber("031-613-1301")).toEqual(true);
    expect(isPhoneNumber("01054916813")).toEqual(false);
    expect(isPhoneNumber("010-948-61")).toEqual(false);
});

test('비밀번호 4~10 숫자, 영어 조합', () => {
    expect(isPassword("1234")).toEqual(false);
    expect(isPassword("abcd")).toEqual(false);
    expect(isPassword("12ab")).toEqual(true);
    expect(isPassword("12dg#")).toEqual(false);
    expect(isPassword("cdg12546serehere")).toEqual(false);
});