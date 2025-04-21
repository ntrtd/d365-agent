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
import type { EmplPostingsApi } from './EmplPostingsApi';
import { TableGroupAll } from './TableGroupAll';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';

/**
 * This class represents the entity "EmplPostings" of service "d365_metadata".
 */
export class EmplPostings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmplPostingsType<T>
{
  /**
   * Technical entity name for EmplPostings.
   */
  static override _entityName = 'EmplPostings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmplPostings entity.
   */
  static _keys = ['dataAreaId', 'PostingProfile', 'AccountCode', 'Num'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Num.
   */
  declare num: DeserializedType<T, 'Edm.String'>;
  /**
   * Settlement By Dimension.
   * @nullable
   */
  declare settlementByDimension?: DimSettlementCtrlTypeRu | null;
  /**
   * Summary Ledger Dimension Display Value.
   * @nullable
   */
  declare summaryLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmplPostingsApi<T>) {
    super(_entityApi);
  }
}

export interface EmplPostingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  num: DeserializedType<T, 'Edm.String'>;
  settlementByDimension?: DimSettlementCtrlTypeRu | null;
  summaryLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
