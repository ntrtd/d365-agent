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
import type { AcceleratedDepreciationGroupsApi } from './AcceleratedDepreciationGroupsApi';

/**
 * This class represents the entity "AcceleratedDepreciationGroups" of service "d365_metadata".
 */
export class AcceleratedDepreciationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AcceleratedDepreciationGroupsType<T>
{
  /**
   * Technical entity name for AcceleratedDepreciationGroups.
   */
  static override _entityName = 'AcceleratedDepreciationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AcceleratedDepreciationGroups entity.
   */
  static _keys = ['dataAreaId', 'EquipmentGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Equipment Group.
   */
  declare equipmentGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Industry Annual Working Days.
   */
  declare industryAnnualWorkingDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Equipment Type Division.
   * @nullable
   */
  declare equipmentTypeDivision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry Average Hours Per Day.
   */
  declare industryAverageHoursPerDay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Equipment Type.
   * @nullable
   */
  declare equipmentType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AcceleratedDepreciationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AcceleratedDepreciationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  equipmentGroup: DeserializedType<T, 'Edm.String'>;
  industryAnnualWorkingDays: DeserializedType<T, 'Edm.Int32'>;
  equipmentTypeDivision?: DeserializedType<T, 'Edm.String'> | null;
  industryAverageHoursPerDay: DeserializedType<T, 'Edm.Decimal'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  equipmentType?: DeserializedType<T, 'Edm.String'> | null;
}
