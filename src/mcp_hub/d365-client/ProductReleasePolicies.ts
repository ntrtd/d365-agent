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
import type { ProductReleasePoliciesApi } from './ProductReleasePoliciesApi';
import { EcoResProductType } from './EcoResProductType';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EngChgProductReleaseApplyTemplateMode } from './EngChgProductReleaseApplyTemplateMode';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ProductReleasePolicyLegalEntityRules,
  ProductReleasePolicyLegalEntityRulesType
} from './ProductReleasePolicyLegalEntityRules';

/**
 * This class represents the entity "ProductReleasePolicies" of service "d365_metadata".
 */
export class ProductReleasePolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReleasePoliciesType<T>
{
  /**
   * Technical entity name for ProductReleasePolicies.
   */
  static override _entityName = 'ProductReleasePolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReleasePolicies entity.
   */
  static _keys = ['PolicyName'];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Applicable Product Type.
   * @nullable
   */
  declare applicableProductType?: EcoResProductType | null;
  /**
   * Pmf Product Type.
   * @nullable
   */
  declare pmfProductType?: PmfProductType | null;
  /**
   * Is Policy Active.
   * @nullable
   */
  declare isPolicyActive?: NoYes | null;
  /**
   * Will Product Release Enforce Date Rule.
   * @nullable
   */
  declare willProductReleaseEnforceDateRule?: NoYes | null;
  /**
   * Apply Templates Rule.
   * @nullable
   */
  declare applyTemplatesRule?: EngChgProductReleaseApplyTemplateMode | null;
  /**
   * Policy Description.
   * @nullable
   */
  declare policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails: EngineeringProductCategoryDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare productsV2: ProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductReleasePolicyLegalEntityRules} entity.
   */
  declare productReleasePolicyLegalEntityRules: ProductReleasePolicyLegalEntityRules<T>[];

  constructor(_entityApi: ProductReleasePoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductReleasePoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  applicableProductType?: EcoResProductType | null;
  pmfProductType?: PmfProductType | null;
  isPolicyActive?: NoYes | null;
  willProductReleaseEnforceDateRule?: NoYes | null;
  applyTemplatesRule?: EngChgProductReleaseApplyTemplateMode | null;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryDetails: EngineeringProductCategoryDetailsType<T>[];
  productsV2: ProductsV2Type<T>[];
  productReleasePolicyLegalEntityRules: ProductReleasePolicyLegalEntityRulesType<T>[];
}
