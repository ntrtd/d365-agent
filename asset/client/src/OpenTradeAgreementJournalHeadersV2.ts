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
import type { OpenTradeAgreementJournalHeadersV2Api } from './OpenTradeAgreementJournalHeadersV2Api';
import { PriceType } from './PriceType';
import { NoYes } from './NoYes';
import {
  TradeAgreementJournalNames,
  TradeAgreementJournalNamesType
} from './TradeAgreementJournalNames';

/**
 * This class represents the entity "OpenTradeAgreementJournalHeadersV2" of service "d365_metadata".
 */
export class OpenTradeAgreementJournalHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenTradeAgreementJournalHeadersV2Type<T>
{
  /**
   * Technical entity name for OpenTradeAgreementJournalHeadersV2.
   */
  static override _entityName = 'OpenTradeAgreementJournalHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenTradeAgreementJournalHeadersV2 entity.
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
   * One-to-one navigation property to the {@link TradeAgreementJournalNames} entity.
   */
  declare tradeAgreementJournalName?: TradeAgreementJournalNames<T> | null;

  constructor(_entityApi: OpenTradeAgreementJournalHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface OpenTradeAgreementJournalHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultTradeAgreementType?: PriceType | null;
  isCurrentPriceExported?: NoYes | null;
  tradeAgreementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  tradeAgreementJournalName?: TradeAgreementJournalNamesType<T> | null;
}
