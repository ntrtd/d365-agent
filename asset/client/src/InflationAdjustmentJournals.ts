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
import type { InflationAdjustmentJournalsApi } from './InflationAdjustmentJournalsApi';
import { InflationAdjJournalStatusMx } from './InflationAdjJournalStatusMx';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "InflationAdjustmentJournals" of service "d365_metadata".
 */
export class InflationAdjustmentJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InflationAdjustmentJournalsType<T>
{
  /**
   * Technical entity name for InflationAdjustmentJournals.
   */
  static override _entityName = 'InflationAdjustmentJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InflationAdjustmentJournals entity.
   */
  static _keys = ['dataAreaId', 'Voucher', 'ReversedVoucher'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Reversed Voucher.
   */
  declare reversedVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Date.
   */
  declare postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: InflationAdjJournalStatusMx | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;

  constructor(_entityApi: InflationAdjustmentJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface InflationAdjustmentJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  reversedVoucher: DeserializedType<T, 'Edm.String'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  status?: InflationAdjJournalStatusMx | null;
  postingLayer?: CurrentOperationsTax | null;
}
