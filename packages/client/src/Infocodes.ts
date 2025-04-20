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
import type { InfocodesApi } from './InfocodesApi';
import { NoYes } from './NoYes';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';
import { RetailInfocodeActivityType } from './RetailInfocodeActivityType';
import {
  RetailInformationSubcodes,
  RetailInformationSubcodesType
} from './RetailInformationSubcodes';
import {
  RetailInfocodeTranslations,
  RetailInfocodeTranslationsType
} from './RetailInfocodeTranslations';

/**
 * This class represents the entity "Infocodes" of service "d365_metadata".
 */
export class Infocodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InfocodesType<T>
{
  /**
   * Technical entity name for Infocodes.
   */
  static override _entityName = 'Infocodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Infocodes entity.
   */
  static _keys = ['dataAreaId', 'InfocodeNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Infocode Number.
   */
  declare infocodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Value.
   */
  declare minimumValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Infocode Number.
   * @nullable
   */
  declare linkedInfocodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Input Required.
   * @nullable
   */
  declare inputRequired?: NoYes | null;
  /**
   * Print Input Name On Receipt.
   * @nullable
   */
  declare printInputNameOnReceipt?: NoYes | null;
  /**
   * Once Per Transaction.
   * @nullable
   */
  declare oncePerTransaction?: NoYes | null;
  /**
   * Minimum Length.
   */
  declare minimumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Value.
   */
  declare maximumValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Random Counter.
   */
  declare randomCounter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Length.
   */
  declare maximumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Prompt On Receipt.
   * @nullable
   */
  declare printPromptOnReceipt?: NoYes | null;
  /**
   * Use Infocode.
   * @nullable
   */
  declare useInfocode?: NoYes | null;
  /**
   * Random Factor.
   */
  declare randomFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Description On Receipt.
   * @nullable
   */
  declare printDescriptionOnReceipt?: NoYes | null;
  /**
   * Print Input On Receipt.
   * @nullable
   */
  declare printInputOnReceipt?: NoYes | null;
  /**
   * Input Type.
   * @nullable
   */
  declare inputType?: RetailInfocodeInputType | null;
  /**
   * Activity.
   * @nullable
   */
  declare activity?: RetailInfocodeActivityType | null;
  /**
   * Prompt.
   * @nullable
   */
  declare prompt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Multi Line Text.
   * @nullable
   */
  declare isMultiLineText?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailInformationSubcodes} entity.
   */
  declare retailInformationSubcode: RetailInformationSubcodes<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInfocodeTranslations} entity.
   */
  declare retailInfocodeTranslation: RetailInfocodeTranslations<T>[];

  constructor(_entityApi: InfocodesApi<T>) {
    super(_entityApi);
  }
}

export interface InfocodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  infocodeNumber: DeserializedType<T, 'Edm.String'>;
  minimumValue: DeserializedType<T, 'Edm.Decimal'>;
  linkedInfocodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  inputRequired?: NoYes | null;
  printInputNameOnReceipt?: NoYes | null;
  oncePerTransaction?: NoYes | null;
  minimumLength: DeserializedType<T, 'Edm.Int32'>;
  maximumValue: DeserializedType<T, 'Edm.Decimal'>;
  randomCounter: DeserializedType<T, 'Edm.Decimal'>;
  maximumLength: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  printPromptOnReceipt?: NoYes | null;
  useInfocode?: NoYes | null;
  randomFactor: DeserializedType<T, 'Edm.Decimal'>;
  printDescriptionOnReceipt?: NoYes | null;
  printInputOnReceipt?: NoYes | null;
  inputType?: RetailInfocodeInputType | null;
  activity?: RetailInfocodeActivityType | null;
  prompt?: DeserializedType<T, 'Edm.String'> | null;
  isMultiLineText?: NoYes | null;
  retailInformationSubcode: RetailInformationSubcodesType<T>[];
  retailInfocodeTranslation: RetailInfocodeTranslationsType<T>[];
}
