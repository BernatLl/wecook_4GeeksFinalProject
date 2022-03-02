"""empty message

Revision ID: 09a5744b41a3
Revises: 76d297aa18dc
Create Date: 2022-03-02 16:47:59.082027

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09a5744b41a3'
down_revision = '76d297aa18dc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('course', sa.Column('img', sa.String(length=240), nullable=False))
    op.create_unique_constraint(None, 'course', ['courseName'])
    op.create_unique_constraint(None, 'course', ['img'])
    op.create_unique_constraint(None, 'course', ['video'])
    op.add_column('student', sa.Column('facebookURL', sa.String(length=120), nullable=True))
    op.add_column('student', sa.Column('image', sa.String(length=240), nullable=False))
    op.add_column('student', sa.Column('instagramURL', sa.String(length=120), nullable=True))
    op.add_column('student', sa.Column('linkedinURL', sa.String(length=120), nullable=True))
    op.add_column('student', sa.Column('nickName', sa.String(length=120), nullable=False))
    op.add_column('student', sa.Column('twitterURL', sa.String(length=120), nullable=True))
    op.add_column('student', sa.Column('websiteURL', sa.String(length=120), nullable=True))
    op.alter_column('student', 'studentDescription',
               existing_type=sa.VARCHAR(length=400),
               nullable=True)
    op.create_unique_constraint(None, 'student', ['image'])
    op.create_unique_constraint(None, 'student', ['nickName'])
    op.drop_column('student', 'address')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('student', sa.Column('address', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'student', type_='unique')
    op.drop_constraint(None, 'student', type_='unique')
    op.alter_column('student', 'studentDescription',
               existing_type=sa.VARCHAR(length=400),
               nullable=False)
    op.drop_column('student', 'websiteURL')
    op.drop_column('student', 'twitterURL')
    op.drop_column('student', 'nickName')
    op.drop_column('student', 'linkedinURL')
    op.drop_column('student', 'instagramURL')
    op.drop_column('student', 'image')
    op.drop_column('student', 'facebookURL')
    op.drop_constraint(None, 'course', type_='unique')
    op.drop_constraint(None, 'course', type_='unique')
    op.drop_constraint(None, 'course', type_='unique')
    op.drop_column('course', 'img')
    # ### end Alembic commands ###
