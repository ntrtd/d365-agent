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
import type { PayIntV1VariableCompensationTypesApi } from './PayIntV1VariableCompensationTypesApi';
import { HrmCompVarPlanTypeType } from './HrmCompVarPlanTypeType';

/**
 * This class represents the entity "PayIntV1VariableCompensationTypes" of service "d365_metadata".
 */
export class PayIntV1VariableCompensationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1VariableCompensationTypesType<T>
{
  /**
   * Technical entity name for PayIntV1VariableCompensationTypes.
   */
  static override _entityName = 'PayIntV1VariableCompensationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1VariableCompensationTypes entity.
   */
  static _keys = ['dataAreaId', 'VariableCompensationType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Compensation Type.
   */
  declare variableCompensationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HrmCompVarPlanTypeType | null;

  constructor(_entityApi: PayIntV1VariableCompensationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1VariableCompensationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  variableCompensationType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: HrmCompVarPlanTypeType | null;
}
