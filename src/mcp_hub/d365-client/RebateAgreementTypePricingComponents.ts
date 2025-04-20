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
import type { RebateAgreementTypePricingComponentsApi } from './RebateAgreementTypePricingComponentsApi';

/**
 * This class represents the entity "RebateAgreementTypePricingComponents" of service "d365_metadata".
 */
export class RebateAgreementTypePricingComponents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAgreementTypePricingComponentsType<T>
{
  /**
   * Technical entity name for RebateAgreementTypePricingComponents.
   */
  static override _entityName = 'RebateAgreementTypePricingComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAgreementTypePricingComponents entity.
   */
  static _keys = ['dataAreaId', 'ComponentCodeName', 'TypeName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Component Code Name.
   */
  declare componentCodeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RebateAgreementTypePricingComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAgreementTypePricingComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  componentCodeName: DeserializedType<T, 'Edm.String'>;
  typeName: DeserializedType<T, 'Edm.String'>;
}
