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
import type { RetailTransactionFiscalTransBiEntitiesApi } from './RetailTransactionFiscalTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailFiscalRegistrationType } from './RetailFiscalRegistrationType';
import { RetailFiscalIntegrationFiscalTransStatus } from './RetailFiscalIntegrationFiscalTransStatus';

/**
 * This class represents the entity "RetailTransactionFiscalTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionFiscalTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionFiscalTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionFiscalTransBiEntities.
   */
  static override _entityName = 'RetailTransactionFiscalTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionFiscalTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'LineNum',
    'RecordGuid'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Record Guid.
   */
  declare recordGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
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
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Register Id.
   * @nullable
   */
  declare registerId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Register Info.
   * @nullable
   */
  declare registerInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Code.
   * @nullable
   */
  declare controlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailTransactionFiscalTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionFiscalTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  recordGuid: DeserializedType<T, 'Edm.Guid'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  receiptCopy?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  registrationType?: RetailFiscalRegistrationType | null;
  connectorFunctionalityProfileId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registerId?: DeserializedType<T, 'Edm.String'> | null;
  connectorGroup?: DeserializedType<T, 'Edm.String'> | null;
  registerResponse?: DeserializedType<T, 'Edm.String'> | null;
  registerTerminal?: DeserializedType<T, 'Edm.String'> | null;
  registrationStatus?: RetailFiscalIntegrationFiscalTransStatus | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  registrationProcessId?: DeserializedType<T, 'Edm.String'> | null;
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  registerStore?: DeserializedType<T, 'Edm.String'> | null;
  registerInfo?: DeserializedType<T, 'Edm.String'> | null;
  controlCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
