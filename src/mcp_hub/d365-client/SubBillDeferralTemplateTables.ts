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
import type { SubBillDeferralTemplateTablesApi } from './SubBillDeferralTemplateTablesApi';
import { SubBillDeferralPeriodFrequency } from './SubBillDeferralPeriodFrequency';
import {
  SubBillDeferralTemplateLines,
  SubBillDeferralTemplateLinesType
} from './SubBillDeferralTemplateLines';

/**
 * This class represents the entity "SubBillDeferralTemplateTables" of service "d365_metadata".
 */
export class SubBillDeferralTemplateTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralTemplateTablesType<T>
{
  /**
   * Technical entity name for SubBillDeferralTemplateTables.
   */
  static override _entityName = 'SubBillDeferralTemplateTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralTemplateTables entity.
   */
  static _keys = ['dataAreaId', 'Template'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template.
   */
  declare template: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Frequency.
   * @nullable
   */
  declare periodFrequency?: SubBillDeferralPeriodFrequency | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTemplateLines} entity.
   */
  declare relatedToSubBillDeferralTemplateTableEntity: SubBillDeferralTemplateLines<T>[];

  constructor(_entityApi: SubBillDeferralTemplateTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralTemplateTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  template: DeserializedType<T, 'Edm.String'>;
  periodFrequency?: SubBillDeferralPeriodFrequency | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relatedToSubBillDeferralTemplateTableEntity: SubBillDeferralTemplateLinesType<T>[];
}
