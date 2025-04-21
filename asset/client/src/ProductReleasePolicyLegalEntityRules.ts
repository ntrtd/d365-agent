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
import type { ProductReleasePolicyLegalEntityRulesApi } from './ProductReleasePolicyLegalEntityRulesApi';
import { NoYes } from './NoYes';
import {
  ProductReleasePolicies,
  ProductReleasePoliciesType
} from './ProductReleasePolicies';

/**
 * This class represents the entity "ProductReleasePolicyLegalEntityRules" of service "d365_metadata".
 */
export class ProductReleasePolicyLegalEntityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReleasePolicyLegalEntityRulesType<T>
{
  /**
   * Technical entity name for ProductReleasePolicyLegalEntityRules.
   */
  static override _entityName = 'ProductReleasePolicyLegalEntityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReleasePolicyLegalEntityRules entity.
   */
  static _keys = ['LegalEntityId', 'ProductReleasePolicyName'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Release Policy Name.
   */
  declare productReleasePolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Bom Id.
   * @nullable
   */
  declare templateBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Item Number.
   * @nullable
   */
  declare templateItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Product Release Copy Date Effectivity.
   * @nullable
   */
  declare willProductReleaseCopyDateEffectivity?: NoYes | null;
  /**
   * Template Route Id.
   * @nullable
   */
  declare templateRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Product Release Copy Bom Approval.
   * @nullable
   */
  declare willProductReleaseCopyBomApproval?: NoYes | null;
  /**
   * Will Product Release Create Bom.
   * @nullable
   */
  declare willProductReleaseCreateBom?: NoYes | null;
  /**
   * Will Product Release Create Route.
   * @nullable
   */
  declare willProductReleaseCreateRoute?: NoYes | null;
  /**
   * Will Product Release Copy Bom Activation.
   * @nullable
   */
  declare willProductReleaseCopyBomActivation?: NoYes | null;
  /**
   * Will Product Release Copy Route Approval.
   * @nullable
   */
  declare willProductReleaseCopyRouteApproval?: NoYes | null;
  /**
   * Will Product Release Copy Route Activation.
   * @nullable
   */
  declare willProductReleaseCopyRouteActivation?: NoYes | null;
  /**
   * Will Engineering Change Order Impacted Product Search Auto Release.
   * @nullable
   */
  declare willEngineeringChangeOrderImpactedProductSearchAutoRelease?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProductReleasePolicies} entity.
   */
  declare productReleasePolicy?: ProductReleasePolicies<T> | null;

  constructor(_entityApi: ProductReleasePolicyLegalEntityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductReleasePolicyLegalEntityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  productReleasePolicyName: DeserializedType<T, 'Edm.String'>;
  templateBomId?: DeserializedType<T, 'Edm.String'> | null;
  templateItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  willProductReleaseCopyDateEffectivity?: NoYes | null;
  templateRouteId?: DeserializedType<T, 'Edm.String'> | null;
  willProductReleaseCopyBomApproval?: NoYes | null;
  willProductReleaseCreateBom?: NoYes | null;
  willProductReleaseCreateRoute?: NoYes | null;
  willProductReleaseCopyBomActivation?: NoYes | null;
  willProductReleaseCopyRouteApproval?: NoYes | null;
  willProductReleaseCopyRouteActivation?: NoYes | null;
  willEngineeringChangeOrderImpactedProductSearchAutoRelease?: NoYes | null;
  productReleasePolicy?: ProductReleasePoliciesType<T> | null;
}
