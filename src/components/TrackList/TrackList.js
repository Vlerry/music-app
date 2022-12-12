import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";

class TrackList extends React.Component {




    render() {

        const { onAdd = () => { }, onRemove = () => { }, isRemoval = false } = this.props;

        console.log(this.props, "Traklist");
        return (
            <div className="TrackList" >
                {this.props.tracks.map(track => {
                    return (
                        <Track
                            track={track}
                            key={track.id}
                            onAdd={onAdd}
                            isRemoval={isRemoval}
                            onRemove={onRemove}
                        />
                    )
                })}
            </div>
        )
    }
}


export default TrackList;