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
import type { RAssetStandardTablesApi } from './RAssetStandardTablesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "RAssetStandardTables" of service "d365_metadata".
 */
export class RAssetStandardTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RAssetStandardTablesType<T>
{
  /**
   * Technical entity name for RAssetStandardTables.
   */
  static override _entityName = 'RAssetStandardTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetStandardTables entity.
   */
  static _keys = ['dataAreaId', 'ValueModel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model.
   */
  declare valueModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Off.
   */
  declare roundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile Shortage.
   * @nullable
   */
  declare postingProfileShortage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Default Financial Dimensions.
   * @nullable
   */
  declare defaultFinancialDimensions?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetStandardTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetStandardTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  valueModel: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  roundOff: DeserializedType<T, 'Edm.Decimal'>;
  postingProfileShortage?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  defaultFinancialDimensions?: DeserializedType<T, 'Edm.String'> | null;
}
