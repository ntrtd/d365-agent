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
import type { OpenTradeAgreementJournalsApi } from './OpenTradeAgreementJournalsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "OpenTradeAgreementJournals" of service "d365_metadata".
 */
export class OpenTradeAgreementJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenTradeAgreementJournalsType<T>
{
  /**
   * Technical entity name for OpenTradeAgreementJournals.
   */
  static override _entityName = 'OpenTradeAgreementJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenTradeAgreementJournals entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Current Price Exported.
   * @nullable
   */
  declare isCurrentPriceExported?: NoYes | null;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Combination.
   * @nullable
   */
  declare priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trade Agreement Journal Name Id.
   * @nullable
   */
  declare tradeAgreementJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Apply Adjustment.
   * @nullable
   */
  declare priceApplyAdjustment?: NoYes | null;

  constructor(_entityApi: OpenTradeAgreementJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface OpenTradeAgreementJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  isCurrentPriceExported?: NoYes | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  tradeAgreementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceApplyAdjustment?: NoYes | null;
}
