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
import type { LoadTemplatesApi } from './LoadTemplatesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LoadTemplates" of service "d365_metadata".
 */
export class LoadTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoadTemplatesType<T>
{
  /**
   * Technical entity name for LoadTemplates.
   */
  static override _entityName = 'LoadTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoadTemplates entity.
   */
  static _keys = ['dataAreaId', 'TemplateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Freight Pieces.
   */
  declare maximumFreightPieces: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Quantity.
   */
  declare maximumQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Load Depth.
   */
  declare loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Load Weight.
   */
  declare maximumLoadWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Quantity Unit Symbol.
   * @nullable
   */
  declare maximumQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Load Floor Stacked.
   * @nullable
   */
  declare isLoadFloorStacked?: NoYes | null;
  /**
   * Is Load Split Ship Confirm Allowed.
   * @nullable
   */
  declare isLoadSplitShipConfirmAllowed?: NoYes | null;
  /**
   * Load Height.
   */
  declare loadHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Equipment Code.
   * @nullable
   */
  declare warehouseEquipmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Gross Weight.
   */
  declare maximumGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Load Width.
   */
  declare loadWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Load Volume.
   */
  declare maximumLoadVolume: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LoadTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface LoadTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  templateId: DeserializedType<T, 'Edm.String'>;
  maximumFreightPieces: DeserializedType<T, 'Edm.Int32'>;
  maximumQuantity: DeserializedType<T, 'Edm.Decimal'>;
  loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  maximumLoadWeight: DeserializedType<T, 'Edm.Decimal'>;
  maximumQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  isLoadFloorStacked?: NoYes | null;
  isLoadSplitShipConfirmAllowed?: NoYes | null;
  loadHeight: DeserializedType<T, 'Edm.Decimal'>;
  warehouseEquipmentCode?: DeserializedType<T, 'Edm.String'> | null;
  maximumGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  loadWidth: DeserializedType<T, 'Edm.Decimal'>;
  maximumLoadVolume: DeserializedType<T, 'Edm.Decimal'>;
}
