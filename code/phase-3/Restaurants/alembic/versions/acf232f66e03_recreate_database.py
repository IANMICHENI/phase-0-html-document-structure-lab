"""Recreate database

Revision ID: acf232f66e03
Revises: eb02420b8c9b
Create Date: 2023-12-10 10:59:06.716241

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'acf232f66e03'
down_revision: Union[str, None] = 'eb02420b8c9b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
