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
import type { CashFlowMgmtJourNameSourceListsApi } from './CashFlowMgmtJourNameSourceListsApi';
import { CfmJournalTransSourceType } from './CfmJournalTransSourceType';
import { CfmCashFlowDirection } from './CfmCashFlowDirection';

/**
 * This class represents the entity "CashFlowMgmtJourNameSourceLists" of service "d365_metadata".
 */
export class CashFlowMgmtJourNameSourceLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNameSourceListsType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNameSourceLists.
   */
  static override _entityName = 'CashFlowMgmtJourNameSourceLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNameSourceLists entity.
   */
  static _keys = ['dataAreaId', 'Name', 'JournalDataSource', 'Direction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Data Source.
   * @nullable
   */
  declare journalDataSource?: CfmJournalTransSourceType | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: CfmCashFlowDirection | null;

  constructor(_entityApi: CashFlowMgmtJourNameSourceListsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNameSourceListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  journalDataSource?: CfmJournalTransSourceType | null;
  direction?: CfmCashFlowDirection | null;
}
