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
import type { ExpenseReportPurposesApi } from './ExpenseReportPurposesApi';

/**
 * This class represents the entity "ExpenseReportPurposes" of service "d365_metadata".
 */
export class ExpenseReportPurposes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseReportPurposesType<T>
{
  /**
   * Technical entity name for ExpenseReportPurposes.
   */
  static override _entityName = 'ExpenseReportPurposes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseReportPurposes entity.
   */
  static _keys = ['dataAreaId', 'Purpose'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purpose.
   */
  declare purpose: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ExpenseReportPurposesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseReportPurposesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purpose: DeserializedType<T, 'Edm.String'>;
}
