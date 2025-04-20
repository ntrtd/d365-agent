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
import type { DeliveryModeProductLinesV2Api } from './DeliveryModeProductLinesV2Api';
import { RetailDlvModeExcludeIncludeType } from './RetailDlvModeExcludeIncludeType';

/**
 * This class represents the entity "DeliveryModeProductLinesV2" of service "d365_metadata".
 */
export class DeliveryModeProductLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeliveryModeProductLinesV2Type<T>
{
  /**
   * Technical entity name for DeliveryModeProductLinesV2.
   */
  static override _entityName = 'DeliveryModeProductLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryModeProductLinesV2 entity.
   */
  static _keys = ['dataAreaId', 'DeliveryMode', 'LineNumber', 'LineType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Mode.
   */
  declare deliveryMode: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDlvModeExcludeIncludeType | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DeliveryModeProductLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface DeliveryModeProductLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deliveryMode: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: RetailDlvModeExcludeIncludeType | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
}
