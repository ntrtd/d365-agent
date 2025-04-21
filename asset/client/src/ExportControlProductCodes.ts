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
import type { ExportControlProductCodesApi } from './ExportControlProductCodesApi';

/**
 * This class represents the entity "ExportControlProductCodes" of service "d365_metadata".
 */
export class ExportControlProductCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExportControlProductCodesType<T>
{
  /**
   * Technical entity name for ExportControlProductCodes.
   */
  static override _entityName = 'ExportControlProductCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExportControlProductCodes entity.
   */
  static _keys = ['DisplayProductNumber', 'Jurisdiction'];
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Jurisdiction.
   */
  declare jurisdiction: DeserializedType<T, 'Edm.String'>;
  /**
   * De Minimis.
   */
  declare deMinimis: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExportControlProductCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ExportControlProductCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  jurisdiction: DeserializedType<T, 'Edm.String'>;
  deMinimis: DeserializedType<T, 'Edm.Decimal'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
}
