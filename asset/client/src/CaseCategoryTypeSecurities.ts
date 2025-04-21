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
import type { CaseCategoryTypeSecuritiesApi } from './CaseCategoryTypeSecuritiesApi';
import { CaseCategoryType } from './CaseCategoryType';

/**
 * This class represents the entity "CaseCategoryTypeSecurities" of service "d365_metadata".
 */
export class CaseCategoryTypeSecurities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CaseCategoryTypeSecuritiesType<T>
{
  /**
   * Technical entity name for CaseCategoryTypeSecurities.
   */
  static override _entityName = 'CaseCategoryTypeSecurities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CaseCategoryTypeSecurities entity.
   */
  static _keys = ['dataAreaId', 'SecurityRole', 'CaseCategoryType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role.
   */
  declare securityRole: DeserializedType<T, 'Edm.String'>;
  /**
   * Case Category Type.
   * @nullable
   */
  declare caseCategoryType?: CaseCategoryType | null;

  constructor(_entityApi: CaseCategoryTypeSecuritiesApi<T>) {
    super(_entityApi);
  }
}

export interface CaseCategoryTypeSecuritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  securityRole: DeserializedType<T, 'Edm.String'>;
  caseCategoryType?: CaseCategoryType | null;
}
