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
import type { DocumentPostingsApi } from './DocumentPostingsApi';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "DocumentPostings" of service "d365_metadata".
 */
export class DocumentPostings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentPostingsType<T>
{
  /**
   * Technical entity name for DocumentPostings.
   */
  static override _entityName = 'DocumentPostings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentPostings entity.
   */
  static _keys = ['dataAreaId', 'AccountCode', 'FacilityGroup', 'FacilityType'];
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
   * Facility Group.
   */
  declare facilityGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Facility Type.
   */
  declare facilityType: DeserializedType<T, 'Edm.String'>;
  /**
   * Misc Charges Ledger Account.
   * @nullable
   */
  declare miscChargesLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Ledger Account.
   * @nullable
   */
  declare settleLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Margin Ledger Account.
   * @nullable
   */
  declare marginLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lg Liquidation Ledger Account.
   * @nullable
   */
  declare lgLiquidationLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocumentPostingsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentPostingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  facilityGroup: DeserializedType<T, 'Edm.String'>;
  facilityType: DeserializedType<T, 'Edm.String'>;
  miscChargesLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  settleLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  marginLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  lgLiquidationLedgerAccount?: DeserializedType<T, 'Edm.String'> | null;
}
