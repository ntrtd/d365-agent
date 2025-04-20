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
import type { Kitting_ReportParametersApi } from './Kitting_ReportParametersApi';
import { SalesPurch } from './SalesPurch';
import { KittingReportType } from './KittingReportType';
import { TableGroupAll } from './TableGroupAll';
import { KittingKitReportMode } from './KittingKitReportMode';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "Kitting_ReportParameters" of service "d365_metadata".
 */
export class Kitting_ReportParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Kitting_ReportParametersType<T>
{
  /**
   * Technical entity name for Kitting_ReportParameters.
   */
  static override _entityName = 'Kitting_ReportParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_ReportParameters entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesPurch',
    'ReportType',
    'ValidFor',
    'ItemRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Purch.
   * @nullable
   */
  declare salesPurch?: SalesPurch | null;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: KittingReportType | null;
  /**
   * Valid For.
   * @nullable
   */
  declare validFor?: TableGroupAll | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Print Mode.
   * @nullable
   */
  declare printMode?: KittingKitReportMode | null;
  /**
   * Kit Header.
   * @nullable
   */
  declare kitHeader?: NoYes | null;

  constructor(_entityApi: Kitting_ReportParametersApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_ReportParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesPurch?: SalesPurch | null;
  reportType?: KittingReportType | null;
  validFor?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  printMode?: KittingKitReportMode | null;
  kitHeader?: NoYes | null;
}
