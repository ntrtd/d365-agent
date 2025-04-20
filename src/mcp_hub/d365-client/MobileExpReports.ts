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
import type { MobileExpReportsApi } from './MobileExpReportsApi';
import { NoYes } from './NoYes';
import { TrvAppStatus } from './TrvAppStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "MobileExpReports" of service "d365_metadata".
 */
export class MobileExpReports<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MobileExpReportsType<T>
{
  /**
   * Technical entity name for MobileExpReports.
   */
  static override _entityName = 'MobileExpReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MobileExpReports entity.
   */
  static _keys = ['dataAreaId', 'ExpenseReportNumber', 'DataArea'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Report Number.
   */
  declare expenseReportNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Total.
   */
  declare amountTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pre Approval Number.
   * @nullable
   */
  declare preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Anti Corruption Approver Flag.
   * @nullable
   */
  declare antiCorruptionApproverFlag?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity For Expenses.
   * @nullable
   */
  declare legalEntityForExpenses?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: TrvAppStatus | null;
  /**
   * Anti Corruption Submitter Flag.
   * @nullable
   */
  declare antiCorruptionSubmitterFlag?: NoYes | null;
  /**
   * Payment Voucher.
   * @nullable
   */
  declare paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Personnel Number.
   * @nullable
   */
  declare employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violations Level.
   */
  declare policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Policy Violation Count.
   */
  declare policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date.
   */
  declare createdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Legal Entity Party Number.
   * @nullable
   */
  declare legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dir Person Fk Party Number.
   * @nullable
   */
  declare dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: MobileExpReportsApi<T>) {
    super(_entityApi);
  }
}

export interface MobileExpReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseReportNumber: DeserializedType<T, 'Edm.String'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  amountTotal: DeserializedType<T, 'Edm.Decimal'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionApproverFlag?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityForExpenses?: DeserializedType<T, 'Edm.String'> | null;
  documentStatus?: TrvAppStatus | null;
  antiCorruptionSubmitterFlag?: NoYes | null;
  paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  createdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
