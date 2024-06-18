interface CalculatePathArgs {
  path?: string;
  url: URL
}

export const calculatePath = ({path = "/", url}: CalculatePathArgs) : string=> {
  if (path.startsWith("node/preview")) {
    const { searchParams } = url;
    if (searchParams.has("token")) {
      return `${path}?token=${searchParams.get("token")}`;
    }
  }

  return path;
}
