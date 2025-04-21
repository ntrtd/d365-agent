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
import type { DimAttributeAgreementHeaderExt_RUsApi } from './DimAttributeAgreementHeaderExt_RUsApi';

/**
 * This class represents the entity "DimAttributeAgreementHeaderExt_RUs" of service "d365_metadata".
 */
export class DimAttributeAgreementHeaderExt_RUs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeAgreementHeaderExt_RUsType<T>
{
  /**
   * Technical entity name for DimAttributeAgreementHeaderExt_RUs.
   */
  static override _entityName = 'DimAttributeAgreementHeaderExt_RUs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeAgreementHeaderExt_RUs entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeAgreementHeaderExt_RUsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeAgreementHeaderExt_RUsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
