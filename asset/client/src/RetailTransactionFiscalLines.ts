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
import type { RetailTransactionFiscalLinesApi } from './RetailTransactionFiscalLinesApi';
import { NoYes } from './NoYes';
import { RetailFiscalRegistrationType } from './RetailFiscalRegistrationType';
import { RetailFiscalIntegrationFiscalTransStatus } from './RetailFiscalIntegrationFiscalTransStatus';

/**
 * This class represents the entity "RetailTransactionFiscalLines" of service "d365_metadata".
 */
export class RetailTransactionFiscalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionFiscalLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionFiscalLines.
   */
  static override _entityName = 'RetailTransactionFiscalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionFiscalLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'Terminal',
    'TransactionNumber',
    'LineNumber',
    'RecordGuid'
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
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Record Guid.
   */
  declare recordGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Connector Name.
   * @nullable
   */
  declare connectorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Copy.
   * @nullable
   */
  declare receiptCopy?: NoYes | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Type.
   * @nullable
   */
  declare registrationType?: RetailFiscalRegistrationType | null;
  /**
   * Connector Functionality Profile Id.
   * @nullable
   */
  declare connectorFunctionalityProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Connector Group.
   * @nullable
   */
  declare connectorGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Register Response.
   * @nullable
   */
  declare registerResponse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Register Terminal.
   * @nullable
   */
  declare registerTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Status.
   * @nullable
   */
  declare registrationStatus?: RetailFiscalIntegrationFiscalTransStatus | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Process Id.
   * @nullable
   */
  declare registrationProcessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Name.
   * @nullable
   */
  declare serviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Register Store.
   * @nullable
   */
  declare registerStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Register Info.
   * @nullable
   */
  declare registerInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionFiscalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionFiscalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  recordGuid: DeserializedType<T, 'Edm.Guid'>;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  receiptCopy?: NoYes | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  registrationType?: RetailFiscalRegistrationType | null;
  connectorFunctionalityProfileId?: DeserializedType<T, 'Edm.String'> | null;
  connectorGroup?: DeserializedType<T, 'Edm.String'> | null;
  registerResponse?: DeserializedType<T, 'Edm.String'> | null;
  registerTerminal?: DeserializedType<T, 'Edm.String'> | null;
  registrationStatus?: RetailFiscalIntegrationFiscalTransStatus | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  registrationProcessId?: DeserializedType<T, 'Edm.String'> | null;
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  registerStore?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registerInfo?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
}
