// it's a component not a container because the state is directly pass through weather_list
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}
// class or function based component ?
// we don't need state or extra fancy stuff
// so let's use just a function component
export default (props) => {
  return (
    <div>
      <Sparklines
        height={120}
        width={180}
        data={props.data}
        >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}
