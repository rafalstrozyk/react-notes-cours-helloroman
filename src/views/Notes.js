import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, content, created }) => (
      <Card
        cardType="notes"
        id={id}
        title={title}
        content={content}
        created={created}
        key={title}
      />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
