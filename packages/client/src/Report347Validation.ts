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
import type { Report347ValidationApi } from './Report347ValidationApi';

/**
 * This class represents the entity "Report347Validation" of service "d365_metadata".
 */
export class Report347Validation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Report347ValidationType<T>
{
  /**
   * Technical entity name for Report347Validation.
   */
  static override _entityName = 'Report347Validation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Report347Validation entity.
   */
  static _keys = ['dataAreaId', 'SalesTaxGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Group.
   */
  declare salesTaxGroup: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Report347ValidationApi<T>) {
    super(_entityApi);
  }
}

export interface Report347ValidationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxGroup: DeserializedType<T, 'Edm.String'>;
}
