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
import type { PayrollTaxGroupCodesApi } from './PayrollTaxGroupCodesApi';
import { PayrollTaxGroups, PayrollTaxGroupsType } from './PayrollTaxGroups';

/**
 * This class represents the entity "PayrollTaxGroupCodes" of service "d365_metadata".
 */
export class PayrollTaxGroupCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollTaxGroupCodesType<T>
{
  /**
   * Technical entity name for PayrollTaxGroupCodes.
   */
  static override _entityName = 'PayrollTaxGroupCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollTaxGroupCodes entity.
   */
  static _keys = ['TaxGroupId', 'TaxCodeId', 'TaxCodeCountryRegionId'];
  /**
   * Tax Group Id.
   */
  declare taxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Country Region Id.
   */
  declare taxCodeCountryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link PayrollTaxGroups} entity.
   */
  declare taxGroup?: PayrollTaxGroups<T> | null;

  constructor(_entityApi: PayrollTaxGroupCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollTaxGroupCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taxGroupId: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  taxCodeCountryRegionId: DeserializedType<T, 'Edm.String'>;
  taxGroup?: PayrollTaxGroupsType<T> | null;
}
