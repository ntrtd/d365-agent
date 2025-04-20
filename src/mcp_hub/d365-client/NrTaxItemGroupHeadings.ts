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
import type { NrTaxItemGroupHeadingsApi } from './NrTaxItemGroupHeadingsApi';

/**
 * This class represents the entity "NRTaxItemGroupHeadings" of service "d365_metadata".
 */
export class NrTaxItemGroupHeadings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements NrTaxItemGroupHeadingsType<T>
{
  /**
   * Technical entity name for NrTaxItemGroupHeadings.
   */
  static override _entityName = 'NRTaxItemGroupHeadings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NrTaxItemGroupHeadings entity.
   */
  static _keys = ['dataAreaId', 'TaxGroupOnNaturalResources', 'TaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group On Natural Resources.
   */
  declare taxGroupOnNaturalResources: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NrTaxItemGroupHeadingsApi<T>) {
    super(_entityApi);
  }
}

export interface NrTaxItemGroupHeadingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxGroupOnNaturalResources: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
