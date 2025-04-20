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
import type { ReturnDispositionCodesApi } from './ReturnDispositionCodesApi';
import { DispositionAction } from './DispositionAction';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';

/**
 * This class represents the entity "ReturnDispositionCodes" of service "d365_metadata".
 */
export class ReturnDispositionCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnDispositionCodesType<T>
{
  /**
   * Technical entity name for ReturnDispositionCodes.
   */
  static override _entityName = 'ReturnDispositionCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnDispositionCodes entity.
   */
  static _keys = ['dataAreaId', 'DispositionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Disposition Code.
   */
  declare dispositionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Disposition Description.
   * @nullable
   */
  declare dispositionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposition Action.
   * @nullable
   */
  declare dispositionAction?: DispositionAction | null;
  /**
   * Kitting Disposition Code Id.
   * @nullable
   */
  declare kittingDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];

  constructor(_entityApi: ReturnDispositionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnDispositionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dispositionCode: DeserializedType<T, 'Edm.String'>;
  dispositionDescription?: DeserializedType<T, 'Edm.String'> | null;
  dispositionAction?: DispositionAction | null;
  kittingDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
}
