import React, { useEffect, useMemo } from "react";
import { Form, Row, Col, Input, Select, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { NATIONALITIES } from '../../../constants/nationalities';
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../store/filter/filter";
import { filterContacts } from '../../../utils/filterContacts';

const View = () => {

   const nationalities = useMemo(() =>
      Object.values(NATIONALITIES).map(({ name }) =>
         <Select.Option key={name} value={name}>
            {name}
         </Select.Option>
      ), []);

   const contacts = useSelector(state => state.contacts.contacts);
   const {
      searchTerm,
      gender,
      nationality,
      isCreator,
      clear,
   } = useSelector(state => state.filter);
   const dispatch = useDispatch();

   useEffect(() => {
      const resultFilterContacts = filterContacts(contacts, searchTerm, gender, nationality, isCreator);
      dispatch(filterActions.setFilteredContacts(resultFilterContacts))
   }, [dispatch, searchTerm, gender, nationality, isCreator, clear, contacts])

   const handleSearchTermChange = event => {
      dispatch(filterActions.setSearchTerm(event.target.value));
      dispatch(filterActions.setClear(false))
   }

   const handleChangeCreator = event => {
      dispatch(filterActions.setIsCreator(event.target.checked));
      dispatch(filterActions.setClear(false))
   }

   const handleChangeGender = gender => {
      dispatch(filterActions.setGender(gender));
      dispatch(filterActions.setClear(false))
   }

   const handelChangeNationality = nationalities => {
      dispatch(filterActions.setNationality(nationalities))
      dispatch(filterActions.setClear(false))
   }

   const handleChangeClear = () => {
      dispatch(filterActions.setClear(true));
      dispatch(filterActions.setSearchTerm(''));
      dispatch(filterActions.setIsCreator(false));
      dispatch(filterActions.setGender(null));
      dispatch(filterActions.setNationality([]))
   }

   return (
      <Form>
         <div className={'box'}>
            <Row gutter={[12, 12]} align={'middle'} justify={'center'}>
               <Col className={'_flex-grow'}>
                  <Row gutter={[12, 12]} align={'middle'} justify={'center'}>
                     <Col xs={24} lg={11}>
                        <Input.Search
                           placeholder={'Search by full name'}
                           size="large"
                           value={searchTerm}
                           onChange={handleSearchTermChange}
                        />
                     </Col>
                     <Col xs={24} sm={10} lg={4}>
                        <Select
                           placeholder={'Gender'}
                           size={'large'}
                           className={'_full_width'}
                           value={gender}
                           onChange={handleChangeGender}
                        >
                           <Select.Option value={'male'}>
                              Male
                           </Select.Option>
                           <Select.Option value={'female'}>
                              Female
                           </Select.Option>
                           <Select.Option value={'ideterminate'}>
                              Ideterminate
                           </Select.Option>
                        </Select>
                     </Col>
                     <Col xs={24} sm={14} lg={5}>
                        <Select
                           placeholder={'Nationality'}
                           size={'large'}
                           mode={'multiple'}
                           maxTagCount={2}
                           className={'_full_width'}
                           value={nationality}
                           onChange={handelChangeNationality}
                        >
                           {nationalities}
                        </Select>
                     </Col>
                     <Col xs={24} sm={6} lg={4}>
                        <Checkbox checked={isCreator} onChange={handleChangeCreator}>
                           I am creator
                        </Checkbox>
                     </Col>
                  </Row>
               </Col>
               <Col className={'_flex-noshrink'}>
                  <Button
                     disabled={clear}
                     type={'link'}
                     icon={<CloseOutlined />}
                     onClick={handleChangeClear}
                  >
                     Clear
                  </Button>
               </Col>
            </Row>
         </div>
      </Form>
   );
}

export { View };