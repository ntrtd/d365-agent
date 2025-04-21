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
import type { SalesAgreementSalesTransApi } from './SalesAgreementSalesTransApi';

/**
 * This class represents the entity "SalesAgreementSalesTrans" of service "d365_metadata".
 */
export class SalesAgreementSalesTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAgreementSalesTransType<T>
{
  /**
   * Technical entity name for SalesAgreementSalesTrans.
   */
  static override _entityName = 'SalesAgreementSalesTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementSalesTrans entity.
   */
  static _keys = [
    'dataAreaId',
    'OMOperatingUnit_PartyNumber',
    'Store',
    'Terminal',
    'TransactionId',
    'TransactionLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Party Number.
   */
  declare omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
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
   * Transaction Line Number.
   */
  declare transactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Line Number.
   */
  declare agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Agreement Id.
   * @nullable
   */
  declare salesAgreementId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesAgreementSalesTransApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementSalesTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  transactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  salesAgreementId?: DeserializedType<T, 'Edm.String'> | null;
}
