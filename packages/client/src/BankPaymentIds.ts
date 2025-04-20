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
import type { BankPaymentIdsApi } from './BankPaymentIdsApi';
import { BankModuloCheckNo } from './BankModuloCheckNo';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BankPaymentIds" of service "d365_metadata".
 */
export class BankPaymentIds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankPaymentIdsType<T>
{
  /**
   * Technical entity name for BankPaymentIds.
   */
  static override _entityName = 'BankPaymentIds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankPaymentIds entity.
   */
  static _keys = ['dataAreaId', 'PaymentIDType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Id Type.
   */
  declare paymentIdType: DeserializedType<T, 'Edm.String'>;
  /**
   * Modulo.
   * @nullable
   */
  declare modulo?: BankModuloCheckNo | null;
  /**
   * Account To Position.
   */
  declare accountToPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Reference To Position.
   */
  declare externalReferenceToPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice From Position.
   */
  declare invoiceFromPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prefix Value.
   */
  declare prefixValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Suffix From Position.
   */
  declare suffixFromPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Suffix Value.
   */
  declare suffixValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prefix To Position.
   */
  declare prefixToPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice To Position.
   */
  declare invoiceToPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prefix From Position.
   */
  declare prefixFromPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prefix Text Value.
   * @nullable
   */
  declare prefixTextValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suffix Text Value.
   * @nullable
   */
  declare suffixTextValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suffix To Position.
   */
  declare suffixToPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account From Position.
   */
  declare accountFromPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Blank Payment Id.
   * @nullable
   */
  declare blankPaymentId?: NoYes | null;
  /**
   * Payment Id Length.
   */
  declare paymentIdLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * External Reference From Position.
   */
  declare externalReferenceFromPosition: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BankPaymentIdsApi<T>) {
    super(_entityApi);
  }
}

export interface BankPaymentIdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentIdType: DeserializedType<T, 'Edm.String'>;
  modulo?: BankModuloCheckNo | null;
  accountToPosition: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  externalReferenceToPosition: DeserializedType<T, 'Edm.Int32'>;
  invoiceFromPosition: DeserializedType<T, 'Edm.Int32'>;
  prefixValue: DeserializedType<T, 'Edm.Int32'>;
  suffixFromPosition: DeserializedType<T, 'Edm.Int32'>;
  suffixValue: DeserializedType<T, 'Edm.Int32'>;
  prefixToPosition: DeserializedType<T, 'Edm.Int32'>;
  invoiceToPosition: DeserializedType<T, 'Edm.Int32'>;
  prefixFromPosition: DeserializedType<T, 'Edm.Int32'>;
  prefixTextValue?: DeserializedType<T, 'Edm.String'> | null;
  suffixTextValue?: DeserializedType<T, 'Edm.String'> | null;
  suffixToPosition: DeserializedType<T, 'Edm.Int32'>;
  accountFromPosition: DeserializedType<T, 'Edm.Int32'>;
  blankPaymentId?: NoYes | null;
  paymentIdLength: DeserializedType<T, 'Edm.Int32'>;
  externalReferenceFromPosition: DeserializedType<T, 'Edm.Int32'>;
}
