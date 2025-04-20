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
import type { LedgerFiscalPeriodsApi } from './LedgerFiscalPeriodsApi';
import { ModulePeriodStat } from './ModulePeriodStat';
import { FiscalPeriodStatus } from './FiscalPeriodStatus';

/**
 * This class represents the entity "LedgerFiscalPeriods" of service "d365_metadata".
 */
export class LedgerFiscalPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerFiscalPeriodsType<T>
{
  /**
   * Technical entity name for LedgerFiscalPeriods.
   */
  static override _entityName = 'LedgerFiscalPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerFiscalPeriods entity.
   */
  static _keys = ['LedgerName', 'Calendar', 'YearName', 'PeriodName'];
  /**
   * Ledger Name.
   */
  declare ledgerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar.
   */
  declare calendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Year Name.
   */
  declare yearName: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Name.
   */
  declare periodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense User Group Info.
   * @nullable
   */
  declare expenseUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Access Level.
   * @nullable
   */
  declare vendAccessLevel?: ModulePeriodStat | null;
  /**
   * Bank Access Level.
   * @nullable
   */
  declare bankAccessLevel?: ModulePeriodStat | null;
  /**
   * Cust Access Level.
   * @nullable
   */
  declare custAccessLevel?: ModulePeriodStat | null;
  /**
   * Project User Group Info.
   * @nullable
   */
  declare projectUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger User Group Info.
   * @nullable
   */
  declare ledgerUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll User Group Info.
   * @nullable
   */
  declare payrollUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail User Group Info.
   * @nullable
   */
  declare retailUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Access Level.
   * @nullable
   */
  declare retailAccessLevel?: ModulePeriodStat | null;
  /**
   * Purch User Group Info.
   * @nullable
   */
  declare purchUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Status.
   * @nullable
   */
  declare periodStatus?: FiscalPeriodStatus | null;
  /**
   * Fixed Assets User Group Info.
   * @nullable
   */
  declare fixedAssetsUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod User Group Info.
   * @nullable
   */
  declare prodUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Assets Access Level.
   * @nullable
   */
  declare fixedAssetsAccessLevel?: ModulePeriodStat | null;
  /**
   * Invent User Group Info.
   * @nullable
   */
  declare inventUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Access Level.
   * @nullable
   */
  declare purchAccessLevel?: ModulePeriodStat | null;
  /**
   * Expense Access Level.
   * @nullable
   */
  declare expenseAccessLevel?: ModulePeriodStat | null;
  /**
   * Invent Access Level.
   * @nullable
   */
  declare inventAccessLevel?: ModulePeriodStat | null;
  /**
   * Payroll Access Level.
   * @nullable
   */
  declare payrollAccessLevel?: ModulePeriodStat | null;
  /**
   * Tax User Group Info.
   * @nullable
   */
  declare taxUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend User Group Info.
   * @nullable
   */
  declare vendUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank User Group Info.
   * @nullable
   */
  declare bankUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Access Level.
   * @nullable
   */
  declare salesAccessLevel?: ModulePeriodStat | null;
  /**
   * Ledger Access Level.
   * @nullable
   */
  declare ledgerAccessLevel?: ModulePeriodStat | null;
  /**
   * Fixed Assets Ru Access Level.
   * @nullable
   */
  declare fixedAssetsRuAccessLevel?: ModulePeriodStat | null;
  /**
   * Cust User Group Info.
   * @nullable
   */
  declare custUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Access Level.
   * @nullable
   */
  declare taxAccessLevel?: ModulePeriodStat | null;
  /**
   * Sales User Group Info.
   * @nullable
   */
  declare salesUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Access Level.
   * @nullable
   */
  declare projectAccessLevel?: ModulePeriodStat | null;
  /**
   * Prod Access Level.
   * @nullable
   */
  declare prodAccessLevel?: ModulePeriodStat | null;
  /**
   * Fixed Assets Ru User Group Info.
   * @nullable
   */
  declare fixedAssetsRuUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Access Level.
   * @nullable
   */
  declare itmAccessLevel?: ModulePeriodStat | null;
  /**
   * Itm User Group Info.
   * @nullable
   */
  declare itmUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerFiscalPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerFiscalPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledgerName: DeserializedType<T, 'Edm.String'>;
  calendar: DeserializedType<T, 'Edm.String'>;
  yearName: DeserializedType<T, 'Edm.String'>;
  periodName: DeserializedType<T, 'Edm.String'>;
  expenseUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  vendAccessLevel?: ModulePeriodStat | null;
  bankAccessLevel?: ModulePeriodStat | null;
  custAccessLevel?: ModulePeriodStat | null;
  projectUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  ledgerUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  payrollUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  retailUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  retailAccessLevel?: ModulePeriodStat | null;
  purchUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  periodStatus?: FiscalPeriodStatus | null;
  fixedAssetsUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  prodUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetsAccessLevel?: ModulePeriodStat | null;
  inventUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  purchAccessLevel?: ModulePeriodStat | null;
  expenseAccessLevel?: ModulePeriodStat | null;
  inventAccessLevel?: ModulePeriodStat | null;
  payrollAccessLevel?: ModulePeriodStat | null;
  taxUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  vendUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  bankUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  salesAccessLevel?: ModulePeriodStat | null;
  ledgerAccessLevel?: ModulePeriodStat | null;
  fixedAssetsRuAccessLevel?: ModulePeriodStat | null;
  custUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  taxAccessLevel?: ModulePeriodStat | null;
  salesUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  projectAccessLevel?: ModulePeriodStat | null;
  prodAccessLevel?: ModulePeriodStat | null;
  fixedAssetsRuUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  itmAccessLevel?: ModulePeriodStat | null;
  itmUserGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
}
