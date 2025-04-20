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
import type { FiscalLifoJournalNamesApi } from './FiscalLifoJournalNamesApi';
import { InventFiscalLifoJournalType } from './InventFiscalLifoJournalType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalLIFOJournalNames" of service "d365_metadata".
 */
export class FiscalLifoJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalLifoJournalNamesType<T>
{
  /**
   * Technical entity name for FiscalLifoJournalNames.
   */
  static override _entityName = 'FiscalLIFOJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalLifoJournalNames entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: InventFiscalLifoJournalType | null;
  /**
   * Private For User Group.
   * @nullable
   */
  declare privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Normal Value.
   * @nullable
   */
  declare useNormalValue?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Work In Progress.
   * @nullable
   */
  declare includeWorkInProgress?: NoYes | null;

  constructor(_entityApi: FiscalLifoJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalLifoJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  journalType?: InventFiscalLifoJournalType | null;
  privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  useNormalValue?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  includeWorkInProgress?: NoYes | null;
}
