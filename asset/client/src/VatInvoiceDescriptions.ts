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
import type { VatInvoiceDescriptionsApi } from './VatInvoiceDescriptionsApi';

/**
 * This class represents the entity "VATInvoiceDescriptions" of service "d365_metadata".
 */
export class VatInvoiceDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VatInvoiceDescriptionsType<T>
{
  /**
   * Technical entity name for VatInvoiceDescriptions.
   */
  static override _entityName = 'VATInvoiceDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VatInvoiceDescriptions entity.
   */
  static _keys = ['dataAreaId', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VatInvoiceDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface VatInvoiceDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
