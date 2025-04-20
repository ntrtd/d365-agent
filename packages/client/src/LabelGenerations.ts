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
import type { LabelGenerationsApi } from './LabelGenerationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LabelGenerations" of service "d365_metadata".
 */
export class LabelGenerations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LabelGenerationsType<T>
{
  /**
   * Technical entity name for LabelGenerations.
   */
  static override _entityName = 'LabelGenerations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LabelGenerations entity.
   */
  static _keys = ['dataAreaId', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Shelf Label Generated.
   * @nullable
   */
  declare isShelfLabelGenerated?: NoYes | null;
  /**
   * Is Item Label Generated.
   * @nullable
   */
  declare isItemLabelGenerated?: NoYes | null;

  constructor(_entityApi: LabelGenerationsApi<T>) {
    super(_entityApi);
  }
}

export interface LabelGenerationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  isShelfLabelGenerated?: NoYes | null;
  isItemLabelGenerated?: NoYes | null;
}
