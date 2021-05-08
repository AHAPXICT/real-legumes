import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import OneFieldModalDialog from '../../../FormModalDialog/OneFieldModalDialog';

import s from './style.module.css';

const CategoryAdminPage = ({ categories, updateInputValue, inputState, addCategory, deleteCategory, updateCategory }) => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.category__list}>
                    <div className={s.category__add_btn}>
                        <OneFieldModalDialog
                            titleText={'Додати категорію'}
                            helpText={'Введіть назвку категорії.'}
                            fullWidth={100}
                            btnText={'Додати'}
                            fieldText={'Категорія'}
                            mainBtnText={'Додати'}
                            updateInputValue={updateInputValue}
                            inputState={inputState}
                            buttonOk={addCategory}
                        />
                    </div>

                    {categories.map(category => (
                        <CategoryItem
                            key={category.name}
                            {...category}
                            deleteCategory={deleteCategory}
                            updateCategory={updateCategory}
                            updateInputValue={updateInputValue}
                            inputState={inputState}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryAdminPage;
