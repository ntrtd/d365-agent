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
import type { McrUpSellCrossSellVariablesApi } from './McrUpSellCrossSellVariablesApi';

/**
 * This class represents the entity "MCRUpSellCrossSellVariables" of service "d365_metadata".
 */
export class McrUpSellCrossSellVariables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrUpSellCrossSellVariablesType<T>
{
  /**
   * Technical entity name for McrUpSellCrossSellVariables.
   */
  static override _entityName = 'MCRUpSellCrossSellVariables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrUpSellCrossSellVariables entity.
   */
  static _keys = ['dataAreaId', 'VariableName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Name.
   */
  declare variableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Table.
   * @nullable
   */
  declare variableTable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field.
   * @nullable
   */
  declare field?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: McrUpSellCrossSellVariablesApi<T>) {
    super(_entityApi);
  }
}

export interface McrUpSellCrossSellVariablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  variableName: DeserializedType<T, 'Edm.String'>;
  variableTable?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  field?: DeserializedType<T, 'Edm.String'> | null;
}
