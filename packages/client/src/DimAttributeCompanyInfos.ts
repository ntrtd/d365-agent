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
import type { DimAttributeCompanyInfosApi } from './DimAttributeCompanyInfosApi';

/**
 * This class represents the entity "DimAttributeCompanyInfos" of service "d365_metadata".
 */
export class DimAttributeCompanyInfos<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeCompanyInfosType<T>
{
  /**
   * Technical entity name for DimAttributeCompanyInfos.
   */
  static override _entityName = 'DimAttributeCompanyInfos';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeCompanyInfos entity.
   */
  static _keys = ['Value'];
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeCompanyInfosApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeCompanyInfosType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
