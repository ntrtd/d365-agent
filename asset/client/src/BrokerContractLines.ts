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
import type { BrokerContractLinesApi } from './BrokerContractLinesApi';
import {
  BrokerContractHeaders,
  BrokerContractHeadersType
} from './BrokerContractHeaders';

/**
 * This class represents the entity "BrokerContractLines" of service "d365_metadata".
 */
export class BrokerContractLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BrokerContractLinesType<T>
{
  /**
   * Technical entity name for BrokerContractLines.
   */
  static override _entityName = 'BrokerContractLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BrokerContractLines entity.
   */
  static _keys = ['dataAreaId', 'BrokerContractId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Broker Contract Id.
   */
  declare brokerContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Fee Amount Per Product Unit Sold.
   */
  declare brokerFeeAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Fee Break Amount.
   */
  declare brokerFeeBreakAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Broker Vendor Account Number.
   * @nullable
   */
  declare brokerVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Sales Charge Code.
   * @nullable
   */
  declare brokerSalesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Fee Break Quantity.
   */
  declare brokerFeeBreakQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Fee Percentage.
   */
  declare brokerFeePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Broker Fee Charge Amount.
   */
  declare brokerFeeChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BrokerContractHeaders} entity.
   */
  declare mcrBrokerContractHeader?: BrokerContractHeaders<T> | null;

  constructor(_entityApi: BrokerContractLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BrokerContractLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  brokerContractId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  brokerFeeAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  brokerFeeBreakAmount: DeserializedType<T, 'Edm.Decimal'>;
  brokerVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  brokerSalesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  brokerFeeBreakQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  brokerFeePercentage: DeserializedType<T, 'Edm.Decimal'>;
  brokerFeeChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  mcrBrokerContractHeader?: BrokerContractHeadersType<T> | null;
}
