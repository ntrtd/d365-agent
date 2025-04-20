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
import type { LabelLayoutDataSourceParametersApi } from './LabelLayoutDataSourceParametersApi';
import { NoYes } from './NoYes';
import { WhsLabelLayoutDataSourceParameterType } from './WhsLabelLayoutDataSourceParameterType';

/**
 * This class represents the entity "LabelLayoutDataSourceParameters" of service "d365_metadata".
 */
export class LabelLayoutDataSourceParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LabelLayoutDataSourceParametersType<T>
{
  /**
   * Technical entity name for LabelLayoutDataSourceParameters.
   */
  static override _entityName = 'LabelLayoutDataSourceParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LabelLayoutDataSourceParameters entity.
   */
  static _keys = ['dataAreaId', 'LabelLayoutDataSourceId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Label Layout Data Source Id.
   */
  declare labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Value String.
   * @nullable
   */
  declare defaultValueString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Text.
   * @nullable
   */
  declare displayText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: WhsLabelLayoutDataSourceParameterType | null;

  constructor(_entityApi: LabelLayoutDataSourceParametersApi<T>) {
    super(_entityApi);
  }
}

export interface LabelLayoutDataSourceParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  defaultValueString?: DeserializedType<T, 'Edm.String'> | null;
  displayText?: DeserializedType<T, 'Edm.String'> | null;
  mandatory?: NoYes | null;
  type?: WhsLabelLayoutDataSourceParameterType | null;
}
