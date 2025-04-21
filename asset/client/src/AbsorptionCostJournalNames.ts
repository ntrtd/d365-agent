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
import type { AbsorptionCostJournalNamesApi } from './AbsorptionCostJournalNamesApi';
import { NoYes } from './NoYes';
import { AcoJournalTypeBr } from './AcoJournalTypeBr';
import { DetailSummary } from './DetailSummary';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { Abc } from './Abc';

/**
 * This class represents the entity "AbsorptionCostJournalNames" of service "d365_metadata".
 */
export class AbsorptionCostJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AbsorptionCostJournalNamesType<T>
{
  /**
   * Technical entity name for AbsorptionCostJournalNames.
   */
  static override _entityName = 'AbsorptionCostJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AbsorptionCostJournalNames entity.
   */
  static _keys = ['dataAreaId', 'JournalNameId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name Id.
   */
  declare journalNameId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delete Lines After Posting Enabled.
   * @nullable
   */
  declare isDeleteLinesAfterPostingEnabled?: NoYes | null;
  /**
   * Private For User Group Id.
   * @nullable
   */
  declare privateForUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: AcoJournalTypeBr | null;
  /**
   * Detail Level.
   * @nullable
   */
  declare detailLevel?: DetailSummary | null;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Selection By.
   * @nullable
   */
  declare selectionBy?: JournalVoucherDraw | null;
  /**
   * Voucher Change.
   * @nullable
   */
  declare voucherChange?: Abc | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AbsorptionCostJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface AbsorptionCostJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNameId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isDeleteLinesAfterPostingEnabled?: NoYes | null;
  privateForUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  journalType?: AcoJournalTypeBr | null;
  detailLevel?: DetailSummary | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  selectionBy?: JournalVoucherDraw | null;
  voucherChange?: Abc | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
}
