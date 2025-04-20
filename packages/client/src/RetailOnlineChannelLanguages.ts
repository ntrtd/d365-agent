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
import type { RetailOnlineChannelLanguagesApi } from './RetailOnlineChannelLanguagesApi';
import { NoYes } from './NoYes';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';

/**
 * This class represents the entity "RetailOnlineChannelLanguages" of service "d365_metadata".
 */
export class RetailOnlineChannelLanguages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailOnlineChannelLanguagesType<T>
{
  /**
   * Technical entity name for RetailOnlineChannelLanguages.
   */
  static override _entityName = 'RetailOnlineChannelLanguages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailOnlineChannelLanguages entity.
   */
  static _keys = ['LanguageId', 'OperatingUnitNumber'];
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;

  constructor(_entityApi: RetailOnlineChannelLanguagesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailOnlineChannelLanguagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  languageId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  isDefault?: NoYes | null;
  onlineChannel?: OnlineChannelsType<T> | null;
}
