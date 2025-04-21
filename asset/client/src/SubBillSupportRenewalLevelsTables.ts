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
import type { SubBillSupportRenewalLevelsTablesApi } from './SubBillSupportRenewalLevelsTablesApi';
import { SubBillRenewalCalculationMethod } from './SubBillRenewalCalculationMethod';
import { SubBillSupportCalculationMethod } from './SubBillSupportCalculationMethod';

/**
 * This class represents the entity "SubBillSupportRenewalLevelsTables" of service "d365_metadata".
 */
export class SubBillSupportRenewalLevelsTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillSupportRenewalLevelsTablesType<T>
{
  /**
   * Technical entity name for SubBillSupportRenewalLevelsTables.
   */
  static override _entityName = 'SubBillSupportRenewalLevelsTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillSupportRenewalLevelsTables entity.
   */
  static _keys = ['dataAreaId', 'SupportLevel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Support Level.
   */
  declare supportLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * Renewal Percentage.
   */
  declare renewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Renewal Calculation Method.
   * @nullable
   */
  declare renewalCalculationMethod?: SubBillRenewalCalculationMethod | null;
  /**
   * Support Percentage.
   */
  declare supportPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Calculation Method.
   * @nullable
   */
  declare supportCalculationMethod?: SubBillSupportCalculationMethod | null;

  constructor(_entityApi: SubBillSupportRenewalLevelsTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillSupportRenewalLevelsTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  supportLevel: DeserializedType<T, 'Edm.String'>;
  renewalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  renewalCalculationMethod?: SubBillRenewalCalculationMethod | null;
  supportPercentage: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  supportCalculationMethod?: SubBillSupportCalculationMethod | null;
}
