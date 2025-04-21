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
import type { WarrantyTransactionStatusesApi } from './WarrantyTransactionStatusesApi';
import { RetailWarrantyTransactionProcessingStatus } from './RetailWarrantyTransactionProcessingStatus';

/**
 * This class represents the entity "WarrantyTransactionStatuses" of service "d365_metadata".
 */
export class WarrantyTransactionStatuses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarrantyTransactionStatusesType<T>
{
  /**
   * Technical entity name for WarrantyTransactionStatuses.
   */
  static override _entityName = 'WarrantyTransactionStatuses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarrantyTransactionStatuses entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitPartyNumber',
    'WarrantyStore',
    'WarrantyTerminalId',
    'WarrantyTransactionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Party Number.
   */
  declare operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Store.
   */
  declare warrantyStore: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Terminal Id.
   */
  declare warrantyTerminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Transaction Id.
   */
  declare warrantyTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Transaction Date Time.
   */
  declare lastTransactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: RetailWarrantyTransactionProcessingStatus | null;

  constructor(_entityApi: WarrantyTransactionStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface WarrantyTransactionStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  warrantyStore: DeserializedType<T, 'Edm.String'>;
  warrantyTerminalId: DeserializedType<T, 'Edm.String'>;
  warrantyTransactionId: DeserializedType<T, 'Edm.String'>;
  lastTransactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processingStatus?: RetailWarrantyTransactionProcessingStatus | null;
}
