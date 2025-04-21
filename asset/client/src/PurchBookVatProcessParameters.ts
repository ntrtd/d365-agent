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
import type { PurchBookVatProcessParametersApi } from './PurchBookVatProcessParametersApi';
import { PurchBookProcessingTypeRu } from './PurchBookProcessingTypeRu';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "PurchBookVATProcessParameters" of service "d365_metadata".
 */
export class PurchBookVatProcessParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchBookVatProcessParametersType<T>
{
  /**
   * Technical entity name for PurchBookVatProcessParameters.
   */
  static override _entityName = 'PurchBookVATProcessParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchBookVatProcessParameters entity.
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
  declare operationType?: PurchBookProcessingTypeRu | null;
  /**
   * Include In Book.
   * @nullable
   */
  declare includeInBook?: NoYes | null;
  /**
   * Facture Post Process Vat.
   * @nullable
   */
  declare facturePostProcessVat?: NoYes | null;
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
   * Facture Operation Type Code.
   * @nullable
   */
  declare factureOperationTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: PurchBookVatProcessParametersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchBookVatProcessParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatOperationCode: DeserializedType<T, 'Edm.String'>;
  operationType?: PurchBookProcessingTypeRu | null;
  includeInBook?: NoYes | null;
  facturePostProcessVat?: NoYes | null;
  defaultDimensionEnabled?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isDefault?: NoYes | null;
  factureOperationTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
