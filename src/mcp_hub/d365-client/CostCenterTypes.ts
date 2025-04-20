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
import type { CostCenterTypesApi } from './CostCenterTypesApi';
import { AcoCostTypeBr } from './AcoCostTypeBr';

/**
 * This class represents the entity "CostCenterTypes" of service "d365_metadata".
 */
export class CostCenterTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostCenterTypesType<T>
{
  /**
   * Technical entity name for CostCenterTypes.
   */
  static override _entityName = 'CostCenterTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostCenterTypes entity.
   */
  static _keys = ['Name', 'Value'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: AcoCostTypeBr | null;

  constructor(_entityApi: CostCenterTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CostCenterTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  costType?: AcoCostTypeBr | null;
}
