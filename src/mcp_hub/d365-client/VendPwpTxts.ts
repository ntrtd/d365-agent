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
import type { VendPwpTxtsApi } from './VendPwpTxtsApi';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "VendPWPTxts" of service "d365_metadata".
 */
export class VendPwpTxts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendPwpTxtsType<T>
{
  /**
   * Technical entity name for VendPwpTxts.
   */
  static override _entityName = 'VendPWPTxts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendPwpTxts entity.
   */
  static _keys = ['dataAreaId', 'AccountCode', 'VendorGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Vendor Group.
   */
  declare vendorGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay When Paid Contract Language.
   * @nullable
   */
  declare payWhenPaidContractLanguage?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Retention Contract Language.
   * @nullable
   */
  declare vendorRetentionContractLanguage?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: VendPwpTxtsApi<T>) {
    super(_entityApi);
  }
}

export interface VendPwpTxtsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  vendorGroup: DeserializedType<T, 'Edm.String'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  payWhenPaidContractLanguage?: DeserializedType<T, 'Edm.String'> | null;
  vendorRetentionContractLanguage?: DeserializedType<T, 'Edm.String'> | null;
}
