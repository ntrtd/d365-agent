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
import type { DimensionIntegrationFormatsApi } from './DimensionIntegrationFormatsApi';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DimensionIntegrationFormats" of service "d365_metadata".
 */
export class DimensionIntegrationFormats<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionIntegrationFormatsType<T>
{
  /**
   * Technical entity name for DimensionIntegrationFormats.
   */
  static override _entityName = 'DimensionIntegrationFormats';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionIntegrationFormats entity.
   */
  static _keys = ['DimensionFormatName', 'DimensionFormatType'];
  /**
   * Dimension Format Name.
   */
  declare dimensionFormatName: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Format Type.
   * @nullable
   */
  declare dimensionFormatType?: DimensionHierarchyType | null;
  /**
   * Financial Dimension Format.
   * @nullable
   */
  declare financialDimensionFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;

  constructor(_entityApi: DimensionIntegrationFormatsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionIntegrationFormatsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dimensionFormatName: DeserializedType<T, 'Edm.String'>;
  dimensionFormatType?: DimensionHierarchyType | null;
  financialDimensionFormat?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
}
