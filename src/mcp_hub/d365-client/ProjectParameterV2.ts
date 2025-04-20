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
import type { ProjectParameterV2Api } from './ProjectParameterV2Api';
import { ProjLineTotal } from './ProjLineTotal';
import { NoYes } from './NoYes';
import { ProjDefaultInvoiceLayout } from './ProjDefaultInvoiceLayout';
import { ProjTaxItemGroupMethod } from './ProjTaxItemGroupMethod';
import { ProjTaxGroupMethod } from './ProjTaxGroupMethod';
import { TaxCalculationProjDateType } from './TaxCalculationProjDateType';

/**
 * This class represents the entity "ProjectParameterV2" of service "d365_metadata".
 */
export class ProjectParameterV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectParameterV2Type<T>
{
  /**
   * Technical entity name for ProjectParameterV2.
   */
  static override _entityName = 'ProjectParameterV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectParameterV2 entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Total Post Cost.
   * @nullable
   */
  declare lineTotalPostCost?: ProjLineTotal | null;
  /**
   * Tax Item Group On Acc.
   * @nullable
   */
  declare taxItemGroupOnAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Category.
   * @nullable
   */
  declare costCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Operations Integration Feature Status.
   * @nullable
   */
  declare projectOperationsIntegrationFeatureStatus?: NoYes | null;
  /**
   * Empl Category.
   * @nullable
   */
  declare emplCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Total Estimate.
   * @nullable
   */
  declare lineTotalEstimate?: ProjLineTotal | null;
  /**
   * Default Invoice Layout.
   * @nullable
   */
  declare defaultInvoiceLayout?: ProjDefaultInvoiceLayout | null;
  /**
   * On Account Category.
   * @nullable
   */
  declare onAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Category.
   * @nullable
   */
  declare itemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Operations Forecast Model Id.
   * @nullable
   */
  declare projectOperationsForecastModelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Item Group Method.
   * @nullable
   */
  declare taxItemGroupMethod?: ProjTaxItemGroupMethod | null;
  /**
   * Is Accounting Date Update Allowed.
   * @nullable
   */
  declare isAccountingDateUpdateAllowed?: NoYes | null;
  /**
   * Revenue Category.
   * @nullable
   */
  declare revenueCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Method.
   * @nullable
   */
  declare taxGroupMethod?: ProjTaxGroupMethod | null;
  /**
   * Line Total Invoice.
   * @nullable
   */
  declare lineTotalInvoice?: ProjLineTotal | null;
  /**
   * Line Total Accrue Revenue.
   * @nullable
   */
  declare lineTotalAccrueRevenue?: ProjLineTotal | null;
  /**
   * Dimension Attribute Value Combination Display Value.
   * @nullable
   */
  declare dimensionAttributeValueCombinationDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Calc Date Type.
   * @nullable
   */
  declare taxCalcDateType?: TaxCalculationProjDateType | null;

  constructor(_entityApi: ProjectParameterV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjectParameterV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  lineTotalPostCost?: ProjLineTotal | null;
  taxItemGroupOnAcc?: DeserializedType<T, 'Edm.String'> | null;
  costCategory?: DeserializedType<T, 'Edm.String'> | null;
  projectOperationsIntegrationFeatureStatus?: NoYes | null;
  emplCategory?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalEstimate?: ProjLineTotal | null;
  defaultInvoiceLayout?: ProjDefaultInvoiceLayout | null;
  onAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  itemCategory?: DeserializedType<T, 'Edm.String'> | null;
  projectOperationsForecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroupMethod?: ProjTaxItemGroupMethod | null;
  isAccountingDateUpdateAllowed?: NoYes | null;
  revenueCategory?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupMethod?: ProjTaxGroupMethod | null;
  lineTotalInvoice?: ProjLineTotal | null;
  lineTotalAccrueRevenue?: ProjLineTotal | null;
  dimensionAttributeValueCombinationDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxCalcDateType?: TaxCalculationProjDateType | null;
}
