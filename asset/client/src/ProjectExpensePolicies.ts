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
import type { ProjectExpensePoliciesApi } from './ProjectExpensePoliciesApi';
import { ProjExpPolicyPerUnit } from './ProjExpPolicyPerUnit';
import { ProjExpPolicyType } from './ProjExpPolicyType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectExpensePolicies" of service "d365_metadata".
 */
export class ProjectExpensePolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectExpensePoliciesType<T>
{
  /**
   * Technical entity name for ProjectExpensePolicies.
   */
  static override _entityName = 'ProjectExpensePolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectExpensePolicies entity.
   */
  static _keys = [
    'dataAreaId',
    'City',
    'ExpenseCategory',
    'CustomerAccount',
    'StartDate',
    'EndDate',
    'Currency',
    'PerUnit',
    'PolicyType',
    'ProjectID',
    'ProjectContractID',
    'PersonnelNumber',
    'ProjectExpensePolicyWorkerGroup'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   */
  declare city: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Category.
   */
  declare expenseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Per Unit.
   * @nullable
   */
  declare perUnit?: ProjExpPolicyPerUnit | null;
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: ProjExpPolicyType | null;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Expense Policy Worker Group.
   */
  declare projectExpensePolicyWorkerGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Amount.
   */
  declare maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowable Amount.
   */
  declare allowableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Minimum.
   */
  declare receiptMinimum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Required.
   * @nullable
   */
  declare receiptRequired?: NoYes | null;
  /**
   * Maximum Percent.
   */
  declare maximumPercent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjectExpensePoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectExpensePoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  city: DeserializedType<T, 'Edm.String'>;
  expenseCategory: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency: DeserializedType<T, 'Edm.String'>;
  perUnit?: ProjExpPolicyPerUnit | null;
  policyType?: ProjExpPolicyType | null;
  projectId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  projectExpensePolicyWorkerGroup: DeserializedType<T, 'Edm.String'>;
  maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowableAmount: DeserializedType<T, 'Edm.Decimal'>;
  receiptMinimum: DeserializedType<T, 'Edm.Decimal'>;
  receiptRequired?: NoYes | null;
  maximumPercent: DeserializedType<T, 'Edm.Decimal'>;
}
