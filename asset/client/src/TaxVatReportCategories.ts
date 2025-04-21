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
import type { TaxVatReportCategoriesApi } from './TaxVatReportCategoriesApi';

/**
 * This class represents the entity "TaxVatReportCategories" of service "d365_metadata".
 */
export class TaxVatReportCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxVatReportCategoriesType<T>
{
  /**
   * Technical entity name for TaxVatReportCategories.
   */
  static override _entityName = 'TaxVatReportCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxVatReportCategories entity.
   */
  static _keys = ['dataAreaId', 'CategoryCodeID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Code Id.
   */
  declare categoryCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxVatReportCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxVatReportCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  categoryCodeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
