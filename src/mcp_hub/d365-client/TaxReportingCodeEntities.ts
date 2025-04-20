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
import type { TaxReportingCodeEntitiesApi } from './TaxReportingCodeEntitiesApi';
import { TaxReportLayout } from './TaxReportLayout';
import { NoYes } from './NoYes';
import { TaxCodes, TaxCodesType } from './TaxCodes';

/**
 * This class represents the entity "TaxReportingCodeEntities" of service "d365_metadata".
 */
export class TaxReportingCodeEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxReportingCodeEntitiesType<T>
{
  /**
   * Technical entity name for TaxReportingCodeEntities.
   */
  static override _entityName = 'TaxReportingCodeEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxReportingCodeEntities entity.
   */
  static _keys = ['dataAreaId', 'TaxReportingCode', 'ReportLayout'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Reporting Code.
   */
  declare taxReportingCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Report Layout.
   * @nullable
   */
  declare reportLayout?: TaxReportLayout | null;
  /**
   * Report Text.
   * @nullable
   */
  declare reportText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Corrections.
   * @nullable
   */
  declare salesTaxCorrections?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode: TaxCodes<T>[];

  constructor(_entityApi: TaxReportingCodeEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxReportingCodeEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxReportingCode: DeserializedType<T, 'Edm.Int32'>;
  reportLayout?: TaxReportLayout | null;
  reportText?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxCorrections?: NoYes | null;
  taxCode: TaxCodesType<T>[];
}
