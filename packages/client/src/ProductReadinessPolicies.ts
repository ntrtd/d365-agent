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
import type { ProductReadinessPoliciesApi } from './ProductReadinessPoliciesApi';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ProductReadinessPolicyChecks,
  ProductReadinessPolicyChecksType
} from './ProductReadinessPolicyChecks';

/**
 * This class represents the entity "ProductReadinessPolicies" of service "d365_metadata".
 */
export class ProductReadinessPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReadinessPoliciesType<T>
{
  /**
   * Technical entity name for ProductReadinessPolicies.
   */
  static override _entityName = 'ProductReadinessPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReadinessPolicies entity.
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
   * Is Policy Active.
   * @nullable
   */
  declare isPolicyActive?: NoYes | null;
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
   * One-to-many navigation property to the {@link ProductReadinessPolicyChecks} entity.
   */
  declare productReadinessPolicyChecks: ProductReadinessPolicyChecks<T>[];

  constructor(_entityApi: ProductReadinessPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductReadinessPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  applicableProductType?: EcoResProductType | null;
  isPolicyActive?: NoYes | null;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryDetails: EngineeringProductCategoryDetailsType<T>[];
  productsV2: ProductsV2Type<T>[];
  productReadinessPolicyChecks: ProductReadinessPolicyChecksType<T>[];
}
