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
import type { LtmTaxApplicationRelationsApi } from './LtmTaxApplicationRelationsApi';
import { LtmTaxEntityType } from './LtmTaxEntityType';

/**
 * This class represents the entity "LTMTaxApplicationRelations" of service "d365_metadata".
 */
export class LtmTaxApplicationRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmTaxApplicationRelationsType<T>
{
  /**
   * Technical entity name for LtmTaxApplicationRelations.
   */
  static override _entityName = 'LTMTaxApplicationRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmTaxApplicationRelations entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxApplicationId',
    'TaxEntityType',
    'TaxEntityId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Application Id.
   */
  declare taxApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Entity Type.
   * @nullable
   */
  declare taxEntityType?: LtmTaxEntityType | null;
  /**
   * Tax Entity Id.
   */
  declare taxEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Def User 1.
   * @nullable
   */
  declare taxDefUser1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Def User 2.
   * @nullable
   */
  declare taxDefUser2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Def User 3.
   * @nullable
   */
  declare taxDefUser3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Application Code.
   * @nullable
   */
  declare taxApplicationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Def User 4.
   * @nullable
   */
  declare taxDefUser4?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmTaxApplicationRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmTaxApplicationRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxApplicationId: DeserializedType<T, 'Edm.String'>;
  taxEntityType?: LtmTaxEntityType | null;
  taxEntityId: DeserializedType<T, 'Edm.String'>;
  taxDefUser1?: DeserializedType<T, 'Edm.String'> | null;
  taxDefUser2?: DeserializedType<T, 'Edm.String'> | null;
  taxDefUser3?: DeserializedType<T, 'Edm.String'> | null;
  taxApplicationCode?: DeserializedType<T, 'Edm.String'> | null;
  taxDefUser4?: DeserializedType<T, 'Edm.String'> | null;
}
