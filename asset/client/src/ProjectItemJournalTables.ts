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
import type { ProjectItemJournalTablesApi } from './ProjectItemJournalTablesApi';
import { DetailSummary } from './DetailSummary';
import { ItemReservation } from './ItemReservation';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ProjectItemJournalTables" of service "d365_metadata".
 */
export class ProjectItemJournalTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectItemJournalTablesType<T>
{
  /**
   * Technical entity name for ProjectItemJournalTables.
   */
  static override _entityName = 'ProjectItemJournalTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectItemJournalTables entity.
   */
  static _keys = ['dataAreaId', 'JournalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Detail Level.
   * @nullable
   */
  declare postingDetailLevel?: DetailSummary | null;
  /**
   * Reservation.
   * @nullable
   */
  declare reservation?: ItemReservation | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block User Group Id.
   * @nullable
   */
  declare blockUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Lines Deleted After Posting.
   * @nullable
   */
  declare isLinesDeletedAfterPosting?: NoYes | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ProjectItemJournalTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectItemJournalTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  postingDetailLevel?: DetailSummary | null;
  reservation?: ItemReservation | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  blockUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isLinesDeletedAfterPosting?: NoYes | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
