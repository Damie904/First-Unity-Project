#pragma strict

public var moveSpeed : float = 10f;
public var turnSpeed : float = 0.1f;
public var counter : int = 0;

function Update ()
{
        
        counter++;
        Counter();
}
function Counter()
{

        if(counter < 300)
        {
        transform.Rotate(new Vector3(0,turnSpeed,0));
        }
        else
        {
        transform.Rotate(new Vector3(turnSpeed,0,0));
        transform.Translate(new Vector3(0,turnSpeed,0));
        yield;
        }
}