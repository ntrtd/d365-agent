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
import type { RetailTransactionDisabledValidationRulesApi } from './RetailTransactionDisabledValidationRulesApi';

/**
 * This class represents the entity "RetailTransactionDisabledValidationRules" of service "d365_metadata".
 */
export class RetailTransactionDisabledValidationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionDisabledValidationRulesType<T>
{
  /**
   * Technical entity name for RetailTransactionDisabledValidationRules.
   */
  static override _entityName = 'RetailTransactionDisabledValidationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionDisabledValidationRules entity.
   */
  static _keys = ['dataAreaId', 'MethodName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Method Name.
   */
  declare methodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Class Name.
   * @nullable
   */
  declare className?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionDisabledValidationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionDisabledValidationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  methodName: DeserializedType<T, 'Edm.String'>;
  className?: DeserializedType<T, 'Edm.String'> | null;
}
