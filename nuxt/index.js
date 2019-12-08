import PackageJSON from "../package";
import path from "path";

export default function KisteModule () {
  const options = this.options.kiste;

  this.addPlugin({
    src: path.resolve(__dirname, "plugin.template.js"),
    options
  });
}

export const meta = PackageJSON;
