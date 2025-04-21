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
import type { RetailEcoResProductApi } from './RetailEcoResProductApi';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailEcoResProduct" of service "d365_metadata".
 */
export class RetailEcoResProduct<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailEcoResProductType<T>
{
  /**
   * Technical entity name for RetailEcoResProduct.
   */
  static override _entityName = 'RetailEcoResProduct';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResProduct entity.
   */
  static _keys = ['DisplayProductNumber'];
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Product.
   * @nullable
   */
  declare pdsCwProduct?: NoYes | null;

  constructor(_entityApi: RetailEcoResProductApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResProductType<
  T extends DeSerializers = DefaultDeSerializers
> {
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  productType?: EcoResProductType | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwProduct?: NoYes | null;
}
