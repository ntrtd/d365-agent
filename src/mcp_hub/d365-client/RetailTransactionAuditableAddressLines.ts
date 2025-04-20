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
import type { RetailTransactionAuditableAddressLinesApi } from './RetailTransactionAuditableAddressLinesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';

/**
 * This class represents the entity "RetailTransactionAuditableAddressLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableAddressLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableAddressLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableAddressLines.
   */
  static override _entityName = 'RetailTransactionAuditableAddressLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableAddressLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'SalesLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Sales Name.
   * @nullable
   */
  declare salesName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * @nullable
   */
  declare district?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention.
   * @nullable
   */
  declare attention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLines<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;

  constructor(_entityApi: RetailTransactionAuditableAddressLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableAddressLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  salesName?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  district?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  headerTransactionType?: RetailTransactionType | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  attention?: DeserializedType<T, 'Edm.String'> | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLinesType<T> | null;
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
}
