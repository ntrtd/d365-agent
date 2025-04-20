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
import type { TradeAgreementJournalHeadersApi } from './TradeAgreementJournalHeadersApi';
import { PriceType } from './PriceType';
import { NoYes } from './NoYes';
import {
  TradeAgreementJournalNames,
  TradeAgreementJournalNamesType
} from './TradeAgreementJournalNames';

/**
 * This class represents the entity "TradeAgreementJournalHeaders" of service "d365_metadata".
 */
export class TradeAgreementJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAgreementJournalHeadersType<T>
{
  /**
   * Technical entity name for TradeAgreementJournalHeaders.
   */
  static override _entityName = 'TradeAgreementJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAgreementJournalHeaders entity.
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
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Trade Agreement Type.
   * @nullable
   */
  declare defaultTradeAgreementType?: PriceType | null;
  /**
   * Is Current Price Exported.
   * @nullable
   */
  declare isCurrentPriceExported?: NoYes | null;
  /**
   * Trade Agreement Journal Name Id.
   * @nullable
   */
  declare tradeAgreementJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link TradeAgreementJournalNames} entity.
   */
  declare tradeAgreementJournalName?: TradeAgreementJournalNames<T> | null;

  constructor(_entityApi: TradeAgreementJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAgreementJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultTradeAgreementType?: PriceType | null;
  isCurrentPriceExported?: NoYes | null;
  tradeAgreementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  tradeAgreementJournalName?: TradeAgreementJournalNamesType<T> | null;
}
