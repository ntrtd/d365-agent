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
import type { RetailChannelReportLocalizedStringsApi } from './RetailChannelReportLocalizedStringsApi';
import { RetailChannelReportVersion } from './RetailChannelReportVersion';

/**
 * This class represents the entity "RetailChannelReportLocalizedStrings" of service "d365_metadata".
 */
export class RetailChannelReportLocalizedStrings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelReportLocalizedStringsType<T>
{
  /**
   * Technical entity name for RetailChannelReportLocalizedStrings.
   */
  static override _entityName = 'RetailChannelReportLocalizedStrings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelReportLocalizedStrings entity.
   */
  static _keys = ['LocaleCode', 'StringId'];
  /**
   * Locale Code.
   */
  declare localeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * String Id.
   */
  declare stringId: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   * @nullable
   */
  declare version?: RetailChannelReportVersion | null;
  /**
   * String Value.
   * @nullable
   */
  declare stringValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailChannelReportLocalizedStringsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelReportLocalizedStringsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  localeCode: DeserializedType<T, 'Edm.String'>;
  stringId: DeserializedType<T, 'Edm.String'>;
  version?: RetailChannelReportVersion | null;
  stringValue?: DeserializedType<T, 'Edm.String'> | null;
}
