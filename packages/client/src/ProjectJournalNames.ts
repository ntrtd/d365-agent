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
import type { ProjectJournalNamesApi } from './ProjectJournalNamesApi';
import { ProjJournalVoucherDateChange } from './ProjJournalVoucherDateChange';
import { DetailSummary } from './DetailSummary';
import { ProjJournalType } from './ProjJournalType';
import { ProjJournalVoucherChange } from './ProjJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectJournalNames" of service "d365_metadata".
 */
export class ProjectJournalNames<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectJournalNamesType<T>
{
  /**
   * Technical entity name for ProjectJournalNames.
   */
  static override _entityName = 'ProjectJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectJournalNames entity.
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
   * Set Voucher Date To.
   * @nullable
   */
  declare setVoucherDateTo?: ProjJournalVoucherDateChange | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Detail Summary.
   * @nullable
   */
  declare detailSummary?: DetailSummary | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: ProjJournalType | null;
  /**
   * New Voucher By.
   * @nullable
   */
  declare newVoucherBy?: ProjJournalVoucherChange | null;
  /**
   * Selection By.
   * @nullable
   */
  declare selectionBy?: JournalVoucherDraw | null;
  /**
   * Are Lines Deleted After Posting.
   * @nullable
   */
  declare areLinesDeletedAfterPosting?: NoYes | null;
  /**
   * Approve.
   * @nullable
   */
  declare approve?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Show Start Or End Times.
   * @nullable
   */
  declare showStartOrEndTimes?: NoYes | null;

  constructor(_entityApi: ProjectJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  setVoucherDateTo?: ProjJournalVoucherDateChange | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  detailSummary?: DetailSummary | null;
  journalType?: ProjJournalType | null;
  newVoucherBy?: ProjJournalVoucherChange | null;
  selectionBy?: JournalVoucherDraw | null;
  areLinesDeletedAfterPosting?: NoYes | null;
  approve?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  showStartOrEndTimes?: NoYes | null;
}
