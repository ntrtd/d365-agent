/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { EcoResProductType } from './EcoResProductType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import {
  ProductReadinessPolicies,
  ProductReadinessPoliciesType
} from './ProductReadinessPolicies';
import {
  EngineeringOrganizations,
  EngineeringOrganizationsType
} from './EngineeringOrganizations';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import {
  ProductReleasePolicies,
  ProductReleasePoliciesType
} from './ProductReleasePolicies';
import {
  EngineeringProductVersionNumberingRules,
  EngineeringProductVersionNumberingRulesType
} from './EngineeringProductVersionNumberingRules';
import { Categories, CategoriesType } from './Categories';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "EngineeringProductCategoryDetails" of service "d365_metadata".
 */
export class EngineeringProductCategoryDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductCategoryDetailsType<T>
{
  /**
   * Technical entity name for EngineeringProductCategoryDetails.
   */
  static override _entityName = 'EngineeringProductCategoryDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductCategoryDetails entity.
   */
  static _keys = ['EngineeringProductCategoryName'];
  /**
   * Engineering Product Category Name.
   */
  declare engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Product Readiness Policy Name.
   * @nullable
   */
  declare productReadinessPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Subtype.
   * @nullable
   */
  declare productSubtype?: EcoResProductSubtype | null;
  /**
   * Engineering Organization Id.
   * @nullable
   */
  declare engineeringOrganizationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Pds Cw Product.
   * @nullable
   */
  declare pdsCwProduct?: NoYes | null;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version Numbering Rule Name.
   * @nullable
   */
  declare versionNumberingRuleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Product Lifecycle State Id.
   * @nullable
   */
  declare createdProductLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enforce Date Rule.
   * @nullable
   */
  declare enforceDateRule?: NoYes | null;
  /**
   * Product Release Policy Name.
   * @nullable
   */
  declare productReleasePolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductReadinessPolicies} entity.
   */
  declare productReadinessPolicy?: ProductReadinessPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringOrganizations} entity.
   */
  declare engineeringOrganization?: EngineeringOrganizations<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare createdProductLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductReleasePolicies} entity.
   */
  declare productReleasePolicy?: ProductReleasePolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersionNumberingRules} entity.
   */
  declare versionNumberingRule?: EngineeringProductVersionNumberingRules<T> | null;
  /**
   * One-to-one navigation property to the {@link Categories} entity.
   */
  declare category?: Categories<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare productsV2: ProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: EngineeringProductCategoryDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductCategoryDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  productType?: EcoResProductType | null;
  productReadinessPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  productSubtype?: EcoResProductSubtype | null;
  engineeringOrganizationId?: DeserializedType<T, 'Edm.String'> | null;
  productionType?: PmfProductType | null;
  pdsCwProduct?: NoYes | null;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  versionNumberingRuleName?: DeserializedType<T, 'Edm.String'> | null;
  createdProductLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  enforceDateRule?: NoYes | null;
  productReleasePolicyName?: DeserializedType<T, 'Edm.String'> | null;
  productReadinessPolicy?: ProductReadinessPoliciesType<T> | null;
  engineeringOrganization?: EngineeringOrganizationsType<T> | null;
  createdProductLifecycleState?: ProductLifecycleStatesType<T> | null;
  productReleasePolicy?: ProductReleasePoliciesType<T> | null;
  versionNumberingRule?: EngineeringProductVersionNumberingRulesType<T> | null;
  category?: CategoriesType<T> | null;
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  productsV2: ProductsV2Type<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
