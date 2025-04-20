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
import type { BlwiParametersApi } from './BlwiParametersApi';
import { NoYes } from './NoYes';
import { MonthQuarter } from './MonthQuarter';
import { TradeBlwiPurposeCodeCheck } from './TradeBlwiPurposeCodeCheck';

/**
 * This class represents the entity "BLWIParameters" of service "d365_metadata".
 */
export class BlwiParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BlwiParametersType<T>
{
  /**
   * Technical entity name for BlwiParameters.
   */
  static override _entityName = 'BLWIParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BlwiParameters entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transform Response.
   * @nullable
   */
  declare transformResponse?: NoYes | null;
  /**
   * Declaration Period.
   * @nullable
   */
  declare declarationPeriod?: MonthQuarter | null;
  /**
   * Nbb Mail.
   * @nullable
   */
  declare nbbMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Blwi Code On Journals.
   * @nullable
   */
  declare checkBlwiCodeOnJournals?: TradeBlwiPurposeCodeCheck | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blwi.
   * @nullable
   */
  declare blwi?: NoYes | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BlwiParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BlwiParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  transformResponse?: NoYes | null;
  declarationPeriod?: MonthQuarter | null;
  nbbMail?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  checkBlwiCodeOnJournals?: TradeBlwiPurposeCodeCheck | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  blwi?: NoYes | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
}
