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
import type { TransactionFiscalTransExtendedDataLinesApi } from './TransactionFiscalTransExtendedDataLinesApi';
import { RetailFiscalRegistrationExtendedDataType } from './RetailFiscalRegistrationExtendedDataType';

/**
 * This class represents the entity "TransactionFiscalTransExtendedDataLines" of service "d365_metadata".
 */
export class TransactionFiscalTransExtendedDataLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionFiscalTransExtendedDataLinesType<T>
{
  /**
   * Technical entity name for TransactionFiscalTransExtendedDataLines.
   */
  static override _entityName = 'TransactionFiscalTransExtendedDataLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionFiscalTransExtendedDataLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'Terminal',
    'TransactionId',
    'FiscalTransactionLineNumber',
    'FiscalTransactionRecordGuid',
    'DataKey'
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
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Transaction Line Number.
   */
  declare fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Transaction Record Guid.
   */
  declare fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Data Key.
   * @nullable
   */
  declare dataKey?: RetailFiscalRegistrationExtendedDataType | null;
  /**
   * Data Value.
   * @nullable
   */
  declare dataValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionFiscalTransExtendedDataLinesApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionFiscalTransExtendedDataLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  dataKey?: RetailFiscalRegistrationExtendedDataType | null;
  dataValue?: DeserializedType<T, 'Edm.String'> | null;
}
