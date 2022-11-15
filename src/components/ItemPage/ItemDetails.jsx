import { HeaderLink } from '../shared/HeaderLink'

export const ItemDetails = () => {
  return (
    <div style={{
      border: '1px solid #707070',
      height: '200px',
      gridArea: 'details',
      padding: '8em 10em'
    }}
    className='flx col g-s'>
        <div className='flx g-s'>
            <HeaderLink>Description</HeaderLink>
            <HeaderLink>Additional information</HeaderLink>
            <HeaderLink>Reviews</HeaderLink>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est qui fugit corrupti expedita accusamus natus quod veniam inventore earum voluptatibus, fuga sunt laboriosam consequuntur voluptate, mollitia labore recusandae eos ea! Debitis, ducimus doloribus? Quo error numquam eveniet consectetur saepe, iusto cum molestias blanditiis ipsa necessitatibus non dolores possimus recusandae mollitia dolorum ipsam odit debitis expedita voluptates laborum quia veniam!</p>
    </div>
  )
}
