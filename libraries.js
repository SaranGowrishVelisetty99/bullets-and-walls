function hasCollided(object1,object2)
{
    bulletRightEdge = object1.x+object1.width/2;
    wallLeftEdge = object2.x;

    if(bulletRightEdge >= wallLeftEdge)
    {
        return true;
    }
    
    else
    {
        return false;
    }
}