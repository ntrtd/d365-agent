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
import type { SalesTaxFormTypesApi } from './SalesTaxFormTypesApi';
import { TaxTypeIn } from './TaxTypeIn';

/**
 * This class represents the entity "SalesTaxFormTypes" of service "d365_metadata".
 */
export class SalesTaxFormTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesTaxFormTypesType<T>
{
  /**
   * Technical entity name for SalesTaxFormTypes.
   */
  static override _entityName = 'SalesTaxFormTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxFormTypes entity.
   */
  static _keys = ['dataAreaId', 'FormType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Form Type.
   */
  declare formType: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesTaxFormTypesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxFormTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  formType: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxTypeIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
