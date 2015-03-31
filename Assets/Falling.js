#pragma strict

public var moveSpeed : float = -1f;
public var turnSpeed : float = 0.1f;
public var counter : int = 0;
//public var supah : int = 0;
//var coll: Collider;


function Update ()
{
        counter++;
        Counter();
        
}

function Counter()
{

        if(counter < 600)
        {
        transform.Translate(new Vector3(counter/100,moveSpeed,0));
        }
        else
        {
        Physics.gravity = Vector3(0, 3.0, 0);
        yield;
        }
}