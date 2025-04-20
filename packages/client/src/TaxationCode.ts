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
import type { TaxationCodeApi } from './TaxationCodeApi';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';

/**
 * This class represents the entity "TaxationCode" of service "d365_metadata".
 */
export class TaxationCode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxationCodeType<T>
{
  /**
   * Technical entity name for TaxationCode.
   */
  static override _entityName = 'TaxationCode';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxationCode entity.
   */
  static _keys = ['dataAreaId', 'TaxType', 'TaxationCode', 'FiscalValue'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeBr | null;
  /**
   * Taxation Code.
   */
  declare taxationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Value.
   * @nullable
   */
  declare fiscalValue?: TaxFiscalValueBr | null;
  /**
   * Sped Code.
   * @nullable
   */
  declare spedCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Input Code.
   * @nullable
   */
  declare inputCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Output Code.
   * @nullable
   */
  declare outputCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: TaxationCodeApi<T>) {
    super(_entityApi);
  }
}

export interface TaxationCodeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxTypeBr | null;
  taxationCode: DeserializedType<T, 'Edm.String'>;
  fiscalValue?: TaxFiscalValueBr | null;
  spedCode?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inputCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  outputCode?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
