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
import type { CashFlowMgmtJourNameOrgUnitListsApi } from './CashFlowMgmtJourNameOrgUnitListsApi';

/**
 * This class represents the entity "CashFlowMgmtJourNameOrgUnitLists" of service "d365_metadata".
 */
export class CashFlowMgmtJourNameOrgUnitLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNameOrgUnitListsType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNameOrgUnitLists.
   */
  static override _entityName = 'CashFlowMgmtJourNameOrgUnitLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNameOrgUnitLists entity.
   */
  static _keys = ['Name', 'DataArea'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CashFlowMgmtJourNameOrgUnitListsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNameOrgUnitListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
}
