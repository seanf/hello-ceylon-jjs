shared void run() {
	print("Hello from Ceylon running in Nashorn jjs");
	value listOfObjectType = `List<Object>`;
	print(listOfObjectType);
	value fun = `function print`;
	print(fun);
}