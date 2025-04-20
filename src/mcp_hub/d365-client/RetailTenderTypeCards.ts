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
import type { RetailTenderTypeCardsApi } from './RetailTenderTypeCardsApi';
import { CardTypeBr } from './CardTypeBr';
import { RetailCardTypesBase } from './RetailCardTypesBase';
import { RetailChannels, RetailChannelsType } from './RetailChannels';

/**
 * This class represents the entity "RetailTenderTypeCards" of service "d365_metadata".
 */
export class RetailTenderTypeCards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTenderTypeCardsType<T>
{
  /**
   * Technical entity name for RetailTenderTypeCards.
   */
  static override _entityName = 'RetailTenderTypeCards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTenderTypeCards entity.
   */
  static _keys = ['CardTypeId'];
  /**
   * Card Type Id.
   */
  declare cardTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Processor Code.
   * @nullable
   */
  declare cardProcessorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment System.
   * @nullable
   */
  declare paymentSystem?: CardTypeBr | null;
  /**
   * Card Issuer.
   * @nullable
   */
  declare cardIssuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Types.
   * @nullable
   */
  declare cardTypes?: RetailCardTypesBase | null;
  /**
   * One-to-many navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel: RetailChannels<T>[];

  constructor(_entityApi: RetailTenderTypeCardsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTenderTypeCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cardTypeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  cardProcessorCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentSystem?: CardTypeBr | null;
  cardIssuer?: DeserializedType<T, 'Edm.String'> | null;
  cardTypes?: RetailCardTypesBase | null;
  retailChannel: RetailChannelsType<T>[];
}
