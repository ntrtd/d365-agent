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
import type { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { NoYes } from './NoYes';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import {
  ProjectItemJournalTrans,
  ProjectItemJournalTransType
} from './ProjectItemJournalTrans';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import {
  ProjectItemForecasts,
  ProjectItemForecastsType
} from './ProjectItemForecasts';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';

/**
 * This class represents the entity "ProjectLineProperties" of service "d365_metadata".
 */
export class ProjectLineProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectLinePropertiesType<T>
{
  /**
   * Technical entity name for ProjectLineProperties.
   */
  static override _entityName = 'ProjectLineProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectLineProperties entity.
   */
  static _keys = ['dataAreaId', 'LinePropertyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Property Id.
   */
  declare linePropertyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Add To Norm Billable.
   * @nullable
   */
  declare addToNormBillable?: NoYes | null;
  /**
   * Print Zero Sales Price On Invoice.
   * @nullable
   */
  declare printZeroSalesPriceOnInvoice?: NoYes | null;
  /**
   * Add To Efficient Hours.
   * @nullable
   */
  declare addToEfficientHours?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Chargeable.
   * @nullable
   */
  declare isChargeable?: NoYes | null;
  /**
   * Print Zero Sales Price On Quotation.
   * @nullable
   */
  declare printZeroSalesPriceOnQuotation?: NoYes | null;
  /**
   * Cost Percentage.
   */
  declare costPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Add To Norm Efficiency.
   * @nullable
   */
  declare addToNormEfficiency?: NoYes | null;
  /**
   * Enabled Capitalize Cost.
   */
  declare enabledCapitalizeCost: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Enable Accrue Revenue.
   */
  declare enableAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sales Percentage.
   */
  declare salesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast?: ProjectEmplForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast?: ProjectExpenseForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectItemJournalTrans} entity.
   */
  declare projectItemJournalTrans?: ProjectItemJournalTrans<T> | null;
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare projExpenseJournalLineProperty: ExpenseJournalLines<T>[];
  /**
   * One-to-one navigation property to the {@link ProjectItemForecasts} entity.
   */
  declare projectItemForecast?: ProjectItemForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast?: ProjectFeeForecasts<T> | null;

  constructor(_entityApi: ProjectLinePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectLinePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  linePropertyId: DeserializedType<T, 'Edm.String'>;
  addToNormBillable?: NoYes | null;
  printZeroSalesPriceOnInvoice?: NoYes | null;
  addToEfficientHours?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isChargeable?: NoYes | null;
  printZeroSalesPriceOnQuotation?: NoYes | null;
  costPercentage: DeserializedType<T, 'Edm.Decimal'>;
  addToNormEfficiency?: NoYes | null;
  enabledCapitalizeCost: DeserializedType<T, 'Edm.Boolean'>;
  enableAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  salesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  journalTrans?: JournalTransType<T> | null;
  projectEmplForecast?: ProjectEmplForecastsType<T> | null;
  projectExpenseForecast?: ProjectExpenseForecastsType<T> | null;
  projectItemJournalTrans?: ProjectItemJournalTransType<T> | null;
  projExpenseJournalLineProperty: ExpenseJournalLinesType<T>[];
  projectItemForecast?: ProjectItemForecastsType<T> | null;
  projectFeeForecast?: ProjectFeeForecastsType<T> | null;
}
