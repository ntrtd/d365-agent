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
import type { WithholdingTaxCodeLimitsApi } from './WithholdingTaxCodeLimitsApi';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';

/**
 * This class represents the entity "WithholdingTaxCodeLimits" of service "d365_metadata".
 */
export class WithholdingTaxCodeLimits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdingTaxCodeLimitsType<T>
{
  /**
   * Technical entity name for WithholdingTaxCodeLimits.
   */
  static override _entityName = 'WithholdingTaxCodeLimits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTaxCodeLimits entity.
   */
  static _keys = ['dataAreaId', 'WithholdingTaxCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Code Id.
   */
  declare withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Minimum Withholding Tax.
   */
  declare minimumWithholdingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Withholding Tax.
   */
  declare maximumWithholdingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode?: WithholdingTaxCodes<T> | null;

  constructor(_entityApi: WithholdingTaxCodeLimitsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTaxCodeLimitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  minimumWithholdingTax: DeserializedType<T, 'Edm.Decimal'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumWithholdingTax: DeserializedType<T, 'Edm.Decimal'>;
  withholdingTaxCode?: WithholdingTaxCodesType<T> | null;
}
