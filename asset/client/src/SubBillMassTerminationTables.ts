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
import type { SubBillMassTerminationTablesApi } from './SubBillMassTerminationTablesApi';
import { NoYes } from './NoYes';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillCreditDeferralAdjMethod } from './SubBillCreditDeferralAdjMethod';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillPostSalesOrderOption } from './SubBillPostSalesOrderOption';
import { SubBillCreditOption } from './SubBillCreditOption';
import {
  SubBillMassTerminationLines,
  SubBillMassTerminationLinesType
} from './SubBillMassTerminationLines';
import {
  SubBillMassTerminationScheduleHeaderAndLines,
  SubBillMassTerminationScheduleHeaderAndLinesType
} from './SubBillMassTerminationScheduleHeaderAndLines';

/**
 * This class represents the entity "SubBillMassTerminationTables" of service "d365_metadata".
 */
export class SubBillMassTerminationTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillMassTerminationTablesType<T>
{
  /**
   * Technical entity name for SubBillMassTerminationTables.
   */
  static override _entityName = 'SubBillMassTerminationTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillMassTerminationTables entity.
   */
  static _keys = ['dataAreaId', 'TerminationProcessId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Termination Process Id.
   */
  declare terminationProcessId: DeserializedType<T, 'Edm.String'>;
  /**
   * Term Notes.
   * @nullable
   */
  declare termNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Issue Credit.
   * @nullable
   */
  declare issueCredit?: NoYes | null;
  /**
   * Consolidate By Customer.
   * @nullable
   */
  declare consolidateByCustomer?: NoYes | null;
  /**
   * Termination Type.
   * @nullable
   */
  declare terminationType?: SubBillTerminationType | null;
  /**
   * Deferral Adjustment Method.
   * @nullable
   */
  declare deferralAdjustmentMethod?: SubBillCreditDeferralAdjMethod | null;
  /**
   * Invoice Transaction Type.
   * @nullable
   */
  declare invoiceTransactionType?: SubBillInvTransType | null;
  /**
   * Termination Date.
   */
  declare terminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Prorate Daily.
   * @nullable
   */
  declare prorateDaily?: NoYes | null;
  /**
   * Posting Option.
   * @nullable
   */
  declare postingOption?: SubBillPostSalesOrderOption | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Option.
   * @nullable
   */
  declare creditOption?: SubBillCreditOption | null;
  /**
   * One-to-many navigation property to the {@link SubBillMassTerminationLines} entity.
   */
  declare relatedToSubBillMassTerminationTableEntity: SubBillMassTerminationLines<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillMassTerminationScheduleHeaderAndLines} entity.
   */
  declare relatedToSubBillMassTermTableEntity: SubBillMassTerminationScheduleHeaderAndLines<T>[];

  constructor(_entityApi: SubBillMassTerminationTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillMassTerminationTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminationProcessId: DeserializedType<T, 'Edm.String'>;
  termNotes?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issueCredit?: NoYes | null;
  consolidateByCustomer?: NoYes | null;
  terminationType?: SubBillTerminationType | null;
  deferralAdjustmentMethod?: SubBillCreditDeferralAdjMethod | null;
  invoiceTransactionType?: SubBillInvTransType | null;
  terminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  prorateDaily?: NoYes | null;
  postingOption?: SubBillPostSalesOrderOption | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  creditOption?: SubBillCreditOption | null;
  relatedToSubBillMassTerminationTableEntity: SubBillMassTerminationLinesType<T>[];
  relatedToSubBillMassTermTableEntity: SubBillMassTerminationScheduleHeaderAndLinesType<T>[];
}
