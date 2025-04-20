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
import type { ShipConsolidationPolicyFieldsApi } from './ShipConsolidationPolicyFieldsApi';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * This class represents the entity "ShipConsolidationPolicyFields" of service "d365_metadata".
 */
export class ShipConsolidationPolicyFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipConsolidationPolicyFieldsType<T>
{
  /**
   * Technical entity name for ShipConsolidationPolicyFields.
   */
  static override _entityName = 'ShipConsolidationPolicyFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipConsolidationPolicyFields entity.
   */
  static _keys = [
    'dataAreaId',
    'ShipConsolidationPolicyType',
    'ShipConsolidationPolicyName',
    'SourceTableName',
    'SourceFieldName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Consolidation Policy Type.
   * @nullable
   */
  declare shipConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  /**
   * Ship Consolidation Policy Name.
   */
  declare shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Table Name.
   */
  declare sourceTableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Field Name.
   */
  declare sourceFieldName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ShipConsolidationPolicyFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ShipConsolidationPolicyFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>;
  sourceTableName: DeserializedType<T, 'Edm.String'>;
  sourceFieldName: DeserializedType<T, 'Edm.String'>;
}
