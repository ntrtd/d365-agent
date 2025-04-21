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
import type { SalesBookVatProcessParametersApi } from './SalesBookVatProcessParametersApi';
import { SalesBookProcessingTypeRu } from './SalesBookProcessingTypeRu';
import { NoYes } from './NoYes';
import { SalesBookVatRestoringTypeRu } from './SalesBookVatRestoringTypeRu';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SalesBookVATProcessParameters" of service "d365_metadata".
 */
export class SalesBookVatProcessParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesBookVatProcessParametersType<T>
{
  /**
   * Technical entity name for SalesBookVatProcessParameters.
   */
  static override _entityName = 'SalesBookVATProcessParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesBookVatProcessParameters entity.
   */
  static _keys = ['dataAreaId', 'VATOperationCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Operation Code.
   */
  declare vatOperationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Type.
   * @nullable
   */
  declare operationType?: SalesBookProcessingTypeRu | null;
  /**
   * Include In Book.
   * @nullable
   */
  declare includeInBook?: NoYes | null;
  /**
   * Default Dimension Enabled.
   * @nullable
   */
  declare defaultDimensionEnabled?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;
  /**
   * Restoration Type.
   * @nullable
   */
  declare restorationType?: SalesBookVatRestoringTypeRu | null;
  /**
   * Facture Operation Type Code.
   * @nullable
   */
  declare factureOperationTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SalesBookVatProcessParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesBookVatProcessParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatOperationCode: DeserializedType<T, 'Edm.String'>;
  operationType?: SalesBookProcessingTypeRu | null;
  includeInBook?: NoYes | null;
  defaultDimensionEnabled?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isDefault?: NoYes | null;
  restorationType?: SalesBookVatRestoringTypeRu | null;
  factureOperationTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
