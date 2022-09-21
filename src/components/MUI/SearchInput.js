import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobaleState";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import styled from "styled-components";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchInput() {
    const { handleFilterRecipes, ingredients } = useContext(GlobalContext);

    const [value, setValue] = useState(null);
    const handleChange = (_e, v) => {
        setValue(v);
    };

    useEffect(() => {
        value
            ? handleFilterRecipes(value.displayName)
            : handleFilterRecipes(null);
    }, [value]);

    return (
        <AutocompleteContainer>
            <Autocomplete
                value={value}
                onChange={handleChange}
                size="small"
                id="search-autocomplete"
                options={ingredients}
                disableCloseOnSelect
                getOptionLabel={(option) => option?.displayName || ""}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.displayName}
                    </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            label="Filter Ingredients"
                            placeholder="Filter Ingredients"
                        />
                    );
                }}
            />
        </AutocompleteContainer>
    );
}

const AutocompleteContainer = styled.div`
    max-width: 328px;
    display: flex;

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #3593e9;
    }

    .MuiAutocomplete-root
        .MuiFormControl-root
        .MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
        color: #3593e9;
    }

    @media (max-width: 576px) {
        max-width: 100%;
    }
`;
