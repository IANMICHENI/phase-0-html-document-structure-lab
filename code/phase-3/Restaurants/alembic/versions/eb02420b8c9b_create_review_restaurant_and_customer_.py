"""create_review_restaurant_and_customer_tables

Revision ID: eb02420b8c9b
Revises: 
Create Date: 2023-12-10 09:45:15.453787

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'eb02420b8c9b'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
