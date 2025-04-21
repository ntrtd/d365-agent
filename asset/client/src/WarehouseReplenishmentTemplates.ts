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
import type { WarehouseReplenishmentTemplatesApi } from './WarehouseReplenishmentTemplatesApi';
import { NoYes } from './NoYes';
import { WhsReplenishmentType } from './WhsReplenishmentType';
import {
  WarehouseReplenishmentTemplateUnitOfMeasureRestrictions,
  WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType
} from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictions';

/**
 * This class represents the entity "WarehouseReplenishmentTemplates" of service "d365_metadata".
 */
export class WarehouseReplenishmentTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseReplenishmentTemplatesType<T>
{
  /**
   * Technical entity name for WarehouseReplenishmentTemplates.
   */
  static override _entityName = 'WarehouseReplenishmentTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseReplenishmentTemplates entity.
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
   * Wave Step Code.
   * @nullable
   */
  declare waveStepCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Demand Cancellation Cancel Replenishment.
   * @nullable
   */
  declare willDemandCancellationCancelReplenishment?: NoYes | null;
  /**
   * Template Type.
   * @nullable
   */
  declare templateType?: WhsReplenishmentType | null;
  /**
   * Template Description.
   * @nullable
   */
  declare templateDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Existing Immediate Replenishment Work Cross Unit.
   * @nullable
   */
  declare useExistingImmediateReplenishmentWorkCrossUnit?: NoYes | null;
  /**
   * Will Created Replenishment Work Allow Using Unreserved Quantities.
   * @nullable
   */
  declare willCreatedReplenishmentWorkAllowUsingUnreservedQuantities?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions} entity.
   */
  declare warehouseReplenishmentTemplateUnitOfMeasureRestrictions: WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>[];

  constructor(_entityApi: WarehouseReplenishmentTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseReplenishmentTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  templateId: DeserializedType<T, 'Edm.String'>;
  waveStepCode?: DeserializedType<T, 'Edm.String'> | null;
  willDemandCancellationCancelReplenishment?: NoYes | null;
  templateType?: WhsReplenishmentType | null;
  templateDescription?: DeserializedType<T, 'Edm.String'> | null;
  useExistingImmediateReplenishmentWorkCrossUnit?: NoYes | null;
  willCreatedReplenishmentWorkAllowUsingUnreservedQuantities?: NoYes | null;
  warehouseReplenishmentTemplateUnitOfMeasureRestrictions: WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsType<T>[];
}
