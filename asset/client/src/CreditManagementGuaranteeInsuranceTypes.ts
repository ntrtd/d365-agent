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
import type { CreditManagementGuaranteeInsuranceTypesApi } from './CreditManagementGuaranteeInsuranceTypesApi';

/**
 * This class represents the entity "CreditManagementGuaranteeInsuranceTypes" of service "d365_metadata".
 */
export class CreditManagementGuaranteeInsuranceTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementGuaranteeInsuranceTypesType<T>
{
  /**
   * Technical entity name for CreditManagementGuaranteeInsuranceTypes.
   */
  static override _entityName = 'CreditManagementGuaranteeInsuranceTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementGuaranteeInsuranceTypes entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditManagementGuaranteeInsuranceTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementGuaranteeInsuranceTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
