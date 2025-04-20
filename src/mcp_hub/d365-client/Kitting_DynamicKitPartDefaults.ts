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
import type { Kitting_DynamicKitPartDefaultsApi } from './Kitting_DynamicKitPartDefaultsApi';
import { BomRoundUp } from './BomRoundUp';
import { NoYes } from './NoYes';
import { BomConsumpType } from './BomConsumpType';
import { KittingBomFormula } from './KittingBomFormula';

/**
 * This class represents the entity "Kitting_DynamicKitPartDefaults" of service "d365_metadata".
 */
export class Kitting_DynamicKitPartDefaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Kitting_DynamicKitPartDefaultsType<T>
{
  /**
   * Technical entity name for Kitting_DynamicKitPartDefaults.
   */
  static override _entityName = 'Kitting_DynamicKitPartDefaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_DynamicKitPartDefaults entity.
   */
  static _keys = [
    'dataAreaId',
    'DynamicKitId',
    'DynamicPartGroup',
    'ItemNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Kit Id.
   */
  declare dynamicKitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Part Group.
   */
  declare dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Round Up Qty.
   */
  declare roundUpQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Up.
   * @nullable
   */
  declare roundUp?: BomRoundUp | null;
  /**
   * Bom Qty Serie.
   */
  declare bomQtySerie: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Constant.
   */
  declare constant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Height.
   */
  declare height: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exclude.
   * @nullable
   */
  declare exclude?: NoYes | null;
  /**
   * Depth.
   */
  declare depth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Density.
   */
  declare density: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Width.
   */
  declare width: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bom Consump.
   * @nullable
   */
  declare bomConsump?: BomConsumpType | null;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formula.
   * @nullable
   */
  declare formula?: KittingBomFormula | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;

  constructor(_entityApi: Kitting_DynamicKitPartDefaultsApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_DynamicKitPartDefaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dynamicKitId: DeserializedType<T, 'Edm.String'>;
  dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  roundUpQty: DeserializedType<T, 'Edm.Decimal'>;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  roundUp?: BomRoundUp | null;
  bomQtySerie: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  constant: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  height: DeserializedType<T, 'Edm.Decimal'>;
  exclude?: NoYes | null;
  depth: DeserializedType<T, 'Edm.Decimal'>;
  density: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  width: DeserializedType<T, 'Edm.Decimal'>;
  bomConsump?: BomConsumpType | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  formula?: KittingBomFormula | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  isDefault?: NoYes | null;
}
