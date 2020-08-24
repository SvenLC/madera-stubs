type Project = {
  reference: string;
  name: string;
  commercial: string;
  products: Product;
};

type Product = {
  productLine: string;
  model: string;
  customization: ProductCustomization[];
  modules: Module[];
};

type ProductCustomization = {
  componentType: string;
  material: string;
};

type Module = {
  name: string;
  sections: Section[];
};

type Section = {
  number: number;
  length: number;
  angle?: string;
};
