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
import type { TradeAgreementJournalNamesApi } from './TradeAgreementJournalNamesApi';
import { PriceType } from './PriceType';
import { NoYes } from './NoYes';
import {
  OpenTradeAgreementJournalHeadersV2,
  OpenTradeAgreementJournalHeadersV2Type
} from './OpenTradeAgreementJournalHeadersV2';
import {
  TradeAgreementJournalHeaders,
  TradeAgreementJournalHeadersType
} from './TradeAgreementJournalHeaders';

/**
 * This class represents the entity "TradeAgreementJournalNames" of service "d365_metadata".
 */
export class TradeAgreementJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAgreementJournalNamesType<T>
{
  /**
   * Technical entity name for TradeAgreementJournalNames.
   */
  static override _entityName = 'TradeAgreementJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAgreementJournalNames entity.
   */
  static _keys = ['dataAreaId', 'TradeAgreementJournalNameId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Agreement Journal Name Id.
   */
  declare tradeAgreementJournalNameId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Trade Agreement Type.
   * @nullable
   */
  declare defaultTradeAgreementType?: PriceType | null;
  /**
   * Default Journal Description.
   * @nullable
   */
  declare defaultJournalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Disc Price Attribute Enable.
   * @nullable
   */
  declare priceDiscPriceAttributeEnable?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link OpenTradeAgreementJournalHeadersV2} entity.
   */
  declare openTradeAgreementJournalHeaders: OpenTradeAgreementJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAgreementJournalHeaders} entity.
   */
  declare tradeAgreementJournalHeaders: TradeAgreementJournalHeaders<T>[];

  constructor(_entityApi: TradeAgreementJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAgreementJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNameId: DeserializedType<T, 'Edm.String'>;
  defaultTradeAgreementType?: PriceType | null;
  defaultJournalDescription?: DeserializedType<T, 'Edm.String'> | null;
  priceDiscPriceAttributeEnable?: NoYes | null;
  openTradeAgreementJournalHeaders: OpenTradeAgreementJournalHeadersV2Type<T>[];
  tradeAgreementJournalHeaders: TradeAgreementJournalHeadersType<T>[];
}
