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
import type { LtmTaxPayerDocTypesApi } from './LtmTaxPayerDocTypesApi';

/**
 * This class represents the entity "LTMTaxPayerDocTypes" of service "d365_metadata".
 */
export class LtmTaxPayerDocTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmTaxPayerDocTypesType<T>
{
  /**
   * Technical entity name for LtmTaxPayerDocTypes.
   */
  static override _entityName = 'LTMTaxPayerDocTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmTaxPayerDocTypes entity.
   */
  static _keys = ['dataAreaId', 'TaxPayerTypeId', 'DocTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Payer Type Id.
   */
  declare taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Doc Type Id.
   */
  declare docTypeId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmTaxPayerDocTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmTaxPayerDocTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  docTypeId: DeserializedType<T, 'Edm.String'>;
}
