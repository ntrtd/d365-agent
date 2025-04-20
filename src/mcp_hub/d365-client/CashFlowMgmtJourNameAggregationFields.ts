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
import type { CashFlowMgmtJourNameAggregationFieldsApi } from './CashFlowMgmtJourNameAggregationFieldsApi';

/**
 * This class represents the entity "CashFlowMgmtJourNameAggregationFields" of service "d365_metadata".
 */
export class CashFlowMgmtJourNameAggregationFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNameAggregationFieldsType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNameAggregationFields.
   */
  static override _entityName = 'CashFlowMgmtJourNameAggregationFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNameAggregationFields entity.
   */
  static _keys = ['dataAreaId', 'Dimension', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension.
   */
  declare dimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Attribute Name.
   * @nullable
   */
  declare dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CashFlowMgmtJourNameAggregationFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNameAggregationFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dimension: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
}
