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
import type { RebateAgreementTypesApi } from './RebateAgreementTypesApi';

/**
 * This class represents the entity "RebateAgreementTypes" of service "d365_metadata".
 */
export class RebateAgreementTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAgreementTypesType<T>
{
  /**
   * Technical entity name for RebateAgreementTypes.
   */
  static override _entityName = 'RebateAgreementTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAgreementTypes entity.
   */
  static _keys = ['dataAreaId', 'TypeName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RebateAgreementTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAgreementTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
