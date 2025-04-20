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
import type { NameDeclensionsApi } from './NameDeclensionsApi';
import { CurrencyGenderW } from './CurrencyGenderW';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "NameDeclensions" of service "d365_metadata".
 */
export class NameDeclensions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NameDeclensionsType<T>
{
  /**
   * Technical entity name for NameDeclensions.
   */
  static override _entityName = 'NameDeclensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NameDeclensions entity.
   */
  static _keys = ['dataAreaId', 'CurrencyCode', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name For One.
   * @nullable
   */
  declare nameForOne?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: CurrencyGenderW | null;
  /**
   * Currency Plural Nominative Penny.
   * @nullable
   */
  declare currencyPluralNominativePenny?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Insert And Before Penny.
   * @nullable
   */
  declare insertAndBeforePenny?: NoYes | null;
  /**
   * Name For Five.
   * @nullable
   */
  declare nameForFive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name For Five Penny.
   * @nullable
   */
  declare nameForFivePenny?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Plural Nominative.
   * @nullable
   */
  declare currencyPluralNominative?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name For One Penny.
   * @nullable
   */
  declare nameForOnePenny?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name For Three.
   * @nullable
   */
  declare nameForThree?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name For Three Penny.
   * @nullable
   */
  declare nameForThreePenny?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name Penny.
   * @nullable
   */
  declare shortNamePenny?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NameDeclensionsApi<T>) {
    super(_entityApi);
  }
}

export interface NameDeclensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  currencyCode: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  nameForOne?: DeserializedType<T, 'Edm.String'> | null;
  gender?: CurrencyGenderW | null;
  currencyPluralNominativePenny?: DeserializedType<T, 'Edm.String'> | null;
  insertAndBeforePenny?: NoYes | null;
  nameForFive?: DeserializedType<T, 'Edm.String'> | null;
  nameForFivePenny?: DeserializedType<T, 'Edm.String'> | null;
  currencyPluralNominative?: DeserializedType<T, 'Edm.String'> | null;
  nameForOnePenny?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  nameForThree?: DeserializedType<T, 'Edm.String'> | null;
  nameForThreePenny?: DeserializedType<T, 'Edm.String'> | null;
  shortNamePenny?: DeserializedType<T, 'Edm.String'> | null;
}
