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
import type { IntrastatsApi } from './IntrastatsApi';
import { IntrastatItemTypeIt } from './IntrastatItemTypeIt';
import { IntrastatServicesDeliveryIt } from './IntrastatServicesDeliveryIt';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { IntrastatDirection } from './IntrastatDirection';
import { MonthsOfYear } from './MonthsOfYear';
import { IntrastatPaymentMethodIt } from './IntrastatPaymentMethodIt';
import { IntrastatOrderType } from './IntrastatOrderType';
import { QuarterOfYear } from './QuarterOfYear';

/**
 * This class represents the entity "Intrastats" of service "d365_metadata".
 */
export class Intrastats<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntrastatsType<T>
{
  /**
   * Technical entity name for Intrastats.
   */
  static override _entityName = 'Intrastats';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Intrastats entity.
   */
  static _keys = ['dataAreaId', 'ShipmentBatch', 'SequenceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Batch.
   */
  declare shipmentBatch: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Commodity.
   * @nullable
   */
  declare commodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Of Origin.
   * @nullable
   */
  declare countyOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direction Code.
   * @nullable
   */
  declare directionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Trans.
   */
  declare statusTrans: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Charges Amount.
   */
  declare chargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Relation.
   */
  declare relation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charges Percentage.
   */
  declare chargesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Code.
   * @nullable
   */
  declare customsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Amount.
   */
  declare statisticalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: IntrastatItemTypeIt | null;
  /**
   * Delivery Terms.
   * @nullable
   */
  declare deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Intrastat Record.
   * @nullable
   */
  declare originalIntrastatRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Of The Packing Slip Or Product Receipt.
   * @nullable
   */
  declare identificationOfThePackingSlipOrProductReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lot Id.
   * @nullable
   */
  declare lotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Name.
   * @nullable
   */
  declare commodityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Additional Units.
   * @nullable
   */
  declare commodityAdditionalUnits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Unit.
   * @nullable
   */
  declare additionalUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Movement.
   * @nullable
   */
  declare specialMovement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistical Value.
   */
  declare intrastatStatisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Weight By Unit.
   */
  declare netWeightByUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statistical Charges Amount.
   */
  declare statisticalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Commodity Name.
   * @nullable
   */
  declare parentCommodityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fulfillment Date.
   */
  declare fulfillmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ngp Code.
   */
  declare ngpCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Schedule.
   * @nullable
   */
  declare deliverySchedule?: IntrastatServicesDeliveryIt | null;
  /**
   * Commodity Hierarchy Name.
   * @nullable
   */
  declare commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partial Consignment.
   * @nullable
   */
  declare partialConsignment?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Commodity.
   * @nullable
   */
  declare parentCommodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ngp Description.
   * @nullable
   */
  declare ngpDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignments.
   */
  declare consignments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compress.
   * @nullable
   */
  declare compress?: NoYes | null;
  /**
   * Reference Table Id.
   */
  declare referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Module.
   * @nullable
   */
  declare module?: ModuleInventCustVend | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: IntrastatDirection | null;
  /**
   * Intrastat Statistical Adjustment Amount.
   */
  declare intrastatStatisticalAdjustmentAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistics Procedure.
   * @nullable
   */
  declare statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Amount Trans Cur.
   */
  declare invoiceAmountTransCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tariff Number.
   */
  declare tariffNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Correction Year.
   */
  declare correctionYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Month.
   * @nullable
   */
  declare month?: MonthsOfYear | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Sender Receiver.
   * @nullable
   */
  declare countryRegionSenderReceiver?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: IntrastatPaymentMethodIt | null;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Sender Receiver.
   * @nullable
   */
  declare stateSenderReceiver?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Order Type.
   * @nullable
   */
  declare intrastatOrderType?: IntrastatOrderType | null;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: QuarterOfYear | null;
  /**
   * Tax Registration Number.
   * @nullable
   */
  declare taxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Misc Charge Per Kg.
   */
  declare miscChargePerKg: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preference.
   */
  declare preference: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction.
   * @nullable
   */
  declare correction?: NoYes | null;
  /**
   * Invoice Charges Amount Trans Currency.
   */
  declare invoiceChargesAmountTransCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Send Receive State.
   * @nullable
   */
  declare sendReceiveState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Container.
   * @nullable
   */
  declare container?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Charges Amount.
   */
  declare invoiceChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Agreement.
   * @nullable
   */
  declare currentAgreement?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Additional Units Quantity.
   */
  declare additionalUnitsQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * State Of Origin.
   * @nullable
   */
  declare stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatsApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipmentBatch: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  countyOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  directionCode?: DeserializedType<T, 'Edm.String'> | null;
  statusTrans: DeserializedType<T, 'Edm.Int32'>;
  chargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  relation: DeserializedType<T, 'Edm.Int32'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  chargesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  customsCode?: DeserializedType<T, 'Edm.String'> | null;
  statisticalAmount: DeserializedType<T, 'Edm.Decimal'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  itemType?: IntrastatItemTypeIt | null;
  deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  originalIntrastatRecord?: DeserializedType<T, 'Edm.String'> | null;
  identificationOfThePackingSlipOrProductReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lotId?: DeserializedType<T, 'Edm.String'> | null;
  commodityName?: DeserializedType<T, 'Edm.String'> | null;
  commodityAdditionalUnits?: DeserializedType<T, 'Edm.String'> | null;
  additionalUnit?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  specialMovement?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  number?: DeserializedType<T, 'Edm.String'> | null;
  netWeightByUnit: DeserializedType<T, 'Edm.Decimal'>;
  statisticalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  parentCommodityName?: DeserializedType<T, 'Edm.String'> | null;
  fulfillmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ngpCode: DeserializedType<T, 'Edm.Int32'>;
  deliverySchedule?: IntrastatServicesDeliveryIt | null;
  commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  partialConsignment?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  parentCommodity?: DeserializedType<T, 'Edm.String'> | null;
  ngpDescription?: DeserializedType<T, 'Edm.String'> | null;
  consignments: DeserializedType<T, 'Edm.Int32'>;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  compress?: NoYes | null;
  referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  module?: ModuleInventCustVend | null;
  direction?: IntrastatDirection | null;
  intrastatStatisticalAdjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  county?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmountTransCur: DeserializedType<T, 'Edm.Decimal'>;
  tariffNumber: DeserializedType<T, 'Edm.Int32'>;
  correctionYear: DeserializedType<T, 'Edm.Int32'>;
  month?: MonthsOfYear | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionSenderReceiver?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  paymentMethod?: IntrastatPaymentMethodIt | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  stateSenderReceiver?: DeserializedType<T, 'Edm.String'> | null;
  intrastatOrderType?: IntrastatOrderType | null;
  quarter?: QuarterOfYear | null;
  taxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  miscChargePerKg: DeserializedType<T, 'Edm.Decimal'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  preference: DeserializedType<T, 'Edm.Int32'>;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  correction?: NoYes | null;
  invoiceChargesAmountTransCurrency: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  sendReceiveState?: DeserializedType<T, 'Edm.String'> | null;
  container?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  currentAgreement?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  additionalUnitsQuantity: DeserializedType<T, 'Edm.Decimal'>;
  stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
}
