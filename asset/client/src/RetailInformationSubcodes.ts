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
import type { RetailInformationSubcodesApi } from './RetailInformationSubcodesApi';
import { RetailTriggerFunction } from './RetailTriggerFunction';
import { RetailPriceType } from './RetailPriceType';
import { Infocodes, InfocodesType } from './Infocodes';
import {
  RetailInformationSubcodeTranslations,
  RetailInformationSubcodeTranslationsType
} from './RetailInformationSubcodeTranslations';

/**
 * This class represents the entity "RetailInformationSubcodes" of service "d365_metadata".
 */
export class RetailInformationSubcodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInformationSubcodesType<T>
{
  /**
   * Technical entity name for RetailInformationSubcodes.
   */
  static override _entityName = 'RetailInformationSubcodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInformationSubcodes entity.
   */
  static _keys = ['dataAreaId', 'InfocodeId', 'SubcodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Infocode Id.
   */
  declare infocodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Subcode Id.
   */
  declare subcodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trigger Code.
   * @nullable
   */
  declare triggerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trigger Function.
   * @nullable
   */
  declare triggerFunction?: RetailTriggerFunction | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Percent.
   */
  declare amountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: RetailPriceType | null;
  /**
   * One-to-one navigation property to the {@link Infocodes} entity.
   */
  declare infocode?: Infocodes<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailInformationSubcodeTranslations} entity.
   */
  declare retailInformationSubcodeTranslation: RetailInformationSubcodeTranslations<T>[];

  constructor(_entityApi: RetailInformationSubcodesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInformationSubcodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  infocodeId: DeserializedType<T, 'Edm.String'>;
  subcodeId: DeserializedType<T, 'Edm.String'>;
  triggerCode?: DeserializedType<T, 'Edm.String'> | null;
  triggerFunction?: RetailTriggerFunction | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  amountPercent: DeserializedType<T, 'Edm.Decimal'>;
  priceType?: RetailPriceType | null;
  infocode?: InfocodesType<T> | null;
  retailInformationSubcodeTranslation: RetailInformationSubcodeTranslationsType<T>[];
}
