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
import type { RetailInventItemLabelReportSetupsApi } from './RetailInventItemLabelReportSetupsApi';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';

/**
 * This class represents the entity "RetailInventItemLabelReportSetups" of service "d365_metadata".
 */
export class RetailInventItemLabelReportSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInventItemLabelReportSetupsType<T>
{
  /**
   * Technical entity name for RetailInventItemLabelReportSetups.
   */
  static override _entityName = 'RetailInventItemLabelReportSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInventItemLabelReportSetups entity.
   */
  static _keys = ['dataAreaId', 'Type', 'ReportName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailLabelTypeBase | null;
  /**
   * Report Name.
   */
  declare reportName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailInventItemLabelReportSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInventItemLabelReportSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type?: RetailLabelTypeBase | null;
  reportName: DeserializedType<T, 'Edm.String'>;
}
