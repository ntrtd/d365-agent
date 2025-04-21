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
import type { LedgerReportIndexZakatEntitiesApi } from './LedgerReportIndexZakatEntitiesApi';
import { LedgerReportTypeZakatSa } from './LedgerReportTypeZakatSa';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LedgerReportIndexZakatEntities" of service "d365_metadata".
 */
export class LedgerReportIndexZakatEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerReportIndexZakatEntitiesType<T>
{
  /**
   * Technical entity name for LedgerReportIndexZakatEntities.
   */
  static override _entityName = 'LedgerReportIndexZakatEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerReportIndexZakatEntities entity.
   */
  static _keys = ['dataAreaId', 'ReportType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: LedgerReportTypeZakatSa | null;
  /**
   * Report Active.
   * @nullable
   */
  declare reportActive?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerReportIndexZakatEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerReportIndexZakatEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportType?: LedgerReportTypeZakatSa | null;
  reportActive?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
