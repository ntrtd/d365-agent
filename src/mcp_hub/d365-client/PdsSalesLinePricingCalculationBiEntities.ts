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
import type { PdsSalesLinePricingCalculationBiEntitiesApi } from './PdsSalesLinePricingCalculationBiEntitiesApi';

/**
 * This class represents the entity "PDSSalesLinePricingCalculationBiEntities" of service "d365_metadata".
 */
export class PdsSalesLinePricingCalculationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PdsSalesLinePricingCalculationBiEntitiesType<T>
{
  /**
   * Technical entity name for PdsSalesLinePricingCalculationBiEntities.
   */
  static override _entityName = 'PDSSalesLinePricingCalculationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PdsSalesLinePricingCalculationBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SalesLine'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line.
   */
  declare salesLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Calculation.
   */
  declare priceCalculation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Calculated Unit Price.
   */
  declare calculatedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PdsSalesLinePricingCalculationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PdsSalesLinePricingCalculationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesLine: DeserializedType<T, 'Edm.Int64'>;
  priceCalculation: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  calculatedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
