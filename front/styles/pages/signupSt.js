import styled from 'styled-components';

export const SingupWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  border-radius: 12px;

  background-color: #fff;
  padding: 1.5rem;

  h1 {
    margin-left: 25px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  margin-left: 25px;
`;

export const InputTilte = styled.span`
  width: 8rem;
`;

export const SinputInput = styled.input`
  display: block;

  height: 35px;
  width: 200px;

  padding: 0 10px;
  background-color: #fff;

  border-radius: 8px;
  border: 1px solid #ebedf3;

  font-size: 1em;
  outline: none;
`;

export const Explanation = styled.span`
  margin-left: 10px;
  color: rgb(107 114 128);
`;

export const UserAgreeBox = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;

  div {
    margin: 5px 0;
  }

  span {
    font-weight: 600;
    margin-bottom: 5px;
    display: block;
  }

  textarea {
    padding: 10px;

    width: 975px;
    height: 285px;
  }
`;

export const AgreeCheck = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  input {
    height: 1rem;
    width: 1rem;
    margin: 0 7px;
  }

  span {
    font-weight: 400;
    font-size: 15.5px;
    margin: 0;
  }
`;

export const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: auto;
`;

export const SingupButton = styled.button`
  cursor: pointer;

  margin: auto;

  width: 150px;
  height: 34px;

  font-size: 15px;
  border-radius: 7px;

  background-color: #fff;
  border: 1px solid #ebedf3;
`;

export const AreadyUser = styled.div`
  margin: 10px auto;

  a {
    color: #1b73e8;
    text-decoration: none;
    margin-left: 5px;
  }
`;

export const service = `<서비스 이용약관>

제 1 장 총칙



제 1조 (목적)



본 약관은 서비스(이하 "회사"라 한다)는 홈페이지에서 제공하는 서비스(이하 "서비스"라 한다)를 제공함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.



제 2조 (용어의 정의)



1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

'서비스'란 회사가 이용자에게 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 구성한 가상의 공간을 의미하며, 서비스 자체를 의미하기도 합니다.

'회원(이하 "회원"이라 한다)'이란 개인정보를 제공하여 회원등록을 한 자로서 홈페이지의 정보를 지속적으로 제공받으며 홈페이지가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.

'아이디(이하 "ID"라 한다)'란 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 회원 고유의 계정 정보를 의미합니다.

'비밀번호'란 회원이 부여 받은 ID와 일치된 회원임을 확인하고, 회원의 개인정보를 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 의미합니다.

'회원탈퇴(이하 "탈퇴"라 한다)'란 회원이 이용계약을 해지하는 것을 의미합니다.



2. 본 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스 별 안내에서 정하는 바에 의합니다.



제 3조 (이용약관의 효력 및 변경)



1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 각 서비스 사이트의 초기 서비스화면에 게시합니다.

2. 회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자 서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.

3. 회사는 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 회사가 제공하는 서비스 사이트의 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.

다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 회사는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.

4. 회원은 개정된 약관에 대해 거부할 권리가 있습니다. 회원은 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원등록을 해지할 수 있습니다.

단, 개정된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우에는 약관의 변경사항에 동의한 것으로 간주합니다.

5. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원 피해는 회사가 책임지지 않습니다.



제 4조 (약관 외 준칙)



1. 본 약관은 회사가 제공하는 서비스에 관해 별도의 정책 및 운영규칙과 함께 적용됩니다.

2. 본 약관에 명시되지 아니한 사항과 본 약관의 해석에 관하여는 관계법령에 따릅니다.



제 2 장 이용약관 체결



제 5조 (이용계약의 성립)



1. 이용계약은 회원의 본 이용약관 내용에 대한 동의와 이용신청에 대하여 회사의 이용승낙으로 성립합니다.

2. 본 이용약관에 대한 동의는 회원등록 당시 본 약관을 읽고 "위 서비스 약관에 동의합니다"의 대화 창에 표시를 한 후 등록하기 단추를 누름으로써 의사표시를 한 것으로 간주합니다.



제 6조 (서비스 이용 신청)



1. 회원으로 가입하여 본 서비스를 이용하고자 하는 이용고객은 회사에서 요청하는 제반 정보(이름, 메일주소, 연락처, 주소 등)를 제공하여야 합니다.

2. 타인의 명의(이름 및 메일주소 등)를 도용하여 이용신청을 한 회원의 모든 ID는 삭제되며, 관계법령에 따라 처벌을 받을 수 있습니다.

3. 만 14세 미만의 아동이 회원으로 가입하기 위해서는 반드시 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고 법정대리인(부모)의 동의를 받아야 합니다.

법정대리인의 허락을 받지 않은 14세 미만의 아동에 대해서는 회원에서 제외할 수 있습니다.



제 7조 (개인정보의 보호 및 사용)



1. 회사는 관계법령이 정하는 바에 따라 회원등록정보를 포함한 회원의 개인정보를 보호하기 위해 노력합니다.

회원 개인 정보의 보호 및 사용에 대해서는 관련법령 및 회사의 개인정보보호정책이 적용됩니다.

단, 회사의 공식사이트 이외의 웹에서 링크된 사이트에서는 회사의 개인정보보호정책이 적용되지 않습니다.

또한 회사는 회원의 귀책사유로 인해 노출된 정보에 대해서 일체의 책임을 지지 않습니다.

2. 회사는 이용자에게 제공하는 서비스의 양적, 질적 향상을 위하여 이용자의 개인정보를 제휴사에게 제공, 공유할 수 있으며, 이 때에는 반드시 이용자의 동의를 받아 필요한 최소한의 정보를 제공, 공유하며 누구에게 어떤 목적으로 어떤 정보를 제공, 공유하는지 명시합니다.

3. 회원은 원하는 경우 언제든 회사에 제공한 개인정보의 수집과 이용에 대한 동의를 철회할 수 있으며, 동의의 철회는 구독해지 회원 탈퇴를 하는 것으로 이루어집니다.

4. 회사는 수탁자를 통해 개별 이벤트, 행사가 진행될 경우, 해당 이벤트 참여 신청 페이지를 통해 명시적으로 개인정보 취급위탁에 대한 회원 동의를 받도록 하겠습니다.



제 8조 (이용신청의 승낙과 제한)



1. 회사는 제 6조의 규정에 의거 이용신청고객에 대하여 업무 수행상 또는 기술상 지장이 없는 경우에 원칙적으로 접수순서에 따라 서비스 이용을 승낙합니다.



2. 회사는 다음 각 호의 내용에 해당하는 경우 이용신청에 대한 승낙을 제한할 수 있고, 그 사유가 해소 될 때까지 승낙을 유보할 수 있습니다.

i.회사의 서비스 관련 설비에 여유가 없는 경우

ii.회사의 기술상 지장이 있는 경우

iii.기타 회사의 사정상 필요하다고 인정되는 경우



3. 회사는 다음 각 호의 내용에 해당하는 경우 이용신청에 대한 승낙을 하지 아니할 수도 있습니다.

i.실명이 아니거나 타인의 명의를 이용하여 신청한 경우

ii.이용계약 신청서의 내용을 허위로 기재한 경우

iii.사회의 안녕과 질서, 미풍양속을 저해할 목적으로 신청한 경우

iv.부정한 용도로 본 서비스를 이용하고자 하는 경우

v.영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우

vi.기타 회사가 정한 등록신청 요건이 미비된 경우

vii.본 서비스와 경쟁관계가 있는 이용자가 신청하는 경우

viii.기타 규정한 제반 사항을 위반하며 신청하는 경우



4. 회사는 이용신청고객이 관계법령에서 규정하는 미성년자일 경우에 서비스 별 안내에서 정하는 바에 따라 승낙을 보류할 수 있습니다.



제 9조 (회원 아이디 부여 및 변경 등)



1. 회사는 회원에 대하여 본 약관에 정하는 바에 따라 회원 ID를 부여합니다.

2. 회원이 원할 경우 회원 ID는 변경이 가능하며, 이 때 새로운 회원 ID는 다른 회원의 ID와 중복되지 않아야 합니다.

3. 회원은 해당 홈페이지로 링크된 메뉴를 통하여 자신의 개인정보를 관리할 수 있는 페이지를 열람할 수 있으며, 해당 페이지에서 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.

4. 회사가 제공하는 서비스의 회원 ID는 회원 본인의 동의 하에 회사가 운영하는 자사 사이트의 회원 ID와 연결될 수 있습니다.

5. 회원 ID는 다음 각 호에 해당하는 경우에 회원 또는 회사의 요청으로 변경할 수 있습니다.

i.회원 ID가 회원의 전화번호 또는 주민등록번호 등으로 등록되어 사생활 침해가 우려되는 경우

ii.타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우

iii.기타 합리적인 사유가 있는 경우

6. 회원 ID 및 비밀번호의 관리책임은 회원에게 있습니다. 이를 소홀이 관리하여 발생하는 서비스 이용상의 손해 또는 제3자에 의한 부정이용 등에 대한 책임은 회원에게 있으며 회사는 그에 대한 책임을 일절 지지 않습니다.

7. 기타 회원개인정보 관리 및 변경에 관한 사항은 서비스 별 안내에 정하는 바에 의합니다.



제3장 계약 당사자의 의무



제 10조 (회사의 의무)



1. 회사는 관련법과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위하여 최선을 다하여야 합니다.

2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 회원의 개인정보보호를 위한 보안시스템을 구축하며 개인정보 보호정책을 공시하고 준수합니다.

3. 회사는 수신거절의 의사를 명백히 표시한 회원에 대해서는 회원이 원하지 않는 영리목적의 광고성 전자우편(이메일)을 발송하지 않습니다.

4. 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 회원과의 계약관계절차 및 내용 등에 있어 회원에게 편의를 제공하도록 노력합니다. 회사 관리자에게 회원이 구독해지 신청메일을 보낼 경우 회원 본인임을 확인한 후 즉시 구독해지 처리를 합니다.

5. 회사는 이용고객으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 적절한 절차를 거쳐 즉시 처리하여야 합니다.

다만, 즉시 처리가 곤란한 경우는 이용자에게 그 사유와 처리 일정을 통보하여야 합니다.



제 11조 (회원 ID 및 비밀번호에 대한 의무)



1. 회사가 관계법령 및 개인정보보호정책에 의하여 그 책임을 지는 경우를 제외하고, 회원 ID와 비밀번호의 관리책임은 회원에게 있습니다.

2. 회원은 자신의 ID 및 비밀번호를 제3자가 이용하게 해서는 안됩니다.

3. 회원이 자신의 ID 및 비밀번호를 도용 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다.

4. 회사는 회원이 상기 제1항, 제2항, 제3항을 위반하여 회원에게 발생한 손해에 대하여 책임을 일절 지지 않습니다.



제 12조 (회원의 의무)



1. 회원은 본 약관에 규정하는 사항과 기타 회사가 정한 제반 규정, 서비스 이용안내 또는 공지사항 등 회사가 공지 또는 통지하는 사항 및 관계법령을 준수하여야 하며, 기타 회사의 업무에 방해가 되는 행위, 회사의 명예를 손상 시키는 행위를 하여서는 안됩니다.

2. 회사가 관계법령 및 개인정보보호정책에 의하여 그 책임을 지는 경우를 제외하고 제11조의 관리소홀, 부정사용에 의하여 발생되는 모든 결과에 대한 책임은 회원에게 있습니다.

3. 회원은 회사의 사전승낙 없이 서비스를 이용하여 영업활동을 할 수 없으며, 회원 간 또는 회원과 제3자 간에 서비스를 매개로 한 물품거래 및 서비스의 이용과 관련하여 기대하는 이익 등에 관하여 발생한 손해에 대하여 회사는 책임을 지지 않습니다. 이와 같은 영업활동으로 회사가 손해를 입은 경우 회원은 회사에 대하여 손해배상의 의무를 지며, 회사는 해당 회원에 대해 서비스 이용제한 및 적법한 절차를 거쳐 손해배상 등을 청구할 수 있습니다.

4. 회원은 회사의 명시적인 동의가 없는 한 서비스의 이용권한, 기타 이용계약 상의 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.

5. 회원은 서비스 이용과 관련하여 제22조 제1항의 각 호에 해당하는 행위를 하여서는 안됩니다.

6. 이용자는 회원가입 신청 또는 회원정보 변경 시 모든 사항을 사실에 근거하여 작성하여야 하며, 허위 또는 타인의 정보를 등록할 경우 일체의 권리를 주장할 수 없습니다.

7. 회원은 주소, 연락처, 전자우편 주소 등 이용계약사항이 변경된 경우에 해당 절차를 거쳐 이를 회사에 즉시 알려야 합니다.

8. 회원은 회사 및 제 3자의 지적 재산권을 침해해서는 안됩니다.

9. 회원은 다음 각 호에 해당하는 행위를 하여서는 안되며, 해당 행위를 하는 경우에 회사는 회원의 서비스 이용제한 및 적법 조치를 포함한 제재를 가할 수 있습니다.

i.회원가입 신청 또는 회원정보 변경 시 허위내용을 등록하는 행위

ii.다른 이용자의 ID, 비밀번호, 주민등록번호를 도용하는 행위

iii.이용자 ID를 타인과 거래하는 행위

iv.회사의 운영진, 직원 또는 관계자를 사칭하는 행위

v.회사로부터 특별한 권리를 부여 받지 않고 회사의 클라이언트 프로그램을 변경하거나, 회사의 서버를 해킹하거나, 웹사이트 또는 게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위

vi.서비스에 위해를 가하거나 고의로 방해하는 행위

vii.본 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 서비스 이용 외의 목적으로 복제하거나, 이를 출판 및 방송 등에 사용하거나, 제 3자에게 제공하는 행위

viii.회사 또는 제 3자의 저작권 등 기타 지적재산권을 침해하는 내용을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게 유포하는 경우

ix.공공질서 및 미풍양속에 위반되는 저속, 음란한 내용의 정보, 문장, 도형, 음향, 동영상을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게 유포하는 행위

x.모욕적이거나 개인신상에 대한 내용이어서 타인의 명예나 프라이버시를 침해할 수 있는 내용을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게 유포하는 행위

xi.다른 이용자를 희롱 또는 위협하거나, 특정 이용자에게 지속적으로 고통 또는 불편을 주는 행위

xii.회사의 승인을 받지 않고 다른 사용자의 개인정보를 수집 또는 저장하는 행위

xiii.범죄와 결부된다고 객관적으로 판단되는 행위

xiv.본 약관을 포함하여 기타 회사가 정한 제반 규정 또는 이용 조건을 위반하는 행위

xv.기타 관계법령에 위배되는 행위



제 4 장 서비스 이용



제 13조 (서비스의 제공 및 변경)



1. 회사는 회사가 제공하는 서비스에서 진행하는 콘텐츠와 이벤트 등의 모든 서비스를 회원에게 제공합니다.

2. 회사에서 제공하는 서비스는 기본적으로 무료입니다. 유료서비스 추가 시 사전 공지하며 이용에 대한 사항은 회사가 별도로 정한 서비스 약관 및 정책 또는 운영규칙에 따릅니다.

3. 회사는 서비스 변경 시 그 변경될 서비스의 내용 및 제공일자를 제 14조에 정한 방법으로 회원에게 통지합니다.



제 14조 (정보의 제공 및 통지)



1. 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 공지사항 혹은 전자우편 등의 방법으로 회원에게 제공할 수 있습니다.

2. 회사는 불특정다수 회원에 대한 통지를 하는 경우 7일 이상 공지 게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.



제 15조 (게시물의 저작권 및 관리)



1. 회사는 회원의 게시물을 소중하게 생각하며 변조, 훼손, 삭제되지 않도록 최선을 다하여 보호합니다.

다만, 다음 각 호에 해당하는 게시물이나 자료의 경우 사전통지 없이 삭제하거나 이동 또는 등록 거부를 할 수 있으며, 해당 회원의 자격을 제한, 정지 또는 상실시킬 수 있습니다.

i.다른 회원 또는 제3자에게 심한 모욕을 주거나 명예를 손상시키는 내용인 경우

ii.공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크시키는 경우

iii.불법복제 또는 해킹을 조장하는 내용인 경우

iv.영리를 목적으로 하는 광고일 경우

v.범죄적 행위에 결부된다고 인정되는 내용인 경우

vi.회사나 다른 회원의 저작권 혹은 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우

vii.회사에서 규정한 게시물 원칙에 어긋나거나, 게시판 성격에 부합하지 않는 경우

viii.스팸성 게시물인 경우

ix.기타 관계법령에 위배된다고 판단되는 경우

2. 회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.

3. 회원이 서비스 화면 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다. 또한 회사는 게시자의 동의 없이 게시물을 상업적으로 이용할 수 없습니다.

다만, 비영리 목적인 경우는 그러하지 아니하며, 또한 본 사이트 내에서의 게재권을 갖습니다.

4. 회원은 서비스를 이용하여 취득한 정보를 회사의 사전 승낙 없이 임의가공, 판매, 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.



제 16조 (광고게재 및 광고주와의 거래)



1. 회사가 제공하는 서비스 내에 다양한 배너와 링크(Link)를 포함할 수 있으며, 이는 광고주와의 계약관계에 의하거나 제공받은 콘텐츠의 출처를 밝히기 위한 조치입니다.

회원은 서비스 이용 시 노출되는 광고게재에 대해 동의합니다.

2. 서비스 내에 포함되어 있는 링크를 클릭하여 타 사이트의 페이지로 옮겨갈 경우 해당 사이트의 개인정보보호정책은 회사와 무관합니다.



제 17조 (서비스 이용시간)



1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다. 다만, 회사는 시스템 정기점검, 증설 및 교체를 위해 회사가 정한 날이나 시간에 서비스를 일시 중단할 수 있으며, 예정되어 있는 작업으로 인한 서비스 일시 중단은 회사가 제공하는 서비스를 통해 사전에 공지합니다.

2. 회사는 서비스를 일정 범위로 분할하여 각 범위 별로 이용가능시간을 별도로 지정할 수 있습니다. 다만, 이 경우 그 내용을 공지합니다.



제 18조 (서비스 제공의 중단 등)



1. 회사는 다음 각 호의 내용에 해당하는 경우 서비스 제공의 일부 혹은 전부를 제한하거나 중단할 수 있습니다.

i.정보통신설비의 보수 점검, 교체 및 고장 등 공사로 인한 부득이 한 경우

ii.기간통신사업자가 전기통신서비스를 중단했을 경우

iii.서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우

iv.국가비상사태 등 기타 불가항력적인 사유가 있는 경우

2. 전항에 의한 서비스 중단의 경우에는 회사는 제14조에 정한 방법으로 그 사유 및 기간 등을 공지합니다. 다만, 회사가 통제할 수 없는 사유로 발생한 서비스의 중단 (시스템관리자의 고의, 과실 없는 디스크 장애, 시스템다운 등)에 대하여 사전공지가 불가능한 경우에는 예외로 합니다.



제 19조 (회원 ID 관리)



1. 회원 ID와 비밀번호에 관한 모든 관리책임은 회원에게 있습니다.

2. 회사는 회원 ID에 의하여 제반 회원 관리업무를 수행하므로 회원이 ID를 변경하고자 하는 경우 회사가 인정할 만한 사유가 없는 한 ID의 변경을 제한할 수 있습니다.

3. 회원이 등록한 회원 ID 및 비밀번호에 의하여 발생되는 사용상의 과실 또는 제3자에 의한 부정사용 등에 대한 모든 책임은 해당 이용고객에게 있습니다.



제 20조 (정보의 제공)



1. 회사는 회원에게 서비스 이용에 필요가 있다고 인정되는 각종 정보에 대해서 전자우편이나 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.

2. 회사는 서비스 개선 및 회원 대상의 서비스 소개 등의 목적으로 회원의 동의 하에 추가적인 개인 정보를 요구할 수 있습니다.



제5장 계약해지 및 이용제한



제 21조 (계약 변경 및 해지)



회원이 이용계약을 해지하고자 하는 경우에는 회원 본인이 사이트 내의 개인정보관리 페이지를 통해 등록해지 신청을 하여야 합니다.



제 22조 (서비스 이용 제한)



1. 회원은 본 약관 제11조, 제12조 내용을 위반하거나 다음 각 호에 해당하는 행위를 하는 경우에 회사는 회원의 서비스 이용을 제한할 수 있습니다.

i.미풍양속을 저해하는 비속한 ID 및 별명 사용

ii.타 이용자에게 심한 모욕을 주거나, 서비스 이용을 방해한 경우

iii.정보통신 윤리위원회 등 관련 공공기관의 시정 요구가 있는 경우

iv.3개월 이상 서비스를 이용한 적이 없는 경우

v.불법 게시물을 게재한 경우

• 상용소프트웨어나 크랙파일을 올린 경우

• 정보통신윤리위원회의 심의세칙 제 7조에 어긋나는 음란물을 게재한 경우

• 반국가적 행위의 수행을 목적으로 하는 내용을 포함한 경우

• 저작권이 있는 글을 무단 복제하거나 mp3를 게재한 경우

vi.기타 정상적인 서비스 운영에 방해가 될 경우

2. 상기 이용제한 규정에 따라 서비스를 이용하는 회원에게 서비스 이용에 대하여 별도 공지 없이 서비스 이용의 일시 정지, 초기화, 이용계약 해지 등을 불량이용자 처리규정에 따라 취할 수 있으며, 회원은 전항의 귀책사유로 인하여 회사나 다른 회원에게 입힌 손해를 배상할 책임이 있습니다.



제 6 장 손해배상 및 기타사항



제 23조 (손해배상)



회사는 무료로 제공하는 서비스의 이용과 관련하여 개인정보보호정책에서 정하는 내용에 해당하지 않는 사항에 대하여는 어떠한 손해도 책임을 지지 않습니다.



제 24조 (면책조항)



1. 회사는 천재지변, 전쟁 및 기타 불가항력, 회사의 합리적인 통제범위를 벗어난 사유로 인하여 서비스를 제공할 수 없는 경우에는 그에 대한 책임이 면제됩니다.

2. 회사는 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로 제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다.

3. 회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.

4. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애 또는 손해에 대하여 책임을 지지 않습니다.

5. 회사는 이용자의 컴퓨터 오류에 의해 손해가 발생한 경우, 또는 회원이 신상정보 및 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우 책임을 지지 않습니다.

6. 회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.



제 25조 (분쟁의 해결)



1. 회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 노력을 합니다.

2. 회사는 회원으로부터 제출되는 불만사항 및 의견을 우선적으로 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 즉시 통보합니다.



제 26조 (재판권 및 준거법)



회사와 회원 간에 서비스 이용으로 발생한 분쟁에 대하여는 대한민국법을 적용하며, 본 분쟁으로 인하여 소송이 제기될 경우 민사소송법 상의 관할을 가지는 대한민국의 법원에 제기합니다.`;

export const userInfoAgree = `1. 개인정보의 처리 목적

<(주)제이피 이노베이션>(‘www.urbanlaunderette.com’이하 ‘어반런드렛’) 은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
– 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등

2. 개인정보의 처리 및 보유 기간

① ‘어반런드렛’은 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.

② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
– 고객 가입 및 관리 : 카카오싱크를 통한 회원가입 및 카카오채널을 통한 관리
– 보유 기간 : 카카오채널 탈퇴 시, 즉시 삭제

3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.

① 정보주체는 ‘어반런드렛’ 에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
1. 개인정보 열람요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제요구
4. 처리정지 요구

4. 처리하는 개인정보의 항목 작성

① ‘어반런드렛’은 다음의 개인정보 항목을 처리하고 있습니다.

<‘어반런드렛’에서 수집하는 개인정보 항목>
‘어반런드렛’ 회원 가입 및 고객 문의 시, 제공 동의를 해주시는 개인정보 수집 항목입니다.

■ 회원 가입 시(회원)
– 필수항목 : 이름, 이메일, 전화번호, 성별, 연령대
– 선택항목 : 생년월일
– 수집목적 : 어반런드렛 회원관리 및 마케팅 이용
– 보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기

■ 고객 문의 시(비회원)
– 필수항목 : 문의종류, 이름, 휴대폰번호, 이메일, 문의사항
– 수집목적 : 고객문의 및 상담요청에 대한 회신, 상담을 위한 서비스 이용기록 조회
– 보유기간 : 문의 접수 후 2년 간 보관 (단, 관계 법령이 정한 시점까지 보존)

<카카오 개인정보 제3자 제공 동의>
아래는 ‘어반러드렛’ 회원 가입 시(카카오 계정을 통한 간편 가입시) 제공 동의를 해주시는 자동 수집 항목입니다.

– 필수항목 : 프로필 정보(닉네임/프로필 사진), 카카오계정(이메일), 카카오계정(전화번호), 성별, 연령대, 카카오톡 채널 추가 상태 및 내역
– 선택항목 : 생일, 출생연도
– 수집목적 : 어반런드렛 카카오채널을 통한 회원관리 및 마케팅 이용
– 보유기간 : 카카오채널 탈퇴 또는 동의철회 시 지체없이 파기

② ‘어반런드렛’은 만 14세 미만 아동의 개인정보를 보호하기 위하여 회원가입은 만14세 이상만 가능하도록 함으로써 아동의 개인정보를 수집하지 않습니다.

5. 개인정보의 파기

‘어반런드렛’은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.’

-파기절차
이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.

-파기기한
이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.

6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항

① ‘어반런드렛’은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.

② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.

가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
7. 개인정보 보호책임자 작성

① ‘어반런드렛’은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
성명 : 손수정
직책 : 대표
직급 : CEO
연락처 : 1577-8725, contact@jpinnovation.kr
※ 개인정보 보호 담당부서로 연결됩니다.

▶ 개인정보 보호 담당부서
부서명 : 마케팅팀
담당자 : 곽은미
연락처 : 1577-8725, amykwak@jpinnovation.kr


② ‘어반런드렛’의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.

‘어반런드렛’은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

8. 개인정보 처리방침 변경

① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.

9. 개인정보의 안전성 확보 조치 
‘어반런드렛’은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.

① 개인정보 취급 직원의 최소화 및 교육
개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.


② 해킹 등에 대비한 기술적 대책
‘어반런드렛’은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.


③ 개인정보의 암호화
이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.


④ 접속기록의 보관 및 위변조 방지
개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.


⑤ 개인정보에 대한 접근 제한
개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.


10. 정보주체의 권익침해에 대한 구제방법

아래의 기관은 (주)제이피 이노베이션 과는 별개의 기관으로서, ‘어반런드렛’의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.

▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
– 소관업무 : 개인정보 침해사실 신고, 상담 신청
– 홈페이지 : privacy.kisa.or.kr
– 전화 : (국번없이) 118
– 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터


▶ 개인정보 분쟁조정위원회
– 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
– 홈페이지 : www.kopico.go.kr
– 전화 : (국번없이) 1833-6972
– 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층


▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)


▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)`;
