import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Search extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = {
      searchText: ''
    }
  }

  onChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    return (
      <div className="artist-card__margin">
        <div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Artists, Albums or Tracks..."
              aria-label="Search Artists, Albums or Tracks..."
              aria-describedby="basic-addon2"
              onChange={e => {
                this.onChange(e)
              }}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Filter"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item
                onClick={() => {
                  console.log('All selected')
                }}
                active
              >
								All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Artists selected')
                }}
              >
								Artists
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Albums selected')
                }}
              >
								Albums
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Tracks selected')
                }}
              >
								Tracks
              </Dropdown.Item>
            </DropdownButton>

            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  this.props.onInputChange(this.state.searchText)
                }}
              >
								Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    )
  }
}

export default Search
