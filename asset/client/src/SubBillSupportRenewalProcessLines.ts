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
import type { SubBillSupportRenewalProcessLinesApi } from './SubBillSupportRenewalProcessLinesApi';
import { NoYes } from './NoYes';
import { SubBillRenewalCalculationMethod } from './SubBillRenewalCalculationMethod';
import { SubBillSupportCalculationMethod } from './SubBillSupportCalculationMethod';

/**
 * This class represents the entity "SubBillSupportRenewalProcessLines" of service "d365_metadata".
 */
export class SubBillSupportRenewalProcessLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillSupportRenewalProcessLinesType<T>
{
  /**
   * Technical entity name for SubBillSupportRenewalProcessLines.
   */
  static override _entityName = 'SubBillSupportRenewalProcessLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillSupportRenewalProcessLines entity.
   */
  static _keys = ['dataAreaId', 'SalesId', 'LineNumber', 'InventoryLotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Renewal Retail Variant Id.
   * @nullable
   */
  declare renewalRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Renewal Amount.
   */
  declare renewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Support.
   * @nullable
   */
  declare support?: NoYes | null;
  /**
   * Retail Variant Id.
   * @nullable
   */
  declare retailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Level.
   * @nullable
   */
  declare supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Renewal Start Date.
   */
  declare renewalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Renewal.
   * @nullable
   */
  declare renewal?: NoYes | null;
  /**
   * Support Percentage.
   */
  declare supportPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Support Start Date.
   */
  declare supportStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Alignment Date.
   */
  declare alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Support Amount.
   */
  declare supportAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Renewal End Date.
   */
  declare renewalEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Schedule Number.
   * @nullable
   */
  declare billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Renewal Calculation Method.
   * @nullable
   */
  declare renewalCalculationMethod?: SubBillRenewalCalculationMethod | null;
  /**
   * Support Retail Variant Id.
   * @nullable
   */
  declare supportRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support End Date.
   */
  declare supportEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Renewal Item.
   * @nullable
   */
  declare renewalItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Item.
   * @nullable
   */
  declare supportItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Calculation Method.
   * @nullable
   */
  declare supportCalculationMethod?: SubBillSupportCalculationMethod | null;
  /**
   * Renewal Percent.
   */
  declare renewalPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Rec Id.
   */
  declare headerRecId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SubBillSupportRenewalProcessLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillSupportRenewalProcessLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  renewalRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  renewalAmount: DeserializedType<T, 'Edm.Decimal'>;
  support?: NoYes | null;
  retailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  supportLevel?: DeserializedType<T, 'Edm.String'> | null;
  renewalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  renewal?: NoYes | null;
  supportPercentage: DeserializedType<T, 'Edm.Decimal'>;
  supportStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  alignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  supportAmount: DeserializedType<T, 'Edm.Decimal'>;
  renewalEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingScheduleNumber?: DeserializedType<T, 'Edm.String'> | null;
  renewalCalculationMethod?: SubBillRenewalCalculationMethod | null;
  supportRetailVariantId?: DeserializedType<T, 'Edm.String'> | null;
  supportEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  renewalItem?: DeserializedType<T, 'Edm.String'> | null;
  supportItem?: DeserializedType<T, 'Edm.String'> | null;
  supportCalculationMethod?: SubBillSupportCalculationMethod | null;
  renewalPercent: DeserializedType<T, 'Edm.Decimal'>;
  headerRecId: DeserializedType<T, 'Edm.Int64'>;
}
