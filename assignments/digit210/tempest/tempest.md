# Tempest

## Acts and Scenes

### Distinguishing between Acts and Scenes:
The scenes and acts are both divided up using the `<div>` tag.

```
//body//div
```
<sub>There are **15** total `<div>` elements.</sub>

### Finding all Acts:
Use one slash to find the immediate child of the `<body>` tags, which are the **acts**.

```
//body/div
```
<sub>There are **5** total Acts in *The Tempest*.</sub>

### Finding all Scenes:
Because the **scenes** are a child of the **acts**, the scene `<div>` will be a child tag of the acts `<div>`.

```
//body/div/div
```
<sub>There are **10** total scenes.</sub>

### Finding scenes in just Act 2:
We can specify which `<div>` tag (or act) we want to search through using *predicates* or *square brackets* `[]`.

```
//body/div[2]/div
```
<sub>There are **2** scenes in Act 2.</sub>

## Stage Directions

### Find all Stage Directions:
Using two slashes, we can find any and all `<stage>` tags.

```
//stage
```
<sub>There are **149** total stage directions.</sub>

### Getting Stage Directions from Act 3:
Using the *predicate* filter, you can find the stage directions by specifying which `<div>` tag it is in. Plus, since you want to find all stage directions, you use two slashes for the `<stage>` tag.

```
//body/div[3]//stage
```
<sub>There are **32** stage directions in Act 3</sub>

### Finding Stage Directions in Lines:
Each line is separated using a `<l>` tag. If a stage direction is inside a line tag, the stage direction is a child of the line tag.

```
//l/stage
```
<sub>There are **79** stage directions located inside the lines.</sub>

### Stage Directions NOT inside a speech
Find the Stage Directions that aren't in it's parent `<sp>`.

```
//stage[not(parent::sp)]
```
<sub>There are **101** stage directions not located inside the speeches.</sub>

### Stage Directions NOT inside a metrical line
Find the Stage Directions that aren't in it's parent `<l>`.

```
//stage[not(parent::l)]
```
<sub>There are **70** stage directions not located inside the lines.</sub>

### Stage Directions NOT inside a speech OR metrical line
Entering two different predicates containing the parent elements `<sp>` and `<l>` will find stage directions that are not inside those tags.

```
//stage[not(parent::sp)][not(parent::l)]
```
<sub>The only element that holds stage directions when they are not inside a speech or line is the scene `<div>` element.</sub>
<sub>There are **22** stage directions that are not in the `<sp>` or `<l>` element.</sub>

## Attribute Axis

### Isolating the @who attributes
The `<sp>` elements contain a `@who` attribute within it

```
//sp[@who]
```
<sub>There are **648** total `@who` attributes.</sub>

### Spoken by Prospero
Set the `@who` attribute to **Prospero** by using `=`

```
//sp[@who="Prospero"]
```
<sub>There are **114** speeches spoken by Prospero</sub>

### Spoken by Miranda
Set the `@who` attribute to **Miranda** by using `=`

```
//sp[@who="Miranda"]
```
<sub>There are **50** speeches spoken by Miranda</sub>
