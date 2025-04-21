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
import type { BrokerContractHeadersApi } from './BrokerContractHeadersApi';
import { McrBrokerContractStatus } from './McrBrokerContractStatus';
import {
  BrokerContractLines,
  BrokerContractLinesType
} from './BrokerContractLines';

/**
 * This class represents the entity "BrokerContractHeaders" of service "d365_metadata".
 */
export class BrokerContractHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BrokerContractHeadersType<T>
{
  /**
   * Technical entity name for BrokerContractHeaders.
   */
  static override _entityName = 'BrokerContractHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BrokerContractHeaders entity.
   */
  static _keys = ['dataAreaId', 'ContractId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Id.
   */
  declare contractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Broker Vendor Account Number.
   * @nullable
   */
  declare brokerVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Broker Fee Amount.
   */
  declare fixedBrokerFeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Broker Fee Currency Code.
   * @nullable
   */
  declare brokerFeeCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Description.
   * @nullable
   */
  declare contractDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Fee Amount Per Product Unit Sold.
   */
  declare brokerFeeAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Broker Sales Charge Code.
   * @nullable
   */
  declare brokerSalesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Status.
   * @nullable
   */
  declare contractStatus?: McrBrokerContractStatus | null;
  /**
   * Broker Fee Percentage.
   */
  declare brokerFeePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link BrokerContractLines} entity.
   */
  declare mcrBrokerContractLine: BrokerContractLines<T>[];

  constructor(_entityApi: BrokerContractHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface BrokerContractHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractId: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  brokerVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  fixedBrokerFeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  brokerFeeCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  contractDescription?: DeserializedType<T, 'Edm.String'> | null;
  brokerFeeAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  brokerSalesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  contractStatus?: McrBrokerContractStatus | null;
  brokerFeePercentage: DeserializedType<T, 'Edm.Decimal'>;
  mcrBrokerContractLine: BrokerContractLinesType<T>[];
}
