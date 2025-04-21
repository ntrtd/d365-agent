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
import type { TaxExemptCodesApi } from './TaxExemptCodesApi';
import { TaxGroupDatas, TaxGroupDatasType } from './TaxGroupDatas';

/**
 * This class represents the entity "TaxExemptCodes" of service "d365_metadata".
 */
export class TaxExemptCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxExemptCodesType<T>
{
  /**
   * Technical entity name for TaxExemptCodes.
   */
  static override _entityName = 'TaxExemptCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxExemptCodes entity.
   */
  static _keys = ['dataAreaId', 'TaxExemptCode', 'Language'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Exempt Code.
   */
  declare taxExemptCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TaxGroupDatas} entity.
   */
  declare taxGroupData: TaxGroupDatas<T>[];

  constructor(_entityApi: TaxExemptCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxExemptCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxExemptCode: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupData: TaxGroupDatasType<T>[];
}
